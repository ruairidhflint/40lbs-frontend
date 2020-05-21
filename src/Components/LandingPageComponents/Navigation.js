import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navigation(props) {
  const logout = () => {
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
          <button onClick={logout}>Logout</button>
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

    @media (max-width: 600px) {
      padding: 0 2rem;
    }

    h3 {
      font-size: 1.7rem;
      font-weight: bold;
    }

    a,
    button {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      transition: opacity 0.3s ease-in-out;

      :hover {
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;
      }
    }
  }
`;

export default Navigation;
