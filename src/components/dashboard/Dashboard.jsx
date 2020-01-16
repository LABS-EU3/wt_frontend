import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";
import { Flex, Box, Heading, Avatar, useToast } from "@chakra-ui/core";
import { Link } from "react-router-dom";

import logoImage from "../../images/login_image.png";
import DashboardStyle from "./DashboardStyle";
import RecommendedWorkouts from "./RecommendedWorkouts";
import Charts from "./Charts";
import { GET_DASHBOARD_DETAILS } from "../../graphql/queries";
import CustomSpinner from "../common/Spinner";

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
        console.log(err);
        setIsLoading(false);
        alert("An error occurred.", "Unable to load", "error");
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
  console.log(dashboardData);

  if (dashboardData) {
    return (
      <DashboardStyle>
        <Heading marginBottom="25px" textAlign="left">
          Hello {dashboardData.user.firstname}! Welcome to Workout Tracker ...
        </Heading>
        <div>
          <Box
            width="30%"
            height="100vh"
            d="flex"
            flexDirection="column"
            borderWidth="1px"
            rounded="lg"
            marginRight="50px"
          >
            <Link>Edit</Link>
            <Avatar
              src={logoImage}
              size="2xl"
              marginLeft="35%"
              marginBottom="20px"
            />
            <Flex borderTop="1px solid grey" borderBottom="1px solid grey">
              <Box width="50%" d="flex" flexDirection="column">
                <p className="colorOrange">Weight</p>
                <p>
                  {dashboardData.user.weight}
                  {dashboardData.user.weightUnit.name}
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
                  {dashboardData.user.height}
                  {dashboardData.user.heightUnit.name}
                </p>
              </Box>
            </Flex>

            <Box
              bg="tomato"
              color="white"
              p={4}
              width="70%"
              rounded="lg"
              marginTop="350px"
              marginLeft="15%"
            >
              <span role="img" aria-label="fire-emoji">
                🔥🔥🔥
              </span>{" "}
              You have a {dashboardData.streak} days streak. Keep it up!
            </Box>
          </Box>

          <div>
            <section>
              <Heading fontFamily="initial" className="alignText">
                “
              </Heading>
              <p>
                The clock is ticking. Are you becoming the person you want to to
                be?
              </p>
              <Heading fontFamily="initial" textAlign="right" width="100%">
                ”
              </Heading>
            </section>
            <section>
              <p className="colorOrange alignText">Goal</p>
              <Heading as="h4" size="md">
                {dashboardData.user.goal}
              </Heading>
            </section>
            <section>
              <p className="colorOrange alignText">Recommended For You</p>
              <RecommendedWorkouts />
            </section>

            <Charts graphs={dashboardData.graphs} />
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
