import React, { useState } from "react";
import { Button, useToast } from "@chakra-ui/core";
import { FaPlayCircle, FaStopCircle, FaCircle, FaPause } from "react-icons/fa";
import styled from "styled-components";
import { withApollo } from "react-apollo";
// import Timer from "../common/Timer";

import Calendar from "../common/Calendar";
import Time from "../common/Time";
import { SCHEDULE_WORKOUT } from "../../graphql/mutations";
import {
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
  // HistoryStyle,
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
  const [reminder, setReminder] = useState("10");
  const [routine, setRoutine] = useState("No");
  const [date, setDate] = useState(false);
  const [time, setTime] = useState(false);
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

  const scheduleWorkout = () => {
    let dateTime = `${date} ${time}`;

    const startTime = new Date(dateTime).getTime();
    client
      .mutate({
        mutation: SCHEDULE_WORKOUT,
        variables: {
          startDate: startTime,
          workoutId: workout.id,
          reminderTime: parseInt(reminder),
          routine
        }
      })
      .then(res => {
        onClose();
        alert("Workout scheduled successfully", "🚀", "success");
      })
      .catch(err => alert("Unable to schedule workout", "☹️", "error"));
  };

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
      {/* <Timer time={20}/> */}
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{workout.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalContentArea>
              <div className="schedule">
                <div className="calendar">
                  <Calendar setDate={setDate} />
                </div>

                <div className="time">
                  <Time setTime={setTime} />
                </div>

                <div className="schedule-content">
                  <div className="routine">
                    <p>Set as routine</p>

                    <select
                      onChange={e => setRoutine(e.target.value)}
                      name=""
                      id=""
                    >
                      <option value="no">No</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                    </select>
                  </div>

                  <div className="notification">
                    <p>Notification</p>

                    <input
                      type="number"
                      name="notifificatino"
                      onChange={e => setReminder(e.target.value)}
                      value={reminder}
                      placeholder="10"
                    />
                    <p>mins</p>
                  </div>
                </div>
              </div>
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
