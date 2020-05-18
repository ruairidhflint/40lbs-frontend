import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <StyledHeader>
      <nav>
        <h1>fortypounds</h1>
        <Link to="/login">Login</Link>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  margin-top: 1rem;
    nav {
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 0 3rem;
        border: 1px solid red;
    }
`;

export default Navigation;
