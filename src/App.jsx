import React from "react";
import { Route } from "react-router-dom";
import Onboarding from "./components/auth/Onboarding";
import "./App.css";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./components/auth/LogIn";
import Dashboard from "./components/dashboard/Dashboard";
import SignUp from "./components/auth/SignUp";
import WorkoutList from "./components/workouts/WorkoutList";
import WorkoutDetail from "./components/workouts/WorkoutDetail";
import Exercises from "./components/exercise/ExerciseList";
import ExerciseDetail from "./components/exercise/ExerciseDetail";
import Navigation from "./components/common/Navigation";
import WorkoutHistory from "./components/workouts/WorkoutHistory";
import ScheduleDetail from "./components/schedule/ScheduleDetail";
import CustomWorkoutDetail from "./components/workouts/CustomWorkoutDetail";

function App() {
  return (
    <div className="App" data-testid="App">
      <Navigation />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/exercises" component={Exercises} />
      <PrivateRoute exact path="/exercise/:id" component={ExerciseDetail} />
      <PrivateRoute exact path="/onboarding" component={Onboarding} />
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute exact path="/schedule" component={ScheduleDetail} />
      <PrivateRoute exact path="/workouts" component={WorkoutList} />
      <PrivateRoute exact path="/workout/:id" component={WorkoutDetail} />
      <PrivateRoute
        exact
        path="/my/workout/:id"
        component={CustomWorkoutDetail}
      />
      <PrivateRoute exact path="/workouthistory" component={WorkoutHistory} />
    </div>
  );
}

export default App;
