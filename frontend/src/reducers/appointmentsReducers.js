import {
  APPOINTMENTS_SET_REQUEST,
  APPOINTMENTS_SET_SUCCESS,
  APPOINTMENTS_SET_FAIL,
  APPOINTMENT_USER_SET,
} from "../constants/appointmentsConstants";

export const appointmentsReducer = (
  state = { appointments: [], user_appointment: new Date() },
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
    default:
      return state;
  }
};
