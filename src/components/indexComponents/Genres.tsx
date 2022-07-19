import styled from "styled-components";
import ArrowButton from "../button/ArrowButton";
import Items from "./Items/Items";





const CenterDiv = styled.div`
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
  float: right;
  margin: 0;
`;

const RightArrowButton = styled.button`
  position: relative;
  top: 40%;
  font-size: 100%;
  float: right;
`;

const Genres = () => {
  return (

    <div className="bg-blue-500 h-96 w-full flex flex-row">
      <div className="bg-orange-400 h-96 basis-36">
        <button className="relative top-2/4 text-lg float-left">Left Arrow</button>
      </div>
      <div className="bg-pink-400 h-96 basis-11/12">
        {/* <Items/> */}
      </div>
      <div className="bg-orange-400 h-96 basis-36">
        <button className="relative top-2/4 text-lg float-right">Right Arrow</button>
      </div>
    </div>

    // <GenresContainer>
    //   <LeftArrowDiv>
    //     <LeftArrowButton>Left Arrow</LeftArrowButton>
    //     {/* <ArrowButton name={"Left Arrow"} direction={left}/> */}
    //   </LeftArrowDiv>
    //   <CenterDiv>
    //     <Items />
    //   </CenterDiv>

    //   <RightArrowDiv>
    //     <RightArrowButton>Right Arrow</RightArrowButton>
    //     {/* <ArrowButton name={"right Arrow"} direction={right}/> */}
    //   </RightArrowDiv>
    // </GenresContainer>
  );
};

export default Genres;
