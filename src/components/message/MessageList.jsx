import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";

import { StyledMessagesList } from "./Styledmessages";
import { GET_FRIENDS } from "../../graphql/queries";

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

  return (
    <StyledMessagesList>
      <div className="users-list">
        {friends.map(friend => {
          console.log(friend);
          return <div className="friend"> </div>;
        })}
      </div>

      <div className="messages"></div>

      <div className="user-detail"></div>
    </StyledMessagesList>
  );
};

export default withApollo(MessageList);
