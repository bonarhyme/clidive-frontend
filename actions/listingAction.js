import {
  CREATE_LISTING_REQUEST,
  CREATE_LISTING_SUCCESS,
  CREATE_LISTING_FAIL,
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
