import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";
import { Icon, Text, Flex } from "@chakra-ui/core";
import { GET_NOTIFICATIONS } from "../../graphql/queries";

const StyledNotifications = styled.div`
  max-height: 250px;
  margin: 40px auto;

  .new {
    font-weight: bold;
    padding: 10px;
    background-color: #ffebe0;
  }

  .data {
    background-color: #ffebe0;
    border: 1px solid #ffd5be;
    padding: 2px;
    overflow: scroll;
  }
`;

const Notification = ({ notifications, client }) => {
  const [notificationData, setNotificationData] = useState([]);

  useEffect(() => {
    client
      .query({
        query: GET_NOTIFICATIONS
      })
      .then(res => {
        debugger;
        setNotificationData(res.data.notifications);
      })
      .catch(err => {
        alert("An error occurred.", "Unable to load", "error");
      });
  }, []);
  // let message = "Fantastic, Great work!";
  // let emoji = "🚀🚀🚀";
  let className = "high";

  // if (streak < 5) {
  //   message = "You can do better!!";
  //   emoji = "😔😕🥺😢😭";
  //   className = "low";
  // }

  // if (streak > 5 && streak < 10) {
  //   message = "Keep it up!";
  //   emoji = "🔥🔥🔥";
  //   className = "moderate";
  // }

  return (
    <StyledNotifications>
      <Flex justifyContent="center">
        <Icon name="bell" size="40px" />
        <Text margin="auto 10px">Notifications</Text>
      </Flex>
      <p className="new">New</p>
      <div className="data">
        {notificationData.map(notification => {
          return (
            <div>
              <div>{notification.topic}</div>
              <div>{notification.message}</div>
            </div>
          );
        })}
      </div>
    </StyledNotifications>
  );
};

export default withApollo(Notification);
