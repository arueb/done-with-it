import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name").min(3),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password").min(4),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
          textContentType="name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;