import React from 'react';
import { Route } from 'react-router-dom';

// View Imports
import LandingPage from './Views/Landing';
import Test from './Components/testgraph';

function App() {
  return (
  <div className="AppContainer">
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/test" component={Test} />
  </div>
  );
}

export default App;
