import React, { useEffect, useState } from "react";
import { withApollo, useQuery } from "react-apollo";
import moment from "moment";

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
    //   .catch(err => console.log(err)
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

      if (friendFromFriends[0].messages.length > friend.messages.length) {
        setFriend(friendFromFriends[0]);
        setFriends(data.friends);
        setIsRefetched(false);
      }
    }
  }

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
          console.log(friend);
          const { firstname, photo, messages } = friend;
          return (
            <div
              key={friend.id}
              onClick={() => setFriend(friend)}
              //   className= {`friend ${selected}`}
              className="friend"
            >
              <img src={photo} alt={firstname} />
              <div className="friend-dtl">
                <p>{firstname}</p>
                <span>
                  {moment
                    .unix(messages[messages.length - 1].sent)
                    .format("MM/DD/YYYY")}
                </span>
              </div>
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
