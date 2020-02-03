import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";
import { Icon, Text } from "@chakra-ui/core";
import { GET_NOTIFICATIONS } from "../../graphql/queries";

const StyledNotifications = styled.div`
  min-height: 300px;
  margin: 3rem auto;
  width: 100%;

  .notification-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #ff8744;
  }
  .new {
    font-weight: bold;
    padding: 10px;
    background-color: #ffebe0;
    margin: 1rem 0;
  }

  .data {
    background-color: #ffebe0;
    border: 1px solid #ffd5be;
    padding: 2px;
    overflow: scroll;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bolder;
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
        setNotificationData(res.data.notifications);
      })
      .catch(err => {
        alert("An error occurred.", "Unable to load", "error");
      });
  }, []);

  if (notificationData.length === 0) {
    return (
      <StyledNotifications>
        <div className="notification-bar">
          <Icon name="bell" size="40px" />
          <Text margin="auto 10px">Notifications</Text>
        </div>
        <p className="new">New</p>

        <h3>You currently don't have any notifications</h3>
      </StyledNotifications>
    );
  }

  return (
    <StyledNotifications>
      <div className="notification-bar">
        <Icon name="bell" size="40px" />
        <Text margin="auto 10px">Notifications</Text>
      </div>
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
