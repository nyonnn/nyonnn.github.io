// src/components/ProjectsSection.js
import React from 'react';
import './ProjectsSection.css';

function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="projects-card">
        <h2>My Projects</h2>
        <ul>
          <li><a href="https://www.tradingview.com/u/neommxm/" target="_blank" rel="noopener noreferrer">Neo Trading Indicator Suite</a></li>
          <li><a href="https://github.com/nyonnn" target="_blank" rel="noopener noreferrer">My GitHub</a></li>
          <li><a href="https://github.com/nyonnn/blob-factory" target="_blank" rel="noopener noreferrer">Game Project</a></li>
        </ul>
      </div>
      <div className="projects-image">
        <img src={`${process.env.PUBLIC_URL}/images/project.jpg`} alt="Macbook with code onscreen" />
      </div>
    </section>
  );
}

export default ProjectsSection;
