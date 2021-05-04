import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation();
  return <Button title="Click" onPress={() => navigation.navigate("Tweets")} />;
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweets"
      onPress={() =>
        navigation.navigate("TweetDetails", {
          id: 1,
        })
      }
    />
  </Screen>
);
const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
    <Link />
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      // global navigation styles
      title: "Tweet Details",
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        // applies only to this screen
        title: "Tweet Details",
        headerStyle: { backgroundColor: "tomato" },
        // headerShown: false,
      }} // pass object for static title
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: "Tweet Details" + route.params.id })} // pass function that returns object, allowing title to be set dynamically using route params
    />
  </Stack.Navigator>
);
const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "lightgrey",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Tweets}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}
