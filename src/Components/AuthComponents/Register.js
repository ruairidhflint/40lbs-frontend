import React from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../Spinner';

// TODO - DEAL WITH MATCHING PASSWORDS
function Register(props) {
  if (props.spinning) {
    return (
      <div className="register">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="register">
      <h4>Create your account</h4>
      <span onClick={props.switch}>Already registered?</span>
      <form>
        <label>Email</label>
        <input type="email" required />
        <label> Password</label>
        <input
          type="password"
          minlength="8"
          maxlength="25"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="8 - 25 characters long. Must include one number and one letter."
          required
        />
        <label> Confirm Password</label>
        <input type="password" minlength="8" maxlength="25" required />
        <label> Current Weight (lbs)</label>
        <input type="number" min="0" max="1000" required />
        <p>
          By registering, you agree to Forty Pound's{' '}
          <Link to="/terms">Terms of Conditions</Link> and{' '}
          <Link to="/privacy">Privacy Policy</Link>
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
