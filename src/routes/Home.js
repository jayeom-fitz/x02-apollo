import React from 'react';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIES = gql`
  {
    movies{
      id
      
    }
  }
`;

function Home() {
  const { loading, data } = useQuery(GET_MOVIES);
  if (loading) {
    return "loading...";
  }
  if (data && data.movies) {
    return data.movies.map(m => <h1>{m.id}</h1>);
  }
}

export default Home;