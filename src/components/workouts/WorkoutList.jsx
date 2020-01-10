import React from "react";
import Workouts from "./Workouts";

import { WorkoutsStyle } from "./WorkoutStyle";
import Search from "../common/Search";

const WorkoutList = () => {
  return (
    <WorkoutsStyle>
      <Search placeholder="Look for a specific workout" />
      <Workouts />
    </WorkoutsStyle>
  );
};

export default WorkoutList;
