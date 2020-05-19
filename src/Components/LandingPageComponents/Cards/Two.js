import React from 'react';
import styled from 'styled-components';

import Me from '../../../Assets/rory.jpeg';

function Two() {
  return (
    <StyledCard>
      <div className="title">
        <h2>About</h2>
      </div>
      <div className="main">
        <div className="text">
          <p>
            Forty Pounds was built for simplicity and focus. It allows you to
            track your weight and set related goals with minimal distraction,
            superfluous features or unnecessary procedure.
          </p>
          <p>
            {' '}
            Your progress is tracked with easy to understand graphs and results
            can be shared to social media platforms for accountability if
            desired.
          </p>
        </div>
        <div className="photo">
          <img src={Me} alt="Me!" />
        </div>
        <span>Rory Flint, Founder</span>
      </div>
      <div className="foot"></div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 29%;
  height: 450px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  transform: scale(1.06);

  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.07);
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 890px) {
    width: 87%;
    transform: scale(1.03);
    height: 400px;
  }

  @media (max-width: 410px) {
    width: 100%;
    height: 400px;
  }

  .title {
    width: 100%;
    height: 17%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.mainText};

    h2 {
      font-size: 1.3rem;
      opacity: 0.8;
    }
  }

  .main {
    width: 100%;
    height: 80%;
    background-color: ${(props) => props.theme.backgroundSecondary};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .text {
      height: 55%;
      width: 100%;

      p {
        display: block;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        line-height: 1.3;
        font-size: 0.99rem;
        opacity: 0.85;
        margin-bottom: 0.5rem;

        @media (max-width: 1111px) {
          font-size: 0.85rem;
        }
      }
    }

    .photo {
      margin: 0 auto;
      width: 25%;

      img {
        max-width: 100%;
        height: auto;
        border-radius: 50%;
        opacity: 0.88;
      }
    }

    span {
      font-size: 0.8rem;
    }
  }

  .foot {
    width: 100%;
    height: 3%;
    opacity: 0.8;
    background-color: ${(props) => props.theme.green};
    border-radius: 0 0 4px 4px;
  }
`;

export default Two;
