import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Button, Image } from "react-native";

import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    // const { status } = await Permissions.askAsync(
    //   Permissions.MEDIA_LIBRARY,
    //   Permissions.LOCATION
    // );
    // const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted")
      alert("You need to enbale permission to access your media library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancel) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image");
    }
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );
}
