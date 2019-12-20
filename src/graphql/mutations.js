import { gql } from "apollo-boost";

export const SIGNUP_MUTATION = gql`
  mutation addUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $rePassword: String!
  ) {
    addUser(
      input: {
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
        rePassword: $rePassword
      }
    ) {
      id
      token
      isNewUser
    }
  }
`;

export const GOOGLE_AUTH_MUTATION = gql`
  mutation authGoogle($accessToken: String!) {
    authGoogle(input: { accessToken: $accessToken }) {
      id
      token
      isNewUser
    }
  }
`;
