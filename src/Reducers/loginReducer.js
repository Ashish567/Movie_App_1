import * as types from "../types";

export default function login(state = { login: null }, action) {
  const response = action.response;
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response, login: true };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}
