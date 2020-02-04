import React, { useEffect, useState } from "react";
import { withApollo, useQuery } from "react-apollo";
import moment from "moment";

import { Box, Flex } from "@chakra-ui/core";
import CustomSpinner from "../common/Spinner";
import { StyledMessagesList } from "./Styledmessages";
import { GET_FRIENDS } from "../../graphql/queries";
import Input from "../common/Input";
import Messages from "./Messages";

const MessageList = ({ client, match }) => {
  const [friends, setFriends] = useState([]);
  const [friend, setFriend] = useState(null);
  const [isRefetched, setIsRefetched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [receivingMessage, setReceivingMessage] = useState(false);

  useEffect(() => {
    const { id } = match.params;

    if (friends.length > 0 && friend === null) {
      const findFriend = friends.find(frnd => frnd.id === id);
      setFriend(findFriend);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [friends]);

  const { subscribeToMore, refetch, data } = useQuery(GET_FRIENDS);

  if (data && friends.length === 0) {
    setFriends(data.friends);
    setLoading(false);
  }

  if (data && isRefetched === true) {
    if (data.friends.length > 0 && friend) {
      const friendFromFriends = data.friends.filter(
        frnd => frnd.id === friend.id
      );

      if (friendFromFriends[0].messages.length > friend.messages.length) {
        setFriend(friendFromFriends[0]);
        setFriends(data.friends);
        setIsRefetched(false);
      }
    }
  }

  if (receivingMessage) {
    const friendFromFriends = receivingMessage.filter(
      frnd => frnd.id === friend.id
    );
    setFriends(receivingMessage);
    setFriend(friendFromFriends[0]);
    setReceivingMessage(false);
  }

  const searchMessages = () => {};

  if (loading) {
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

  if (friends.length > 0) {
    return (
      <StyledMessagesList>
        <div className="users-list">
          <Input
            placeholder="Search Messages"
            id="search"
            name="search"
            onChange={searchMessages}
            variant="filled"
            type="text"
          />
          {friends.map(frnd => {
            const { firstname, photo, messages } = frnd;
            let selected;

            if (friend) {
              if (friend.id === frnd.id) {
                selected = "selected";
              }
            }

            return (
              <div
                key={frnd.id}
                onClick={() => setFriend(frnd)}
                className={`friend ${selected}`}
              >
                <img src={photo} alt={firstname} />
                <div className="friend-dtl">
                  <p>{firstname}</p>
                  <span>
                    {messages[messages.length - 1]
                      ? moment(messages[messages.length - 1].sent).format(
                          "DD/MM/YYYY"
                        )
                      : ""}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="messages-container">
          <div className="messages">
            <Messages
              friend={friend}
              subscribeToMore={subscribeToMore}
              refetch={refetch}
              setIsRefetched={setIsRefetched}
              setReceivingMessage={setReceivingMessage}
            />
          </div>
        </div>
      </StyledMessagesList>
    );
  }
  return (
    <Box>
      <Flex width="100vw" height="100vh" justifyContent="center" align="center">
        <CustomSpinner thickness="6px" size="xl" text="Loading..." />
      </Flex>
    </Box>
  );
};

export default withApollo(MessageList);
