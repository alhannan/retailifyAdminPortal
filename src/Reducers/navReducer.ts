import { SELECT_PAGE } from "../Actions/types";
import { Action } from "../Interfaces/actionInterface";
import {
  DASHBOARD,
  RETAILERS,
  CUSTOMERS,
  ORDERS,
  PRODUCTS,
} from "../Constants/pages";

const INITIAL_STATE = {
  pages: [DASHBOARD, RETAILERS, CUSTOMERS, ORDERS, PRODUCTS],
  currentPage: DASHBOARD,
};

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SELECT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
