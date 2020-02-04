import React, { useEffect, useState } from "react";
import { Flex, useToast } from "@chakra-ui/core";
import { withApollo } from "react-apollo";
import { Redirect } from "react-router-dom";

import CustomSpinner from "../common/Spinner";
import Search from "../common/Search";
import { GET_COMPLETED_WORKOUTS_GALLERY } from "../../graphql/queries";
import FriendsGallery from "./FriendsGalleryCard";
import { CompletedWorkoutsGalleryStyle } from "./StyledGallery";

const CompletedWorkoutsGallery = ({ client }) => {
  const [workoutGallery, setWorkoutGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    setWorkoutGallery(filteredFriendGallery);
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
      {workoutGallery.map(wGallery => (
        <FriendsGallery key={wGallery.id} wGallery={wGallery} />
      ))}
    </CompletedWorkoutsGalleryStyle>
  );
};

export default withApollo(CompletedWorkoutsGallery);
