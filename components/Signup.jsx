import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "@styles/Signup.css";
import { Spinner } from "./Spinner";
import { API_URL } from "../src/config/config";

const SIGNUP_FORM = {
  email: "",
  password: "",
  name: "",
  admin: "",
  profileImage: "",
};

export function Signup() {
  const [user, setUser] = useState({ ...SIGNUP_FORM });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState([]);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleProfileImage = (e) => setProfileImage(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password, name, profileImage };
    console.log("Sending request body", requestBody);

    setSubmitting(true);

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then(() => {
        setEmail("");
        setPassword("");
        setName("");
        setProfileImage([]);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  useEffect(() => {
    setUser({ ...SIGNUP_FORM });
  }, []);

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSignupSubmit} >
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
          disabled={submitting}
          autoComplete="off"
        ></input><br/>
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
          disabled={submitting}
          autoComplete="off"
        ></input>
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleName}
          disabled={submitting}
          autoComplete="off"
        ></input>
        <button
          type="submit"
          className="create-account-button"
          disabled={submitting}
        >
          {submitting ? <Spinner /> : "Create Account"}
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Already have an account?</p>
      <Link to={"/login"} className="login-button">
        <p>Log in</p>
      </Link>
    </div>
  );
}
