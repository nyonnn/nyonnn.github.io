// src/components/BioSection.js
import React from 'react';
import './BioSection.css';

function BioSection() {
  return (
    <section className="bio-section">
      <div className="bio-content">
        <h1>Maxim Maletsky</h1>
        <p>Computer Science Student, Pinescript Developer, Financial Analyst</p>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <button>See My Projects</button>
        </a>
      </div>
      <div className="bio-image">
        <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="Maxim Maletsky's profile photo" />
      </div>
    </section>
  );
}

export default BioSection;
