import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const GET_POKEMON_INFO = gql`
{
  pokemons(first: 150) {
    id
    number
    name,
    image,
    evolutions {
      id,
      number,
      name,
      image
    }
  }
}
`