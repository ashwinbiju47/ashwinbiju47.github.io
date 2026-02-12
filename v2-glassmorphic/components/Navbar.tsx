import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [showMobileHeader, setShowMobileHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Lock mechanism to prevent scroll listener from interfering with click navigation
  const isManualScroll = useRef(false);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  
  const navIcons: {[key: string]: string} = {
    home: 'bx-home-alt-2',
    about: 'bx-user',
    skills: 'bx-chip',
    projects: 'bx-briefcase-alt-2',
    contact: 'bx-message-square-dots'
  };

  // Handle Scroll for Active Section and Mobile Header Visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mobile Header Logic: Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowMobileHeader(false);
      } else {
        setShowMobileHeader(true);
      }
      setLastScrollY(currentScrollY);

      // Active Section Logic
      // Only update active section via scroll if user is NOT manually navigating via click
      if (!isManualScroll.current) {
          const scrollOffset = 300; 
          const scrollPosition = currentScrollY + scrollOffset;
          
          let currentSection = activeSection;
          
          // Find which section is currently active
          for (const item of navLinks) {
            const sectionId = item.toLowerCase();
            const element = document.getElementById(sectionId);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                 currentSection = sectionId;
              }
            }
          }
          
          if (currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
        // 1. Lock scroll listener
        isManualScroll.current = true;
        
        // 2. Set Active State Immediately
        setActiveSection(sectionId);
        
        // 3. Scroll
        element.scrollIntoView({ behavior: 'smooth' });
        
        // 4. Unlock after animation (approx 1s usually covers the scroll duration)
        setTimeout(() => {
            isManualScroll.current = false;
        }, 1000);
    }
  };

  return (
    <>
      {/* ================= DESKTOP NAVIGATION ================= */}
      <nav className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-4">
        <div className="glass-nav rounded-full px-5 py-2.5 flex items-center justify-between gap-8 max-w-4xl w-full">
          <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="font-serif font-bold text-lg text-primary dark:text-white hover:opacity-80 transition-opacity"
          >
            Ashwin.
          </a>

          <ul className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
            {navLinks.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                  <li key={item}>
                  <a 
                      href={`#${sectionId}`} 
                      onClick={(e) => handleNavClick(e, sectionId)}
                      className={`hover:text-accent transition-colors relative group py-1 ${isActive ? 'text-accent' : ''}`}
                  >
                      {item}
                      <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </a>
                  </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme} 
              className="glass-btn rounded-full w-14 h-8 relative block transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
               <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center
                  ${darkMode ? 'left-[calc(100%-27px)] bg-accent text-white shadow-[0_0_10px_rgba(108,99,255,0.4)]' : 'left-[3px] bg-white text-orange-400 shadow-sm'}
               `}>
                  <i className={`bx ${darkMode ? 'bxs-moon' : 'bxs-sun'} text-xs leading-none`}></i>
               </div>
            </button>

            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="flex items-center gap-2 bg-accent hover:bg-opacity-90 text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg shadow-accent/30 transition-all hover:shadow-accent/50 transform hover:-translate-y-0.5 h-8"
            >
              Let's Connect <i className="bx bx-paper-plane text-base"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE NAVIGATION ================= */}
      
      {/* 1. Mobile Top Header (Minimalist) */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-40 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${showMobileHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="px-6 py-5 flex items-center justify-between">
            <a href="#home" className="font-serif font-bold text-lg text-primary dark:text-white tracking-tight drop-shadow-md">Ashwin.</a>
            
            <button 
                onClick={toggleTheme} 
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/5 text-primary dark:text-white hover:bg-accent hover:text-white transition-colors shadow-sm"
                aria-label="Toggle theme"
            >
                <i className={`bx ${darkMode ? 'bxs-moon' : 'bxs-sun'} text-sm`}></i>
            </button>
        </div>
      </div>

      {/* 2. Mobile Bottom Tab Bar (Fixed Grid Layout & Locking Animation) */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-[320px]">
        <div className="rounded-full p-1.5 backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/50">
            {/* Grid layout ensures perfect alignment without glitches */}
            <ul className="grid grid-cols-5 items-center justify-items-center h-12">
                {navLinks.map((item) => {
                    const sectionId = item.toLowerCase();
                    const isActive = activeSection === sectionId;
                    return (
                        <li key={item} className="w-full h-full flex items-center justify-center">
                            <a 
                                href={`#${sectionId}`}
                                onClick={(e) => handleNavClick(e, sectionId)}
                                className="relative flex items-center justify-center w-full h-full group"
                                aria-label={item}
                            >
                                {/* Active Indicator Background - Scales up when active */}
                                <span className={`absolute bg-accent rounded-full transition-all duration-300 ease-out
                                    ${isActive ? 'w-10 h-10 opacity-100 scale-100 shadow-lg shadow-accent/30' : 'w-8 h-8 opacity-0 scale-50'}`}>
                                </span>
                                
                                {/* Icon */}
                                <i className={`bx ${navIcons[sectionId]} text-xl z-10 transition-colors duration-300 relative
                                    ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-white'}`}>
                                </i>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;