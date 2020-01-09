import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Heading } from "@chakra-ui/core";
import { WorkoutStyle } from "./WorkoutStyle";

function Workout({ data }) {
  const { name, intensity, types, id } = data;

  return (
    <WorkoutStyle>
      <Link to={`/workout/${id}`}>
        <img
          src="https://a0.muscache.com/im/pictures/b8cb989e-5c19-45ef-b478-1dc93ae8d3f3.jpg?aki_policy=poster"
          alt={name}
        />

        <div className="workout-details">
          <Heading size="sm" textAlign="left">
            {name}
          </Heading>

          <div className="workout-type">
            <p>Intensity: {intensity}</p>
            <p>Type: {types}</p>
          </div>
        </div>
      </Link>
    </WorkoutStyle>
  );
}

//adding proptypes
Workout.propTypes = {
  data: PropTypes.object.isRequired
};

export default Workout;
