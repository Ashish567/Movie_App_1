import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
// import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from "./Reducers";
import rootSaga from "./sagas/index";

const initalState = {};
const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const store = {
  ...createStore(
    rootReducer,
    initalState,
    applyMiddleware(...middleware, sagaMiddleware)
  ),
  runSaga: sagaMiddleware.run(rootSaga),
};

export default store;
