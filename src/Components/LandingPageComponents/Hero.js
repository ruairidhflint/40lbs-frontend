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

    @media (max-width: 700px) {
      font-size: 3.9rem;
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

    @media (max-width: 700px) {
      font-size: 1.2rem;
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
    transition: opacity 0.2s ease-in-out;
    margin: 2rem 1rem;

    :hover {
      opacity: 0.8;
      transition: opacity 0.2s ease-in-out;
      cursor: pointer;
    }

    :active {
      outline: none;
      border: none;
    }

    @media (max-width: 690px) {
      margin: 1rem 0.2rem;
      width: 110px;
    }
  }
`;

export default Hero;
