import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import TestGraph from './Components/testgraph';
import Landing from './Components/Landing';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colorThree};
  display: flex;
  flex-direction: column;
  align-items: center;
      h1 {
        font-size: 2.5rem;
        letter-spacing: 0.3rem;
        margin-top: 1rem;
        color: ${props => props.theme.colorFour};
        padding: 0.5rem 1.5rem;
        border-bottom: 1px solid ${props => props.theme.colorOne};
    }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledContainer>
          <div>
            <h1>forty pounds</h1>
          </div>
          <Landing />
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
