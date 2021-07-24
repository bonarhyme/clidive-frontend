import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Button } from "react-native";
import { variables } from "../data/variables";

const AppButton = ({
  onPress,
  text = "Submit",
  color = "primary",
  fontSize = 22,
  marginBottom = 5,
}) => {
  return (
    <View style={{ alignItems: "center", marginBottom: { marginBottom } }}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, { backgroundColor: variables.color[color] }]}
      >
        <Text
          style={[
            styles.text,
            { color: variables.color.white, fontSize: fontSize },
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginTop: 15,
    borderRadius: 50,
    paddingHorizontal: 50,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "bold",
  },
});

export default AppButton;
