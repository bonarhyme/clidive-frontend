import React, { useState, useEffect } from "react";
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

const Account = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({ username: "username", name: "name" });

  // let theToken;
  const getToken = async () => {
    const token = await authStorage.getToken();
    setUser(token);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <View>
      <Text>{user.username}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default Account;
