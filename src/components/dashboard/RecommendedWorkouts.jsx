import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Heading,
  useToast,
  Image,
  IconButton
} from "@chakra-ui/core";

import StyledRecomendedWorkout from "./StyledRecomendedWorkout";

import { GET_RECOMMENDED_WORKOUTS } from "../../graphql/queries";

const RecommendedWorkouts = ({ client, history }) => {
  const [workouts, setWorkouts] = useState([]);
  const toast = useToast();

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
        query: GET_RECOMMENDED_WORKOUTS
      })
      .then(res => {
        console.log(res.data.suggestionsByExperience);
        setWorkouts(res.data.suggestionsByExperience);
      })
      .catch(err => {
        alert("An error occurred.", "Unable to load", "error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledRecomendedWorkout>
      {workouts.map((workout, indx) => {
        while (indx < 3) {
          return (
            <Box key={workout.id} width="25%" height="150px">
              <Link to={`/workout/${workout.id}`}>
                <Image
                  src={workout.picture}
                  alt={workout.name}
                  height="120px"
                  width="200px"
                />
                <Heading size="sm" textAlign="left">
                  {workout.name}
                </Heading>
              </Link>
            </Box>
          );
        }
        return null;
      })}
      <Box>
        <Link to="/workouts">
          <IconButton
            variant="outline"
            variantColor="teal"
            aria-label="view more"
            icon="add"
          />
        </Link>
      </Box>
    </StyledRecomendedWorkout>
  );
};

export default withApollo(RecommendedWorkouts);
