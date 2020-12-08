import React from 'react';
import {useParams} from "react-router-dom";
import {gql} from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIE = gql`
  query getMovie($id: Int){
    movie(id: $id){
      id
      title
      medium_cover_image
    }
  }
`;

function Detail() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE);
  console.log(loading, data);
  return (
    <div>
      {id}
    </div>
  );
}

export default Detail;