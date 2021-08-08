import btoa from "btoa";
import axios from "axios";
import jwt_decode from "jwt-decode";
import * as types from ".././types";

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_USER,
    user,
  };
};

export const loginUserAction = (user) => {
  console.log("Logging in login Action");
  console.log(user);

  return {
    type: types.LOGIN_USER,
    user,
  };
};
