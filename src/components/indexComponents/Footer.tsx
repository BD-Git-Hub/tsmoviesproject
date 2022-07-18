import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  margin-top: 1rem;
  background-color: grey;
  height: 5rem;
  width: 100%;
  text-align: center;
`;

const FooterGrp = styled.div`
  position: relative;
  top: 15%;

  display: inline-block;
  background-color: red;
  width: 25rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrp>
        <p>
          Copyright 2022 - 2022 <a href="#">FilmCritic</a>
        </p>
      </FooterGrp>
    </FooterContainer>
  );
};

export default Footer;
