import { StyleSheet, Text } from "react-native";

import React from "react";

function PlatformText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export default PlatformText;
