import React from 'react';
import './App.css';
import BioSection from './components/BioSection';
import ProjectsSection from './components/ProjectsSection';
import HobbiesSection from './components/HobbiesSection';
import ExperienceSection from './components/ExperienceSection';

function App() {
  return (
    <div className="App">
      <BioSection />
      <ProjectsSection />
      <HobbiesSection />
      <ExperienceSection />
    </div>
  );
}

export default App;
