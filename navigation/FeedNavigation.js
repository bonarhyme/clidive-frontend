import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";

import routeNames from "../data/routeNames";
import Icon from "../components/Icon";
import Contact from "../screens/Contact";
import Listings from "../screens/Listings";
import { variables } from "../data/variables";

const Tab = createBottomTabNavigator();

// const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
//   var isSelected = accessibilityState.selected;

//   if (isSelected) {
//     return (
//       <View style={{ flex: 1, alignItems: "center" }}>
//         <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
//           <View
//             style={{
//               flex: 1,
//               backgroundColor: variables.color.white,
//             }}
//           >
//             <Svg width={70} height={61} viewBox="0 0 75 61">
//               <Path
//                 d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
//                 fill={variables.color.white}
//               />
//             </Svg>
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: variables.color.white,
//               }}
//             >
//               <TouchableOpacity
//                 style={{
//                   top: -22.5,
//                   justifyContent: "center",
//                   alignItems: "center",
//                   width: 50,
//                   height: 50,
//                   borderRadius: 25,
//                   backgroundColor: variables.color.white,
//                 }}
//                 onPress={onPress}
//               >
//                 {children}
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   } else {
//     return (
//       <TouchableOpacity
//         style={{
//           flex: 1,
//           height: 60,
//           backgroundColor: variables.color.white,
//         }}
//         activeOpacity={1}
//         onPress={onPress}
//       >
//         {children}
//       </TouchableOpacity>
//     );
//   }
// };

const FeedNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Listings"
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name={routeNames.LISTINGS}
        component={Listings}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <MaterialIcons name="home" size={size} color={color} />;
          },
        }}
      />
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

const styles = StyleSheet.create({});

export default FeedNavigation;
