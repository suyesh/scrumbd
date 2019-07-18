import { TOGGLE_BOARD_FORM, UPDATE_BOARD_FORM } from "./CreateBoardActionTypes";

const INITIAL_STATE = {
  open: false,
  values: {
    title: "",
    color: "#026AA7",
    image: null,
    creatorId: null
  }
};

export default function CreadeBoardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_BOARD_FORM:
      return { ...state, open: action.payload };
    case UPDATE_BOARD_FORM: {
      if (action.payload) {
        return { ...state, values: { ...state.values, ...action.payload } };
      }
      return INITIAL_STATE;
    }

    default:
      return state;
  }
}
