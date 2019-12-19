import gql from "graphql-tag";

export const ONBOARDING = gql`
  mutation userOnboarding(
    $heightUnit: String!
    $weightUnit: String!
    $goal: String!
    $experience: String!
    $equipment: String!
  ) {
    onboarding(
      heightUnit: $heightUnit
      weightUnit: $weightUnit
      goal: $goal
      experience: $experience
      equipment: $equipment
    ) {
      id
      heightUnit
      weightUnit
      goal
      experience
      equipment
    }
  }
`;

export const ONBOARDING_SUDO = gql`
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
      email
      heightUnit {
        id
        name
      }
    }
  }
`;
