import { LOGIN } from "../Actions/types";
import { Action } from "../Interfaces/actionInterface";

const INITIAL_STATE = {
  admin: {},
};

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        admin: action.payload,
      };
    default:
      return state;
  }
};
