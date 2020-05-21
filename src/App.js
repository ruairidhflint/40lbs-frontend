import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// View Imports
import Navigation from './Components/LandingPageComponents/Navigation';
import LandingPage from './Views/Landing';
import LoginRegister from './Views/LoginRegister';
import TermsAndConditions from './Views/TandC';
import Privacy from './Views/Privacy';
import ConfirmEmail from './Views/ConfirmEmail';
import SuccessfulConfirm from './Views/SuccessfulConfirm';
import Dashboard from './Views/Dashboard';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="AppContainer">
      <Route path="/" component={Navigation} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/(login|register)/" component={LoginRegister} />
      <Route path="/terms" component={TermsAndConditions} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/confirm" component={ConfirmEmail} />
      <Route path="/success" component={SuccessfulConfirm} />
      <Route
        path="/dashboard"
        render={(props) => <Dashboard {...props} user={user} />}
      />
    </div>
  );
}
export default App;
