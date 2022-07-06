import styled from "styled-components";
import Genre from "./navSearch.tsx/Genre";
import NavSearch from "./navSearch.tsx/NavSearch";
import Rating from "./navSearch.tsx/Rating";

const NavigationBar = styled.div`
  height: 5rem;
  width: 100%;
  background: grey;
`;

const NavigationSearchGroup = styled.div`
  display: inline;
  color: darkgrey;
  margin: 1rem;
`;

const NavigationBarTitle = styled.a`
  color: blue;
  margin-right: 5rem;
`;

const NavigationBarGenreBtn = styled.button``;
const NavigationBarRatingBtn = styled.button``;
const NavigationBarSearchInput = styled.input``; 

const NavigationBarBtnGroup = styled.div``;



const Navbar = () => {
  return (
    <NavigationBar>
      <NavigationSearchGroup>
        <NavigationBarTitle>FilmCritic</NavigationBarTitle>
        <NavigationBarGenreBtn>Button</NavigationBarGenreBtn>
        <NavigationBarRatingBtn>Rating</NavigationBarRatingBtn>
        <NavigationBarSearchInput></NavigationBarSearchInput>
      </NavigationSearchGroup>

      <NavigationBarBtnGroup>
        
      </NavigationBarBtnGroup>




        {/* <Genre />
        <Rating />
        <NavSearch /> */}
    </NavigationBar>
  );
};

export default Navbar;
