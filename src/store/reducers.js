import { combineReducers } from "redux";
import NavBarReducer from "../containers/NavBar/redux/NavBarReducer";
import CreateBoardReducer from "../containers/CreateBoard/redux/CreateBoardReducer";
import BoardViewReducer from "../containers/BoardView/redux/BoardViewReducer";

export default combineReducers({
  nav: NavBarReducer,
  boardForm: CreateBoardReducer,
  board: BoardViewReducer
});
