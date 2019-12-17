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

// {
//     //sample code below
//     const { data, loading, error } = useQuery(GET_POKEMON_INFO)
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error</p>;
//     console.log(data)
//     //sample code above
// }