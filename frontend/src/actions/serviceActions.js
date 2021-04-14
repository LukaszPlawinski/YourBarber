import axios from "axios";
import {
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
  SERVICE_LIST_FAIL,
  SERVICE_USER_SET,
} from "../constants/serviceConstants";

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

export const setUserService = (service_id) => async (dispatch) => {
  dispatch({
    type: SERVICE_USER_SET,
    user_service: service_id,
  });
};
