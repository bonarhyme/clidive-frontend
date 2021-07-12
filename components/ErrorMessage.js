import React from "react";
import { Text } from "react-native";
import { variables } from "../data/variables";

const ErrorMessage = ({ error, visible, color = variables.color.danger }) => {
  if (!visible || !error) return null;
  return <Text style={{ color: color }}>{error}</Text>;
};

export default ErrorMessage;
