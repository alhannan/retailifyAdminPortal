import { FETCH_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT } from "../Actions/types";
import { Action } from "../Interfaces/actionInterface";
import _ from "lodash";

export default (state = {}, action: Action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case DELETE_PRODUCT:
      return _.omit(state, action.payload);
    case ADD_PRODUCT:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
