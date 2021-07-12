import React from "react";

import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

import { variables } from "../data/variables";

const AppActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/Animations/loader.json")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: variables.color.white,
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});

export default AppActivityIndicator;
