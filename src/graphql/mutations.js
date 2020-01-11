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
  mutation($sessionId: String!, $file: Upload!) {
    updateCompletedWorkout(input: { sessionId: $sessionId, file: $file }) {
      id
      picture
    }
  }
`;

export const START_WORKOUT = gql`
  mutation workoutSession(
    $userId: String!
    $workoutId: String!
    $exerciseId: String!
    $exerciseTimer: Float!
  ) {
    workoutSession(
      input: {
        userId: $userId
        workoutId: $workoutId
        exerciseId: $exerciseId
        exerciseTimer: $exerciseTimer
      }
    ) {
      userId
      workoutId {
        id
        name
      }
      startDate
      endDate
      pause
    }
  }
`;

export const END_WORKOUT = gql`
  mutation workoutSession(
    $userId: String!
    $workoutId: String!
    $exerciseId: String!
    $exerciseTimer: Float!
    $end: Boolean!
  ) {
    workoutSession(
      input: {
        userId: $userId
        workoutId: $workoutId
        exerciseId: $exerciseId
        exerciseTimer: $exerciseTimer
        end: $end
      }
    ) {
      userId
      workoutId {
        id
        name
      }
      startDate
      endDate
      pause
    }
  }
`;
