import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import clidiveLogo from "../assets/images/clidive-logo.jpeg";
import routeNames from "../data/routeNames";

const Welcome = () => {
  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={clidiveLogo}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default Welcome;
