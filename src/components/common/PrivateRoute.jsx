import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn, userOnboardedSuccessfully } from "../../utils";

const isValidPath = path => {
  if (path === "/login" || path === "/signup" || path === "/onboarding") {
    return true;
  } else {
    return false;
  }
};
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isSignedIn = isLoggedIn();
  if (isSignedIn) {
    const onBoarded = userOnboardedSuccessfully();
    if (onBoarded || isValidPath(rest.path))
      return <Route {...rest} render={props => <Component {...props} />} />;
    else {
      return <Redirect to="/onboarding" />;
    }
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
