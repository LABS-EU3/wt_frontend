import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "../../utils";
import { isNewUser } from "../../utils";

const isValidPath = path => {
  console.log(path);
  if (
    path === "/login" ||
    path === "/signup" ||
    path === "/onboarding" ||
    path === "accountrecovery"
  ) {
    return true;
  } else {
    return false;
  }
};
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isSignedIn = isLoggedIn();
  console.log(rest.path);
  if (isSignedIn) {
    const onBoarded = isNewUser();

    if (onBoarded === false || isValidPath(rest.path))
      return <Route {...rest} render={props => <Component {...props} />} />;
    else {
      return <Redirect to="/onboarding" />;
    }
  } else if (rest.path === "/accountrecovery") {
    return <Route {...rest} render={props => <Component {...props} />} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
