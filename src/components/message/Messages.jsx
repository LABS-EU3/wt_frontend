import React, { useEffect, useState } from "react";
import { useQuery, withApollo } from "react-apollo";
import { useToast } from "@chakra-ui/core";

import { GET_MESSAGE_HISTORY } from "../../graphql/queries";
import { SEND_MESSAGE } from "../../graphql/mutations";
// import { addResponseMessage, addUserMessage } from "react-chat-widget";
import { StyledMessages } from "./Styledmessages";
import MessageDetail from "./MessageDetail";
import { getUserDetails } from "../../utils";

const userData = getUserDetails();

const Message = ({ client }) => {
  const toast = useToast();
  const [messages, setMessages] = useState([]);

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  const { subscribeToMore, data } = useQuery(GET_MESSAGE_HISTORY, {
    variables: { receiver: "5e2aedba56cf1200175d69c9" }
  });

  if (messages.length > 0) {
    messages.forEach(message => {
      if (message.sender === userData.user_id) {
        // addUserMessage(message.message, "asd");
      } else {
        // addResponseMessage(message.message);
      }
    });
  }

  useEffect(() => {
    if (typeof data === "object") {
      setMessages(data.friendChat);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleNewUserMessage = newMessage => {
    client
      .mutate({
        mutation: SEND_MESSAGE,
        variables: {
          receiver: "5e2aedba56cf1200175d69c9",
          message: newMessage
        }
      })
      .catch(err => {
        alert("An error occurred☹️", "Unable to send message", "error");
      });
  };

  return (
    <StyledMessages>
      <MessageDetail
        handleNewUserMessage={handleNewUserMessage}
        subscribeToMore={subscribeToMore}
        user_id={userData.user_id}
      />
    </StyledMessages>
  );
};

export default withApollo(Message);
