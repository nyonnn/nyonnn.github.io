// src/components/ExperienceSection.js
import React from 'react';
import './ExperienceSection.css';

function ExperienceSection() {
  return (
    <section className="experience-section">
      <div className="experience-image">
        <img src={`${process.env.PUBLIC_URL}/images/experience.png`} alt="Experience" />
      </div>
      <div className="experience-content">
        <h2>My Experience</h2>
        <ul>
          <li><a href="https://www.costco.com" target="_blank" rel="noopener noreferrer">Costco Merchandising</a></li>
          <li><a href="https://discord.gg/U8eWmnWaTv" target="_blank" rel="noopener noreferrer">Founder of Neo Indicators</a></li>
        </ul>
      </div>
    </section>
  );
}

export default ExperienceSection;
