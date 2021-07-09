import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, tintColor, size = 25 }) => {
  return <MaterialCommunityIcons name={name} color={tintColor} size={size} />;
};

export default Icon;
