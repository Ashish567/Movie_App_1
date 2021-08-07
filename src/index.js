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

// const store = createStore(rootReducer, applyMiddleware(thunk));
// function isLoggedIn() {
//   if (localStorage.getItem("jwtToken")) {
//     console.log("logged in user");
//     return true;
//   }

//   return false;
// }

// function requireAuth(nextState, replace) {
//   if (!isLoggedIn()) {
//     replace({
//       pathname: "/",
//     });
//   }
// }

// function error() {
//   return "404 not found";
// }
console.log(ProtectedRoute);
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
