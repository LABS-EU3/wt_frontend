import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, useToast } from "@chakra-ui/core";
import { FaPlayCircle, FaStopCircle, FaCircle, FaPause } from "react-icons/fa";
import styled from "styled-components";
import { withApollo } from "react-apollo";
import Timer from "../common/Timer";

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

const WorkoutActionItems = ({ exercises }) => {
  console.log(exercises);
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
    setStart("isHidden");
    setPause("isVisible");
    setStop("isVisible");
  };

  const handlePause = () => {
    setStart("isVisible");
    setPause("isHidden");
    setStop("isVisible");
  };

  const handleStop = () => {
    setStart("isVisible");
    setPause("isHidden");
    setStop("isHidden");
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
