import styled from "styled-components";

const ItemContainer = styled.div`
  height: 26rem;
  max-width: 98%;
  background-color: red;

  margin: 1rem;
`;

const ItemTitle = styled.p`
  margin: 0;
  font-size: 3rem;
`;

const ItemsContainer = styled.div`
  height: 20rem;
  background-color: yellow;
  width: 100%; 
  overflow: hidden;
  
`;

const ItemGrp = styled.div`
  height: 20rem;
  background-color: lightblue;
  width: 15rem;
  text-align: center;
  display: inline-block;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
`;

const ItemGrpTitle = styled.p`
  font-size: 2rem;
`;

const GenreItemImage = styled.img`
  height: 13rem;
  width: 13rem;
`;

const Items = () => {
  return (
    <ItemContainer>
      <ItemTitle>Title</ItemTitle>
      <ItemsContainer>
        <ItemGrp>
          <ItemGrpTitle>Item Title</ItemGrpTitle>
          <GenreItemImage></GenreItemImage>
        </ItemGrp>
        <ItemGrp>
          <ItemGrpTitle>Item Title</ItemGrpTitle>
          <GenreItemImage></GenreItemImage>
        </ItemGrp>
        <ItemGrp>
          <ItemGrpTitle>Item Title</ItemGrpTitle>
          <GenreItemImage></GenreItemImage>
        </ItemGrp>
        <ItemGrp>
          <ItemGrpTitle>Item Title</ItemGrpTitle>
          <GenreItemImage></GenreItemImage>
        </ItemGrp>
        <ItemGrp>
          <ItemGrpTitle>Item Title</ItemGrpTitle>
          <GenreItemImage></GenreItemImage>
        </ItemGrp>
        <ItemGrp>
          <ItemGrpTitle>Item Title</ItemGrpTitle>
          <GenreItemImage></GenreItemImage>
        </ItemGrp>
      </ItemsContainer>
    </ItemContainer>
  );
};

export default Items;
