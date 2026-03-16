import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import AllProjects from './pages/AllProjects';

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
    <Router>
      <LinkSafetyMiddleware />
      
      <div className="ambient-bg-holder">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
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
          }
        />

        {/* All Projects page */}
        <Route
          path="/all-projects"
          element={
            <>
              <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
              <AllProjects />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;