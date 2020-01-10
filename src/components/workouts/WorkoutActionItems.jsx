import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/core";
import { FaPlayCircle, FaStopCircle, FaCircle, FaPause } from "react-icons/fa";
import styled from "styled-components";

const StyledWorkoutItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WorkoutActionItems = ({}) => {
  return (
    <StyledWorkoutItems>
      <ButtonGroup spacing={4} textAlign="left" marginY="30px">
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
        >
          Start
        </Button>

        <Button
          rightIcon={FaPause}
          variantColor="orange"
          variant="outline"
          size="md"
        >
          Pause
        </Button>

        <Button
          rightIcon={FaStopCircle}
          variantColor="red"
          variant="outline"
          size="md"
        >
          Stop
        </Button>
      </ButtonGroup>
    </StyledWorkoutItems>
  );
};

export default WorkoutActionItems;
