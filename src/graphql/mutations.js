import gql from "graphql-tag";

export const ONBOARDING = gql`
  mutation updateUser(
    $id: String!
    $heightUnit: String!
    $weightUnit: String!
    $goal: String!
    $experience: String!
    $equipment: String!
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
