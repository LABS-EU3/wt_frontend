import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Track Drills</h1>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
