import { TOGGLE_BOARD_FORM, UPDATE_BOARD_FORM } from "./CreateBoardActionTypes";

export const toggleBoardForm = value => ({
  type: TOGGLE_BOARD_FORM,
  payload: value
});

export const updateBoardForm = values => ({
  type: UPDATE_BOARD_FORM,
  payload: values
});
