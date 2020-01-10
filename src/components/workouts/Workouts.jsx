import React, { useEffect, useState } from "react";
import { Box, Button, Flex, useToast } from "@chakra-ui/core";
import { withApollo } from "react-apollo";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { GET_WORKOUT_DETAILS } from "../../graphql/queries";
import CustomSpinner from "../common/Spinner";
import WorkoutCard from "./Workout";
import { WorkoutsStyle } from "./WorkoutStyle";

function Workouts({ client }) {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  if (error) {
    alert("An error occurred.", "Unable to load workouts", "error");
    return <Redirect to="/" />;
  }
  if (data.length > 0) {
    return (
      <WorkoutsStyle>
        {data.map(item => (
          <WorkoutCard key={item.id} data={item} />
        ))}

        <div className="more">
          <Button marginY="50px" variantColor="orange" size="lg">
            View More
          </Button>
        </div>
      </WorkoutsStyle>
    );
  }

  return (
    <Box>
      <Flex width="100vw" height="100vh" justifyContent="center" align="center">
        <CustomSpinner thickness="6px" size="xl" text="Loading..." />
      </Flex>
    </Box>
  );
}

export default withApollo(Workouts);

Workouts.propTypes = {
  client: PropTypes.object.isRequired
};
