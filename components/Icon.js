import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { variables } from "../data/variables";

const Icon = ({ name, tintColor = "primary", size = 25 }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      color={variables.color[tintColor]}
      size={size}
    />
  );
};

export default Icon;
