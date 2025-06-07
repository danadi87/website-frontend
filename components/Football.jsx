import React from "react";
import "../src/styles/Football.css";
import { Link, useNavigate } from "react-router-dom";
import { CarlosRodriguez } from "../directory/CarlosRodriguez";

export function Football() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="main-section">
      <button onClick={handleBackButton} className="back-button">
        Back
      </button>
      <ul>
        <li>
          <Link to="/carlosrodriguez">Carlos Rodríguez López</Link>
        </li>
      </ul>
    </div>
  );
}
