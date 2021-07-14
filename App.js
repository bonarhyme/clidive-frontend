import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store";
import authStorage from "./storage";

import Screen from "./components/Screen";

import AppMainNavigation from "./navigation/AppMainNavigation";

const App = () => {
  return (
    <Provider store={store}>
      <Screen>
        <NavigationContainer>
          <AppMainNavigation />
        </NavigationContainer>
      </Screen>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
