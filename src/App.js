import React from "react";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
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

      <Login />
    </ThemeProvider>
  );
}

export default App;
