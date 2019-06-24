import { combineReducers } from "redux";
import NavBarReducer from "../containers/NavBar/redux/NavBarReducer";

export default combineReducers({
  nav: NavBarReducer
});
