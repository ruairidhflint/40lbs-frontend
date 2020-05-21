import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { axiosWithBase } from '../../Helpers/axios';

import Spinner from '../Spinner';

function Login(props) {
  const [incorrectDetails, setIncorrectDetails] = useState(false);
  const [input, setInput] = useState({ email: '', password: '' });

  const changeHandler = (e) => {
    setIncorrectDetails(false);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    props.setSpinning(true);
    axiosWithBase
      .post('/auth/login', input)
      .then((res) => {
        props.setSpinning(false);
        if (res.data.user) {
          localStorage.setItem('authorization', res.data.token);
          props.setUser(res.data.user);
          props.history.push('/dashboard');
        } else {
          props.history.push('/confirm');
        }
      })
      .catch((err) => {
        console.log(err.message)
        setInput({ email: '', password: '' });
        setIncorrectDetails(true);
        props.setSpinning(false);
      });
  };

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
      <Link to="/register">Not registered?</Link>
      <form onSubmit={submit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          placeholder={incorrectDetails ? 'Incorrect login details' : null}
          style={{ border: incorrectDetails ? '2px solid red' : null }}
          onChange={changeHandler}
          required
        />
        <label> Password</label>
        <input
          type="password"
          name="password"
          style={{ border: incorrectDetails ? '2px solid red' : null }}
          value={input.password}
          onChange={changeHandler}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
