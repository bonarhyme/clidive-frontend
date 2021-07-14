import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

import clidiveLogo from "../assets/images/clidive-logo.jpeg";
import routeNames from "../data/routeNames";

import AppButton from "../components/AppButton";
import authStorage from "../storage";
import { variables } from "../data/variables";

const Welcome = ({ navigation }) => {
  const [user, setUser] = useState("");

  // let theToken;
  const getToken = async () => {
    const token = await authStorage.getToken();
    setUser(token);
  };

  useEffect(() => {
    getToken();
  }, []);
  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={clidiveLogo}
    >
      {!user && (
        <AppButton
          text="Register"
          color="success"
          onPress={() => navigation.navigate(routeNames.REGISTER)}
        />
      )}
      {!user && (
        <AppButton
          text="Login"
          color="info"
          onPress={() => navigation.navigate(routeNames.LOGIN)}
        />
      )}
      {/* {user && (
        <View style={styles.container}>
          <Text style={styles.text}>Hello, {user.name}</Text>
        </View>
      )} */}
      <AppButton
        text="View posts"
        onPress={() => navigation.navigate(routeNames.LISTINGS)}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  container: {
    marginVertical: 30,
  },
  text: {
    fontSize: 25,
    color: variables.color.secondary,
  },
});

export default Welcome;
