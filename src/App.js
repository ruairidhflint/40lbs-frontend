import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import Test from './Components/testgraph';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Test />
      </div>
    </ThemeProvider>
  );
}

export default App;
