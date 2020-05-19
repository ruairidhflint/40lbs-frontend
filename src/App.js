import React from 'react';
import { Route } from 'react-router-dom';

// View Imports
import LandingPage from './Views/Landing';
import LoginRegister from './Views/LoginRegister';

function App() {
  return (
    <div className="AppContainer">
      <Route exact path="/" component={LandingPage} />
      <Route path="/(login|register)/" component={LoginRegister} />
    </div>
  );
}

export default App;
