import { gql } from "apollo-boost";

export const LOGIN_QUERY = gql`
  query authForm($email: String!, $password: String!, $remember: Boolean!) {
    authForm(
      input: { email: $email, password: $password, remember: $remember }
    ) {
      id
      token
      isNewUser
    }
  }
`;

export const GET_UNITS = gql`
  query {
    units {
      id
      name
      type
    }
  }
`;

export const GET_COMPLETED_WORKOUTS = gql`
  query {
    completedWorkouts {
      id
      userId
      picture
      workoutId {
        id
        name
        intensity
        avgTime
        session {
          startDate
          endDate
        }
      }
      startDate
      endDate
      pause
    }
  }
`;

export const GET_WORKOUTS = gql`
  query {
    workouts {
      name
      intensity
      types
      id
      picture
    }
  }
`;

export const GET_WORKOUTS_BY_FIELDS = gql`
  query($search: String!, $fields: [String!]!) {
    workouts(input: { search: $search, fields: $fields }) {
      id
      name
      types
      intensity
      picture
    }
  }
`;

export const GET_WORKOUT_DETAIL = gql`
  query($id: String!) {
    workout(id: $id) {
      name
      intensity
      types
      id
      description
      avgTime
      equipment
      session {
        startDate
        endDate
        pause
        exerciseId
        exerciseTimer
      }
      muscles
      picture
      exercises {
        id
        video
        difficulty
        pictureOne
        pictureTwo
        rating
        equipment
        type
        description
        muscle
        name
        time
      }
    }
  }
`;

export const GET_EXERCISES = gql`
  query {
    exercises {
      id
      video
      difficulty
      pictureOne
      pictureTwo
      rating
      equipment
      type
      muscle
      name
      time
    }
  }
`;

export const GET_EXERCISE = gql`
  query exercise($id: String!) {
    exercise(id: $id) {
      id
      video
      difficulty
      pictureOne
      pictureTwo
      rating
      equipment
      type
      muscle
      name
      description
    }
  }
`;

export const GET_RECOMMENDED_WORKOUTS = gql`
  query {
    suggestionsByExperience {
      id
      name
      picture
      experience
    }
  }
`;

export const GET_SCHEDULE = gql`
  query {
    userSchedule {
      id
      userId
      workoutId {
        name
        id
      }
      startDate
      routine
    }
  }
`;

export const GET_DASHBOARD_DETAILS = gql`
  query {
    dashboard {
      graphs {
        name
        data {
          date
          value
        }
      }
      stats {
        reps
        sets
        amountLifted
      }
      streak
      user {
        id
        firstname
        goal
        height
        weight
        photo
        heightUnit {
          name
        }
        weightUnit {
          name
        }
      }
    }
  }
`;

export const EXERCISES_BY_FIELDS = gql`
  query exercises($search: String!, $fields: [String!]!) {
    exercises(input: { search: $search, fields: $fields }) {
      id
      video
      difficulty
      pictureOne
      pictureTwo
      rating
      equipment
      type
      muscle
      name
      time
    }
  }
`;

export const GET_USER_DETAILS = gql`
  query {
    user {
      streak
      firstname
      lastname
      equipment
      height
      goal
      photo
      weight
      reminderType
      experience
      heightUnit {
        id
        name
      }
      weightUnit {
        id
        name
      }
      email
    }
  }
`;

export const ACCOUNT_RECOVERY = gql`
  query accountRecovery($email: String!) {
    accountRecovery(input: $email) {
      id
      firstname
      lastname
    }
  }
`;

export const GET_MESSAGE_HISTORY = gql`
  query friendChat($receiver: String!) {
    friendChat(receiver: $receiver) {
      sender
      receiver
      message
      sent
    }
  }
`;

export const GET_USERS = gql`
  query findFriends($search: String!, $fields: [String!]!) {
    findFriends(input: { search: $search, fields: $fields }) {
      id
      firstname
      lastname
      email
      goal
      photo
    }
  }
`;

export const GET_FRIENDS_REQUEST = gql`
  query {
    friendRequests {
      id
      firstname
      lastname
      photo
      email
    }
  }
`;

export const GET_FRIENDS = gql`
  query {
    friends {
      id
      firstname
      lastname
      goal
      photo
      messages {
        id
        sender
        receiver
        message
        sent
      }
    }
  }
`;

export const GET_COMPLETED_WORKOUTS_GALLERY = gql`
  query {
    completedWorkoutsGallery {
      id
      firstname
      lastname
      email
      goal
      gallery {
        id
        picture
        endDate
        workoutId {
          id
          name
        }
      }
    }
  }
`;

export const GET_NOTIFICATIONS = gql`
  query {
    notifications {
      topic
      message
    }
  }
`;
