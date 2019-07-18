import {
  TOGGLE_BOARD_FORM,
  UPDATE_BOARD_FORM,
  CREATING
} from "./CreateBoardActionTypes";

const INITIAL_STATE = {
  open: false,
  creating: false,
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
      return {
        ...state,
        open: action.payload,
        creating: !action.payload ? false : state.creating
      };
    case CREATING: {
      if (action.value) {
        return { ...state, creating: action.value };
      } else {
        return INITIAL_STATE;
      }
    }
    case UPDATE_BOARD_FORM:
      return { ...state, values: { ...state.values, ...action.payload } };
    default:
      return state;
  }
}
