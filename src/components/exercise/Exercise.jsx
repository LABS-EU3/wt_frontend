import React from "react";
import { ExerciseStyle } from "./ExerciseStyle";

const Excercise = ({ excercise }) => {
  console.log(excercise);
  const { rating, pictureOne } = excercise;
  return (
    <ExerciseStyle>
      <img src={pictureOne} alt="" />
    </ExerciseStyle>
  );
};

export default Excercise;
