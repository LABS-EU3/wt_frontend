import React from "react";
import { Route } from "react-router-dom";
import Onboarding from "./components/auth/Onboarding";
import "./App.css";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./components/auth/LogIn";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/auth/SignUp";
import Exercises from "./components/exercise/ExerciseList";
import ExerciseCard from "./components/exercise/ExerciseCard";
import Navigation from "./components/common/Navigation";

function App() {
  return (
    <div className="App" data-testid="App">
      <Navigation />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/login" component={ExerciseCard} /> */}
      <PrivateRoute exact path="/onboarding" component={Onboarding} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute exact path="/" component={Dashboard} />
    </div>
  );
}

export default App;
