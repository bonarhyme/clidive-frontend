import React, { useState } from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

import { variables } from "../data/variables";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppTextInput = ({
  picker = false,
  icon,
  width = "100%",
  flexDirection = "row",
  name,
  ...otherProps
}) => {
  const [selectedItem, setSelectedItem] = useState();

  const { errors, touched, setFieldValue } = useFormikContext();
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
            // name="home-city"
            size={20}
            color={variables.color.secondary}
            style={styles.icon}
          />
        )}
        {picker ? (
          <Picker
            selectedValue={selectedItem}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedItem(itemValue);
              setFieldValue("category", itemValue);
            }}
            style={styles.textInput}
          >
            <Picker.Item label="Select Property Type" enabled={false} />
            <Picker.Item label="Land" value="Land" />
            <Picker.Item label="New Apartment" value="New Apartment" />
            <Picker.Item label="Used Apartment" value="Used Apartment" />
            <Picker.Item label="New Vehicle" value="New Nehicle" />
            <Picker.Item label="Used Vehicle" value="Used Nehicle" />
          </Picker>
        ) : (
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            {...otherProps}
          />
        )}
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
  textInput: {
    color: variables.color.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    width: "90%",
    height: "100%",
    padding: 10,
  },
});

export default AppTextInput;
