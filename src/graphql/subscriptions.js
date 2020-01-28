import { gql } from "apollo-boost";

export const SUBSCRIBE_MESSAGE = gql`
  subscription {
    newMessage(receiver: "5e2eeda93d72131c14af94c5") {
      sender
      receiver
      message
      sent
    }
  }
`;
