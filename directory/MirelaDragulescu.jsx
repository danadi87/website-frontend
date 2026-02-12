import React from "react";
import { useNavigate } from "react-router-dom";
import MirelaProfile from "../src/assets/IMG_4579.jpg";
import { ProfilePage } from "../components/ProfilePage";
import "../src/styles/directory/MirelaDragulescu.css";

export function MirelaDragulescu() {
  const navigate = useNavigate();

  return (
    <ProfilePage
      onBack={() => navigate(-1)}
      name="Mirela Dragulescu"
      title="Full-stack Developer (MERN)"
      image={MirelaProfile}
      skills={[
        "React",
        "HTML / CSS",
        "GitHub",
        "MongoDB",
        "Node.js",
        "Vite",
        "REST APIs",
      ]}
      projects={[
        {
          name: "AllInOneClick - A One-Stop Delivery Platform",
          url: "https://allinoneclick.netlify.app/",
        },
        {
          name: "The Wandering Quill - The library of your dreams",
          url: "https://the-wandering-quill.netlify.app/",
        },
        {
          name: "Clean City - 2D Game",
          url: "https://danadi87.github.io/clean-city-game/",
        },
      ]}
      certifications={[
        "Ironhack Full-Stack Web Development Bootcamp",
        "Agile Project Management Foundations",
      ]}
    />
  );
}
