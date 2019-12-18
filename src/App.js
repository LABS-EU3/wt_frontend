import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "./App.css";
import SignUp from "./components/SignUp";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className="App">
        <header className="App-header">
          {/* <h1>Welcome to Track Drills</h1> */}
          <SignUp />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
