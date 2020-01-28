import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/core";
import React from "react";
import { withApollo } from "react-apollo";
import AddFriendsTab from "./AddFriendsTab";
import FriendsTab from "./FriendsTab";

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
            {/* <p>Friends</p>
            <Search placeholder="" /> */}
            <FriendsTab />
          </TabPanel>
          <TabPanel>
            <AddFriendsTab />
          </TabPanel>
          <TabPanel>
            <p>Friends Request</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default withApollo(Buddies);
