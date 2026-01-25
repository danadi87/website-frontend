import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "@styles/SportsStrategy.css";


export function SportsStrategy() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  const sportsCards=[
    {title:"Football", route:"/football"},
    {title:"Basketball", route:"/basketball"},
    {title:"Tennis", route:"/tennis"},
    {title:"Swimming", route:"/swimming"},
    {title:"Voleyball", route:"/voleyball"},
    {title:"Beach Voleyball", route:"/beach-voleyball"}
  ];
  return (
      <div className="main-section">
        <button onClick={handleBackButton} className="back-button">
          Back
        </button>
 <div className="cards-container">
{sportsCards.map((card)=>(
  <div key={card.title} className="sports-card" onClick={()=>navigate(card.route)}>{card.title}</div>
))}
 </div>

      </div>

  );
}
