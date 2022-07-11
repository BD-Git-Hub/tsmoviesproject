import styled from "styled-components";
import GenreItems from "../genre/GenreItems";

const GenresContainer = styled.div`
  background-color: blue;
  height: 30rem;
  width: 100%;
`;

const LeftArrowDiv = styled.div`
  background-color: orange;
  width: 8%;
  height: 30rem;
  display: inline-block;
`;

const LeftArrowButton = styled.button`
  position: relative;
  top: 40%;
  font-size: 100%;
  float: left;
  margin: 0;
`;

const GenresCenterDiv = styled.div`
  background-color: pink;
  width: 84%;
  display: inline-block;
  height: 30rem;
  vertical-align: top;
`;

const RightArrowDiv = styled.div`
  background-color: orange;
  width: 8%;
  height: 30rem;
  display: inline-block;
`;

const RightArrowButton = styled.button`
  position: relative;
  top: 40%;
  font-size: 100%;
  float: right;
`;

const Genres = () => {
  return (
    <GenresContainer>
      <LeftArrowDiv>
        <LeftArrowButton>Left Arrow </LeftArrowButton>
      </LeftArrowDiv>
      <GenresCenterDiv><GenreItems/></GenresCenterDiv>

      <RightArrowDiv>
        <RightArrowButton>Right Arrow</RightArrowButton>
      </RightArrowDiv>

      
    </GenresContainer>
  );
};

export default Genres;
