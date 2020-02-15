import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import TestGraph from './Components/testgraph';
import Landing from './Components/Landing';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h1 {
      width: 250px;
      text-align: center;
      font-size: 2rem;
      letter-spacing: 0.3rem;
      margin-top: 1rem;
      color: ${props => props.theme.colorFour};
      padding-bottom: 0.5rem;
      margin-left: 2rem;
      border-bottom: 1px solid ${props => props.theme.colorOne};
    }

    h3 {
      color: ${props => props.theme.colorFour};
      font-size: 1.2rem;
      margin-right: 4rem;
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledContainer>
        <div className="nav">
          <h1>forty pounds</h1>
          <h3>Log in</h3>
        </div>
        <Landing />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
