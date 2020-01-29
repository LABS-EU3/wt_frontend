import React, { useEffect, useState } from "react";

import { StyledMessageDetail } from "./Styledmessages";
import { SUBSCRIBE_MESSAGE } from "../../graphql/subscriptions";
import moment from "moment";

import "emoji-mart/css/emoji-mart.css";

const MessageDetail = ({
  handleNewUserMessage,
  subscribeToMore,
  user_id,
  friend
}) => {
  const [newMessage, setNewMessage] = useState("");

  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledMessageDetail>
      <h3>{friend.firstname}</h3>

      {friend.messages.map(message => {
        return (
          <div key={message.id}>
            {message.sender === user_id ? (
              <div className="my-message">
                <div className="mssg">
                  <p>{message.message}</p>
                  <p className="time"> {moment(message.sent).fromNow()}</p>
                </div>
              </div>
            ) : (
              <div className="friend-message">
                <img src={friend.photo} alt={friend.name} />

                <div className="friend-message-detail">
                  <div className="mssg">
                    <p>{message.message}</p>
                    <span className="time">
                      {moment(message.sent).fromNow()}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        );
      })}
      {/* <div className="friend-message">
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
      </div> */}

      <div className="new-message">
        <form
          onSubmit={e => {
            handleNewUserMessage(e, newMessage);
            setNewMessage("");
          }}
        >
          <input
            type="text"
            required
            onChange={e => setNewMessage(e.target.value)}
            value={newMessage}
            placeholder="Send message..."
          />

          <button type="submit">
            <i className="fas fa-location-arrow fa-2x"></i>
          </button>
        </form>
      </div>
    </StyledMessageDetail>
  );
};

export default MessageDetail;
