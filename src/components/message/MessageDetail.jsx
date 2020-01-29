import React, { useEffect } from "react";

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
      <div className="friend-message">
        <p>Hiiii</p>
        <p className="time">2 minutes ago</p>
      </div>
      <div className="my-message">
        <p>Hiiii</p>
        <p className="time">2 minutes ago</p>
      </div>
    </StyledMessageDetail>
  );
};

export default MessageDetail;
