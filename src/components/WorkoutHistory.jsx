import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import {
  Box,
  Flex,
  useToast,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Button,
  Progress
} from "@chakra-ui/core";

import CustomSpinner from "./common/Spinner";
import WorkoutHistoryCard from "./WorkoutHistoryCard";
import HistoryStyle from "./WorkoutHistoryStyle";

const dummyData = [
  {
    id: 1,
    dateCompleted: "12-12-19",
    name: "Full Body Workout",
    timeTaken: "1hr",
    duration: "20min",
    intensity: "beginner",
    completed: false
  },
  {
    id: 2,
    dateCompleted: "12-12-19",
    name: "Full Body Workout",
    timeTaken: "1hr",
    duration: "20min",
    intensity: "beginner",
    completed: true
  },
  {
    id: 3,
    dateCompleted: "12-12-19",
    name: "Full Body Workout",
    timeTaken: "1hr",
    duration: "20min",
    intensity: "beginner",
    completed: true
  }
];

function WorkoutHistory(client, history) {
  const toast = useToast();
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const alert = (title, description, status) => {
  //     toast({
  //       title,
  //       description,
  //       status,
  //       duration: 9000,
  //       isClosable: true
  //     });
  // };

  // useEffect(() => {
  //     client
  //   .query({
  //     query: "GET_WORKOUTS"
  //   })
  //   .then(res => {
  //     setWorkouts(res.data);
  //     setIsLoading(false);
  //   })
  //   .catch(() => {
  //     setIsLoading(false);
  //     alert(
  //       "An error occurred.",
  //       "Unable to load your completed workouts. Please reload the page and try again",
  //       "error"
  //     );
  //   });
  // })

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
  } else if (dummyData.length === 0) {
    return (
      <HistoryStyle>
        <header>
          <Heading>Your Workout History</Heading>
          <p>Check out all your completed workouts!</p>
          <p>You can upload progress pictures and track your development!</p>
        </header>
        <Heading as="h3">Sorry, you have no completed workouts</Heading>
      </HistoryStyle>
    );
  } else {
    return (
      <HistoryStyle>
        <header>
          <Heading>Your Workout History</Heading>
          <p>Check out all your completed workouts!</p>
          <p>You can upload progress pictures and track your development!</p>
        </header>

        {dummyData.map(workout => (
          <WorkoutHistoryCard
            onOpen={onOpen}
            key={workout.id}
            workout={workout}
          />
        ))}

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload your progress picture </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Progress />
              <Box
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                overflow="hidden"
                height="150px"
              >
                Drag files here or browse
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button variant="orange">Save</Button>
              <Button
                variantColor="orange"
                variant="outline"
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </HistoryStyle>
    );
  }
}

export default WorkoutHistory; //withApollo(WorkoutHistory);
