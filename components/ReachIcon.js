import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { variables } from "../data/variables";

const ReachIcon = ({
  onPress,
  name = "whatsapp",
  color = "green",
  size = 50,
  hasText = false,
  text = "Whatsapp",
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {hasText && <Text>{text}</Text>}
        <FontAwesome5 name={name} size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    alignItems: "center",
  },
});

export default ReachIcon;
