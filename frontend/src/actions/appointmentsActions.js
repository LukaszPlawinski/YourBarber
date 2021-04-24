import axios from "axios";
import {
  APPOINTMENTS_SET_FAIL,
  APPOINTMENTS_SET_SUCCESS,
  APPOINTMENTS_SET_REQUEST,
  APPOINTMENT_USER_SET,
  APPOINTMENT_IS_PAID,
  APPOINTMENT_USER_RESET,
  APPOINTMENTS_MY_LIST_REQUEST,
  APPOINTMENTS_MY_LIST_SUCCESS,
  APPOINTMENTS_MY_LIST_FAIL,
} from "../constants/appointmentsConstants";

// Thit action returns all appointments
export const setAppointments = () => async (dispatch, getState) => {
  try {
    dispatch({ type: APPOINTMENTS_SET_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/appointments", config);

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

// This action sets appointment date selected by user
export const setUserDate = (date) => async (dispatch) => {
  dispatch({
    type: APPOINTMENT_USER_SET,
    user_date: date,
  });
};

// This action resets appointment date selected by user
export const appointmentUserReset = () => async (dispatch) => {
  dispatch({
    type: APPOINTMENT_USER_RESET,
  });
};

// Changes state of is_paid
export const setAppointmentIsPaid = (is_paid) => (dispatch) => {
  dispatch({
    type: APPOINTMENT_IS_PAID,
    is_paid: is_paid,
  });
};

// List of All appointments for specific user/barber
export const listMyAppointments = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPOINTMENTS_MY_LIST_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `/api/appointments/myappointments`,
      config
    );

    dispatch({
      type: APPOINTMENTS_MY_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: APPOINTMENTS_MY_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
