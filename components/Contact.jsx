import React from "react";
import { useNavigate } from "react-router-dom";
import "@styles/Contact.css";

export function Contact() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };
  return (
    <div className="contact">
      <button onClick={handleBackButton} className="back-button">
        Back
      </button>
    </div>
  );
}
