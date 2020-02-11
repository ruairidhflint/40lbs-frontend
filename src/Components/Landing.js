import React from 'react';
import styled from 'styled-components';
import Hero from '../assets/landing-hero3.png';

const StyledImageContainer = styled.div`
  width: 50%;
  margin-top: 5rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.02);
  img {
    max-width: 100%;
    height: auto;
  }
`;

function Landing() {
  return (
    <StyledImageContainer>
      <img src={Hero} alt="Demo of product" />
    </StyledImageContainer>
  );
}

export default Landing;
