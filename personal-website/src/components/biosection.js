import React from 'react';
import './BioSection.css';

function BioSection() {
  return (
    <section className="bio-section">
      <div className="bio-content">
        <h1>Maxim Maletsky</h1>
        <p>Computer Science Student, Pinescript Developer, Financial Analyst</p>
        <a href="https://github.com/nyonnn" target="_blank" rel="noopener noreferrer">
          <button>See My Projects</button>
        </a>
      </div>
      <div className="bio-image">
        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile" />
      </div>
    </section>
  );
}

export default BioSection;
