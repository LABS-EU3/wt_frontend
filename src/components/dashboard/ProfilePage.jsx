import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Heading,
  Avatar,
  useToast,
  Button,
  useDisclosure
} from "@chakra-ui/core";
import {
  IoIosPerson,
  IoIosMail,
  IoIosFitness,
  IoIosTrendingUp
} from "react-icons/io";

import { StyledProfile } from "./StyledProfile";

import Streak from "../common/Streak";
import { GET_USER_DETAILS } from "../../graphql/queries";
import { GET_COMPLETED_WORKOUTS } from "../../graphql/queries";
import CustomSpinner from "../common/Spinner";
import ModalPopup from "../common/ModalPopup";
import EditProfile from "../common/EditProfile";
// import WorkoutHistoryCard from "../workouts/WorkoutHistoryCard";

const ProfilePage = ({ client, history, workout }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [workouts, setWorkouts] = useState([]);

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  const handleSave = () => {};

  useEffect(() => {
    client
      .query({
        query: GET_COMPLETED_WORKOUTS
      })
      .then(res => {
        setWorkouts(res.data.completedWorkouts);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        alert(
          "An error occurred.",
          "Unable to load your completed workouts☹️.",
          "error"
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    client
      .query({
        query: GET_USER_DETAILS
      })
      .then(res => {
        setUserData(res.data.user);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        alert("An error occurred.", "Unable to load", "error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

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

  return (
    <StyledProfile>
      <div className="dashboard-content">
        <div className="user-detail">
          <Button variant="link" variantColor="orange" onClick={onOpen}>
            Edit Profile
          </Button>
          <ModalPopup isOpen={isOpen} onClose={onClose} title="Edit Profile">
            <EditProfile
              data={userData}
              setUserData={setUserData}
              onSave={handleSave}
              onClose={onClose}
            />
          </ModalPopup>

          <Box>
            <Flex paddingY="30px" alignItems="center">
              <Box as={IoIosPerson} size="50px" />
              <Box textAlign="left" paddingLeft="20px">
                <p className="title">Name</p>
                <p className="content">{`${
                  userData.firstname ? userData.firstname : ""
                } ${userData.lastname ? userData.lastname : ""}`}</p>
              </Box>
            </Flex>
            <Flex paddingY="30px" alignItems="center">
              <Box as={IoIosMail} size="50px" />
              <Box textAlign="left" paddingLeft="20px">
                <p className="title">Email</p>
                <p className="content">{userData.email}</p>
              </Box>
            </Flex>
            <Flex paddingY="30px" alignItems="center">
              <Box as={IoIosFitness} size="50px" />
              <Box textAlign="left" paddingLeft="20px">
                <p className="title">Weight</p>
                <p className="content">
                  {userData.weight
                    ? `${userData.weight} ${userData.weightUnit.name}`
                    : "none"}
                </p>
              </Box>
            </Flex>
            <Flex paddingY="30px" alignItems="center">
              <Box as={IoIosTrendingUp} size="50px" />
              <Box textAlign="left" paddingLeft="20px">
                <p className="title">Height</p>
                <p className="content">
                  {userData.height
                    ? `${userData.height} ${userData.heightUnit.name}`
                    : "none"}
                </p>
              </Box>
            </Flex>

            <Flex paddingY="30px" alignItems="center">
              <Streak streak={userData.streak} position="relative" />
            </Flex>
          </Box>
        </div>

        <div className="dasboard-detail profile-detail">
          <section className="quotes">
            <Avatar src={userData.photo} size="2xl" marginBottom="20px" />
            <Heading>{`${userData.firstname ? userData.firstname : ""} ${
              userData.lastname ? userData.lastname : ""
            }`}</Heading>
          </section>

          <section className="goal">
            <p>Recent Activity</p>
            <div className="workout-history">
              {workouts.map(workout => (
                <div key={workout.id} className="profile-workouts">
                  <div
                    className="workout-history-content"
                    id="profile-workout-history-name"
                  >
                    <p>{workout.workoutId.name} </p>
                    <Link to={`/workout/${workout.workoutId.id}`}>
                      <p className="link">View Details</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </StyledProfile>
  );
};

export default withApollo(ProfilePage);
