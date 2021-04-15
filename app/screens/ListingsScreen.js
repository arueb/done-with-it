import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    imagePath: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    imagePath: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.imagePath}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default ListingsScreen;
