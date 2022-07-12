import styled from "styled-components";

const GenreContainer = styled.div`
  height: 28rem;
  max-width: 98%;
  background-color: red;

  margin: 1rem;
`;

const GenresTitle = styled.p`
  margin: 0;
  font-size: 3rem;
`;

const GenreItemsContainer = styled.div`
  height: 20rem;
  background-color: yellow;
  width: 100%; 
  overflow: hidden;
  
`;

const GenreItemGrp = styled.div`
  height: 20rem;
  background-color: lightblue;
  width: 15rem;
  text-align: center;
  display: inline-block;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
`;

const GenreItemTitle = styled.p`
  font-size: 2rem;
`;

const GenreItemImage = styled.img`
  height: 13rem;
  width: 13rem;
`;

const GenreItems = () => {
  return (
    <GenreContainer>
      <GenresTitle>Genres</GenresTitle>
      <GenreItemsContainer>
        <GenreItemGrp>
          <GenreItemTitle>Genre Title</GenreItemTitle>
          <GenreItemImage></GenreItemImage>
        </GenreItemGrp>
        <GenreItemGrp>
          <GenreItemTitle>Genre Title</GenreItemTitle>
          <GenreItemImage></GenreItemImage>
        </GenreItemGrp>
        <GenreItemGrp>
          <GenreItemTitle>Genre Title</GenreItemTitle>
          <GenreItemImage></GenreItemImage>
        </GenreItemGrp>
        <GenreItemGrp>
          <GenreItemTitle>Genre Title</GenreItemTitle>
          <GenreItemImage></GenreItemImage>
        </GenreItemGrp>
        <GenreItemGrp>
          <GenreItemTitle>Genre Title</GenreItemTitle>
          <GenreItemImage></GenreItemImage>
        </GenreItemGrp>
        <GenreItemGrp>
          <GenreItemTitle>Genre Title</GenreItemTitle>
          <GenreItemImage></GenreItemImage>
        </GenreItemGrp>
      </GenreItemsContainer>
    </GenreContainer>
  );
};

export default GenreItems;
