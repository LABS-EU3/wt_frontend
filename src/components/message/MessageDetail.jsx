import React, { useEffect } from "react";
import { Widget } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

import { StyledMessageDetail } from "./Styledmessages";
import { SUBSCRIBE_MESSAGE } from "../../graphql/subscriptions";

const MessageDetail = ({
  handleNewUserMessage,
  subscribeToMore,
  user_id,
  icon,
  text,
  variant,
  value,
  id
}) => {
  useEffect(() => {
    subscribeToMore({
      document: SUBSCRIBE_MESSAGE,
      variables: { receiver: user_id },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newMessage = subscriptionData.data.newMessage;

        if (!prev.friendChat.find(msg => msg.id === newMessage.id)) {
          return Object.assign({}, prev, {
            friendChat: [...prev.friendChat, newMessage]
          });
        } else {
          return prev;
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledMessageDetail>
      <h1>Hiiiii</h1>
    </StyledMessageDetail>
  );
};

export default MessageDetail;
