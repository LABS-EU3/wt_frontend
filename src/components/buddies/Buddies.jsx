import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/core";
import React, { useState } from "react";
import { withApollo } from "react-apollo";
import AddFriendsTab from "./AddFriendsTab";
import FriendsRequestTab from "./FriendsRequestTab";
import FriendsTab from "./FriendsTab";

const Buddies = ({ client, name, goal, history, text, profilePicture }) => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [friendsRequests, setFriendsRequests] = useState([]);

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
            <FriendsTab friends={friends} setFriends={setFriends} />
          </TabPanel>
          <TabPanel>
            <AddFriendsTab users={users} setUsers={setUsers} />
          </TabPanel>
          <TabPanel>
            <FriendsRequestTab
              friendsRequests={friendsRequests}
              setFriendsRequests={setFriendsRequests}
              friends={friends}
              setFriends={setFriends}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default withApollo(Buddies);
