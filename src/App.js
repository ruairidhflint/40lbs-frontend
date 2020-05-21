import React from 'react';
import { Route } from 'react-router-dom';

// View Imports
import Navigation from './Components/LandingPageComponents/Navigation';
import LandingPage from './Views/Landing';
import LoginRegister from './Views/LoginRegister';
import TermsAndConditions from './Views/TandC';
import Privacy from './Views/Privacy';

function App() {
  return (
    <div className="AppContainer">
      <Route path="/" component={Navigation} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/(login|register)/" component={LoginRegister} />
      <Route path="/terms" component={TermsAndConditions} />
      <Route path="/privacy" component={Privacy} />
    </div>
  );
}
export default App;
