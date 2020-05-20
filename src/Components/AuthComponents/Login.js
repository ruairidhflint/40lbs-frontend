import React from 'react';

import Spinner from '../Spinner';

function Login(props) {
  if (props.spinning) {
    return (
      <div className="login">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="login">
      <h4>Log in to your account</h4>
      <span onClick={props.switch}>Not registered?</span>
      <form>
        <label>Email</label>
        <input type="email" required />
        <label> Password</label>
        <input type="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
