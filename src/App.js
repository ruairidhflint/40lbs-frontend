import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/globalStyles';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colorTwo};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 85%;
    background: ${props => props.theme.colorTwo};
    div {
      padding-bottom: 0.5rem;
      border-bottom: 1px solid ${props => props.theme.colorOne};
      h1 {
        font-size: 3rem;
        letter-spacing: 0.3rem;
        color: ${props => props.theme.colorFour};
      }
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledContainer>
        <div className="container">
          <div>
            <h1>forty pounds</h1>
          </div>
        </div>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
