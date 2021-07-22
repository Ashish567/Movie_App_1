import { takeLatest } from "redux-saga/effects";
import { registerSaga, loginSaga } from "./authenticatioSaga";

import * as types from ".././types";

export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
}
