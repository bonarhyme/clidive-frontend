import React from "react";
import { Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./components/Screen";

import AppMainNavigation from "./navigation/AppMainNavigation";

const App = () => {
  return (
    <Screen>
      <NavigationContainer>
        <AppMainNavigation />
      </NavigationContainer>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default App;
