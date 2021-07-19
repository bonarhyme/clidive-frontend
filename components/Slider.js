import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
} from "react-native";
import { variables } from "../data/variables";

const { width } = Dimensions.get("window");
const height = width;

const slider = ({ images, height }) => {
  const [active, setActive] = useState(0);

  // calculates the offset x and divides it by the current visible width and then rounds it to the lowest whole number
  const handleChange = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={(nativeEvent) => handleChange(nativeEvent)}
        style={styles.scroll}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            defaultSource={require("../assets/images/placeholder.png")}
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((images, key) => (
          <Text
            key={key}
            style={key == active ? styles.pagingActiveDots : styles.pagingDots}
          >
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  scroll: {
    width,
    height,
  },
  image: { width, height, resizeMode: "cover" },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  pagingDots: {
    color: variables.color.secondary,
    margin: 4,
  },
  pagingActiveDots: {
    color: variables.color.primary,
    margin: 4,
  },
});

export default slider;
