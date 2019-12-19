import React from "react";
import { Route } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/auth/LogIn";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <div className="App" data-testid="App">
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/onboarding" component={Onboarding} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute path="/" component={Dashboard} />
    </div>
  );
}

export default App;
