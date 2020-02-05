import React, { useEffect, useState } from "react";
import { Flex, Text, useToast } from "@chakra-ui/core";
import { withApollo } from "react-apollo";
import { Redirect } from "react-router-dom";

import CustomSpinner from "../common/Spinner";
import Search from "../common/Search";
import { GET_COMPLETED_WORKOUTS_GALLERY } from "../../graphql/queries";
import FriendsGallery from "./FriendsGalleryCard";
import { CompletedWorkoutsGalleryStyle } from "./StyledGallery";

const CompletedWorkoutsGallery = ({ client }) => {
  const [workoutGallery, setWorkoutGallery] = useState([]);
  const [staticGallery, setStaticGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [matchFound, setMatchFound] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
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
        query: GET_COMPLETED_WORKOUTS_GALLERY
      })
      .then(res => {
        setWorkoutGallery(res.data.completedWorkoutsGallery);
        setStaticGallery(res.data.completedWorkoutsGallery);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        alert("An error occurred.", "Unable to load friends", "error");
        setError(true);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = e => {
    const inputSearch = e.target.value;
    setSearch(inputSearch);
    const filteredFriendGallery = workoutGallery.filter(
      friendGallery =>
        friendGallery.firstname.includes(inputSearch) ||
        friendGallery.email.includes(inputSearch) ||
        friendGallery.lastname.includes(inputSearch)
    );
    if (inputSearch) {
      if (filteredFriendGallery.length > 0) {
        setWorkoutGallery(filteredFriendGallery);
      } else {
        setMatchFound(false);
      }
    } else {
      setWorkoutGallery(staticGallery);
      setMatchFound(true);
    }
  };

  if (isLoading) {
    return (
      <Flex width="100vw" height="100vh" justifyContent="center" align="center">
        <CustomSpinner thickness="6px" size="xl" text="Loading..." />
      </Flex>
    );
  }

  if (error) {
    alert("An error occurred.", "Unable to show friends list", "error");
    return <Redirect to="/" />;
  }

  return (
    <CompletedWorkoutsGalleryStyle>
      <Search
        placeholder="Find a friend"
        search={search}
        id="search-friends"
        onChange={onSearch}
      />
      {matchFound &&
        workoutGallery.map(wGallery => (
          <FriendsGallery key={wGallery.id} wGallery={wGallery} />
        ))}
      {!matchFound && <Text>No match found</Text>}
    </CompletedWorkoutsGalleryStyle>
  );
};

export default withApollo(CompletedWorkoutsGallery);
