import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userRegisterReducer, userLoginReducer } from "./reducers/userReducers";
import {
  createListingReducer,
  getAllListingsReducer,
} from "./reducers/listingReducers";

import authStorage from "./storage";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  listingCreate: createListingReducer,
  listingsGet: getAllListingsReducer,
});

const userInfoFromStorage = authStorage.getToken()
  ? authStorage.getToken()
  : [];

// initial state
const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
