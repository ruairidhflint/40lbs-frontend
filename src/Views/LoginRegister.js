import React, { useState } from 'react';
import styled from 'styled-components';

import { Route } from 'react-router-dom';

import Register from '../Components/AuthComponents/Register';
import Login from '../Components/AuthComponents/Login';

function LoginRegister({ setUser }) {
  const [spinning, setSpinning] = useState(false);
  return (
    <StyledLoginContainer>
      <div className="container">
        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              spinning={spinning}
              setSpinning={setSpinning}
              setUser={setUser}
            />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register
              {...props}
              spinning={spinning}
              setSpinning={setSpinning}
            />
          )}
        />
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
    width: 35%;
    min-height: 40%;
    max-height: 93%;
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.07);
    border-radius: 4px;
    background-color: ${(props) => props.theme.white};
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.mainText};
    padding: 1.3rem 2rem 2rem 2rem;

    @media (max-width: 990px) {
      width: 50%;
    }

    @media (max-width: 680px) {
      width: 70%;
    }

    @media (max-width: 500px) {
      width: 85%;
    }

    .login {
      height: 300px;
    }

    .register {
      height: 500px;
    }

    .login,
    .register {
      width: 100%;
      background-color: ${(props) => props.theme.white};
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0 0 8px 8px;

      h4 {
        font-size: 1.8rem;
        font-weight: bold;
        margin: 0.5rem 0 0.5rem 0;

        @media (max-width: 500px) {
          font-size: 1.3rem;
        }
      }

      a {
        text-decoration: none;
        color: ${(props) => props.theme.mainText};
        font-size: 0.7rem;
        opacity: 0.7;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: color 0.2s ease-in-out;
        :hover {
          color: ${(props) => props.theme.green};
          transition: color 0.2s ease-in-out;
        }
      }

      p {
        width: 70%;
        opacity: 0.7;
        font-size: 0.8rem;
        line-height: 1.2;
        text-align: center;
        margin-top: 0.5rem;

        @media (max-width: 350px) {
          width: 95%;
          font-size: 0.7rem;
        }

        a {
          text-decoration: none;
          color: inherit;
          font-weight: bold;
          transition: color 0.2s ease-in-out;
          :hover {
            color: ${(props) => props.theme.yellow};
            transition: color 0.2s ease-in-out;
          }
        }
      }
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      label {
        width: 90%;
        margin-bottom: 0.4rem;
        font-size: 0.9rem;
        opacity: 0.8;
      }
      input {
        display: block;
        width: 90%;
        margin-bottom: 0.7rem;
        height: 2.7rem;
        border: none;
        border-radius: 4px;
        background-color: ${(props) => props.theme.backgroundSecondary};
        font-size: 1.2rem;
        padding-left: 1rem;
        border: 2px solid ${(props) => props.theme.white};
        border-radius: 4px;
        transition: background-color 0.3s ease-in-out;

        ::placeholder {
          font-size: 0.9rem;
          color: ${props => props.theme.red};
        }

        @media (max-width: 400px) {
          width: 100%;
        }

        :focus {
          outline: none;
          border: 2px solid ${(props) => props.theme.mainBlue};
          border-radius: 4px;
        }

        :valid {
          border: 2px solid ${(props) => props.theme.green};
        }

        :hover {
          background-color: ${(props) => props.theme.background};
          transition: background-color 0.3s ease-in-out;
        }
      }

      button {
        width: 70%;
        height: 40px;
        border: none;
        background-color: ${(props) => props.theme.red};
        border-radius: 5px;
        color: ${(props) => props.theme.white};
        font-size: 1.2rem;
        margin-top: 1.2rem;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        @media (max-width: 350px) {
          width: 65%;
          height: 38px;
          font-size: 1rem;
        }

        :hover {
          opacity: 0.8;
          transform: scale(0.95);
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
`;

export default LoginRegister;
