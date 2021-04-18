import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  colors,
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
  },
});

export default styles;
