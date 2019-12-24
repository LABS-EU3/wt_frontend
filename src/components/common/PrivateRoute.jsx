import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isSignedIn = isLoggedIn();
  console.log(isSignedIn);
  if (isSignedIn) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
  return <Redirect to="/signup" />;
};

export default PrivateRoute;
