import { combineReducers } from "redux";
import authReducer from "./authReducer";
import navReducer from "./navReducer";
import loaderReducer from "./loaderReducer";

export default combineReducers({
  auth: authReducer,
  navigation: navReducer,
  isLoading: loaderReducer
})

