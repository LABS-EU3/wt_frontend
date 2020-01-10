import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/core";
import { FaPlayCircle, FaStopCircle, FaCircle, FaPause } from "react-icons/fa";

const WorkoutActionItems = ({}) => {
  return (
    <div>
      <ButtonGroup spacing={4} textAlign="left" marginY="30px">
        <Button
          rightIcon={FaCircle}
          variantColor="blue"
          variant="outline"
          size="lg"
        >
          Schedule
        </Button>

        <Button
          rightIcon={FaPause}
          variantColor="orange"
          variant="outline"
          size="lg"
        >
          Pause
        </Button>

        <Button
          rightIcon={FaPlayCircle}
          variantColor="green"
          variant="solid"
          size="lg"
        >
          Start
        </Button>
        <Button
          rightIcon={FaStopCircle}
          variantColor="red"
          variant="outline"
          size="lg"
        >
          Stop
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default WorkoutActionItems;
