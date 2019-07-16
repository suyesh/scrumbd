import { TOGGLE_BOARD_FORM } from "./CreateBoardActionTypes";

export const toggleBoardForm = value => ({
  type: TOGGLE_BOARD_FORM,
  payload: value
});
