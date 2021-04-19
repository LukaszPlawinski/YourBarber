import axios from "axios";
import {
  APPOINTMENTS_SET_FAIL,
  APPOINTMENTS_SET_SUCCESS,
  APPOINTMENTS_SET_REQUEST,
  APPOINTMENT_USER_SET,
  APPOINTMENT_IS_PAID,
  APPOINTMENT_USER_RESET,
} from "../constants/appointmentsConstants";

export const setAppointments = () => async (dispatch) => {
  try {
    dispatch({ type: APPOINTMENTS_SET_REQUEST });

    const { data } = await axios.get("/api/appointments");

    dispatch({
      type: APPOINTMENTS_SET_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: APPOINTMENTS_SET_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const setUserDate = (date) => async (dispatch) => {
  dispatch({
    type: APPOINTMENT_USER_SET,
    user_date: date,
  });
};
export const appointmentUserReset = () => async (dispatch) => {
  dispatch({
    type: APPOINTMENT_USER_RESET,
  });
};

export const setAppointmentIsPaid = (is_paid) => (dispatch) => {
  dispatch({
    type: APPOINTMENT_IS_PAID,
    is_paid: is_paid,
  });
};
