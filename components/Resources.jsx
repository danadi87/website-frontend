import React from "react";
import { useNavigate } from "react-router-dom";
import "@styles/Resources.css";

export function Resources() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  const resourceCards=[
    {title:"Leadership", route:"/resources/leadership"},
    {title:"Performance", route:"/resources/performance"},
    {title:"Coaching", route:"/resources/coaching"},
    {title:"Change Management", route:"/resources/change-management"},
    {title:"Emotional Intelligence", route:"/resources/emotional-intelligence"},
  ];
  return (
    <div className="resources">
      <button onClick={handleBackButton} className="back-button">
        Back
      </button>
      <h1>People Development Hub</h1>
      <h2>
      Welcome to the centralized hub of learning resources, aimed to help you shape your skills</h2>
      <div className="cards-container">
        {resourceCards.map((card)=>(
          <div key={card.title} className="resource-card" onClick={()=>navigate(card.route)}>
        {card.title}
      </div>
        ))} 
    </div>
    </div>
  );
}
