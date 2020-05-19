import React from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
  return (
    <>
      <h4>Create your account</h4>
      <span onClick={props.switch}>Already registered?</span>
      <form>
        <label>Email</label>
        <input type="email" required />
        <label> Password</label>
        <input type="password" required />
        <label> Confirm Password</label>
        <input type="password" required />
        <label> Current Weight (lbs)</label>
        <input type="number" required />
        <p>
          By registering, you agree to Forty Pound's{' '}
          <Link to="/">Terms of Conditions</Link> and{' '}
          <Link to="/">Privacy Policy</Link>
        </p>
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
