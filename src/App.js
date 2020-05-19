import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';

// View Imports
import LandingPage from './Views/Landing';
import Test from './Components/testgraph';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="AppContainer">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/test" component={Test} />
      </div>
    </ThemeProvider>
  );
}

export default App;
