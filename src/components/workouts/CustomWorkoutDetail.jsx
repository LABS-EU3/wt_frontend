import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as yup from "yup";
import { Redirect, useRouteMatch } from "react-router-dom";
import {
  Flex,
  Box,
  useToast,
  InputGroup,
  Input,
  InputLeftElement,
  Select,
  Stack
} from "@chakra-ui/core";
import { CustomWorkoutStyleDetail } from "./WorkoutStyle";
import CustomSpinner from "./../common/Spinner";
import {
  GET_WORKOUT_DETAIL,
  EXERCISES_BY_FIELDS
} from "./../../graphql/queries";
import { useDebounce } from "./../../utils/index";

const CustomWorkoutDetail = ({ client }) => {
  const [workout, setWorkout] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const match = useRouteMatch();
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
    initialValues: {
      name: "",
      description: "",
      intensity: "",
      selectExercise: "",
      exercises: []
    },
    /*validationSchema: yup.object().shape({
      email: yup
        .string()
        .email()
        .required("Please enter your email"),
      password: yup
        .string()
        .required("Please enter your password")
        .min(8, "Must be minimum 8 characters")
    }),*/
    handleChange: (p1, p2) => {
      console.log(p1, p2);
    },
    onSubmit: value => {
      setIsLoading(true);
      // client.query
    }
  });

  useEffect(() => {
    client
      .query({
        query: GET_WORKOUT_DETAIL,
        variables: {
          id: match.params.id
        }
      })
      .then(({ data: { workout } }) => {
        setWorkout(workout);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
        setError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const exerciseSearch = useDebounce(formik.values.selectExercise, 700);
  useEffect(() => {
    if (exerciseSearch) {
      client
        .query({
          query: EXERCISES_BY_FIELDS,
          variables: {
            search: exerciseSearch,
            fields: ["name"]
          }
        })
        .then(({ data: { exercises } }) => {
          console.log(exercises);
          setExercises(exercises);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
          setError(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseSearch]);

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
      <form onSubmit={formik.onSubmit}>
        <Stack spacing={4}>
          <InputGroup>
            {/* <InputLeftElement children="Name" /> */}
            <Input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              bg="#FFFCF2"
              variant="flushed"
              _hover="black"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.name}
            />
          </InputGroup>
          <InputGroup>
            {/* <InputLeftElement children="Description" /> */}
            <Input
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.description}
              variant="flushed"
              _hover="black"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.description}
            />
          </InputGroup>
          <InputGroup>
            {/* <InputLeftElement children="Description" /> */}
            <Select
              id="intensity"
              name="intensity"
              onChange={formik.handleChange}
              value={formik.values.intensity}
              variant="flushed"
              _hover="black"
              focusBorderColor="#FF8744"
              errorBorderColor="crimson"
              error={formik.errors.intensity}
            >
              <option value="">Select intensity...</option>
              <option value="Low">Low</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </Select>
          </InputGroup>
          <Input
            id="selectExercise"
            name="selectExercise"
            placeholder="Add an exercise to this workout!"
            onChange={formik.handleChange}
            value={formik.values.selectExercise}
            variant="flushed"
            color="white"
            focusBorderColor="#FF8744"
            errorBorderColor="crimson"
            error={formik.errors.selectExercise}
            backgroundColor="#FF8744"
            borderColor="#FF8744"
          />
          <div className="search-results">
            {exercises.map(exercise => (
              <p key={exercise.id}>{exercise.name}</p>
            ))}
          </div>
        </Stack>
      </form>
    </CustomWorkoutStyleDetail>
  );
};

// adding proptypes
CustomWorkoutDetail.propTypes = {
  client: PropTypes.object.isRequired
};

export default withApollo(CustomWorkoutDetail);
