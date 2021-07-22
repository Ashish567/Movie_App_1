import * as types from "../types";

export default function(state = [], action) {
  const response = action.response;
  console.log("reducers...");
  console.log(action);
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}