import { FETCH_CATEGORIES, DELETE_CATEGORY, ADD_CATEGORY } from "../Actions/types";
import { Action } from "../Interfaces/actionInterface";
import _ from "lodash";

export default (state = {}, action: Action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case ADD_CATEGORY:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_CATEGORY:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
