import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/LogIn";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/trackdrillsapp" component={Container} />
    </div>
  );
}

export default App;
