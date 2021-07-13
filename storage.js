import * as SecureStore from "expo-secure-store";

// This is used to store the user details in the app

// Hide this key later
const key = "userDee";

const storeToken = async (authToken) => {
  try {
    return await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error saving the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};
const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default {
  storeToken,
  getToken,
  removeToken,
};
