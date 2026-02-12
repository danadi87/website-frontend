import React from "react";
import "../src/styles/ProfilePage.css";

export function ProfilePage({
  name,
  title,
  image,
  skills = [],
  projects = [],
  certifications = [],
  onBack,
  linkedin,
  github,
  cv,
}) {
  return (
    <div className="profile-page">
      {onBack && (
        <button onClick={onBack} className="back-button">
          Back
        </button>
      )}

      <div className="profile-card fade-in">
        <img className="profile-image" src={image} alt={name} />
        <div className="profile-header">
          <h1 className="profile-name">{name}</h1>
          <h2 className="profile-title">{title}</h2>
        </div>
      </div>

      <section className="profile-section slide-up">
        <h3 className="section-title">Skills</h3>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="profile-section slide-up">
        <h3 className="section-title">Projects</h3>
        <ul className="projects-list">
          {projects.map((project) => (
            <li key={project.url}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {certifications.length > 0 && (
        <section className="profile-section slide-up">
          <h3 className="section-title">Certifications</h3>
          <ul className="certifications-list">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>
      )}
      <div className="profile-actions">
        {linkedin && (
          <a href={linkedin} target="_blank" className="action-btn secondary">
            LinkedIn
          </a>
        )}
        {github && (
          <a href={github} target="_blank" className="action-btn secondary">
            GitHub
          </a>
        )}
        {cv && (
          <a href={cv} className="action-btn" download>
            Download CV
          </a>
        )}
      </div>
    </div>
  );
}
