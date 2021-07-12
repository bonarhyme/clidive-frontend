import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { variables } from "../data/variables";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppTextInput = ({
  icon,
  width = "100%",
  flexDirection = "row",
  name,
  ...otherProps
}) => {
  const { errors, touched } = useFormikContext();
  return (
    <View>
      <View
        style={[
          styles.container,
          { width: width, flexDirection: flexDirection },
        ]}
      >
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={variables.color.secondary}
            style={styles.icon}
          />
        )}
        <TextInput
          style={{
            color: variables.color.secondary,
            fontSize: 18,
            fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
            width: "90%",
            height: "100%",
            padding: 10,
          }}
          autoCapitalize="none"
          autoCorrect={false}
          {...otherProps}
        />
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
    backgroundColor: variables.color.light,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
    marginBottom: 0,
  },
  icon: {
    marginRight: 1,
    alignSelf: "center",
  },
});

export default AppTextInput;
