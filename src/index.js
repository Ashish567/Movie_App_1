import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import "./index.css";
import "typeface-roboto";
import registerServiceWorker from "./registerServiceWorker";
import Controller from "./screens/Controller";

import routes from "./routes";
import store from "./store.js";
import { Provider } from "react-redux";

// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Controller />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
