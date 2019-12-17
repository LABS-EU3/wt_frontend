import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "./App.css";
import Login from "./components/LogIn";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />

      <Login />
    </ThemeProvider>
  );
}

export default App;
