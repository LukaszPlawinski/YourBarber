import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { serviceListReducer } from "./reducers/serviceReducers";
import { barberListReducer } from "./reducers/barberReducers";

const initialState = {};

const reducer = combineReducers({
  serviceList: serviceListReducer,
  barberList: barberListReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
