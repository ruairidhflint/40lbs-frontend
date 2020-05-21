import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navigation(props) {
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    props.setUser(null);
    props.history.push('/');
  };
  return (
    <StyledHeader>
      <nav>
        <Link to="/">
          <h3>forty pounds</h3>
        </Link>
        {!props.user ? (
          <Link to="/login">Login</Link>
        ) : (
          <div className="logged-in">
            {' '}
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100vw;
  height: 8vh;
  padding: 1rem 0;
  nav {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 4rem;

    .logged-in {
      a {
        margin-right: 1rem;

        @media(max-width: 470px){
          margin-right: 0.4rem;
        }
      }
    }

    @media (max-width: 600px) {
      padding: 0 2rem;
    }


    h3 {
      font-size: 1.7rem;
      font-weight: bold;

      @media(max-width: 420px){
        font-size: 1.3rem;
      }
    }

    a,
    button {
      border: none;
      color: inherit;
      background-color: ${(props) => props.theme.whute};
      text-decoration: none;
      cursor: pointer;
      transition: opacity 0.3s ease-in-out;
      font-size: 1rem;

      @media(max-width: 420px){
        font-size: 0.7rem;
      }

      :hover {
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;
      }
    }
  }
`;

export default Navigation;
