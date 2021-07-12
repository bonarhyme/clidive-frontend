import { SecureStorage } from "react-native-secure-storage";

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
});

const key = "theStuff_And_And_123";

const userInfoFromStorage = async () => {
  try {
    const theUser = await SecureStore.getItem(key, "userInfo");

    if (theUser) {
      return theUser;
    }
    return null;
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

// initial state
const initialState = {
  // userLogin: {
  //   userInfo: userInfoFromStorage,
  // },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
