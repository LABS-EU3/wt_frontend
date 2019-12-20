import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../utils";

const isSignedIn = isLoggedIn();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isSignedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
