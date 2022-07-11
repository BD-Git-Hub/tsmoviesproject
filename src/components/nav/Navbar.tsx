import styled from "styled-components";

const NavigationBar = styled.div`
  height: 5rem;
  width: 100%;
  background: grey;
  

`;

const NavigationSearchGroup = styled.div`
display: inline-block;



`;

const NavigationBarTitle = styled.a`
  color: blue;
  margin-right: 5rem;
`;

const NavigationBarGenreBtn = styled.button``;
const NavigationBarRatingBtn = styled.button``;
const NavigationBarSearchInput = styled.input``; 

const NavigationBarBtnGroup = styled.div`
float: right;

`;

const NavigationBarWatchListBtn = styled.button``;
const NavigationBarTrailersBtn = styled.button``;
const NavigationBarRatingsBtn = styled.button``;
const NavigationBarLoginBtn = styled.button``;



const Navbar = () => {
  return (
    <NavigationBar>
      <NavigationSearchGroup>
        <NavigationBarTitle>FilmCritic</NavigationBarTitle>
        <NavigationBarGenreBtn>Genre</NavigationBarGenreBtn>
        <NavigationBarRatingBtn>Rating</NavigationBarRatingBtn>
        <NavigationBarSearchInput></NavigationBarSearchInput>
      </NavigationSearchGroup>

      <NavigationBarBtnGroup>
        <NavigationBarWatchListBtn>Watchlist</NavigationBarWatchListBtn>
        <NavigationBarTrailersBtn>Trailers</NavigationBarTrailersBtn>
        <NavigationBarRatingsBtn>Ratings</NavigationBarRatingsBtn>
        <NavigationBarLoginBtn>Login</NavigationBarLoginBtn>
      </NavigationBarBtnGroup>




    </NavigationBar>
  );
};

export default Navbar;
