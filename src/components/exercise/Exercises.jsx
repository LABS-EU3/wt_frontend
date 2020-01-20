import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import { useToast, Box, Flex, Button } from "@chakra-ui/core";

import { ExercisesStyle } from "./ExerciseStyle";
import CustomSpinner from "../common/Spinner";
import { GET_EXERCISES } from "../../graphql/queries";
import Exercise from "./Exercise";

const Exercises = ({ client }) => {
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [limitedExercises, setLimitedExercises] = useState([]);

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
    setLoading(true);
    client
      .query({
        query: GET_EXERCISES
      })
      .then(res => {
        setExercises(res.data.exercises.slice(0, 3));
        // const arr = res.data.exercises.slice(0, 10);
        // console.log(arr)

        setLoading(false);
      })
      .catch(err => {
        alert("An error occurred.", "Unable to load exercises", "error");
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
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

  if (exercises.length > 0) {
    return (
      <ExercisesStyle>
        {exercises.map(exercise => (
          <Exercise exercise={exercise} key={exercise.id} />
        ))}

        <div className="load-more">
          <Button variantColor="#ff8744">Load More</Button>
        </div>
      </ExercisesStyle>
    );
  }

  return (
    <Box>
      <Flex width="100vw" height="100vh" justifyContent="center" align="center">
        <CustomSpinner thickness="6px" size="xl" text="Loading..." />
      </Flex>
    </Box>
  );
};

export default withApollo(Exercises);
