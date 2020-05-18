import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>fortypounds</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
