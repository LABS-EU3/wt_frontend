import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import { useToast, Box, Flex, Button } from "@chakra-ui/core";
import { Redirect } from "react-router-dom";

import { ExercisesStyle } from "./ExerciseStyle";
import CustomSpinner from "../common/Spinner";
import { GET_EXERCISES, EXERCISES_BY_FIELDS } from "../../graphql/queries";
import Exercise from "./Exercise";

const Exercises = ({ client, exerciseQuery, exerciseName, search }) => {
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [limitedExercises, setLimitedExercises] = useState([]);
  const [limit, setLimit] = useState(3);
  const [error, setError] = useState(false);

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
          search: "Beginner", // get user experience
          fields: ["difficulty"]
        }
      });
    } else if (exerciseQuery === "TOP_RATED_EXERCISES") {
      promise = client.query({
        query: EXERCISES_BY_FIELDS,
        variables: {
          search: "9",
          fields: ["rating"]
        }
      });
    } else if (search.length > 0) {
      promise = client.query({
        query: EXERCISES_BY_FIELDS,
        variables: {
          search,
          fields: ["name", "description"]
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
        setLimitedExercises(limitExercises);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

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

  if (error) {
    alert("An error occurred.", "Unable to load exercises", "error");
    return <Redirect to="/" />;
  }

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

  if (limitedExercises.length < 1) {
    const message = "Ooops! No Exercise currently matches your search ";
    return (
      <ExercisesStyle>
        <div className="header">
          <h3>{message}</h3>
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
