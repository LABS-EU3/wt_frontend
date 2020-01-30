import React, { useState } from "react";
import { withApollo } from "react-apollo";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/core";

import AddFriendsTab from "./AddFriendsTab";
import FriendsRequestTab from "./FriendsRequestTab";
import FriendsTab from "./FriendsTab";
import { StyledBuddies } from "./BuddiesStyle";

const Buddies = ({ client, name, goal, history, text, profilePicture }) => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [friendsRequests, setFriendsRequests] = useState([]);

  return (
    <StyledBuddies>
      <Tabs variant="enclosed" className="tabs">
        <TabList>
          <Tab className="tb">Friends</Tab>
          <Tab className="tb">Add Friends</Tab>
          <Tab className="tb">Friends Request</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p className="name">Friends</p>
            <FriendsTab friends={friends} setFriends={setFriends} />
          </TabPanel>
          <TabPanel>
            <p className="name">Add Friends</p>
            <AddFriendsTab users={users} setUsers={setUsers} />
          </TabPanel>

          <TabPanel>
            <p className="name">Friends Request</p>
            <FriendsRequestTab
              friendsRequests={friendsRequests}
              setFriendsRequests={setFriendsRequests}
              friends={friends}
              setFriends={setFriends}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </StyledBuddies>
  );
};

export default withApollo(Buddies);
