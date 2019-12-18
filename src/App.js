import React from "react";
import { Route } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/LogIn";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App" data-testid="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/onboarding" component={Onboarding} />
      <PrivateRoute path="/app" component={Dashboard} />
    </div>
  );
}

export default App;
