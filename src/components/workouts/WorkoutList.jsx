import React, { useState, useEffect } from "react";
import WorkoutCard from "./WorkoutCard";
import { Stack, Flex, SimpleGrid } from "@chakra-ui/core";

function WorkoutList() {
  // const [data, setData] = useState()
  // const [isLoading, setIsLoading] =
  return (
    <SimpleGrid columns={3} spacingX={5}>
      <WorkoutCard
        name="Total Body Strength Workout"
        intensity="beginner"
        type="chest"
      />
      <WorkoutCard
        name="Total Body Strength Workout"
        intensity="beginner"
        type="chest"
      />
      <WorkoutCard
        name="Total Body Strength Workout"
        intensity="beginner"
        type="chest"
      />
    </SimpleGrid>
  );
}

export default WorkoutList;
