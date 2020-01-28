import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";
import {
  Flex,
  Box,
  Heading,
  Avatar,
  useToast,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text
} from "@chakra-ui/core";

import {
  IoIosPerson,
  IoIosMail,
  IoIosFitness,
  IoIosTrendingUp
} from "react-icons/io";

import logoImage from "../../images/login_image.png";
import AddFriendsTab from "./AddFriendsTab";
import FriendsRequestTab from "./FriendsRequestTab";
import Search from "../common/Search";

const Buddies = ({ client, name, goal, history, text, profilePicture }) => {
  return (
    <Box boxShadow="0px 2px 6px 0px rgba(0, 0, 0, 0.12)" paddingY="5px">
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Friends</Tab>
          <Tab>Add Friends</Tab>
          <Tab>Friends Request</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Friends</p>
            <Search placeholder="" />
          </TabPanel>
          <TabPanel>
            <AddFriendsTab />
          </TabPanel>
          <TabPanel>
            <FriendsRequestTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default withApollo(Buddies);
