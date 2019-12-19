import React, { useRef } from "react";
import { withApollo } from "react-apollo";
import { gql } from "apollo-boost";

const SIGNUP_MUTATION = gql`
  mutation addUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    )
  }
`;

const LOGIN_MUTATION = gql`
  mutation userLogin($email: String!, $password: String!){
      login($email: String!, $password: String!){
          id
          username
          email
          token
      }
  }

`;
