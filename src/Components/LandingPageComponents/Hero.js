import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeroImage from '../../Assets/line.png';

function Hero() {
  return (
    <StyledContainer>
      <StyledHeroBackground />
      <StyledOverlay>
        <h1>What gets measured gets managed.</h1>
        <p>
          Forty Pounds is a lightweight weight tracker to help you make
          adjustments to your fitness and achieve your next health goal.
        </p>
        <div className="buttons">
          <button>Sign Up</button>
          <button>Learn More</button>
        </div>
      </StyledOverlay>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100vw;
  height: 100%;
`;

const StyledHeroBackground = styled.section`
  width: 100%;
  height: 600px;
  margin: 0 auto;
  background-image: url(${HeroImage});
  position: absolute;
  opacity: 0.2;
`;

const StyledOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ::selection {
    background-color: ${(props) => props.theme.yellow};
  }

  h1 {
    width: 100%;
    font-size: 5rem;
    font-weight: bold;
    text-align: center;

    ::selection {
      background-color: ${(props) => props.theme.green};
    }
  }

  p {
    text-align: center;
    margin-top: 1.7rem;
    font-size: 1.6rem;
    width: 90%;

    ::selection {
      background-color: ${(props) => props.theme.green};
    }
  }

  button {
    width: 140px;
    height: 40px;
    background-color: ${(props) => props.theme.green};
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    margin: 2rem 1rem;

    :active {
      outline: none;
      border: none;
    }
  }
`;

export default Hero;
