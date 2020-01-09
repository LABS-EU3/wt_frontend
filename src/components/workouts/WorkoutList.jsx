import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";
import PropTypes from "prop-types";

import { GET_WORKOUT_DETAILS } from "../../graphql/queries";
import CustomSpinner from "../common/Spinner";
import WorkoutCard from "./WorkoutCard";

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
        {data.map(item => (
          <WorkoutCard key={item.id} data={item} />
        ))}
      </SimpleGrid>
      <Button marginY="50px" variantColor="orange" size="lg">
        View More
      </Button>
    </Box>
  );
}

//adding proptypes
WorkoutList.propTypes = {
  data: PropTypes.object.isRequired
};

export default withApollo(WorkoutList);
