import React from "react";

import Excercises from "./Exercises";
import { ExercisesStyle } from "./ExerciseStyle";
import Search from "../common/Search";

function Exercises() {
  return (
    <div>
      <ExercisesStyle>
        <Search />
        <Excercises />
        {/* <div className="recommendations-container">
          <p>See recommended exercises</p>
          <p>These exercises were suggested based on your current progress</p>
        </div> */}
      </ExercisesStyle>
    </div>
  );
}

export default Exercises;
