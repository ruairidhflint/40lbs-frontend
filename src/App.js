import React from 'react';
import { Route } from 'react-router-dom';

// View Imports
import LandingPage from './Views/Landing';

function App() {
  return (
  <div className="AppContainer">
    <Route exact path="/" component={LandingPage} />
  </div>
  );
}

export default App;
