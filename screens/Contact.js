import React from "react";
import { ScrollView, View, StyleSheet, Text, Linking } from "react-native";
import About from "../components/About";

import ReachIcon from "../components/ReachIcon";

import { variables } from "../data/variables";

const Contact = () => {
  return (
    <ScrollView>
      <Text style={styles.cTitle}>Contact Clidive Realtors</Text>
      <View style={styles.contact}>
        <ReachIcon
          size={60}
          name="envelope"
          color={variables.color.secondary}
          onPress={() => Linking.openURL(`mailto:${variables.email}`)}
          hasText={true}
          text="Email"
        />
        <ReachIcon
          size={55}
          name="phone"
          color={variables.color.primary}
          onPress={() => Linking.openURL(`tel:${variables.phoneNumber}`)}
          hasText={true}
          text="Phone"
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
          hasText={true}
        />
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      />
      <About />
    </ScrollView>
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
