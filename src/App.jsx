import React from "react";
import { Route } from "react-router-dom";
import Onboarding from "./components/auth/Onboarding";
import "./App.css";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./components/auth/LogIn";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/auth/SignUp";
import WorkoutList from "./components/workouts/WorkoutList";
import WorkoutDetail from "./components/workouts/WorkoutDetail";

function App() {
  return (
    <div className="App" data-testid="App">
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/onboarding" component={Onboarding} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute exact path="/workouts" component={WorkoutList} />
      <PrivateRoute exact path="/workout/:id" component={WorkoutDetail} />
    </div>
  );
}

export default App;
