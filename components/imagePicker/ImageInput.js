import React, { useEffect } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { variables } from "../../data/variables";

const ImageInput = ({ imageUri, setImageUriInImageInput }) => {
  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        setImageUriInImageInput(result.uri);
      }
    } catch (error) {
      alert("An error occured. Failed to access images");
      console.log("error occured", error);
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => setImageUriInImageInput(null) },
        { text: "No" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.container}>
            <Text style={{ color: variables.color.secondary }}>
              Select Images
            </Text>

            <MaterialCommunityIcons
              name="camera"
              size={80}
              color={variables.color.secondary}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: variables.color.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 110,
    width: 110,
    overflow: "hidden",
    marginHorizontal: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
