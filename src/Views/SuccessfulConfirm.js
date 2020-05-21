import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import { axiosWithBase } from '../Helpers/axios';

import Spinner from '../Components/Reusables/Spinner';
import Success from '../Assets/success.svg';
import Error from '../Assets/error.svg';

function SuccessfulConfirm(props) {
  const [state, setState] = useState('spinning');
  const { token } = queryString.parse(props.location.search);

  useEffect(() => {
    axiosWithBase
      .patch('/auth/confirm', { token })
      .then((res) => {
        setState('success');
      })
      .catch(() => {
        setState('error');
      });
  });

  if (state === 'spinning') {
    return (
      <StyledSuccessContainer>
        <Spinner />
      </StyledSuccessContainer>
    );
  } else if (state === 'success') {
    return (
      <StyledSuccessContainer>
        <div className="container">
          <div className="img-cont">
            <img src={Success} alt="mail box" />
          </div>
          <div className="text-cont">
            <h3>Success!</h3>
            <p>
              Your email has been confirmed. Please click{' '}
              <Link to="/login">here</Link> to login and start using Forty
              Pounds.
            </p>
          </div>
        </div>
      </StyledSuccessContainer>
    );
  } else {
    return (
      <StyledSuccessContainer>
        <div className="container">
          <div className="img-cont">
            <img src={Error} alt="error" />
          </div>
          <div className="text-cont">
            <h3>Uh oh!</h3>
            <p>
              There seems to have been a problem verifying your account. Please{' '}
              <a href="mailto:roryflintphoto@gmail.com">contact us</a> and we'll
              sort the problem as soon as possible.
            </p>
          </div>
        </div>
      </StyledSuccessContainer>
    );
  }
}

const StyledSuccessContainer = styled.main`
  width: 100vw;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};

  @media (max-width: 600px) {
    background-color: ${(props) => props.theme.white};
  }

  .container {
    width: 65vw;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
    border-radius: 4px;
    background-color: ${(props) => props.theme.white};
    padding: 3rem 0 4rem 0;

    @media (max-width: 600px) {
      width: 100%;
      height: 60vh;
      box-shadow: none;
    }
    .img-cont {
      width: 30vw;

      @media (max-width: 950px) {
        width: 40vw;
      }

      @media (max-width: 600px) {
        width: 50vw;
      }

      img {
        max-width: 100%;
        height: auto;
      }
    }

    .text-cont {
      width: 70%;
      text-align: center;

      h3 {
        font-size: 3rem;
        color: ${(props) => props.theme.mainText};
        margin-bottom: 1rem;

        @media (max-width: 700px) {
          font-size: 2.5rem;
        }

        @media (max-width: 400px) {
          font-size: 2rem;
        }
      }

      p {
        font-size: 1.2rem;
        opacity: 0.8;
        line-height: 1.3;

        @media (max-width: 400px) {
          font-size: 1 rem;
        }

        a {
          transition: color 0.2s ease-in-out;
          color: ${(props) => props.theme.green};
          :hover {
            color: ${(props) => props.theme.yellow};
            transition: color 0.2s ease-in-out;
          }
        }
      }
    }
  }
`;

export default SuccessfulConfirm;
