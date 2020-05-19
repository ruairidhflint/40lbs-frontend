import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeroImage from '../../Assets/line.png';

import LearnMore from './LearnMore';

function Hero() {
  const [fadeIn, setFadeIn] = useState({
    line: false,
    text: false,
    hide: false,
  });

  useEffect(() => {
    setFadeIn({ line: true, text: false, hide: false });
    setTimeout(() => {
      setFadeIn({ line: true, text: true, hide: false });
    }, 1000);
    setTimeout(() => {
      setFadeIn({ line: true, text: true, hide: true });
    }, 3000);
  }, []);

  return (
    <>
      <StyledHeroBackground />
      <StyledFade visible={fadeIn.line} hide={fadeIn.hide} />
      <StyledOverlay visible={fadeIn.text}>
        <h1>What gets measured gets managed.</h1>
        <p>
          Forty Pounds is a lightweight weight tracker to help make adjustments
          to your fitness and achieve your next health goal.
        </p>
        <div className="buttons">
          <Link to="/login">
            <button>Sign Up</button>
          </Link>
          <a href="#more">
            <button>Learn More</button>
          </a>
        </div>
      </StyledOverlay>
      <LearnMore />
    </>
  );
}

const StyledHeroBackground = styled.section`
  width: 100%;
  height: 650px;
  margin: 0 auto;
  background-image: url(${HeroImage});
  position: absolute;
  opacity: 0.2;
`;

const StyledFade = styled.section`
  width: 100%;
  height: 650px;
  margin: 0 auto;
  background-color: white;
  position: absolute;
  transition: transform 2s ease-in-out;
  transform: ${(props) => (props.visible ? 'translate(120vw)' : null)};
  display: ${(props) => (props.hide ? 'none' : 'block')};
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
  transition: opacity 3s ease-in-out;
  opacity: ${(props) => (props.visible ? '1' : '0')};

  h1 {
    width: 100%;
    font-size: 5rem;
    font-weight: bold;
    text-align: center;

    @media (max-width: 750px) {
      font-size: 3.9rem;
    }

    @media (max-width: 330px) {
      margin-top: 8rem;
      font-size: 3rem;
    }
  }

  p {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.6rem;
    width: 90%;

    @media (max-width: 700px) {
      font-size: 1.2rem;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    width: 145px;
    height: 43px;
    background-color: ${(props) => props.theme.green};
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    margin: 2rem 1rem;


    :hover {
      transition: all 0.2s ease-in-out;
      transform: scale(0.97);
      opacity: 0.8;
      cursor: pointer;
    }

    :active {
      outline: none;
      border: none;
    }

    @media (max-width: 710px) {
      margin: 1rem 0.2rem;
      width: 110px;
    }

    @media (max-width: 330px) {
      width: 85px;
      height: 35px;
      font-size: 0.8rem;
    }
  }
`;

export default Hero;
