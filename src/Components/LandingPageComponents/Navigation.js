import React from './node_modules/react';
import styled from './node_modules/styled-components';
import { Link } from './node_modules/react-router-dom';

function Navigation() {
  return (
    <StyledHeader>
      <nav>
        <Link to='/'>
          <h3>forty pounds</h3>
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  margin: 1rem 0;
  nav {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 4rem;

    @media(max-width: 600px) {
        padding: 0 2rem;
    }

    h3 {
      font-size: 1.7rem;
      font-weight: bold;
    }

    a {
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
