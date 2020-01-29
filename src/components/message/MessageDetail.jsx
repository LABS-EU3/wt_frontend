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
      <h3>Melquesdedque</h3>

      <div className="friend-message">
        <img src="https://cdn1.vectorstock.com/i/thumb-large/22/05/male-profile-picture-vector-1862205.jpg" />

        <div className="friend-message-detail">
          <div className="mssg">
            <p>Hiiii</p>
            <span className="time">2 minutes ago</span>
          </div>
        </div>
      </div>
      <div className="my-message">
        <div className="mssg">
          <p>Hiiii</p>
          <p className="time">2 minutes ago</p>
        </div>
      </div>

      <div className="new-message">
        <input type="text" />
      </div>
    </StyledMessageDetail>
  );
};

export default MessageDetail;
