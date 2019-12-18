import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/LogIn";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App" data-testid="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute path="/app" component={Dashboard} />
    </div>
  );
}

export default App;
