import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/core";
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 2ce13601a70daf7a0b362d20f2d16aa0d0a9da02
import { withApollo } from "react-apollo";
import AddFriendsTab from "./AddFriendsTab";
import FriendsRequestTab from "./FriendsRequestTab";
import Search from "../common/Search";
import FriendsTab from "./FriendsTab";

const Buddies = ({ client, name, goal, history, text, profilePicture }) => {
<<<<<<< HEAD
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [friendsRequests, setFriendsRequests] = useState([]);

=======
>>>>>>> 2ce13601a70daf7a0b362d20f2d16aa0d0a9da02
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
<<<<<<< HEAD
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
=======
            <FriendsTab />
          </TabPanel>
          <TabPanel>
            <AddFriendsTab />
          </TabPanel>
          <TabPanel>
            <FriendsRequestTab />
>>>>>>> 2ce13601a70daf7a0b362d20f2d16aa0d0a9da02
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default withApollo(Buddies);
