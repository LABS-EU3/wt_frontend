import React from "react";

import Exercises from "./Exercises";
import { ExercisesStyle, ExerciseListStyle } from "./ExerciseStyle";
import Search from "../common/Search";

const ExerciseList = () => {
  return (
    <ExerciseListStyle>
      <ExercisesStyle>
        <Search placeholder="Look for a specific exercise" />

        <Exercises
          exerciseQuery="RECOMENDED_EXERCISES"
          exerciseName="Recommended Exercises"
        />

        {/* <div className="line"></div> */}

        <Exercises
          exerciseQuery="TOP_RATED_EXERCISES"
          exerciseName="Top Rated Exercises"
        />
      </ExercisesStyle>
    </ExerciseListStyle>
  );
};

export default ExerciseList;
