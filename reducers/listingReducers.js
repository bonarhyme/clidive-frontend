import {
  CREATE_LISTING_REQUEST,
  CREATE_LISTING_SUCCESS,
  CREATE_LISTING_FAIL,
  GET_LISTINGS_REQUEST,
  GET_LISTINGS_SUCCESS,
  GET_LISTINGS_FAIL,
} from "../constants/listingConstants";

export const createListingReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_LISTING_REQUEST:
      return { loading: true, success: false };
    case CREATE_LISTING_SUCCESS:
      return { loading: false, success: true, serverReply: action.payload };
    case "CREATE_LISTING_STOP_LOADER":
      return { loading: false, success: false };
    case CREATE_LISTING_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const getAllListingsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LISTINGS_REQUEST:
      return { loading: true, success: false };
    case GET_LISTINGS_SUCCESS:
      return { loading: false, success: true, serverReply: action.payload };
    case GET_LISTINGS_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};