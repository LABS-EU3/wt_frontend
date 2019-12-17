import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Onboarding from "./components/Onboarding";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      {/* <div className="App">
        <header className="App-header">
          <h1>Welcome to Track Drills</h1>
        </header>
        
      </div> */}
      <Route exact path="/onboarding" component={Onboarding} />
    </ThemeProvider>
  );
}

export default App;
