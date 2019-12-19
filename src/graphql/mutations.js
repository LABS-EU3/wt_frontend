import React, { useRef } from "react";
import { withApollo } from "react-apollo";
import { gql } from "apollo-boost";

const SIGNUP_MUTATION = gql`
  mutation addUser(
    $firstname: String!
    $firstname: String!
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
