import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../Spinner';

function Register(props) {
  const [input, setInput] = useState({
    email: '',
    password: '',
    confirm: '',
    weight: null,
  });

  const submit = (e) => {
    e.preventDefault();

    if (input.password !== input.confirm) {
      return;
    }

    console.log(input);
  };

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
      <Link to="login">Already registered?</Link>
      <form onSubmit={submit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          required
        />
        <label> Password</label>
        <input
          type="password"
          minlength="8"
          maxlength="25"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="8 - 25 characters long. Must include one number and one letter."
          name="email"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          required
        />
        <label> Confirm Password</label>
        <input
          style={{
            border: input.password !== input.confirm ? '2px solid red' : null,
          }}
          type="password"
          minlength="8"
          maxlength="25"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="8 - 25 characters long. Must include one number and one letter."
          name="email"
          value={input.confirm}
          onChange={(e) => setInput({ ...input, confirm: e.target.value })}
          required
        />
        <label> Current Weight (lbs)</label>
        <input
          type="number"
          min="0"
          max="1000"
          name="email"
          value={input.weight}
          onChange={(e) => setInput({ ...input, weight: e.target.value })}
          required
        />
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
