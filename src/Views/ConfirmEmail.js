import React from 'react';
import styled from 'styled-components';

import Mail from '../Assets/mailsent.svg';

function ConfirmEmail() {
  return (
    <StyledLoginContainer>
      <div className="container">
        <div className="img-cont">
          <img src={Mail} alt="mail box" />
        </div>
        <div className="text-cont">
          <h3>Confirm Your Email</h3>
          <p>
            We've sent you and email confirmation link. Please check your spam
            if it doesn't arrive within a few minutes.
          </p>
        </div>
      </div>
    </StyledLoginContainer>
  );
}

const StyledLoginContainer = styled.main`
  width: 100vw;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};

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
      height: 92vh;
      box-shadow: none;
    }
    .img-cont {
      width: 20vw;

      @media (max-width: 950px) {
        width: 28vw;
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
      width: 80%;
      text-align: center;

      h3 {
        font-size: 3rem;
        color: ${props => props.theme.mainText};
        margin-bottom: 1rem;

        @media (max-width: 700px) {
          font-size: 2.5rem
        }

        @media (max-width: 400px) {
          font-size: 2rem
        }
      }

      p {
        font-size: 1.2rem;
        opacity: 0.8;
        line-height: 1.3;

        @media (max-width: 400px) {
          font-size: 1  rem
        }
      }
    }
  }
`;

export default ConfirmEmail;
