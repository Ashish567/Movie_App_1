import React from "react";
import ReactDOM from "react-dom";
// import { Router, browserHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import "typeface-roboto";
import registerServiceWorker from "./registerServiceWorker";
import Controller from "./screens/Controller";
import Details from "./screens/details/Details";
import history from "./history";

import routes from "./routes";
import store from "./store.js";
import { Provider } from "react-redux";

// const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact activeRoute path="/" exact component={Controller} />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
