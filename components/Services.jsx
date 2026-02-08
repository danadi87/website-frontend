import React from "react";
import "@styles/Services.css";
import { Link, useNavigate } from "react-router-dom";
import webDevImage from "@assets/web_development.png";
import finServImage from "@assets/financial-services.png";
import sportsStrategyImage from "@assets/sports-strategy.jpg";
import supplyChainImage from "@assets/supply-chain.png";
import talentDevImage from "@assets/TalentDevImg.png";
import techImage from "@assets/tech.jpg";

export function Services() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleBackButton} className="back-button">
        Back
      </button>
      <div className="main-section">
      <ul>
        <li className="section">
          <div className="section-content">
            <Link to="/web-development">Web Development</Link>
            <Link to="/web-development">
              <img className="webdev-image" src={webDevImage}></img>
            </Link>
          </div>
        </li>

        <li className="section">
          <div className="section-content">
            <Link to="/finance">Financial Services</Link>
            <Link to="/finance">
              <img className="financial-services" src={finServImage}></img>
            </Link>
          </div>
        </li>
        <li className="section">
          <div className="section-content">
            <Link to="/supply-chain">Supply Chain</Link>
            <Link to="/supply-chain">
              <img className="supply-chain" src={supplyChainImage}></img>
            </Link>
          </div>
        </li>
        <li className="section">
          <div className="section-content">
            <Link to="/sports">Sports Strategy</Link>
            <Link to="/sports">
              <img className="sports-strategy" src={sportsStrategyImage}></img>
            </Link>
          </div>
        </li>
        <li className="section">
          <div className="section-content">
            <Link to="/talent">Talent Development</Link>
            <Link to="/talent">
              <img className="talent-dev" src={talentDevImage}></img>
            </Link>
          </div>
        </li>
        <li className="section">
          <div className="section-content">
            <Link to="/tech">Tech</Link>
            <Link to="/tech">
              <img className="tech" src={techImage}></img>
            </Link>
          </div>
        </li>
      </ul>
    </div>
    </div>
  );
}
