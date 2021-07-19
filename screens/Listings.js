import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getAllListings } from "../actions/listingAction";
import AppCard from "../components/AppCard";
import AppActivityIndicator from "../components/AppActivityIndicator";
import routeNames from "../data/routeNames";

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

  useEffect(() => {
    if (success) {
      setListings(serverReply);
    }
  }, [serverReply]);
  return (
    <View>
      <AppActivityIndicator visible={loading} />
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
    </View>
  );
};

const style = StyleSheet.create({});

export default Listings;
