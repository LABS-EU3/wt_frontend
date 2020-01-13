import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { WorkoutDetailStyle } from "./WorkoutStyle";
import SideTitle from "../common/SideTitle";
import DetailList from "./DetailList";
import {
  Flex,
  Box,
  Image,
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
  const [data, setServerData] = useState([]);
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

  useEffect(() => {
    client
      .query({
        query: GET_WORKOUT_DETAIL,
        variables: {
          id: match.params.id
        }
      })
      .then(res => {
        setServerData(res.data.workout);
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
  } = data;

  return (
    <WorkoutDetailStyle>
      <Box marginY="30px">
        <div className="workout">
          <div className="workout-detail">
            {/* <Box maxWidth="40%"> */}
            <SideTitle heading={name} size="lg" />
            <DetailList label="Average Time" value={avgTime} />
            <DetailList label="Intensity" value={intensity} />
            <DetailList label="Types" value={types} />
            <DetailList label="Equipment" value={equipment} />
            <DetailList label="Muscles" value={muscles} />
            <Text textAlign="left" marginY="30px">
              {description}
            </Text>
            {/* </Box> */}
          </div>

          <div className="workout-image">
            <img src={picture} maxWidth="600px" alt="workout" />
          </div>
        </div>

        <Heading size="md" marginTop="60px" textAlign="center">
          Check the description and video instructions of an exercise and start
          working out!
        </Heading>

        <WorkoutActionItems timer={20} exercises={exercises} workout={data} />

        <Accordion defaultIndex={[0]} allowMultiple>
          {exercises &&
            exercises.map(exercise => (
              <AccordionItem key={exercise.id}>
                <AccordionHeader _expanded={{ bg: "#FFFCF2" }}>
                  <Image
                    src={exercise.pictureOne}
                    height="100px"
                    objectFit="cover"
                    minWidth="200px"
                    paddingRight="50px"
                  />
                  <Box flex="1" textAlign="left">
                    <Text fontWeight="800">{exercise.name}</Text>
                    <Stack isInline spacing={8}>
                      <Text>{exercise.muscle}</Text>
                      <Text>{exercise.time}s</Text>
                    </Stack>
                  </Box>

                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  <Flex justifyContent="space-around" alignItems="center">
                    <Text textAlign="left" maxWidth="50%">
                      {exercise.description}
                    </Text>

                    <Box
                      as="video"
                      height="300px"
                      width="100%"
                      maxWidth="400px"
                      controls
                    >
                      <source src={exercise.video} type="video/mp4" />
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            ))}{" "}
        </Accordion>
      </Box>
    </WorkoutDetailStyle>
  );
}

//adding proptypes
WorkoutDetail.propTypes = {
  client: PropTypes.object.isRequired
};

export default withApollo(WorkoutDetail);
