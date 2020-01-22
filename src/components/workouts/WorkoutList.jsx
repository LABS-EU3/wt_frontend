import React, { useState } from "react";
import Workouts from "./Workouts";

import { WorkoutsStyleList } from "./WorkoutStyle";
import Search from "../common/Search";

const WorkoutList = () => {
  const [search, setSearch] = useState("");
  return (
    <WorkoutsStyleList>
      <Search placeholder="Look for a specific workout" setSearch={setSearch} />
      <Workouts workoutName="New Workouts" workoutQuery={search} />
    </WorkoutsStyleList>
  );
};

export default WorkoutList;
