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
      firstname
      lastname
      email
      password
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation userLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      username
      email
      token
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
