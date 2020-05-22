import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { axiosWithBase } from '../../Helpers/axios';

import Spinner from '../Reusables/Spinner';

function Register(props) {
  const [error, setError] = useState(null);
  const [input, setInput] = useState({
    email: '',
    password: '',
    confirm: '',
    weight: '',
  });

  const changeHandler = (e) => {
    setError(null);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    props.setSpinning(true);
    const newUser = {
      email: input.email,
      password: input.password,
      currentWeight: input.weight,
      startWeight: input.weight,
    };

    if (input.password !== input.confirm) {
      return;
    }

    axiosWithBase
      .post('/auth/register', newUser)
      .then(() => {
        props.setSpinning(false);
        props.history.push('/confirm');
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setInput({ email: '', password: '', confirm: '', weight: '' });
          setError('Email already in use');
        } else {
          setInput({ email: '', password: '', confirm: '', weight: '' });
          setError('There was an error during registration.');
        }
        props.setSpinning(false);
      });
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
          style={{ border: error ? '2px solid red' : null }}
          placeholder={error ? error : null}
          onChange={changeHandler}
          required
        />
        <label> Password</label>
        <input
          type="password"
          minLength="8"
          maxLength="25"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="8 - 25 characters long. Must include one number and one letter."
          name="password"
          value={input.password}
          onChange={changeHandler}
          required
        />
        <label> Confirm Password</label>
        <input
          style={{
            border: input.password !== input.confirm ? '2px solid red' : null,
          }}
          type="password"
          minLength="8"
          maxLength="25"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="8 - 25 characters long. Must include one number and one letter."
          name="confirm"
          value={input.confirm}
          onChange={changeHandler}
          required
        />
        <label> Current Weight (lbs)</label>
        <input
          type="number"
          min="0"
          max="1000"
          step="0.1"
          name="weight"
          value={input.weight}
          onChange={changeHandler}
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
