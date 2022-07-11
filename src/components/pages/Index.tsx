import styled from "styled-components";

const PosterBackgroundContainer = styled.div`
  background-color: red;
  height: 50rem;
  position: relative;
`;

const PosterDescriptionGroup = styled.div`
  background-color: darkblue;
  height: 20rem;
  width: 20rem;

  position: absolute;
  bottom: 2em;
  left: 1rem;
  text-align: center;
`;

const PosterDescriptionGroupTitle = styled.p`
  font-size: 2rem;
`;
const PosterDescriptionGroupRating = styled.p`
  font-size: 2rem;
`;
const PosterDescriptionGroupDescription = styled.p`
  font-size: 2rem;
`;
const Index = () => {
  return (
    <PosterBackgroundContainer>
      <PosterDescriptionGroup>
        <PosterDescriptionGroupTitle>Title</PosterDescriptionGroupTitle>
        <PosterDescriptionGroupRating>Rating</PosterDescriptionGroupRating>
        <PosterDescriptionGroupDescription>
          Description
        </PosterDescriptionGroupDescription>
      </PosterDescriptionGroup>
    </PosterBackgroundContainer>
  );
};

export default Index;
