import axios from "axios";
import {
  BARBER_LIST_REQUEST,
  BARBER_LIST_SUCCESS,
  BARBER_LIST_FAIL,
} from "../constants/barberConstants";

export const listBarbers = () => async (dispatch) => {
  try {
    dispatch({ type: BARBER_LIST_REQUEST });

    const { data } = await axios.get("/api/barbers");

    dispatch({
      type: BARBER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BARBER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
