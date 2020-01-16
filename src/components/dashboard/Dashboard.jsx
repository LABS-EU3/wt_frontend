import React from "react";
import { Flex, Box, Heading, Avatar } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area
} from "recharts";

import logoImage from "../../images/login_image.png";
import DashboardStyle from "./DashboardStyle";
import RecommendedWorkouts from "./RecommendedWorkouts";

const data = [
  {
    name: "Week 1",
    numberOfWorkouts: 15
  },
  {
    name: "Week 2",
    numberOfWorkouts: 5
  },
  {
    name: "Week 3",
    numberOfWorkouts: 10
  },
  {
    name: "Week 4",
    numberOfWorkouts: 35
  }
];

function Dashboard() {
  return (
    <DashboardStyle>
      <Heading marginBottom="25px" textAlign="left">
        Hello Amira! Welcome to Workout Tracker ...
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
              <p>150lbs</p>
            </Box>
            <Box
              width="50%"
              d="flex"
              flexDirection="column"
              borderLeft="1px solid grey"
            >
              <p className="colorOrange">Height</p>
              <p>120cm</p>
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
            You have a 6 days streak. Keep it up!
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
              Marathon Training
            </Heading>
          </section>
          <section>
            <p className="colorOrange alignText">Recommended For You</p>
            <RecommendedWorkouts />
          </section>

          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 40, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="numberOfWorkouts"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
          <p>Data view</p>
        </div>
      </div>
    </DashboardStyle>
  );
}

export default Dashboard;
