import { SHOW_SEARCH_INPUT } from "./NavBarActionTypes";

const INITIAL_STATE = {
  showSearch: false
};

function NavBarReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_SEARCH_INPUT: {
      return { ...state, showSearch: action.payload };
    }
    default:
      return state;
  }
}

export default NavBarReducer;
