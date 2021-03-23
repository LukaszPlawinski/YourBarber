import {
  BARBER_LIST_REQUEST,
  BARBER_LIST_SUCCESS,
  BARBER_LIST_FAIL,
} from "../constants/barberConstants";

export const barberListReducer = (state = { barbers: [] }, action) => {
  switch (action.type) {
    case BARBER_LIST_REQUEST:
      return { loading: true, barbers: [] };
    case BARBER_LIST_SUCCESS:
      return { loading: false, barbers: action.payload };
    case BARBER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
