import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className="App">
        <header className="App-header">
          <h1>Welcome to our nameless Workout Tracker</h1>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
