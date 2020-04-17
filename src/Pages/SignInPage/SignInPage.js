import React, { useState } from "react";
import { connect } from "react-redux";
import { startEmailLogin } from "../../Actions";
import "./SignInPage.styles.scss";

const SignInPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    if (!email || !password)
      return setError("Please enter email and password.");
    try {
      await props.startEmailLogin(email, password);
    } catch (err) {
      setError("Invalid username or password. Please try again.");
    }
    // setPassword("")
  };

  return (
    <div className="container">
      <form onSubmit={onLogin}>
        {error && <p>{error}</p>}
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            required
            onChange={(email) => setEmail(email.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(password) => setPassword(password.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default connect(null, {
  startEmailLogin,
})(SignInPage);
