import { UPDATE_BOARD_FORM } from "../../CreateBoard/redux/CreateBoardActionTypes";

const INITIAL_STATE = {
  title: "",
  color: "#026AA7",
  image: null,
  creatorId: null,
  collaborators: [],
  cards: []
};

export default function BoardViewReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_BOARD_FORM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
