import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import AppText from "./app/components/AppText";
// import AppButton from "./app/components/AppButton";

export default function App() {
  //   return <ListingDetailsScreen />;

  //   return (
  //     <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
  //       <Card
  //         title="Red jacket for sale"
  //         subTitle="$100"
  //         image={require("./app/assets/jacket.jpg")}
  //       ></Card>
  //     </View>
  //   );
  //   return <WelcomeScreen />;
  return <ViewImageScreen />;
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       {/* <AppText>Hello World!</AppText> */}
  //       <MaterialCommunityIcons name="email" size={50} color="dodgerblue" />
  //       <AppButton title="Login" onPress={() => console.log("tapped")} />
  //     </View>
  //   );
}
