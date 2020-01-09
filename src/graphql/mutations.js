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

export const ONBOARDING = gql`
  mutation updateUser(
    $id: String!
    $heightUnit: String!
    $weightUnit: String!
    $goal: String!
    $experience: String!
    $equipment: Boolean!
  ) {
    updateUser(
      input: {
        id: $id
        heightUnit: $heightUnit
        weightUnit: $weightUnit
        goal: $goal
        experience: $experience
        equipment: $equipment
      }
    ) {
      firstname
      lastname
      email
      height
      heightUnit {
        id
        name
      }
      weight
      weightUnit {
        id
        name
      }
      goal
      equipment
      experience
    }
  }
`;

export const UPLOAD_PROGRESS_PICTURE = gql`
  mutation($file: Upload!) {
    updateCompletedWorkout(file: $file) {
      filename
    }
  }
`;
