import React from 'react';
import styled from 'styled-components';
import Hero from '../assets/landing-hero3.png';

const StyledImageContainer = styled.div`
  width: 45%;
  margin: 3rem 0;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.02);
  img {
    max-width: 100%;
    height: auto;
  }
`;

const StyledStuff = styled.p`
  width: 55%;
  font-size: 1.2rem;
  text-align: center;
  color: ${props => props.theme.colorFour};
`;

function Landing() {
  return (
    <>
      <StyledImageContainer>
        <img src={Hero} alt="Demo of product" />
      </StyledImageContainer>
      <StyledStuff>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. 
      </StyledStuff>
    </>
  );
}

export default Landing;
