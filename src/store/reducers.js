import { combineReducers } from "redux";
import NavBarReducer from "../containers/NavBar/redux/NavBarReducer";
import CreateBoardReducer from "../containers/CreateBoard/redux/CreateBoardReducer";

export default combineReducers({
  nav: NavBarReducer,
  boardForm: CreateBoardReducer
});
