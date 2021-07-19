import {
  CREATE_LISTING_REQUEST,
  CREATE_LISTING_SUCCESS,
  CREATE_LISTING_FAIL,
  GET_LISTINGS_REQUEST,
  GET_LISTINGS_SUCCESS,
  GET_LISTINGS_FAIL,
} from "../constants/listingConstants";
import axios from "axios";
import { variables } from "../data/variables";

export const createListing =
  (title, price, description, location, category, images, unUploadProgress) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_LISTING_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${
            userInfo.token === undefined ? userInfo._W.token : userInfo.token
          }`,
        },
      };
      const fData = new FormData();
      fData.append("title", title);
      fData.append("price", price);
      fData.append("category", category);
      fData.append("description", description);
      fData.append("location", location);
      images.forEach((image, index) => {
        fData.append("images", {
          name: "image" + index,
          type: "image/jpeg",
          uri: image,
        });
      });

      const { data } = await axios.post(
        `${variables.backendLink}/api/listing/new`,
        fData,
        config
      );

      dispatch({
        type: CREATE_LISTING_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_LISTING_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getAllListings = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: GET_LISTINGS_REQUEST,
    });

    const { data } = await axios.get(
      `${variables.backendLink}/api/listing/all/?keyword=${keyword}`
    );

    dispatch({
      type: GET_LISTINGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LISTINGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
