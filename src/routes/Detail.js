import React from 'react';
import {useParams} from "react-router-dom";
import {gql} from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import styled from "styled-components";

const GET_MOVIE = gql`
  query getMovie($id: Int!){
    movie(id: $id){
      title
      rating
      year
      description_full
      background_image
      medium_cover_image
      genres
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  margin-left: 10px;
  padding: 10px 10px 10px 10px;
  width : 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Poster = styled.div`
  width: 30%;
  height: 60%;
  background-color: transparent;
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: {id: parseInt(id)}
  });

  return (
    <Container bg={!loading && data.movie && data.movie.background_image}>
      <Column>
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        {!loading && data.movie && (
          <>
            <Subtitle>{data.movie.year} - {data.movie.rating}</Subtitle>
            <Description>{data.movie.description_full}</Description>
          </>
        )}
      </Column>
      {!loading && data.movie && (
        <Poster>
          <img src={data.movie.medium_cover_image}></img>
        </Poster> 
      )}
    </Container>
  );
};