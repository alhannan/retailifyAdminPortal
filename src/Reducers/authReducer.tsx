import { LOGIN, AUTH_ERROR } from "../Actions/types";
import { Action } from "../Interfaces/actionInterface";

const INITIAL_STATE = {
  admin: {},
  error: ""
};

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        admin: action.payload,
        error: ""
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
