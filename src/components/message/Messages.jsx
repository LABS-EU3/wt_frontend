import React from "react";
import { withApollo } from "react-apollo";
import { useToast } from "@chakra-ui/core";

import { SEND_MESSAGE } from "../../graphql/mutations";
import { StyledMessages } from "./Styledmessages";
import MessageDetail from "./MessageDetail";
import { getUserDetails } from "../../utils";

const userData = getUserDetails();

const Message = ({
  client,
  friend,
  subscribeToMore,
  refetch,
  setIsRefetched,
  setFriends
}) => {
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

  // const { subscribeToMore, data } = useQuery(GET_MESSAGE_HISTORY, {
  //   variables: { receiver: "5e2aedba56cf1200175d69c9" }
  // });

  // if (messages.length > 0) {
  //   messages.forEach(message => {
  //     if (message.sender === userData.user_id) {
  //       // addUserMessage(message.message, "asd");
  //     } else {
  //       // addResponseMessage(message.message);
  //     }
  //   });
  // }

  // useEffect(() => {
  //   if (typeof data === "object") {
  //     setMessages(data.friendChat);
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);

  const handleNewUserMessage = (e, newMessage) => {
    e.preventDefault();

    client
      .mutate({
        mutation: SEND_MESSAGE,
        variables: {
          receiver: friend.id,
          message: newMessage
        }
      })
      .then(res => {
        setIsRefetched(true);
        refetch();
        // setIsRefetched(false);
      })
      .catch(err => {
        alert("An error occurred☹️", "Unable to send message", "error");
      });
  };

  if (friend === null) {
    return (
      <StyledMessages>
        <h2>Select a friend to message</h2>
      </StyledMessages>
    );
  }

  if (friend) {
    return (
      <StyledMessages>
        <div className="message-detail">
          <MessageDetail
            handleNewUserMessage={handleNewUserMessage}
            subscribeToMore={subscribeToMore}
            user_id={userData.user_id}
            friend={friend}
            setIsRefetched={setIsRefetched}
            setFriends={setFriends}
          />
        </div>

        <div className="user-detail">
          <img src={friend.photo} alt={friend.firstname} />
          <h3>
            {friend.firstname} {friend.lastname}
          </h3>
          <p>Goal: {friend.goal} </p>
        </div>
      </StyledMessages>
    );
  }

  return "";
};

export default withApollo(Message);
