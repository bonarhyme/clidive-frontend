import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routeNames from "../data/routeNames";
import Listings from "../screens/Listings";
import ListingsDetails from "../screens/ListingDetails";

const Stack = createStackNavigator();

const ListingsNavigation = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{ headerShown: false }}
      initialRouteName={routeNames.LISTINGS}
    >
      <Stack.Screen name={routeNames.LISTINGS} component={Listings} />
      <Stack.Screen
        name={routeNames.LISTING_DETAILS}
        component={ListingsDetails}
      />
    </Stack.Navigator>
  );
};

export default ListingsNavigation;
