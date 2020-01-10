import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Heading } from "@chakra-ui/core";
import { WorkoutStyle } from "./WorkoutStyle";

function Workout({ data }) {
  const { name, intensity, types, id, picture } = data;

  return (
    <WorkoutStyle>
      <Link to={`/workout/${id}`}>
        <img src={picture} alt={name} />

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
