import React from "react";
import { Text, StyleSheet } from "react-native";

import Screen from "./components/Screen";

import WelcomeScreen from "./screens/Welcome";

const App = () => {
  return (
    <Screen>
      <WelcomeScreen />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default App;
