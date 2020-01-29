import React, { useEffect, useState } from "react";
import { withApollo, useQuery } from "react-apollo";

import { StyledMessagesList } from "./Styledmessages";
import { GET_FRIENDS } from "../../graphql/queries";
import Input from "../common/Input";
import Messages from "./Messages";

const MessageList = ({ client }) => {
  const [friends, setFriends] = useState([]);
  const [friend, setFriend] = useState(null);
  const [isRefetched, setIsRefetched] = useState(false);

  useEffect(() => {
    // client
    //   .query({
    //     query: GET_FRIENDS
    //   })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.subscribeToMore);
    //     setFriends(res.data.friends);
    //   })
    //   .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { subscribeToMore, refetch, data } = useQuery(GET_FRIENDS);
  if (data && friends.length === 0) {
    setFriends(data.friends);
  }

  if (data && isRefetched === true) {
    if (data.friends.length > 0 && friend) {
      const friendFromFriends = data.friends.filter(
        frnd => frnd.id === friend.id
      );
      console.log(friendFromFriends[0].messages.length, "dnfalkjdsafibg");
      console.log(friend.messages.length);
      // console.log( friendFromFriends.messages.length)
      if (
        // parseInt(friend.messages.length) + 1 ===
        friendFromFriends[0].messages.length > friend.messages.length
      ) {
        console.log("updated");
        setFriends(data.friends);
        setIsRefetched(false);
      }
    }
  }

  //   if (isRefetched === true) {
  //     // console.log("enterred");
  //     // console.log(data.friends, "updated");
  //     // setTimeout(() => {
  //     // console.log(data, 'am')
  //     setFriends(data.friends);
  //     // }, 5000);

  //     setIsRefetched(false);
  //   }
  console.log(isRefetched);
  console.log(data, "aaaaassdd");
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
          return (
            <div
              key={friend.id}
              onClick={() => setFriend(friend)}
              className="friend"
            >
              <img src={photo} alt={firstname} />
              <p>{firstname}</p>
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
          />
        </div>
      </div>
    </StyledMessagesList>
  );
};

export default withApollo(MessageList);
