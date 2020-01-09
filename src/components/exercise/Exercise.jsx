import React from "react";
import { ExerciseStyle } from "./ExerciseStyle";

const Excercise = ({ excercise }) => {
  console.log(excercise);
  const { name, rating, pictureOne, equipment } = excercise;
  return (
    <ExerciseStyle>
      <img src={pictureOne} alt={name} />

      <div className="excersie-detail">
        <h4>{name}</h4>

        <div className="excercise-ratings">
          <i class="fas fa-star"></i>
          {rating}
        </div>
      </div>

      <div className="excercise-equipment">
        <p>{equipment}</p>
      </div>
    </ExerciseStyle>
  );
};

export default Excercise;
