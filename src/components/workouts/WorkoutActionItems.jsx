import React, { useState, useEffect } from "react";
import { Button, useToast } from "@chakra-ui/core";
import { FaPlayCircle, FaStopCircle, FaCircle, FaPause } from "react-icons/fa";
import styled from "styled-components";
import { withApollo } from "react-apollo";
// import Timer from "../common/Timer";
import {
  Box,
  Flex,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody
} from "@chakra-ui/core";

import {
  HistoryStyle,
  ModalFooter as StyledModalFooter,
  ModalContentArea
} from "./WorkoutHistoryStyle";

import { START_WORKOUT, END_WORKOUT } from "../../graphql/mutations";
import { getUserDetails } from "../../utils";

const userData = getUserDetails();

const StyledWorkoutItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  /* position: sticky;
  top: 0; */

  button {
    margin: 1rem;
  }
  .isHidden {
    display: none;
  }

  .isVisible {
    display: flex;
  }
`;

const WorkoutActionItems = ({ client, exercises, workout }) => {
  const toast = useToast();
  const [start, setStart] = useState("isVisible");
  const [pause, setPause] = useState("isHidden");
  const [stop, setStop] = useState("isHidden");
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStart = () => {
    client
      .mutate({
        mutation: START_WORKOUT,
        variables: {
          userId: userData.user_id,
          workoutId: workout.id,
          exerciseId: exercises[0].id,
          exerciseTimer: exercises[0].time
        }
      })
      .then(res => {
        setStart("isHidden");
        setPause("isVisible");
        setStop("isVisible");
        alert("Workout started", "🏋🏾‍♀️", "success");
      })
      .catch(error => {
        console.log(error);
        alert("An error occurred.", "Unable to start workout ☹️", "error");
      });
  };

  const handlePause = () => {
    setStart("isVisible");
    setPause("isHidden");
    setStop("isVisible");
  };

  const handleStop = () => {
    client
      .mutate({
        mutation: END_WORKOUT,
        variables: {
          userId: userData.user_id,
          workoutId: workout.id,
          exerciseId: exercises[0].id,
          exerciseTimer: exercises[0].time,
          end: true
        }
      })
      .then(res => {
        setStart("isVisible");
        setPause("isHidden");
        setStop("isHidden");
        alert("Workout ended", "🏋🏾‍♀️", "success");
      })
      .catch(error => {
        alert("An error occurred.", "Unable to stop workout ☹️", "error");
      });
  };

  const scheduleWorkout = () => {};

  return (
    <StyledWorkoutItems>
      <Button
        rightIcon={FaCircle}
        variantColor="blue"
        variant="outline"
        size="md"
        onClick={onOpen}
      >
        Schedule
      </Button>

      <Button
        rightIcon={FaPlayCircle}
        variantColor="green"
        variant="solid"
        size="md"
        className={start}
        onClick={handleStart}
      >
        Start
      </Button>

      <Button
        rightIcon={FaPause}
        variantColor="orange"
        variant="outline"
        size="md"
        className={pause}
        onClick={handlePause}
      >
        Pause
      </Button>

      <Button
        rightIcon={FaStopCircle}
        variantColor="red"
        variant="outline"
        size="md"
        className={stop}
        onClick={handleStop}
      >
        Stop
      </Button>
      {/* </ButtonGroup> */}
      {/* <Timer time={20}/> */}
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload your progress picture </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalContentArea>
              <div className="calendar">
                <div className="routine">
                  <p>Set as routine</p>

                  <select name="" id="">
                    <option value="No">No</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                </div>

                <div className="notification">
                  <p>
                    Notification{" "}
                    <input
                      type="number"
                      name="notif"
                      placeholder="10"
                      value="10"
                    />
                  </p>

                  <select name="" id="">
                    <option value="Mins">Mins</option>
                    <option value="Hours">Hours</option>
                  </select>
                </div>
              </div>

              <div className="time">Time goes here</div>
            </ModalContentArea>
          </ModalBody>
          <ModalFooter>
            <StyledModalFooter>
              <Button variantColor="green" onClick={scheduleWorkout}>
                Save
              </Button>
              <Button
                variantColor="orange"
                variant="outline"
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
            </StyledModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </StyledWorkoutItems>
  );
};

export default withApollo(WorkoutActionItems);
