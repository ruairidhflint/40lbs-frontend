import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeroImage from '../../Assets/line.png';

function Hero() {
  // const [test, setTest] = useState(false);
  // const [test2, setTest2] = useState(false);

  const [fadeIn, setFadeIn] = useState({ line: false, text: false });

  useEffect(() => {
    setFadeIn({ line: true, text: false });
    setTimeout(() => {
      setFadeIn({ line: true, text: true });
    }, 1000);
  }, []);

  return (
    <>
      <StyledHeroBackground />
      <StyledFade visible={fadeIn.line} />
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
          <Link to="helloworld">
            <button>Learn More</button>
          </Link>
        </div>
      </StyledOverlay>
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
  a {
    text-decoration: none;
    color: inherit;
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
