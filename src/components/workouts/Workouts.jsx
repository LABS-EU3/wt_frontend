import React, { useEffect, useState } from "react";
import { Box, Button, Flex, useToast } from "@chakra-ui/core";
import { withApollo } from "react-apollo";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";

import { GET_WORKOUTS, GET_WORKOUTS_BY_FIELDS } from "../../graphql/queries";
import CustomSpinner from "../common/Spinner";
import WorkoutCard from "./Workout";
import { WorkoutsStyle } from "./WorkoutStyle";
import { getUserDetails } from "../../utils";

const user = getUserDetails();

function Workouts({ client, workoutName, workoutQuery, search }) {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [limitedWorkouts, setLimitedWorkouts] = useState([]);
  const [limit, setLimit] = useState(3);

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
    let promise;
    const query = search ? GET_WORKOUTS_BY_FIELDS : GET_WORKOUTS;
    const variables = search ? { search, fields: ["name"] } : null;

    if (workoutQuery === "CUSTOM_WORKOUTS") {
      promise = client.query({
        query: GET_WORKOUTS_BY_FIELDS,
        variables: {
          search: user.user_id,
          fields: ["userId"]
        }
      });
    } else {
      promise = client.query({ query, variables });
    }

    promise
      .then(res => {
        let limitWorkouts = res.data.workouts.slice(0, limit);
        setData(res.data.workouts);
        setLimitedWorkouts(limitWorkouts);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const loadMore = () => {
    const newLimit = limit + 3;
    let limitWorkouts = data.slice(0, newLimit);

    setLimitedWorkouts(limitWorkouts);
    setLimit(newLimit);
  };

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

  if (workoutQuery === "CUSTOM_WORKOUTS") {
    return (
      <WorkoutsStyle>
        <div className="header">
          <h3>Custom workouts</h3>
          <Link to="/my/workout/new">
            <Button variantColor="orange" leftIcon="add" isLoading={isLoading}>
              New workout
            </Button>
          </Link>
        </div>

        {limitedWorkouts.length > 0 ? (
          <>
            <div className="container">
              {limitedWorkouts.map(item => (
                <WorkoutCard
                  key={item.id}
                  data={item}
                  cardQuery={workoutQuery}
                  setLimitedWorkouts={setLimitedWorkouts}
                />
              ))}
            </div>
            <div className="load-more">
              <Button onClick={loadMore}>Load More</Button>
            </div>
          </>
        ) : null}
      </WorkoutsStyle>
    );
  }

  if (limitedWorkouts.length > 0) {
    return (
      <WorkoutsStyle>
        <div className="header">
          <h3>{workoutName}</h3>
        </div>

        {limitedWorkouts.map(item => (
          <WorkoutCard key={item.id} data={item} />
        ))}

        <div className="load-more">
          <Button onClick={loadMore}>Load More</Button>
        </div>
      </WorkoutsStyle>
    );
  }

  if (limitedWorkouts.length < 1) {
    const message =
      "Ooops! No workout currently matches your search.  \n\n You can create a custom workout of your choice by hitting ";
    return (
      <WorkoutsStyle>
        <div className="header">
          <h3>
            {message}
            <Button variantColor="orange" leftIcon="add" isLoading={isLoading}>
              ...this BUTTON
            </Button>
          </h3>
        </div>
      </WorkoutsStyle>
    );
  }

  return (
    <Box>
      <Flex width="100vw" height="100vh" justifyContent="center" align="center">
        <CustomSpinner thickness="6px" size="xl" text="Loading..." />
      </Flex>
    </Box>
  );
}

export default withApollo(Workouts);

Workouts.propTypes = {
  client: PropTypes.object.isRequired
};
