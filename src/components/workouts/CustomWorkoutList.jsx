import React from "react";
import Workouts from "./Workouts";
import { WorkoutsStyleList } from "./WorkoutStyle";

const CustomWorkoutList = () => {
  return (
    <WorkoutsStyleList>
      <Workouts workoutName="Custom Workouts" workoutQuery="CUSTOM_WORKOUTS" />
    </WorkoutsStyleList>
  );
};

export default CustomWorkoutList;
