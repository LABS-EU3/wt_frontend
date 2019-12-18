import React from "react";
import { Route } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
          <h1>Welcome to Track Drills</h1>
        </header> */}
      <Route exact path="/onboarding" component={Onboarding} />
    </div>
  );
}

export default App;
