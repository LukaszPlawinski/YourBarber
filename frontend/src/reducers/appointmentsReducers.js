import {
  APPOINTMENTS_SET_REQUEST,
  APPOINTMENTS_SET_SUCCESS,
  APPOINTMENTS_SET_FAIL,
  APPOINTMENT_USER_SET,
  APPOINTMENT_USER_RESET,
  APPOINTMENT_IS_PAID,
  APPOINTMENTS_MY_LIST_REQUEST,
  APPOINTMENTS_MY_LIST_SUCCESS,
  APPOINTMENTS_MY_LIST_FAIL,
  APPOINTMENTS_MY_LIST_RESET,
} from "../constants/appointmentsConstants";

export const appointmentsReducer = (
  state = { appointments: [], user_appointment: "", is_paid: false },
  action
) => {
  switch (action.type) {
    case APPOINTMENTS_SET_REQUEST: {
      return { ...state, loading: true, appointments: [] };
    }
    case APPOINTMENTS_SET_SUCCESS: {
      return { ...state, loading: false, appointments: action.payload };
    }
    case APPOINTMENTS_SET_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    case APPOINTMENT_USER_SET: {
      return { ...state, user_appointment: action.user_date };
    }
    case APPOINTMENT_USER_RESET:
      return { user_appointment: "" };
    case APPOINTMENT_IS_PAID: {
      return { ...state, is_paid: action.is_paid };
    }
    default:
      return state;
  }
};

export const appointmentsMyListReducer = (
  state = { appointments: [] },
  action
) => {
  switch (action.type) {
    case APPOINTMENTS_MY_LIST_REQUEST: {
      return { loading: true };
    }
    case APPOINTMENTS_MY_LIST_SUCCESS: {
      return {
        loading: false,
        success: true,
        appointments: action.payload,
      };
    }
    case APPOINTMENTS_MY_LIST_FAIL: {
      return {
        loading: false,
        error: action.payload,
      };
    }
    case APPOINTMENTS_MY_LIST_RESET:
      return { appointments: [] };
    default:
      return state;
  }
};
