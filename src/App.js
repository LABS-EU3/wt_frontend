import React from 'react';
import './App.css';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

//sample data being pulled from pokemon api
const GET_POKEMON_INFO = gql`
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

function App() {
  //sample code below
  const { data, loading, error} = useQuery(GET_POKEMON_INFO)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data)
  //sample code above
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Welcome to our nameless Workout Tracker</h1>
        
      </header>
    </div>
  );
}

export default App;
