import React, { useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import routeNames from "../data/routeNames";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Welcome from "../screens/Welcome";
import Listings from "../screens/Listings";
import FeedNavigation from "./FeedNavigation";
import authStorage from "../storage";

const Stack = createStackNavigator();

const AppMainNavigation = ({ navigation }) => {
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
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome page"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      {!user && (
        <Stack.Screen
          name={routeNames.LOGIN}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      )}
      {!user && (
        <Stack.Screen
          name={routeNames.REGISTER}
          component={Register}
          options={{
            headerShown: false,
          }}
        />
      )}
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
