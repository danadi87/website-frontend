import React from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/Login.css";

export function Login() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={handleBackButton} className="back-button">
        Back
      </button>
    </div>
  );
}
