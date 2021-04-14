import {
  BARBER_LIST_REQUEST,
  BARBER_LIST_SUCCESS,
  BARBER_LIST_FAIL,
  BARBER_USER_SET,
} from "../constants/barberConstants";

export const barberListReducer = (
  state = { barbers: [], user_barber: {} },
  action
) => {
  switch (action.type) {
    case BARBER_LIST_REQUEST:
      return { ...state, loading: true, barbers: [] };
    case BARBER_LIST_SUCCESS:
      return { ...state, loading: false, barbers: action.payload };
    case BARBER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case BARBER_USER_SET:
      return { ...state, user_barber: action.user_barber };
    default:
      return state;
  }
};
