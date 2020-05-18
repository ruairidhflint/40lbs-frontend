import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        Hello, world.
      </div>
    </ThemeProvider>
  );
}

export default App;
