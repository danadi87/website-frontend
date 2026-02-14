import React from "react";
import { useNavigate } from "react-router-dom";
import "@styles/Resources.css";
import LeadershipImg from "../src/assets/Leadership.jpg";
import AIImg from "../src/assets/artificial-intelligence.jpeg";
import ChangeManagementImg from "../src/assets/change-management.jpeg";
import CoachingImg from "../src/assets/Coaching.jpeg";
import EIImg from "../src/assets/emotional-intelligence.jpeg";
import FinanceImg from "../src/assets/finance.png";
import PerformanceImg from "../src/assets/performance.jpeg";

export function Resources() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  const resourceCards = [
    { title: "Leadership", route: "/resources/leadership" },
    {
      title: "Artificial Intelligence",
      route: "/resources/artificial-intelligence",
    },
    { title: "Finance", route: "/resources/finance" },
    { title: "Performance", route: "/resources/performance" },
    { title: "Coaching", route: "/resources/coaching" },
    { title: "Change Management", route: "/resources/change-management" },
    {
      title: "Emotional Intelligence",
      route: "/resources/emotional-intelligence",
    },
  ];

  const articleCards = [
    {
      title: "Leadership",
      articleTitle: "Article Title",
      route: "/resources/leadership/article-1",
      image: LeadershipImg,
    },
    {
      title: "Artificial Intelligence",
      articleTitle: "Article Title",
      route: "/resources/artificial-intelligence/article-1",
      image: AIImg,
    },
    {
      title: "Finance",
      articleTitle: "Article Title",
      route: "/resources/finance/article-1",
      image: FinanceImg,
    },
    {
      title: "Performance",
      articleTitle: "Article Title",
      route: "/resources/performance/article-1",
      image: PerformanceImg,
    },
    {
      title: "Coaching",
      articleTitle: "Article Title",
      route: "/resources/coaching/article-1",
      image: CoachingImg,
    },
    {
      title: "Change Management",
      articleTitle: "Article Title",
      route: "/resources/change-management/article-1",
      image: ChangeManagementImg,
    },
    {
      title: "Emotional Intelligence",
      articleTitle: "Article Title",
      route: "/resources/emotional-intelligence/article-1",
      image: EIImg,
    },
  ];
  return (
    <div className="resources">
      <button onClick={handleBackButton} className="back-button">
        Back
      </button>
      <h1>People Development Hub</h1>
      <h2>
        Welcome to the centralized hub of learning resources, aimed to help you
        shape your skills
      </h2>
      <div className="cards-container">
        {resourceCards.map((card) => (
          <div
            key={card.title}
            className="resource-card"
            onClick={() => navigate(card.route)}
          >
            {card.title}
          </div>
        ))}
      </div>
      <div className="resources-cards-container">
        {articleCards.map((card) => (
          <div
            key={card.articleTitle}
            className="resource-medium-card"
            onClick={() => navigate(card.route)}
          >
            <div className="card-content">
              <span className="card-category">{card.title}</span>
              <h3 className="card-article-title">{card.articleTitle}</h3>
            </div>
            <img
              src={card.image}
              alt={card.articleTitle}
              className="card-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
