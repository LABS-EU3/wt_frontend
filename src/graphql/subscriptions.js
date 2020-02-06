import { gql } from "apollo-boost";

export const SUBSCRIBE_MESSAGE = gql`
  subscription newMessage($receiver: String!) {
    newMessage(receiver: $receiver) {
      id
      sender
      receiver
      message
      sent
    }
  }
`;
