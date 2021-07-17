import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Formik } from "formik";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { variables } from "../data/variables";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";

import { register } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import routeNames from "../data/routeNames";
import AppFormImagePicker from "../components/imagePicker/AppFormImagePicker";
import { createListing } from "../actions/listingAction";
import UploadScreen from "./Upload";
import { CREATE_LISTING_REQUEST } from "../constants/listingConstants";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number()
    .typeError("Price must be a number and do not use commas.")
    .required()
    .label("Price"),
  description: Yup.string().required().label("Description"),
  location: Yup.string().required().label("Location"),
  category: Yup.string().required().nullable().label("Category"),
  images: Yup.array().required().label("Images"),
});

const ListingEdit = ({ navigation }) => {
  const dispatch = useDispatch();

  const { serverReply, loading, error, success } = useSelector(
    (state) => state.listingCreate
  );

  const [uploadVisible, setUploadVisible] = useState(success);

  const submitHandler = (details, { resetForm }) => {
    const { title, price, description, location, category, images } = details;
    dispatch(
      createListing(title, price, description, location, category, images)
    );
    resetForm();
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        dispatch({ type: "CREATE_LISTING_STOP_LOADER" });
      }, 3000);
    }
  }, [dispatch, success]);

  return (
    <Screen>
      {success && <UploadScreen />}
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          location: "",
          category: null,
          images: [],
        }}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            contentContainerStyle={styles.main}
          >
            <ScrollView contentContainerStyle={styles.container}>
              <Text style={styles.text}>Create New Listing</Text>
              <AppActivityIndicator visible={loading} />
              <ErrorMessage error={error} visible={!success} />
              {success && (
                <>
                  <ErrorMessage
                    error={serverReply.message}
                    visible={success}
                    color={variables.color.success}
                  />
                </>
              )}
              <AppTextInput
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                value={values.title}
                placeholder="Title e.g 4 bedroom flat..."
                icon="book"
                name="title"
              />
              <AppTextInput
                onChangeText={handleChange("price")}
                onBlur={handleBlur("price")}
                value={values.price}
                keyboardType="numeric"
                placeholder="Price e.g 789000..."
                icon="cash"
                name="price"
              />
              <AppTextInput
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
                placeholder="Description e.g It has a C-OF-C document"
                numberOfLines={3}
                multiline
                icon="book-information-variant"
                name="description"
              />
              <AppTextInput
                onChangeText={handleChange("location")}
                onBlur={handleBlur("location")}
                value={values.location}
                placeholder="Location e.g No 7 Eze road Usu"
                numberOfLines={2}
                multiline
                icon="map-marker"
                name="location"
              />
              <AppTextInput
                onChangeText={handleChange("category")}
                onBlur={handleBlur("category")}
                value={values.category}
                placeholder="Category e.g Land"
                icon="home-city"
                name="category"
                picker
              />
              <AppFormImagePicker name="images" />
              <AppButton onPress={handleSubmit} text="Post Now" />
            </ScrollView>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </Screen>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginBottom: 60,
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 25,
    color: variables.color.primary,
    borderTopColor: variables.color.primary,
    borderTopWidth: 5,
    marginBottom: 10,
  },
});

export default ListingEdit;
