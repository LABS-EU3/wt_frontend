// import React, { Component } from "react";
// import {
//   Widget,
//   addResponseMessage,
//   addLinkSnippet,
//   addUserMessage
// } from "react-chat-widget";
// import "react-chat-widget/lib/styles.css";
// import { withApollo, useSubscription } from "react-apollo";

// import { SUBSCRIBE_MESSAGE } from "../../graphql/subscriptions";
// import { GET_MESSAGE_HISTORY } from "../../graphql/queries";
// import { SEND_MESSAGE } from "../../graphql/mutations";
// class Message extends Component {
//   componentDidMount() {
//     // addResponseMessage("Welcome to this awesome chat!");
//     // addResponseMessage("How are you doing to this awesome chat!");
//     // addUserMessage("Howdy brouh");
//     // this.props.client
//     //   .subscribe({
//     //     query: SUBSCRIBE_MESSAGE,
//     //     variables: {
//     //       receiver: "5e2aedba56cf1200175d69c95"
//     //     }
//     //   })
//     console.log(this.props.client)
//         this.props.client.subscribe({
//         query: SUBSCRIBE_MESSAGE,
//         variables: {
//             receiver: "5e2a2c4b2b999a00177da5f4"
//         },
//         updateQuery: (prev, {subscriptionData}) => {
//             console.log('aaaa', subscriptionData)
//             console.log('aaaa', prev)
//           if (!subscriptionData.data) {
//             return prev;
//           }
//         //   const newMessage = subscriptionData.data.messageAdded;
//           // don't double add the message
//         //   if (!prev.channel.messages.find((msg) => msg.id === newMessage.id)) {
//         //     return Object.assign({}, prev, {
//         //       channel: Object.assign({}, prev.channel, {
//         //         messages: [...prev.channel.messages, newMessage],
//         //       })
//         //     });
//         //   } else {
//         //     return prev;
//         //   }
//         }
//       })
//     //   .then(res => console.log(res))
//     //   .catch(err => console.log(err));

//      this.props.client
//       .query({
//         query: GET_MESSAGE_HISTORY,
//         variables: {
//           receiver: "5e2aedba56cf1200175d69c9"
//         }
//       })
//       .then(res => console.log(res))
//       .catch(err => console.log(err));

//     //   this.props.client
//     //   .mutate({
//     //     mutation: SEND_MESSAGE,
//     //     variables: {
//     //       receiver: "5e2aedba56cf1200175d69c9",
//     //       message: 'hii'
//     //     }
//     //   })
//     //   .then(res => console.log(res, 'res'))
//     //   .catch(err => console.log(err));

//   }
//   handleNewUserMessage = newMessage => {
//     console.log(`New message incoming! ${newMessage}`);
//     // Now send the message throught the backend API
//   };
//   render() {
//     // const {
//     //   data,
//     //   loading,
//     //   error
//     // } = useSubscription(SUBSCRIBE_MESSAGE, {
//     //   variables: { receiver: "5e2eeda93d72131c14af94c5" }
//     // });
//     // console.log(data, loading, error);

//     return (
//       <div className="Message">
//         <Widget
//           handleNewUserMessage={this.handleNewUserMessage}
//           profileAvatar="https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg"
//           title="Ezekiel"
//           subtitle=""
//           launcher={handleToggle => {
//             console.log(handleToggle);
//             return (
//               <button key={handleToggle} onClick={handleToggle}>
//                 Toggle
//               </button>
//             );
//           }}
//         />
//       </div>
//     );
//   }
// }
// export default withApollo(Message);

import React, { useEffect, useState } from "react";
import { useQuery, withApollo } from "react-apollo";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage
} from "react-chat-widget";
import { useToast } from "@chakra-ui/core";

import "react-chat-widget/lib/styles.css";
import { SUBSCRIBE_MESSAGE } from "../../graphql/subscriptions";
import { GET_MESSAGE_HISTORY } from "../../graphql/queries";
import { SEND_MESSAGE } from "../../graphql/mutations";
import { StyledMessage } from "../../styles";

const Message = ({ client }) => {
  const toast = useToast();
  const [messages, setMessages] = useState([]);

  const alert = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true
    });
  };

  const { subscribeToMore, data, ...result } = useQuery(GET_MESSAGE_HISTORY, {
    variables: { receiver: "5e2aedba56cf1200175d69c9" }
  });

  if (messages.length > 0) {
    messages.forEach(message => {
      console.log(message);
      if (message.sender === "5e2a2c4b2b999a00177da5f4") {
        addUserMessage(message.message);
      } else {
        addResponseMessage(message.message);
      }
    });
  }

  useEffect(() => {
    if (typeof data === "object") {
      setMessages(data.friendChat);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  subscribeToMore({
    document: SUBSCRIBE_MESSAGE,
    variables: { receiver: "5e2a2c4b2b999a00177da5f4" },
    updateQuery: (prev, { subscriptionData }) => {
      console.log("prev", prev);
      console.log("sub", subscriptionData);
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

  const handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    client
      .mutate({
        mutation: SEND_MESSAGE,
        variables: {
          receiver: "5e2aedba56cf1200175d69c9",
          message: newMessage
        }
      })
      .catch(err => {
        alert("An error occurred☹️", "Unable to send message", "error");
      });
  };

  return (
    <StyledMessage>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar="https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg"
        title="Ezekiel"
        subtitle=""
        launcher={handleToggle => {
          return (
            <button key={handleToggle} onClick={handleToggle}>
              Toggle
            </button>
          );
        }}
      />
    </StyledMessage>
  );
};

export default withApollo(Message);
