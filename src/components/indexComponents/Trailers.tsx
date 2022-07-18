import styled from "styled-components"
import Items from './Items/Items'



const TrailersContainer = styled.div`
margin-top: 1rem;
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


const Trailers = () => {
  return (
    <TrailersContainer>
      <LeftArrowDiv>
        <LeftArrowButton>Left Arrow</LeftArrowButton>
    </LeftArrowDiv>

    <CenterDiv>
        <Items />
      </CenterDiv>

      <RightArrowDiv>
        <RightArrowButton>Right Arrow</RightArrowButton>
      </RightArrowDiv>
      
    </TrailersContainer>

    
  )
}

export default Trailers