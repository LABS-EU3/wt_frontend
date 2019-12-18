import React from "react";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./components/LogIn";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
    </div>
  );
}

export default App;
