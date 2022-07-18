import styled from "styled-components";
import Navbar from "../nav/Navbar";



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

    <div className="bg-red-800 h-screen relative">
      <Navbar/>
        <div className="bg-blue-600 h-80 w-80 absolute bottom-20 left-20 text-center">
          <p className="text-7xl m-4">TITLE</p>
          <p className="text-5xl m-4">Rating</p>
          <p className="text-4xl m-4">Description</p>
        </div>
    </div>

    // <PosterBackgroundContainer>
    // <Navbar/>
    //   <PosterDescriptionGroup>
    //     <PosterDescriptionGroupTitle>Title</PosterDescriptionGroupTitle>
    //     <PosterDescriptionGroupRating>Rating</PosterDescriptionGroupRating>
    //     <PosterDescriptionGroupDescription>Description
    //     </PosterDescriptionGroupDescription>
    //   </PosterDescriptionGroup>
    // </PosterBackgroundContainer>
  );
};

export default Index;
