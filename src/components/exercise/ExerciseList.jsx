import React from "react";

import Exercises from "./Exercises";
import { ExercisesStyle } from "./ExerciseStyle";
import Search from "../common/Search";

const ExerciseList = () => {
  return (
    <div>
      <ExercisesStyle>
        <Search placeholder="Look for a specific exercise" />
        <Exercises />
      </ExercisesStyle>
    </div>
  );
};

export default ExerciseList;
