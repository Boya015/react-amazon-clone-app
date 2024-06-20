import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg"
          alt="Amazon logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login_signInButton" onClick={SignIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON Fake clone conditions Use &
          Sale, Please see our Privacy Notice, our Cookies Notice and out
          Interest Based Ads Notice
        </p>
        <button className="login_registerButton" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
