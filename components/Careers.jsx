import React from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/Careers.css";

export function Careers() {
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
