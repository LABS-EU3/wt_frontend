import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import { useToast, Box, Flex, Button } from "@chakra-ui/core";

import { ExercisesStyle } from "./ExerciseStyle";
import CustomSpinner from "../common/Spinner";
import { GET_EXERCISES, EXERCISES_BY_FIELDS } from "../../graphql/queries";
import Exercise from "./Exercise";

const Exercises = ({ client, exerciseQuery, exerciseName }) => {
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [limitedExercises, setLimitedExercises] = useState([]);
  const [limit, setLimit] = useState(3);

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
    let promise;
    if (exerciseQuery === "RECOMENDED_EXERCISES") {
      promise = client.query({
        query: EXERCISES_BY_FIELDS,
        variables: {
          search: "Beginner",
          fields: ["difficulty"]
        }
      });
    } else if (exerciseQuery === "TOP_RATED_EXERCISES") {
      promise = client.query({
        query: EXERCISES_BY_FIELDS,
        variables: {
          search: "9",
          fields: ["id", "rating", "name", "pictureOne", "equipment"]
        }
      });
    } else {
      promise = client.query({
        query: GET_EXERCISES
      });
    }

    promise
      .then(res => {
        let limitExercises = res.data.exercises.slice(0, limit);

        if (exerciseQuery === "TOP_RATED_EXERCISES") {
          limitExercises = limitExercises.sort(
            (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
          );
        }

        setExercises(res.data.exercises);
        // limitExercises = res.data.exercises.slice(0, limit);
        setLimitedExercises(limitExercises);
        setLoading(false);
      })
      .catch(err => {
        alert("An error occurred.", "Unable to load exercises", "error");
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = () => {
    const newLimit = limit + 3;
    let limitExercises = exercises.slice(0, newLimit);

    if (exerciseQuery === "TOP_RATED_EXERCISES") {
      limitExercises = limitExercises.sort(
        (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
      );
    }
    setLimitedExercises(limitExercises);
    setLimit(newLimit);
  };

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

  if (limitedExercises.length > 0) {
    return (
      <ExercisesStyle>
        <h3>{exerciseName}</h3>
        {limitedExercises.map(exercise => (
          <Exercise exercise={exercise} key={exercise.id} />
        ))}

        <div className="load-more">
          <Button onClick={loadMore}>Load More</Button>
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
