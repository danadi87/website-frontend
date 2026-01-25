import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "@styles/WebDevelopment.css";
import { MirelaDragulescu } from "../directory/MirelaDragulescu";

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
      <ul>
        <li>
          <Link to="/mireladragulescu">Mirela Dragulescu</Link>
        </li>
      </ul>
    </div>
  );
}
