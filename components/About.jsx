import React from "react";
import "../src/styles/About.css";
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
      <p>
        At MD Consulting and Solutions, we are driven by strong values and a
        genuine commitment to supporting both individuals and organizations
        across industries. Our mission is to build lasting partnerships that
        empower our clients to create meaningful change and shape a better
        future.
      </p>
      <p>
        We combine experience with innovation, collaboration, and a diverse
        range of backgrounds and skills to deliver tailored, high-impact
        solutions. Whether tackling complex challenges or seizing new
        opportunities, we strive for excellence in everything we do — making a
        positive impact that goes beyond business.
      </p>
    </div>
  );
}
