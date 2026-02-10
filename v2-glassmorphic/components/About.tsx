import React, { useMemo } from 'react';

const About: React.FC = () => {
  // Calculate dynamic experience duration from July 2023
  const experienceString = useMemo(() => {
    const startDate = new Date(2023, 6, 1); // Month is 0-indexed: 6 is July
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    
    // Adjust if current month is before start month
    if (months < 0) {
        years--;
        months += 12;
    }
    
    const parts = [];
    if (years > 0) parts.push(`${years} year${years !== 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} month${months !== 1 ? 's' : ''}`);
    
    return parts.join(' and ') || 'Just started';
  }, []);

  return (
    <section id="about" className="py-28">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-3 font-serif drop-shadow-sm">About Me</h2>
          <span className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 block font-medium">My Introduction</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="glass-panel p-8 rounded-3xl float-animate float-duration-normal float-delay-0 group cursor-default hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
            <i className="bx bx-medal text-3xl text-accent mb-4 group-hover:scale-110 transition-transform duration-300 block drop-shadow-sm"></i>
            <h3 className="font-semibold text-xl text-primary dark:text-white mb-1">Experience</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{experienceString}</p>
          </div>
          
          <div className="glass-panel p-8 rounded-3xl float-animate float-duration-slow float-delay-1 group cursor-default hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
            <i className="bx bxs-graduation text-3xl text-accent mb-4 group-hover:scale-110 transition-transform duration-300 block drop-shadow-sm"></i>
            <h3 className="font-semibold text-xl text-primary dark:text-white mb-1">Education</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Computer Science and Engineering</p>
          </div>
          
          <div className="glass-panel p-8 rounded-3xl float-animate float-duration-fast float-delay-2 group cursor-default hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
            <i className="bx bx-briefcase-alt-2 text-3xl text-accent mb-4 group-hover:scale-110 transition-transform duration-300 block drop-shadow-sm"></i>
            <h3 className="font-semibold text-xl text-primary dark:text-white mb-1">Completed</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">15+ projects</p>
          </div>
        </div>

        <div className="glass-panel max-w-3xl mx-auto p-8 rounded-[2rem] border border-white/40 dark:border-white/10">
          <p className="text-gray-700 dark:text-gray-300 leading-loose text-lg font-light text-center">
            MERN Stack Developer, Pixi.js game developer. I create responsive, user-friendly websites and interactive web applications. I thrive on bringing ideas to life through code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;