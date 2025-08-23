import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Research from './components/Research';
import Skills from './components/Skills';
import Training from './components/Training';
import Conferences from './components/Conferences';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';

function App() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header language={language} setLanguage={setLanguage} />
      <About language={language} />
      <Education language={language} />
      <Experience language={language} />
      <Research language={language} />
      <Skills language={language} />
      <Training language={language} />
      <Conferences language={language} />
      <Volunteer language={language} />
      <Contact language={language} />
    </div>
  );
}

export default App;