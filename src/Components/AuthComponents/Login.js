import React from 'react';

function Login(props) {
  return (
    <>
      <h4>Log in to your account</h4>
      <span onClick={props.switch}>Not registered?</span>
      <form>
        <label>Email</label>
        <input type="email" required />
        <label> Password</label>
        <input type="password" required />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
