import React from "react";

function Login(props) {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="checkbox" value="Remember me" /> Remember me<br></br>
        <input type="submit" value="Login" />
        <input type="submit" value="Login with Google" />
        <input type="submit" value="Login with Facebook" />
      </form>
    </div>
  );
}

export default Login;
