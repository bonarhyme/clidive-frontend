import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import clidiveLogo from "../assets/images/clidive-logo.jpeg";
import routeNames from "../data/routeNames";

import AppButton from "../components/AppButton";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={clidiveLogo}
    >
      <AppButton
        text="Register"
        color="success"
        onPress={() => navigation.navigate(routeNames.REGISTER)}
      />
      <AppButton
        text="Login"
        color="info"
        onPress={() => navigation.navigate(routeNames.LOGIN)}
      />
      <AppButton text="View posts" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default Welcome;
