import React from "react";
import { Button, Flex, Box, Image } from "@chakra-ui/core";

import Logo from "../images/login_image.png";

function WorkoutHistoryCard({ workout, onOpen }) {
  const dateCompleted = new Date(workout.endDate).toLocaleDateString();

  const style = {
    display: "flex",
    flexDirection: "column",
    marginRight: "250px",
    alignItems: "flex-start"
  };

  return (
    <>
      <Box
        w="100%"
        onClick={onOpen}
        marginBottom="30px"
        border="1px solid grey"
        padding="10px 20px"
        borderRadius="5px"
      >
        <Flex justify="space-between">
          <Image src={Logo} alt="workout thumbnail" size="100px" />
          <section style={style}>
            <p>
              {dateCompleted} -{" "}
              <strong style={{ color: "green" }}>COMPLETED</strong>
            </p>
            <p>{workout.name}</p>
            <p>{workout.workoutId.intensity}</p>
            <p>{workout.workoutId.avgTime}</p>
          </section>
          <Button variantColor="orange" marginTop="30px">
            View Details
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default WorkoutHistoryCard;
