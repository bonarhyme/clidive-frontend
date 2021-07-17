import React, { useRef, useMemo } from "react";

import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({
  imageUris = [],
  removeImageFromList,
  addImageToList,
}) => {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <ImageInput
              imageUri={uri}
              key={uri}
              setImageUriInImageInput={() => removeImageFromList(uri)}
            />
          ))}
          <ImageInput
            setImageUriInImageInput={(imageUri) => addImageToList(imageUri)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // borderColor: "red",
    // borderWidth: 2,
    // height: 110,
  },
});

export default ImageInputList;
