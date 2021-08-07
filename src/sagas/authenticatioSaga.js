import { put, call } from "redux-saga/effects";
import {
  registerUserService,
  loginUserService,
} from "../services/authenticationService";

import * as types from "../types";

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield [put({ type: types.REGISTER_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    console.log("log in saga");
    console.log(payload);
    const response = yield call(loginUserService, payload);
    console.log("yeild success");
    console.log(response);
    console.log(types);
    yield [put({ type: types.LOGIN_USER_SUCCESS, response })];
    console.log("yeild failed");
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}
