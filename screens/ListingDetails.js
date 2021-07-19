import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";

import Slider from "../components/Slider";
import { variables } from "../data/variables";

const AText = ({ children }) => {
  return <Text style={styles.aText}>{children}</Text>;
};

const ListingDetails = (item) => {
  const [listing, setListing] = useState(item.route.params.item);

  return (
    <ScrollView>
      <Slider images={listing.images} height={320} />
      <Text style={styles.title}>
        <AText>Title:</AText> {listing.title}
      </Text>
      <Text style={styles.others}>
        <AText>Category:</AText> {listing.category}
      </Text>
      <Text style={styles.price}>
        <AText>Price: </AText>
        {`\u20A6`}
        {listing.price}
      </Text>
      <Text style={styles.others}>
        <AText>Location: </AText>
        {listing.location}
      </Text>

      <Text style={styles.others}>
        <AText>Description: </AText>
        {listing.description}
      </Text>
      <Text style={styles.others}>
        <AText>Original Poster: </AText>
        {listing.poster.username}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  aText: {
    color: variables.color.secondary,
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    paddingVertical: 5,
    paddingLeft: 15,
    color: variables.color.dark,
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    paddingBottom: 5,
    color: variables.color.dark,
    paddingLeft: 15,
  },
  others: {
    fontSize: 15,
    color: variables.color.read,
    paddingLeft: 15,
    fontWeight: "700",
  },
});

export default ListingDetails;
