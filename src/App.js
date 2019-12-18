import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/LogIn";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/app" component={Dashboard} />
    </div>
  );
}

export default App;
