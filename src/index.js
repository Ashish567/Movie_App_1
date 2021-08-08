import React from "react";
import ReactDOM from "react-dom";
// import { Router, browserHistory } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./index.css";
import "typeface-roboto";
import registerServiceWorker from "./registerServiceWorker";
import Controller from "./screens/Controller";
import Details from "./screens/details/Details";
import Bookshow from "./screens/bookshow/BookShow";
import Confirmation from "./screens/confirmation/Confirmation";
import history from "./history";

import routes from "./routes";
import store from "./store.js";
import { Provider } from "react-redux";

import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact activeRoute path="/" exact component={Controller} />
        <Route path="/details" component={Details} />
        <Route path="/bookshow" component={Bookshow} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
