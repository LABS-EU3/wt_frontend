import React, { useState, useEffect } from "react";
import { Flex, SimpleGrid, Box, Button } from "@chakra-ui/core";
import { withApollo } from "react-apollo";

import WorkoutCard from "./WorkoutCard";
import CustomSpinner from "../common/Spinner";

import { GET_WORKOUT_DETAILS } from "../../graphql/queries";
import DetailList from "./DetailList";
import SideTitle from "../common/SideTitle";

function WorkoutList({ client }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    client
      .query({
        query: GET_WORKOUT_DETAILS
      })
      .then(res => {
        setData(res.data.workouts);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  if (isLoading) {
    return (
      <Box>
        <Flex
          width="100vw"
          height="100vh"
          justifyContent="center"
          align="center"
        >
          <CustomSpinner thickness="6px" size="xl" text="Loading..." />
        </Flex>
      </Box>
    );
  }
  return (
    <Box>
      <SimpleGrid columns={3} spacingX={5}>
        {/* {data.map(item => (
        <WorkoutCard key={item.id} data={data} />
      ))} */}
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
      <Button marginY="50px" variantColor="orange" size="lg">
        View More
      </Button>
      <SideTitle heading="Workout" subheading="my work" />
    </Box>
  );
}

export default withApollo(WorkoutList);
