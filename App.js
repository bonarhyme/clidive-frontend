import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./navigation/tabs";

import { Home, Contact, MakePledge } from "./screens";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Make Plegde" component={MakePledge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
