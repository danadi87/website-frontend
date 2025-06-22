import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../src/styles/Login.css";
import { AuthContext } from "../src/context/auth.context";
import { API_URL } from "../src/config/config";
import { Spinner } from "./Spinner";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="login">
      <button onClick={handleBackButton} className="back-button">
        Back
      </button>
      <h3>Login</h3>
      <form onSubmit={handleLoginSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          disabled={loading}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          disabled={loading}
        ></input>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? <Spinner /> : "Log in"}
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Don't have an account yet?</p>
      <Link to={"/signup"}>Sign up</Link>
    </div>
  );
}
