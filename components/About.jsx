import React from "react";
import "@styles/About.css";
import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="about">
      <button onClick={handleBackButton} className="back-button">
        Back
      </button>
      <h1>Who we are</h1>
      <p className="about-paragraph">
        At MD Consulting and Solutions, we are driven by strong values and a
        genuine commitment to supporting both individuals and organizations
        across industries. Our mission is to build lasting partnerships that
        empower our clients to create meaningful change and shape a better
        future.
      </p>
      <p className="about-paragraph">
        We combine experience with innovation, collaboration, and a diverse
        range of backgrounds and skills to deliver tailored, high-impact
        solutions. Whether tackling complex challenges or seizing new
        opportunities, we strive for excellence in everything we do — making a
        positive impact that goes beyond business.
      </p>
      <h2>Our values</h2>
      <ul>
        <li>Integrity and high ethical standards</li>
        <li>Partnership for better results</li>
        <li>The Client comes first</li>
        <p className="about-paragraph">
          We measure our success by the success of our clients
        </p>
        <li>Innovation</li>
        <li>Diversity</li>
      </ul>
    </div>
  );
}
