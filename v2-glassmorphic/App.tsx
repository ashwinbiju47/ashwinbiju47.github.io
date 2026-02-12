import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import LinkSafetyMiddleware from './components/LinkSafetyMiddleware';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or logic could be added here
    // Defaulting to dark as per the "dark" class in one of the source examples, or let user toggle
    // Let's default to dark for that sleek look
    setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <LinkSafetyMiddleware />
      
      <div className="ambient-bg-holder">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <SocialSidebar />
      
      <main className="pb-28 md:pb-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Qualification />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;