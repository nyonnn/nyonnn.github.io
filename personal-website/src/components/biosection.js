// src/components/BioSection.js
import React from 'react';
import './BioSection.css';

function BioSection() {
  return (
    <section className="bio-section">
      <div className="bio-content">
        <h1>Maxim Maletsky</h1>
        <p>Computer Science Student, Pinescript Developer, Financial Analyst</p>
        <a href="https://ca.linkedin.com/in/maxim-maletsky-ab42a1235" target="_blank" rel="noopener noreferrer">
          <button>See My Projects</button>
        </a>
      </div>
      <div className="bio-image">
        <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="Profile" />
      </div>
    </section>
  );
}

export default BioSection;
