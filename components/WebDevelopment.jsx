import React from "react";
import { useNavigate } from "react-router-dom";
import "@styles/WebDevelopment.css";

export function WebDevelopment() {
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
