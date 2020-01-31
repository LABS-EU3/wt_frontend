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
    $heightUnit: String!
    $weightUnit: String!
    $goal: String!
    $experience: String!
    $equipment: Boolean!
    $height: Float!
    $weight: Float!
  ) {
    updateUser(
      input: {
        heightUnit: $heightUnit
        weightUnit: $weightUnit
        goal: $goal
        experience: $experience
        equipment: $equipment
        height: $height
        weight: $weight
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

export const PAUSE_WORKOUT = gql`
  mutation workoutSession(
    $userId: String!
    $workoutId: String!
    $exerciseId: String!
    $exerciseTimer: Float!
    $pause: Boolean!
  ) {
    workoutSession(
      input: {
        userId: $userId
        workoutId: $workoutId
        exerciseId: $exerciseId
        exerciseTimer: $exerciseTimer
        pause: $pause
      }
    ) {
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

export const SCHEDULE_WORKOUT = gql`
  mutation scheduleWorkout(
    $workoutId: String!
    $startDate: Float!
    $reminderTime: Float!
    $routine: String!
  ) {
    scheduleWorkout(
      input: {
        workoutId: $workoutId
        startDate: $startDate
        reminderTime: $reminderTime
        routine: $routine
      }
    ) {
      id
      userId
      workoutId {
        id
      }
      startDate
      routine
    }
  }
`;

export const UPSERT_CUSTOM_WORKOUT = gql`
  mutation customWorkout(
    $workoutId: String
    $name: String!
    $description: String!
    $intensity: String!
    $exercises: [String!]!
  ) {
    customWorkout(
      input: {
        workoutId: $workoutId
        name: $name
        description: $description
        intensity: $intensity
        exercises: $exercises
      }
    ) {
      id
      userId
      avgTime
      experience
      intensity
      muscles
      types
      picture
      exercises {
        id
        name
        type
        difficulty
      }
    }
  }
`;

export const DELETE_CUSTOM_WORKOUT = gql`
  mutation customWorkout(
    $workoutId: String!
    $remove: Boolean!
    $name: String!
    $description: String!
    $intensity: String!
    $exercises: [String!]!
  ) {
    customWorkout(
      input: {
        workoutId: $workoutId
        remove: $remove
        name: $name
        description: $description
        intensity: $intensity
        exercises: $exercises
      }
    ) {
      id
    }
  }
`;

export const UPDATE_USER_DETAILS = gql`
  mutation updatedUser(
    $firstname: String
    $lastname: String
    $height: Float
    $heightUnit: String
    $weightUnit: String
    $weight: Float
    $goal: String
    $equipment: Boolean
    $experience: String
    $reminderType: String
    $photo: Upload
  ) {
    updateUser(
      input: {
        firstname: $firstname
        lastname: $lastname
        height: $height
        heightUnit: $heightUnit
        weightUnit: $weightUnit
        weight: $weight
        goal: $goal
        equipment: $equipment
        experience: $experience
        reminderType: $reminderType
        photo: $photo
      }
    ) {
      id
      firstname
      email
      lastname
      height
      reminderType
      heightUnit {
        id
        name
        type
      }
      goal
      weight
      weightUnit {
        id
        name
        type
      }
      equipment
      experience
      photo
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword($password: String!, $rePassword: String!) {
    resetPassword(input: { password: $password, rePassword: $rePassword }) {
      id
      firstname
      lastname
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($receiver: String!, $message: String!) {
    sendMessage(receiver: $receiver, message: $message) {
      sender
      receiver
      message
      sent
    }
  }
`;

export const MANAGE_FRIENDS = gql`
  mutation manageFriends($userId: String!, $task: String!) {
    manageFriends(userId: $userId, task: $task)
  }
`;
