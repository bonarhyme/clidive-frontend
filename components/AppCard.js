import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import { variables } from "../data/variables";

const AppCard = ({ title, price, category, imageUri, location, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image
          defaultSource={require("../assets/images/placeholder.png")}
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: imageUri,
          }}
          tint="light"
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>
          {`\u20A6`}
          {price}
        </Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: variables.color.light,
    marginBottom: 15,
    marginTop: 10,
    overflow: "hidden",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: variables.color.gray,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    paddingVertical: 5,
    paddingLeft: 15,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    paddingBottom: 5,
    color: variables.color.secondary,
    paddingLeft: 15,
  },
  location: {
    fontSize: 12,
    color: variables.color.secondary,
    paddingLeft: 15,
  },
});

export default AppCard;
