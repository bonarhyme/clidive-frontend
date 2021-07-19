import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import { getAllListings } from "../actions/listingAction";
import AppCard from "../components/AppCard";
import AppActivityIndicator from "../components/AppActivityIndicator";
import routeNames from "../data/routeNames";
import { variables } from "../data/variables";

const Listings = ({ navigation }) => {
  const dispatch = useDispatch();

  const [listings, setListings] = useState([]);
  const [keyword, setKeyword] = useState("");

  const [refresh, setRefresh] = useState(false);

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.listingsGet
  );

  const { serverReply: serverReplyPost } = useSelector(
    (state) => state.listingCreate
  );

  useEffect(() => {
    dispatch(getAllListings(keyword));
  }, [serverReplyPost, dispatch]);

  const searchListings = (keyword) => {
    dispatch(getAllListings(keyword));
  };

  useEffect(() => {
    if (success) {
      setListings(serverReply);
    }
  }, [serverReply]);

  return (
    <View>
      <AppActivityIndicator visible={loading} />
      <View style={styles.searchContainer}>
        <TextInput
          style={{
            flex: 1,
            paddingLeft: 10,
          }}
          onChangeText={(text) => setKeyword(text)}
          returnKeyType="search"
          onSubmitEditing={() => searchListings(keyword)}
        />
        <FontAwesome
          name="search"
          size={30}
          color={variables.color.secondary}
          onPress={() => searchListings(keyword)}
        />
      </View>
      {listings.length > 0 ? (
        <FlatList
          data={listings}
          keyExtractor={(x) => x._id}
          refreshing={refresh}
          onRefresh={() => dispatch(getAllListings(keyword))}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              price={item.price}
              imageUri={item.images[0]}
              location={item.location}
              onPress={() =>
                navigation.navigate(routeNames.LISTING_DETAILS, {
                  item,
                })
              }
            />
          )}
        />
      ) : (
        <Text style={styles.error}>Search Not found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 40,
    justifyContent: "center",
    borderRadius: 10,
    borderColor: variables.color.secondary,
    borderWidth: 3,
    flexDirection: "row",
  },
  error: {
    fontSize: 50,
  },
});

export default Listings;
