import React from "react";

import Excercises from "./Exercises";
import { ExercisesStyle } from "./ExerciseStyle";
import Search from "../common/Search";

const Exercises = () => {
  return (
    <div>
      <ExercisesStyle>
        <Search placeholder="Look for a specific excercise" />
        <Excercises />
      </ExercisesStyle>
    </div>
  );
};

export default Exercises;
