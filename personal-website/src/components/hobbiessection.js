// src/components/HobbiesSection.js
import React from 'react';
import './HobbiesSection.css';

function HobbiesSection() {
  return (
    <section className="hobbies-section">
      <div className="hobbies-content">
        <h2>Hobbies</h2>
        <ul>
          <li>1. Programming</li>
          <li>2. Fitness</li>
          <li>3. Daytrading</li>
        </ul>
      </div>
      <div className="hobbies-image">
        <img src={`${process.env.PUBLIC_URL}/images/hobby.jpg`} alt="Hobby" />
      </div>
    </section>
  );
}

export default HobbiesSection;
