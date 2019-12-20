import { gql } from "apollo-boost";

export const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 150) {
      id
      number
      name
      image
      evolutions {
        id
        number
        name
        image
      }
    }
  }
`;

export const GET_UNIT = gql`
  {
    query {
      units {
        id
        name
      }
    }
  }
`;
