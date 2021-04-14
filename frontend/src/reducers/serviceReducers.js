import {
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
  SERVICE_LIST_FAIL,
  SERVICE_USER_SET,
} from "../constants/serviceConstants";

export const serviceListReducer = (
  state = { services: [], user_service: {} },
  action
) => {
  switch (action.type) {
    case SERVICE_LIST_REQUEST:
      return { ...state, loading: true, services: [] };
    case SERVICE_LIST_SUCCESS:
      return { ...state, loading: false, services: action.payload };
    case SERVICE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SERVICE_USER_SET:
      return { ...state, user_service: action.user_service };
    default:
      return state;
  }
};
