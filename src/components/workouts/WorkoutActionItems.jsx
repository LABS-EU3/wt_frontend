import React, { useState, useEffect } from "react";
import { Button, useToast } from "@chakra-ui/core";
import { FaPlayCircle, FaStopCircle, FaCircle, FaPause } from "react-icons/fa";
import styled from "styled-components";
import { withApollo } from "react-apollo";
import Timer from "../common/Timer";

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

import {
  START_WORKOUT,
  PAUSE_WORKOUT,
  END_WORKOUT
} from "../../graphql/mutations";
import { getUserDetails } from "../../utils";

const userData = getUserDetails();

const StyledWorkoutItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;
  align-items: center;

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

const WorkoutActionItems = ({
  client,
  workout,
  timerExercise,
  setTimerExercise,
  getExerciseIndexById
}) => {
  const toast = useToast();
  const [start, setStart] = useState("isVisible");
  const [pause, setPause] = useState("isHidden");
  const [stop, setStop] = useState("isHidden");
  const [reminder, setReminder] = useState("10");
  const [routine, setRoutine] = useState("No");
  const [date, setDate] = useState(false);
  const [time, setTime] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currTime, setCurrTime] = useState(0); // used on timer component

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  const getCurrentExercise = () => {
    return workout.exercises[getExerciseIndexById(timerExercise)];
  };

  const handleStart = () => {
    const currentExercise = getCurrentExercise();
    client
      .mutate({
        mutation: START_WORKOUT,
        variables: {
          userId: userData.user_id,
          workoutId: workout.id,
          exerciseId: currentExercise.id,
          exerciseTimer: currTime
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
    const currentExercise = getCurrentExercise();
    setStart("isVisible");
    setPause("isHidden");
    setStop("isVisible");
    client
      .mutate({
        mutation: PAUSE_WORKOUT,
        variables: {
          userId: userData.user_id,
          workoutId: workout.id,
          exerciseId: currentExercise.id,
          exerciseTimer: currTime,
          pause: true
        }
      })
      .then(res => {
        alert("Workout paused!", "🏋🏾‍♀️", "success");
      })
      .catch(error => {
        console.log(error);
        alert("An error occurred.", "Unable to pause workout ☹️", "error");
      });
  };

  const handleStop = () => {
    const currentExercise = getCurrentExercise();
    setStart("isVisible");
    setPause("isHidden");
    setStop("isHidden");
    client
      .mutate({
        mutation: END_WORKOUT,
        variables: {
          userId: userData.user_id,
          workoutId: workout.id,
          exerciseId: currentExercise.id,
          exerciseTimer: currentExercise.time,
          end: true
        }
      })
      .then(res => {
        setCurrTime(currTime => 0);
        setTimerExercise(workout.exercises[0].id);
        alert("Workout ended!", "🏋🏾‍♀️", "success");
      })
      .catch(error => {
        console.log(error);
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

  useEffect(() => {
    let updateTimer;
    const currentExercise = getCurrentExercise();
    if (start === "isHidden") {
      if (currTime <= currentExercise.time) {
        updateTimer = setTimeout(() => {
          setCurrTime(currTime => currTime + 1);
        }, 100);
      } else {
        clearTimeout(updateTimer);
        const currIndex = getExerciseIndexById(timerExercise);
        if (currIndex < workout.exercises.length - 1) {
          // go to next exercise
          setTimerExercise(workout.exercises[currIndex + 1].id);
          // continue timer
          setCurrTime(currTime => 0);
        } else {
          handleStop();
        }
      }
    } else {
      clearTimeout(updateTimer);
    }
    return () => clearTimeout(updateTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerExercise, start, pause, stop, currTime]);

  useEffect(() => {
    if (workout.session) {
      setStart(workout.session.startDate ? "isVisible" : "isHidden");
      setPause(workout.session.endDate ? "isVisible" : "isHidden");
      setStop(workout.session.pause ? "isVisible" : "isHidden");
    }
    // pause workout if you exit the page while workout session is running
    return handlePause;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let scrollTimeout;
    if (workout && workout.exercises && start === "isHidden") {
      const accordionItem = document.getElementById(
        `accordion-header-${timerExercise}`
      );
      if (accordionItem) {
        scrollTimeout = setTimeout(function() {
          const yOffset = -72;
          const y =
            accordionItem.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 250);
      }
    }
    return () => clearInterval(scrollTimeout);
  }, [start, timerExercise, workout]);

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

      <Timer time={currTime} />

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
