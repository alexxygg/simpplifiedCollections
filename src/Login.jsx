import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would typically make a request to a server to validate the username and password.
    // For simplicity, we'll just check if the username and password match some hard-coded values.
    if (username === "user" && password === "password") {
      setLoggedIn(true);
      navigate("/accountsList");
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {loggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
};

export default Login;
