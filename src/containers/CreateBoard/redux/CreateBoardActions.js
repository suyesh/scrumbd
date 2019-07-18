import {
  TOGGLE_BOARD_FORM,
  UPDATE_BOARD_FORM,
  CREATING
} from "./CreateBoardActionTypes";

export const toggleBoardForm = value => ({
  type: TOGGLE_BOARD_FORM,
  payload: value
});

export const updateBoardForm = values => ({
  type: UPDATE_BOARD_FORM,
  payload: values
});

export const setCreating = value => ({
  type: CREATING,
  payload: value
});
