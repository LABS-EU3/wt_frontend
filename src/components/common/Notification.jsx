import React, { useState, useEffect } from "react";
import { withApollo } from "react-apollo";
import styled from "styled-components";

import { Icon, Text, useToast } from "@chakra-ui/core";
import { GET_NOTIFICATIONS } from "../../graphql/queries";

const StyledNotifications = styled.div`
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
    margin: 1rem 0;
  }

  .data {
    padding: 2px;
    overflow: scroll;
    height: 400px;

    .single-message {
      padding: 1rem 0;
      background-color: #ffebe0;
      border-bottom: 1px solid #ffd5be;
      .topic {
        font-weight: bolder;
        font-family: Ubuntu, sans-serif;
      }

      .message {
        font-family: Roboto, sans-serif;
      }
    }
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bolder;
  }
`;

const Notification = ({ notifications, client }) => {
  const toast = useToast();

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

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
        console.log(err);
        alert("An error occurred. 23", "Unable to load", "error");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (notificationData.length === 0) {
    return (
      <StyledNotifications>
        <div className="notification-bar">
          <Icon name="bell" size="40px" />
          <Text margin="auto 10px">Notifications</Text>
        </div>
        <p className="new">New Messages</p>
        <div className="data">
          <h3>You currently don't have any notifications</h3>
        </div>
      </StyledNotifications>
    );
  }

  return (
    <StyledNotifications>
      <div className="notification-bar">
        <Icon name="bell" size="40px" />
        <Text margin="auto 10px">Notifications</Text>
      </div>
      <p className="new">New Messages</p>
      <div className="data">
        {notificationData.map(notification => {
          return (
            <div className="single-message" key={notification.message}>
              <p className="topic">{notification.topic}</p>
              <p className="message">{notification.message}</p>
            </div>
          );
        })}
      </div>
    </StyledNotifications>
  );
};

export default withApollo(Notification);
