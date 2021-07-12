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

import { register } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import AppActivityIndicator from "../components/AppActivityIndicator";
import routeNames from "../data/routeNames";
const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
);

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name").trim(),
  username: Yup.string().required().label("Username").trim(),
  email: Yup.string().trim().required().email().label("Email"),
  password: Yup.string()
    .trim()
    .required()
    .min(6)
    .matches(
      passwordRegex,
      "Password must contain atleast an uppercase, symbol and number characters"
    )
    .label("Password"),
  confirmPassword: Yup.string()
    .trim()
    .required()
    .min(6)
    .matches(
      passwordRegex,
      "Password must contain atleast an uppercase, symbol and number characters"
    )
    .label("Confirm Password"),
});

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const [passwordError, setPasswordError] = React.useState("");
  const [pError, setPError] = React.useState(false);

  const { userInfo, loading, error, success } = useSelector(
    (state) => state.userRegister
  );

  const submitHandler = ({
    name,
    email,
    username,
    password,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      setPError(true);
      setPasswordError("Your password do not match.");
    } else {
      dispatch(
        register(name.trim(), username.trim(), email.trim(), password.trim())
      );
      setPError(false);
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigation.navigate(routeNames.LOGIN);
      }, 5000);
    }
  }, [success]);

  return (
    <Screen>
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
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
              <Text style={styles.text}>Join Clidive Realtors</Text>
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
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                placeholder="Name e.g Ada Joe"
                icon="account"
                name="name"
              />
              <AppTextInput
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username.trim()}
                placeholder="Username e.g blinks123"
                icon="account-box"
                name="username"
              />
              <AppTextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email.trim()}
                placeholder="Email e.g exampl@email.com"
                textContentType="emailAddress"
                autoCompleteType="email"
                icon="email"
                name="email"
              />
              <ErrorMessage error={passwordError} visible={pError} />
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
              <AppTextInput
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword.trim()}
                placeholder="Confirm Password"
                secureTextEntry
                textContentType="password"
                icon="lock-check"
                name="confirmPassword"
              />

              <AppButton onPress={handleSubmit} title="Register" />
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

export default Register;
