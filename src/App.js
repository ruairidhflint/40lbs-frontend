import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from './Helpers/ProtectedRoute';

// View Imports
import Navigation from './Components/Reusables/Navigation';
import LandingPage from './Views/Landing';
import LoginRegister from './Views/LoginRegister';
import TermsAndConditions from './Views/TandC';
import Privacy from './Views/Privacy';
import ConfirmEmail from './Views/ConfirmEmail';
import SuccessfulConfirm from './Views/SuccessfulConfirm';
import Dashboard from './Views/Dashboard';
import ErrorDashboard from './Views/DashError';

function App() {
  const [user, setUser] = useState(() => {
    const userDetails = JSON.parse(localStorage.getItem('user'));

    if (userDetails) {
      return userDetails;
    } else {
      return null;
    }
  });

  return (
    <div className="AppContainer">
      <Route
        path="/"
        render={(props) => (
          <Navigation {...props} user={user} setUser={setUser} />
        )}
      />
      <Route exact path="/" component={LandingPage} />
      <Route
        exact
        path="/(login|register)/"
        render={(props) => <LoginRegister {...props} setUser={setUser} />}
      />

      <Route exact path="/terms" component={TermsAndConditions} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/confirm" component={ConfirmEmail} />
      <Route exact path="/success" component={SuccessfulConfirm} />
      <ProtectedRoute
        exact
        path="/dashboard"
        user={user}
        redirect="/"
        setUser={setUser}
        component={Dashboard}
      />
      <Route exact path="/error" component={ErrorDashboard} />
    </div>
  );
}
export default App;
