import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { serviceListReducer } from "./reducers/serviceReducers";
import { barberListReducer } from "./reducers/barberReducers";
import {
  appointmentsReducer,
  appointmentsMyListReducer,
} from "./reducers/appointmentsReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  appointmentsList: appointmentsReducer,
  serviceList: serviceListReducer,
  barberList: barberListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  myList: appointmentsMyListReducer,
  userList: userListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
