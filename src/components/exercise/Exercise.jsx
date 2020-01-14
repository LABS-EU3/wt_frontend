import React from "react";
import { Link } from "react-router-dom";

import { ExerciseStyle } from "./ExerciseStyle";

const Exercise = ({ exercise }) => {
  const { id, name, rating, pictureOne, equipment } = exercise;
  return (
    <ExerciseStyle>
      <Link to={`/exercise/${id}`}>
        <img src={pictureOne} alt={name} />

        <div className="exersie-detail">
          <h4>{name}</h4>

          <div className="exercise-ratings">
            <i className="fas fa-star"></i>
            {rating}
          </div>
        </div>

        {equipment ? (
          <div className="exercise-equipment">
            <p>{equipment}</p>
          </div>
        ) : (
          ""
        )}
      </Link>
    </ExerciseStyle>
  );
};

export default Exercise;
