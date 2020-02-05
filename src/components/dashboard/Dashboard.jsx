import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";
import { Flex, Box, Heading, Avatar, useToast } from "@chakra-ui/core";
import { Link } from "react-router-dom";

import DashboardStyle from "./DashboardStyle";
import RecommendedWorkouts from "./RecommendedWorkouts";
import Charts from "./Charts";
import { GET_DASHBOARD_DETAILS } from "../../graphql/queries";
import CustomSpinner from "../common/Spinner";
import Quotes from "../common/Quotes";
import Streak from "../common/Streak";
import Notification from "../common/Notification";

function Dashboard({ client, history }) {
  const [dashboardData, setDashboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
        query: GET_DASHBOARD_DETAILS
      })
      .then(res => {
        setDashboardData(res.data.dashboard);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        alert("An error occurred....", "Unable to load", "error");
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

  const { user } = dashboardData;

  if (dashboardData) {
    return (
      <DashboardStyle>
        <div className="welcome">
          <Heading marginBottom="25px" textAlign="left">
            Hello {user && user.firstname}! Welcome to Workout Tracker ...
          </Heading>
        </div>

        <div className="dashboard-content">
          <div className="user-detail">
            <Link to="/profile">Edit</Link>
            <Avatar
              src={user && user.photo}
              size="2xl"
              marginLeft="35%"
              marginBottom="20px"
            />
            <Flex borderTop="1px solid grey" borderBottom="1px solid grey">
              <Box width="50%" d="flex" flexDirection="column">
                <p className="colorOrange">Weight</p>
                <p>
                  {user && user.weight}
                  {user && user.weightUnit.name}
                </p>
              </Box>
              <Box
                width="50%"
                d="flex"
                flexDirection="column"
                borderLeft="1px solid grey"
              >
                <p className="colorOrange">Height</p>
                <p>
                  {user && user.height}
                  {user && user.heightUnit.name}
                </p>
              </Box>
            </Flex>
            <Notification />

            <Streak streak={dashboardData.streak} />
          </div>

          <div className="dasboard-detail">
            <Quotes />

            <section className="goal">
              <p>Goal</p>
              <Heading as="h4" size="md">
                {user && user.goal}
              </Heading>
            </section>
            <section className="recomended-workouts">
              <p className="colorOrange alignText">Recommended Workouts</p>
              <RecommendedWorkouts />
            </section>
            {dashboardData.graphs[0].data.length === 0 && (
              <Heading as="h4" size="md">
                Start working out to view progress chart
              </Heading>
            )}
            {dashboardData.graphs[0].data.length > 0 && (
              <Charts graphs={dashboardData.graphs} />
            )}
          </div>
        </div>
      </DashboardStyle>
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

export default withApollo(Dashboard);
