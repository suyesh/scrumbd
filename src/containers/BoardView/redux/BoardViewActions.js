import { RESET_BOARD, UPDATE_BOARD } from "./BoardViewActionTypes";

export const resetBoard = () => ({ type: RESET_BOARD });

export const updateBoard = board => ({ type: UPDATE_BOARD, payload: board });
