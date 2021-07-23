import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import authStorage from "../storage";

import routeNames from "../data/routeNames";
import Icon from "../components/Icon";
import Contact from "../screens/Contact";
import Listings from "../screens/Listings";
import { variables } from "../data/variables";
import ListingsEdit from "../screens/ListingsEdit";
import ListingsNavigation from "./ListingsNavigation";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

const FeedNavigation = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [exist, setExist] = useState(false);

  // let theToken;
  const getToken = async () => {
    const token = await authStorage.getToken();
    setUser(token);
    setExist(true);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name={routeNames.LISTINGS}
        component={ListingsNavigation}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <MaterialIcons name="home" size={size} color={color} />;
          },
        }}
      />
      {exist && user && (
        <Tab.Screen
          name={routeNames.ACCOUNT}
          component={Account}
          options={{
            tabBarIcon: ({ size, color }) => {
              return (
                <MaterialIcons name="account-box" size={size} color={color} />
              );
            },
          }}
        />
      )}
      {exist && user && user.isAdmin && (
        <Tab.Screen
          name={routeNames.LISTING_EDIT}
          component={ListingsEdit}
          options={({ navigation }) => ({
            tabBarIcon: ({ color, focused }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(routeNames.LISTING_EDIT);
                }}
              >
                <View
                  style={[
                    styles.button,
                    {
                      borderColor: focused
                        ? variables.color.primary
                        : variables.color.secondary,
                    },
                  ]}
                >
                  <MaterialIcons name="add" size={50} color={color} />
                </View>
              </TouchableOpacity>
            ),
          })}
        />
      )}

      <Tab.Screen
        name={routeNames.CONTACT}
        component={Contact}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <MaterialIcons name="call" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: variables.color.light,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    borderColor: variables.color.secondary,
    borderWidth: 1,
    height: 70,
    bottom: 15,
  },
});

export default FeedNavigation;
