import React from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = localStorage.getItem("jwtToken");
    Console.log("Authorizing");
    console.log(props);
    console.log(isAuthenticated);
    return isAuthenticated ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );
  }
}

export default ProtectedRoute;
