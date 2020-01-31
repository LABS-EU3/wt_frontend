import React, { useEffect, useState } from "react";

import { StyledMessageDetail } from "./Styledmessages";
import { SUBSCRIBE_MESSAGE } from "../../graphql/subscriptions";
import moment from "moment";

const MessageDetail = ({
  handleNewUserMessage,
  subscribeToMore,
  user_id,
  friend,
  setIsRefetched,
  setReceivingMessage
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
        let findFriend = prev.friends.find(frnd => frnd.id === friend.id);

        if (!findFriend.messages.find(msg => msg.id === newMessage.id)) {
          findFriend = Object.assign({}, findFriend, {
            messages: [...findFriend.messages, newMessage]
          });

          const next = Object.assign({}, prev, {
            friends: [
              ...prev.friends.filter(frnd => frnd.id !== findFriend.id),
              findFriend
            ]
          });
          setReceivingMessage(next.friends);
          // setIsRefetched(true);
          return next;
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
          </div>
        );
      })}
      <div ref={messagesEndRef} />

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
