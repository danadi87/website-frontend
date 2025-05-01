import React from "react";
import { useNavigate } from "react-router-dom";
import "../src/styles/FinancialServices.css";

export function FinancialServices() {
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
