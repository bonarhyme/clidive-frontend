import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import routeNames from "../data/routeNames";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Welcome from "../screens/Welcome";
import Listings from "../screens/Listings";
import FeedNavigation from "./FeedNavigation";

const Stack = createStackNavigator();

const AppMainNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome page"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routeNames.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routeNames.REGISTER}
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routeNames.LISTINGS}
        component={FeedNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppMainNavigation;
