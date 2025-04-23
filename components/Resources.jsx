import React from "react";
import { useNavigate } from "react-router-dom";

export function Resources() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };
  return (
    <div className="resources">
      <button onClick={handleBackButton} className="back-button">
        Back
      </button>
      <p>Hello world!</p>
    </div>
  );
}
