import navReducer from "./navReducer";
import weatherReducer from "./weatherReducer";
import locationReducer from "./locationReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  navReducer,
  locationReducer,
  weatherReducer,
});

export default allReducers;
