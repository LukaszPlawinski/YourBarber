import axios from "axios";
import {
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
  SERVICE_LIST_FAIL,
  SERVICE_USER_SET,
  SERVICE_USER_RESET,
} from "../constants/serviceConstants";

// List all Services
export const listServices = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_LIST_REQUEST });

    const { data } = await axios.get("/api/services");

    dispatch({
      type: SERVICE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERVICE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// set service selected by user
export const setUserService = (service_id) => async (dispatch) => {
  dispatch({
    type: SERVICE_USER_SET,
    user_service: service_id,
  });
};

// set service selected by user
export const resetUserService = () => async (dispatch) => {
  dispatch({
    type: SERVICE_USER_RESET,
  });
};
