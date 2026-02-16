import React from "react";
import "@styles/About.css";
import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  const valuesCards = [
    {
      title: "Integrity and High Ethical Standards",
      content:
        "We act with honesty, transparency, and accountability in every engagement. Our decisions are guided by strong ethical principles, ensuring trust, confidentiality, and long-term credibility with our clients and partners.",
    },
    {
      title: "Partnership for Better Results",
      content:
        "We believe the best outcomes are achieved through true collaboration. By working closely with our clients as trusted partners, we align goals, share expertise, and build solutions that deliver sustainable impact.",
    },
    {
      title: "The Client Comes First",
      content:
        "Our clients' needs, priorities, and objectives are at the center of everything we do. We listen carefully, respond proactively, and tailor our approach to deliver measurable value and meaningful results.",
    },
    {
      title: "Innovation",
      content:
        "We embrace forward-thinking ideas and practical creativity to solve complex challenges. By continuously improving our methods and leveraging new technologies, we deliver modern, effective solutions.",
    },
    {
      title: "Diversity",
      content:
        "We value diverse perspectives, backgrounds, and experiences. By fostering an inclusive environment, we enhance creativity, strengthen decision-making, and better serve the diverse needs of our clients.",
    },
  ];

  return (
    <div className="about">
      <button onClick={handleBackButton} className="back-button">
        Back
      </button>
      <h1>Who we are</h1>
      <div className="about-content">
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
      </div>
      <h2>Our values</h2>
      <div className="values-cards-container">
        {valuesCards.map((card) => (
          <div key={card.title} className="values-card">
            <div className="card-content">
              <h3>{card.title}</h3>
            </div>
            <p className="content">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
