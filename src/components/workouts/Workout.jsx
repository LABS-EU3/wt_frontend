import React from "react";
import { withApollo } from "react-apollo";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { Heading, ButtonGroup, Button, useToast } from "@chakra-ui/core";
import { WorkoutStyle } from "./WorkoutStyle";
import defaultPicture from "../../assets/banner.jpg";
import { DELETE_CUSTOM_WORKOUT } from "../../graphql/mutations";

function Workout({ client, data, history, cardQuery, setLimitedWorkouts }) {
  const toast = useToast();
  const { name, intensity, types, id, picture } = data;

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  const deleteCustomWorkout = () => {
    client
      .mutate({
        mutation: DELETE_CUSTOM_WORKOUT,
        variables: {
          workoutId: id,
          remove: true,
          name: "",
          description: "",
          intensity: "",
          exercises: []
        }
      })
      .then(res => {
        setLimitedWorkouts(workouts => workouts.filter(w => w.id !== id));
        alert("Custom workout deleted!", "🏋🏾‍♀️", "success");
      })
      .catch(error => {
        console.log(error);
        alert(
          "An error occurred.",
          "Unable to delete custom workout ☹️",
          "error"
        );
      });
  };
  const editCustomWorkout = id => e => {
    history.push(`/my/workout/${id}`);
  };
  const pic = picture ? picture : defaultPicture;
  if (cardQuery === "CUSTOM_WORKOUTS") {
    return (
      <WorkoutStyle>
        <Link to={`/workout/${id}`}>
          <img src={pic} alt={name} />
        </Link>
        <div className="workout-details">
          <Link to={`/workout/${id}`}>
            <Heading size="sm" textAlign="left">
              {name}
            </Heading>
            <div className="workout-type">
              <p>Intensity: {intensity}</p>
              <p>Type: {types}</p>
            </div>
          </Link>
          <ButtonGroup className="cw-buttons">
            <Button
              onClick={editCustomWorkout(id)}
              leftIcon="edit"
              variant="outline"
              variantColor="yellow"
            >
              Edit
            </Button>
            <Button
              onClick={deleteCustomWorkout}
              leftIcon="delete"
              variant="outline"
              variantColor="red"
            >
              Delete
            </Button>
          </ButtonGroup>
        </div>
      </WorkoutStyle>
    );
  }

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

export default withApollo(withRouter(Workout));
