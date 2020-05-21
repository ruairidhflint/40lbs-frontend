import React, { useState } from 'react';

import Spinner from '../Spinner';

function Login(props) {
  const [input, setInput] = useState({ email: '', password: '' });

  const submit = (e) => {
    e.preventDefault();
    console.log(input);
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
      <span onClick={props.switch}>Not registered?</span>
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
          name="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
