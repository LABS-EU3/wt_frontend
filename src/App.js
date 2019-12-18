import React from "react";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./components/LogIn";

function App() {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        fonts: { ...theme.fonts, body: "Roboto", heading: "Ubuntu" }
      }}
    >
      <CSSReset />
      <Router>
        <Route exact path="/" component={Login} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
