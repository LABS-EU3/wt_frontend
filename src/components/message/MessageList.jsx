import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";

import { StyledMessagesList } from "./Styledmessages";
import { GET_FRIENDS } from "../../graphql/queries";
import Input from "../common/Input";
import Messages from "./Messages";

const MessageList = ({ client }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    client
      .query({
        query: GET_FRIENDS
      })
      .then(res => {
        console.log(res.data);
        setFriends(res.data.friends);
      })
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchMessages = () => {};

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
        {friends.map(friend => {
          const { firstname, photo } = friend;
          console.log(friend);
          return (
            <div key={friend.id} className="friend">
              <img src={photo} alt={firstname} />
              <p>{firstname}</p>
            </div>
          );
        })}
      </div>

      <div className="messages-container">
        <div className="messages">
          <Messages />
        </div>

        <div className="user-detail"></div>
      </div>
    </StyledMessagesList>
  );
};

export default withApollo(MessageList);
