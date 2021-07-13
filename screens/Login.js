import React, { useEffect } from "react";

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
import { Header } from "@react-navigation/stack";

import authStorage from "../storage";

import { login } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import routeNames from "../data/routeNames";
const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
);

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username").trim(),
  password: Yup.string().trim().required().label("Password"),
});

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const { userInfo, loading, error, success } = useSelector(
    (state) => state.userLogin
  );

  const submitHandler = ({ username, password }) => {
    dispatch(login(username.trim(), password.trim()));
  };

  useEffect(() => {
    if (success) {
      navigation.navigate(routeNames.LISTINGS);
    }
  }, [success]);

  return (
    <Screen>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => submitHandler(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            contentContainerStyle={styles.main}
          >
            <ScrollView contentContainerStyle={styles.container}>
              <Text style={styles.text}>Login Clidive Realtors</Text>
              <AppActivityIndicator visible={loading} />
              <ErrorMessage error={error} visible={!success} />
              {success && (
                <>
                  <ErrorMessage
                    error={userInfo.message}
                    visible={success}
                    color={variables.color.success}
                  />
                  <ErrorMessage
                    error="Redirecting in 5 seconds"
                    visible={success}
                    color={variables.color.info}
                  />
                </>
              )}

              <AppTextInput
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username.trim()}
                placeholder="Username e.g blinks123"
                icon="account-box"
                name="username"
              />

              <AppTextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password.trim()}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                icon="lock"
                name="password"
              />

              <AppButton onPress={handleSubmit} title="Login" text="Login" />
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

export default Login;
