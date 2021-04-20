import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

function AppPicker({ icon, placeholder, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    padding: 15,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
