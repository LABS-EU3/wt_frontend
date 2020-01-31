import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Onboarding from "./components/auth/Onboarding";
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
import AccountRecovery from "./components/auth/AccountRecovery";
import ProfilePage from "./components/dashboard/ProfilePage";
import CustomWorkoutDetail from "./components/workouts/CustomWorkoutDetail";
import Footer from "./components/common/Footer";
import MessageList from "./components/message/MessageList";
import Buddies from "./components/buddies/Buddies";
import NotFound from "./components/common/NotFound";
import ErrorBoundry from "./components/common/ErrorBoundry";

const App = () => {
  return (
    <div className="App" data-testid="App">
      <ErrorBoundry>
        <Navigation />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/accountrecovery" component={AccountRecovery} />
          <PrivateRoute exact path="/messages" component={MessageList} />
          <PrivateRoute exact path="/messages/:id" component={MessageList} />
          <Route
            exact
            path="/accountrecovery/:token"
            component={AccountRecovery}
          />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/exercises" component={Exercises} />
          <PrivateRoute exact path="/exercise/:id" component={ExerciseDetail} />
          <PrivateRoute exact path="/onboarding" component={Onboarding} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/workouts" component={WorkoutList} />
          <PrivateRoute exact path="/schedule" component={ScheduleDetail} />
          <PrivateRoute exact path="/workout/:id" component={WorkoutDetail} />
          <PrivateRoute
            exact
            path="/my/workout/:id"
            component={CustomWorkoutDetail}
          />
          <PrivateRoute
            exact
            path="/workouthistory"
            component={WorkoutHistory}
          />
          <PrivateRoute exact path="/buddies" component={Buddies} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </ErrorBoundry>
    </div>
  );
};

export default App;
