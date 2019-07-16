import { TOGGLE_BOARD_FORM } from "./CreateBoardActionTypes";

const INITIAL_STATE = {
  open: false
};

export default function CreadeBoardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_BOARD_FORM:
      return { ...state, open: action.payload };
    default:
      return state;
  }
}
