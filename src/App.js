import React, { useState, useEffect } from 'react';
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

function App() {
  const [user, setUser] = useState(() => {
    const tempUser = JSON.parse(localStorage.getItem('user'));

    if(tempUser){
      return tempUser;
    } else {
      return null;
    }
  });

  // useEffect(() => {
  //   const tempUser = JSON.parse(localStorage.getItem('user'));
  //   console.log(tempUser);
  // })
  return (
    <div className="AppContainer">
      <Route
        path="/"
        render={(props) => (
          <Navigation {...props} user={user} setUser={setUser} />
        )}
      />
      <Route exact path="/" component={LandingPage} />
      <ProtectedRoute
        path="/(login|register)/"
        user={user ? false : true}
        redirect="/dashboard"
        setUser={setUser}
        component={LoginRegister}
      />

      <Route path="/terms" component={TermsAndConditions} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/confirm" component={ConfirmEmail} />
      <Route path="/success" component={SuccessfulConfirm} />
      <ProtectedRoute
        path="/dashboard"
        user={user}
        redirect="/"
        component={Dashboard}
      />
    </div>
  );
}
export default App;
