import React, { useState, useEffect } from "react";
import { Button, useToast } from "@chakra-ui/core";
import { FaPlayCircle, FaStopCircle, FaCircle, FaPause } from "react-icons/fa";
import styled from "styled-components";
import { withApollo } from "react-apollo";
// import Timer from "../common/Timer";

import { START_WORKOUT, END_WORKOUT } from "../../graphql/mutations";
import { getUserDetails } from "../../utils";

const userData = getUserDetails();

const StyledWorkoutItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  /* position: sticky;
  top: 0; */

  button {
    margin: 1rem;
  }
  .isHidden {
    display: none;
  }

  .isVisible {
    display: flex;
  }
`;

const WorkoutActionItems = ({ client, exercises, workout }) => {
  const toast = useToast();
  const [start, setStart] = useState("isVisible");
  const [pause, setPause] = useState("isHidden");
  const [stop, setStop] = useState("isHidden");

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStart = () => {
    client
      .mutate({
        mutation: START_WORKOUT,
        variables: {
          userId: userData.user_id,
          workoutId: workout.id,
          exerciseId: exercises[0].id,
          exerciseTimer: exercises[0].time
        }
      })
      .then(res => {
        setStart("isHidden");
        setPause("isVisible");
        setStop("isVisible");
        alert("Workout started", "🏋🏾‍♀️", "success");
      })
      .catch(error => {
        console.log(error);
        alert("An error occurred.", "Unable to start workout ☹️", "error");
      });
  };

  const handlePause = () => {
    setStart("isVisible");
    setPause("isHidden");
    setStop("isVisible");
  };

  const handleStop = () => {
    client
      .mutate({
        mutation: END_WORKOUT,
        variables: {
          userId: userData.user_id,
          workoutId: workout.id,
          exerciseId: exercises[0].id,
          exerciseTimer: exercises[0].time,
          end: true
        }
      })
      .then(res => {
        setStart("isVisible");
        setPause("isHidden");
        setStop("isHidden");
        alert("Workout ended", "🏋🏾‍♀️", "success");
      })
      .catch(error => {
        alert("An error occurred.", "Unable to start workout ☹️", "error");
      });
  };
  return (
    <StyledWorkoutItems>
      <Button
        rightIcon={FaCircle}
        variantColor="blue"
        variant="outline"
        size="md"
      >
        Schedule
      </Button>

      <Button
        rightIcon={FaPlayCircle}
        variantColor="green"
        variant="solid"
        size="md"
        className={start}
        onClick={handleStart}
      >
        Start
      </Button>

      <Button
        rightIcon={FaPause}
        variantColor="orange"
        variant="outline"
        size="md"
        className={pause}
        onClick={handlePause}
      >
        Pause
      </Button>

      <Button
        rightIcon={FaStopCircle}
        variantColor="red"
        variant="outline"
        size="md"
        className={stop}
        onClick={handleStop}
      >
        Stop
      </Button>
      {/* </ButtonGroup> */}
      {/* <Timer time={20}/> */}
    </StyledWorkoutItems>
  );
};

export default withApollo(WorkoutActionItems);
