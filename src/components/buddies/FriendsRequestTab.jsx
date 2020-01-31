import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useToast
} from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";
import { Redirect } from "react-router-dom";
import { MANAGE_FRIENDS } from "../../graphql/mutations";
import { GET_FRIENDS_REQUEST } from "../../graphql/queries";
import CustomSpinner from "../common/Spinner";

const FriendsRequestTab = ({
  client,
  name,
  goal,
  history,
  text,
  profilePicture,
  friendsRequests,
  setFriendsRequests,
  setFriends,
  friends
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
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

  const onClick = e => {
    e.persist();
    client
      .mutate({
        mutation: MANAGE_FRIENDS,
        variables: {
          userId: e.target.id,
          task: e.target.value
        }
      })
      .then(res => {
        if (res.data.manageFriends) {
          setIsLoading(isLoading);
          setFriendsRequests(
            friendsRequests.filter(
              friendsRequest => friendsRequest.id !== e.target.id
            )
          );
          e.target.value === "response_1"
            ? alert(`${e.target.name} is now your Workout Buddy`)
            : alert(`You have rejected ${e.target.name}'s Buddy request`);
        } else alert(`An error occured`);
      })
      .catch(error => {
        setIsLoading(false);
        if (error.graphQLErrors && error.graphQLErrors.length > 0) {
          alert("An error occurred.", error.graphQLErrors[0].message, "error");
        } else {
          alert("Unable to edit friend request", "", "error");
        }
      });
  };

  useEffect(() => {
    client
      .query({
        query: GET_FRIENDS_REQUEST
      })
      .then(res => {
        setFriendsRequests(res.data.friendRequests);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        alert("An error occurred.", "Unable to load", "error");
        setError(true);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
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
    alert("An error occurred.", "Unable to load workouts", "error");
    return <Redirect to="/" />;
  }

  return (
    <Box boxShadow="0px 2px 6px 0px rgba(0, 0, 0, 0.12)" paddingY="5px">
      <p>Friends Request</p>
      {friendsRequests.map(buddy => (
        <div key={buddy.id}>
          <Box
            boxShadow="0px 2px 6px 0px rgba(0, 0, 0, 0.12)"
            paddingY="15px"
            margin="30px"
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              margin="0 30px"
            >
              <Flex justifyContent="space-around" alignItems="center">
                <Avatar src={profilePicture} size="xl" />
                <Box textAlign="left" marginLeft="30px">
                  <Heading size="md">
                    {`${buddy.firstname} ${
                      !buddy.lastname ? "" : buddy.lastname
                    }`}
                  </Heading>
                  <Text>{buddy.name}</Text>
                </Box>
              </Flex>
              <div>
                <Button
                  marginRight="30px"
                  variantColor="orange"
                  variant="solid"
                  size="md"
                  id={buddy.id}
                  name={`${buddy.firstname} ${
                    !buddy.lastname ? "" : buddy.lastname
                  }`}
                  value="response_1"
                  onClick={onClick}
                >
                  Accept
                </Button>
                <Button
                  variantColor="orange"
                  variant="outline"
                  size="md"
                  id={buddy.id}
                  name={`${buddy.firstname} ${
                    !buddy.lastname ? "" : buddy.lastname
                  }`}
                  value="response_0"
                  onClick={onClick}
                >
                  Reject
                </Button>
              </div>
            </Flex>
          </Box>
        </div>
      ))}
    </Box>
  );
};

export default withApollo(FriendsRequestTab);
