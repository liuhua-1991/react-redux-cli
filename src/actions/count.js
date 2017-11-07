import {
  INCREASE,
  DECREASE,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL
} from "./constants";
import api from "../utils/api";

export function increase(n) {
  return {
    type: INCREASE,
    amount: n || 1
  };
}

export function decrease(n) {
  return {
    type: DECREASE,
    amount: n || 1
  };
}
export function getData() {
  return dispatch => {
    dispatch({ type: GET_DATA });
    return api
      .get("getTOInfoByTOCode")
      .then(data => {
        dispatch({ type: GET_DATA_SUCCESS, list: data });
      })
      .catch(function(ex) {
        dispatch({ type: GET_DATA_FAIL });
      });
  };
}
