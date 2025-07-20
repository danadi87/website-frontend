import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "@styles/SportsStrategy.css";
import { Football } from "./Football";

export function SportsStrategy() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="main-section">
        <button onClick={handleBackButton} className="back-button">
          Back
        </button>
        <p>Sports:</p>
        <ul>
          <li>
            <Link to="/football">Football</Link>
          </li>
          <li>Basketball</li>
          <li>Tennis</li>
          <li>Swimming</li>
          <li>Voleyball</li>
          <li>Beach voleyball</li>
        </ul>
      </div>
    </div>
  );
}
