import React from "react";
import { View, StyleSheet, Text, Linking } from "react-native";

import ReachIcon from "../components/ReachIcon";

import { variables } from "../data/variables";

const Contact = () => {
  return (
    <View>
      <Text style={styles.cTitle}>Contact Clidive Realtors</Text>
      <View style={styles.contact}>
        <ReachIcon
          size={60}
          name="envelope"
          color={variables.color.secondary}
          onPress={() => Linking.openURL(`mailto:${variables.email}`)}
        />
        <ReachIcon
          size={47}
          name="phone"
          color={variables.color.primary}
          onPress={() => Linking.openURL(`tel:${variables.phoneNumber}`)}
        />
        <ReachIcon
          size={60}
          onPress={() =>
            Linking.openURL(
              `whatsapp://send?text=${
                "Hello, " +
                `${variables.companyName}` +
                `. I am Interested in your *${listing.title}*, listed on Clic.`
              }&phone=${variables.phoneNumber}`
            )
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  cTitle: {
    marginTop: 25,
    alignSelf: "center",
    color: variables.color.secondary,
    fontSize: 25,
  },
});

export default Contact;
