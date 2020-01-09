import React from "react";
import { Input } from "@chakra-ui/core";
import { ExercisesStyle } from "./ExerciseStyle";

function Exercises(props) {
  return (
    <div exercise-list-container>
      <ExercisesStyle>
        <nav></nav>
        <div className="search-container">
          <h4>Search</h4>
          <p>Find an exercise</p>
          <Input variant="filled" />
        </div>
        <div className="recommendations-container">
          <p>See recommended exercises</p>
          <p>These exercises were suggested based on your current progress</p>
        </div>
      </ExercisesStyle>
    </div>
  );
}

export default Exercises;
