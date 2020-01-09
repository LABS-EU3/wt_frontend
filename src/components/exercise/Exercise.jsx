import React from "react";
import { Link } from "react-router-dom";

import { ExerciseStyle } from "./ExerciseStyle";

const Excercise = ({ excercise }) => {
  console.log(excercise);
  const { name, rating, pictureOne, equipment } = excercise;
  return (
    <ExerciseStyle>
      <Link to="">
        <img src={pictureOne} alt={name} />

        <div className="excersie-detail">
          <h4>{name}</h4>

          <div className="excercise-ratings">
            <i className="fas fa-star"></i>
            {rating}
          </div>
        </div>

        {equipment ? (
          <div className="excercise-equipment">
            <p>{equipment}</p>
          </div>
        ) : (
          ""
        )}
      </Link>
    </ExerciseStyle>
  );
};

export default Excercise;
