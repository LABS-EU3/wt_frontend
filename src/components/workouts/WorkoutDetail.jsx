import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import ReactPlayer from "react-player";

import { WorkoutDetailStyle } from "./WorkoutStyle";
import SideTitle from "../common/SideTitle";
import DetailList from "./DetailList";
import {
  Flex,
  Box,
  Text,
  Stack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  useToast
} from "@chakra-ui/core";

import CustomSpinner from "../common/Spinner";
import { GET_WORKOUT_DETAIL } from "../../graphql/queries";
import { useRouteMatch } from "react-router-dom";
import WorkoutActionItems from "./WorkoutActionItems";

function WorkoutDetail({ client }) {
  const [workout, setWorkout] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timerExercise, setTimerExercise] = useState(null);

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

  const getExerciseIndexById = id => {
    const exerciseIds = Object.values(workout.exercises).map(
      exercise => exercise.id
    );
    return exerciseIds.indexOf(timerExercise);
  };

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
        setTimerExercise(
          workout.session ? workout.session.exerciseId : workout.exercises[0].id
        );
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
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
    alert("An error occurred.", "Unable to load workout detail", "error");
    return <Redirect to="/workouts" />;
  }

  const {
    name,
    intensity,
    types,
    description,
    avgTime,
    equipment,
    muscles,
    exercises,
    picture
  } = workout;

  return (
    <WorkoutDetailStyle>
      <div className="workout">
        <div className="workout-detail">
          <SideTitle heading={name} size="lg" />
          <DetailList label="Average Time" value={avgTime} />
          <DetailList label="Intensity" value={intensity} />
          <DetailList label="Types" value={types} />
          <DetailList label="Equipment" value={equipment} />
          <DetailList label="Muscles" value={muscles} />
          <Text textAlign="left" marginY="30px">
            {description}
          </Text>
        </div>

        <div className="workout-image">
          <img src={picture} alt="workout" />
        </div>
      </div>

      <Heading size="md" marginTop="60px" textAlign="center">
        Check the description and video instructions of an exercise and start
        working out!
      </Heading>

      <WorkoutActionItems
        getExerciseIndexById={getExerciseIndexById}
        setTimerExercise={setTimerExercise}
        timerExercise={timerExercise}
        workout={workout}
      />

      <Accordion index={getExerciseIndexById(timerExercise)}>
        {exercises &&
          exercises.map(exercise => (
            <AccordionItem key={exercise.id} id={exercise.id}>
              <AccordionHeader _expanded={{ bg: "#FFFCF2" }}>
                <div className="exercise-preview">
                  <img src={exercise.pictureOne} alt={exercise.name} />

                  <div className="exercise-preview-detail">
                    <Text fontWeight="800">{exercise.name}</Text>
                    <Stack isInline spacing={8}>
                      <Text>{exercise.muscle}</Text>
                      <Text>{exercise.time}s</Text>
                    </Stack>
                  </div>
                </div>

                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={4}>
                <div className="exercise">
                  <div className="exercise-detail">
                    <Text>{exercise.description}</Text>
                  </div>

                  <div className="exercise-video">
                    <ReactPlayer width="100%" url={exercise.video} controls />
                  </div>
                </div>
              </AccordionPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </WorkoutDetailStyle>
  );
}

//adding proptypes
WorkoutDetail.propTypes = {
  client: PropTypes.object.isRequired
};

export default withApollo(WorkoutDetail);
