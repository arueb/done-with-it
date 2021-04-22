import React, { useState } from "react";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import { Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);

  return (
    <ListingEditScreen />
    // <Screen>

    //   {/* <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   /> */}
    //   {/* <AppTextInput icon="email" placeholder="Email" /> */}
    //   {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}
    // {/* </Screen> */}
  );
}
