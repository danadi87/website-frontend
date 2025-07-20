import React from "react";
import { useNavigate } from "react-router-dom";
import "@styles/Careers.css";

export function Careers() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="careers">
      <button onClick={handleBackButton} className="back-button">
        Back
      </button>
    </div>
  );
}
