import React from "react";
import { Button, Flex, Box, Image } from "@chakra-ui/core";

import Logo from "../images/login_image.png";

function WorkoutHistoryCard({ workout, onOpen }) {
  const completed = workout.completed ? "COMPLETED" : "IN PROGRESS";
  const viewDetails = workout.completed ? "View Details" : "Complete Workout";

  const style = {
    display: "flex",
    flexDirection: "column",
    marginRight: "180px",
    alignItems: "flex-start"
  };

  return (
    <>
      <Box w="100%" onClick={onOpen} style={{ marginBottom: "30px" }}>
        <Flex justify="space-between">
          <Image src={Logo} alt="workout thumbnail" size="100px" />
          <section style={style}>
            <p>
              {workout.dateCompleted} - {completed}
            </p>
            <p>{workout.name}</p>
            <p>
              {workout.intensity} {workout.duration} Time taken:{" "}
              {workout.timeTaken}
            </p>
          </section>
          <Button variantColor="orange" width="200px">
            {viewDetails}
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default WorkoutHistoryCard;
