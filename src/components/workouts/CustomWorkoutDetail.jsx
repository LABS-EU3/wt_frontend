import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as yup from "yup";
import { Redirect, useRouteMatch } from "react-router-dom";
import {
  Flex,
  Box,
  Button,
  useToast,
  InputGroup,
  Input,
  Textarea,
  Select,
  Stack,
  Heading
} from "@chakra-ui/core";
import { CustomWorkoutStyleDetail } from "./WorkoutStyle";
import CustomSpinner from "./../common/Spinner";
import {
  GET_WORKOUT_DETAIL,
  EXERCISES_BY_FIELDS
} from "./../../graphql/queries";
import { UPSERT_CUSTOM_WORKOUT } from "./../../graphql/mutations";
import { useDebounce } from "./../../utils/index";

const CustomWorkoutDetail = ({ client, history }) => {
  const [workout, setWorkout] = useState({});
  const [exercises, setExercises] = useState([]);
  const [searchExercise, setSearchExercise] = useState("");
  const [selectedExercises, setSelectedExercises] = useState(
    workout.exercises ? workout.exercises.map(e => e.id) : []
  );
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const match = useRouteMatch();
  const workoutId = match.params.id;
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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: workout.name || "",
      description: workout.description || "",
      intensity: workout.intensity || ""
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .min(4)
        .required("Please enter the name of the workout!"),
      description: yup
        .string()
        .min(50)
        .required("Please enter the description of the workout!"),
      intensity: yup
        .string()
        .required("Please enter the intensity of this workout!")
    }),
    onSubmit: values => {
      setIsLoading(true);
      client
        .mutate({
          mutation: UPSERT_CUSTOM_WORKOUT,
          variables: {
            ...values,
            workoutId: workoutId === "new" ? null : workoutId,
            exercises: selectedExercises
          }
        })
        .then(res => {
          console.log(res);
          alert("Success!", "Your custom workout was created!", "success");
          history.push("/workouts");
          window.location.reload();
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
          setError(true);
        });
    }
  });

  const toggleExercise = id => e => {
    console.log("toggleExercise", id, selectedExercises.includes(id));
    if (selectedExercises.includes(id)) {
      setSelectedExercises(ex => ex.filter(ex_id => ex_id !== id));
    } else {
      setSelectedExercises(ex => [...ex, id]);
    }
  };

  const removeExercise = id => e => {
    setSelectedExercises(ex => ex.filter(ex_id => ex_id !== id));
  };

  let exerciseSearch = useDebounce(searchExercise, 700);

  const resetSearch = e => {
    setSearchExercise(s => "");
  };

  useEffect(() => {
    let promises = [];
    if (workoutId !== "new") {
      promises = [
        client.query({
          query: GET_WORKOUT_DETAIL,
          variables: {
            id: workoutId
          }
        }),
        client.query({
          query: EXERCISES_BY_FIELDS,
          variables: {
            search: exerciseSearch,
            fields: ["name"]
          }
        })
      ];
      Promise.all(promises)
        .then(([workoutRes, exercisesRes]) => {
          setWorkout(workoutRes.data.workout);
          setExercises(exercisesRes.data.exercises);
          setSelectedExercises(
            workoutRes.data.workout.exercises.map(e => e.id)
          );
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
          setError(true);
        });
    } else {
      client
        .query({
          query: EXERCISES_BY_FIELDS,
          variables: {
            search: exerciseSearch,
            fields: ["name"]
          }
        })
        .then(exercisesRes => {
          setExercises(exercisesRes.data.exercises);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
          setError(true);
        });
    }
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
    alert(
      "An error occurred.",
      "Unable to load custom workout detail",
      "error"
    );
    return <Redirect to="/workouts" />;
  }

  return (
    <CustomWorkoutStyleDetail>
      <Heading className="cw-title" textAlign="left">
        {match.params.id !== "new" ? "Edit workout" : "Create workout"}
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4}>
          <InputGroup>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="NAME"
              onChange={formik.handleChange}
              value={formik.values.name}
              bg="#FFFCF2"
              variant="flushed"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.name}
            />
          </InputGroup>
          <Textarea
            id="description"
            name="description"
            type="text"
            placeholder="DESCRIPTION"
            onChange={formik.handleChange}
            value={formik.values.description}
            variant="flushed"
            bg="#FFFCF2"
            focusBorderColor="#FF8744"
            onBlur={formik.handleBlur}
            errorBorderColor="crimson"
            error={formik.errors.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <span className="error">{formik.errors.description}</span>
          ) : null}
          <InputGroup>
            <Select
              id="intensity"
              name="intensity"
              placeholder="Select intensity..."
              onChange={formik.handleChange}
              value={formik.values.intensity}
              variant="flushed"
              bg="#FFFCF2"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.intensity}
            >
              <option value="Low">Low</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </Select>
          </InputGroup>
          <div className="list-exercises">
            <Heading size="md" textAlign="left">
              Exercises
            </Heading>
            <div className="search-exercises">
              <Input
                id="searchExercise"
                name="searchExercise"
                placeholder="SEARCH AND ADD EXERCISES"
                onChange={e => setSearchExercise(e.target.value)}
                value={searchExercise}
                variant="flushed"
                bg="#FFFCF2"
                focusBorderColor="#FF8744"
                autoComplete="off"
              />
              <div className="search-results" onMouseLeave={resetSearch}>
                {exerciseSearch
                  ? exercises
                      .filter(e => e.name.includes(exerciseSearch))
                      .map(exercise => (
                        <p
                          key={exercise.id}
                          id={exercise.id}
                          onClick={toggleExercise(exercise.id)}
                          className={
                            selectedExercises.includes(exercise.id)
                              ? "selected"
                              : ""
                          }
                        >
                          {exercise.name} - {exercise.type} -{" "}
                          {exercise.difficulty}
                        </p>
                      ))
                  : null}
              </div>
            </div>
            {selectedExercises.map(id => {
              const exercise = exercises.find(e => e.id === id);
              return (
                <p key={`list_${id}`}>
                  {exercise.name} - {exercise.type} - {exercise.difficulty}
                  <Button
                    size="sm"
                    onClick={removeExercise(id)}
                    leftIcon="close"
                    variant="outline"
                    variantColor="red"
                  >
                    Remove
                  </Button>
                </p>
              );
            })}
          </div>
        </Stack>
        <Button
          type="submit"
          className="cw-submit-btn"
          variantColor="orange"
          rightIcon="arrow-forward"
          size="lg"
          isLoading={isLoading}
        >
          Submit
        </Button>
      </form>
    </CustomWorkoutStyleDetail>
  );
};

// adding proptypes
CustomWorkoutDetail.propTypes = {
  client: PropTypes.object.isRequired
};

export default withApollo(CustomWorkoutDetail);
