import React from 'react';
import { Route } from 'react-router-dom';

// View Imports
import LandingPage from './views/Landing';
import Test from './components/testgraph';

function App() {
  return (
  <div className="AppContainer">
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/test" component={Test} />
  </div>
  );
}

export default App;
