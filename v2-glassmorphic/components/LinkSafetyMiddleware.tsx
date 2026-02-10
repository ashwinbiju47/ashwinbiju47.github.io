import React, { useEffect, useState } from 'react';

interface ErrorState {
  isActive: boolean;
  targetName: string;
  mascot: string;
  quote: string;
}

const LinkSafetyMiddleware: React.FC = () => {
  const [state, setState] = useState<ErrorState>({
    isActive: false,
    targetName: '',
    mascot: 'bx-bot',
    quote: ''
  });

  // Fun mascots and developer excuses/quotes
  const mascots = [
    'bx-bot',             // Robot
    'bx-ghost',           // Ghost
    'bx-planet',          // Alien planet
    'bx-coffee-togo',     // Coffee
    'bx-joystick',        // Gamer
    'bx-bug'              // The bug
  ];

  const quotes = [
    "It works on my machine... just not here.",
    "This feature is currently compiling. Please wait (forever).",
    "I haven't pushed this code to production yet.",
    "A wild bug appeared and ate this link.",
    "404: Motivation not found.",
    "This link is playing hide and seek. It's winning."
  ];

  const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      // Find the closest anchor tag if the click was on/inside one
      const link = (event.target as HTMLElement).closest('a');

      if (link) {
        const href = link.getAttribute('href');
        
        // Check for placeholder links
        if (href === '#' || href === 'javascript:void(0)' || href === '') {
          event.preventDefault(); // Stop default navigation
          event.stopPropagation(); // Stop bubbling
          
          // Try to determine what was clicked to give a better message
          let name = "Unknown Feature";
          
          // Check for social icons specifically or use aria-label/text
          if (link.querySelector('.bxl-facebook')) name = "Facebook Page";
          else if (link.querySelector('.bxl-instagram')) name = "Instagram Feed";
          else if (link.querySelector('.bxl-twitter') || link.querySelector('.x-logo-icon')) name = "X Profile";
          else if (link.querySelector('.bxl-linkedin-square')) name = "LinkedIn Profile";
          else if (link.querySelector('.bxl-github')) name = "GitHub Repo";
          else if (link.textContent && link.textContent.trim().length > 0) name = link.textContent.trim();
          
          setState({
            isActive: true,
            targetName: name,
            mascot: getRandomItem(mascots),
            quote: getRandomItem(quotes)
          });
          
          // Lock body scroll
          document.body.style.overflow = 'hidden';
        }
      }
    };

    // Attach capture phase listener to ensure we catch it before other handlers
    window.addEventListener('click', handleGlobalClick, true);

    return () => {
      window.removeEventListener('click', handleGlobalClick, true);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const closeError = () => {
    setState(prev => ({ ...prev, isActive: false }));
    document.body.style.overflow = 'unset';
  };

  const goHome = () => {
     window.location.href = window.location.origin;
  };

  if (!state.isActive) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-[#f3f4f6] dark:bg-[#0A0A0A] transition-colors duration-300">
        
        {/* Floating Close Button */}
        <button 
            onClick={closeError}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-primary dark:text-white hover:bg-red-500 hover:text-white transition-all duration-300 border border-black/5 dark:border-white/10 shadow-lg group"
            aria-label="Close Error Screen"
        >
            <i className='bx bx-x text-3xl group-hover:rotate-90 transition-transform'></i>
        </button>

        {/* Background Atmosphere */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
            <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-blob"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-blob" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Main Content Card */}
        <div className="relative w-full max-w-2xl glass-panel p-8 md:p-16 rounded-[3rem] text-center border border-white/20 shadow-2xl animate-fade-in flex flex-col items-center">
            
            {/* The "Mascot" */}
            <div className="relative mb-8 group cursor-pointer" onClick={() => setState(p => ({...p, mascot: getRandomItem(mascots)}))}>
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl transform group-hover:scale-110 transition-transform"></div>
                <i className={`bx ${state.mascot} text-9xl text-accent relative z-10 drop-shadow-lg float-animate float-duration-fast`}></i>
                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-black border border-white/20 rounded-full p-2 shadow-lg rotate-12">
                   <i className='bx bx-question-mark text-2xl text-gray-500'></i>
                </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-serif text-primary dark:text-white mb-4">
                Dead End!
            </h1>
            
            <h2 className="text-xl md:text-2xl text-accent font-medium mb-8">
                The <span className="underline decoration-wavy underline-offset-4">{state.targetName}</span> link is broken.
            </h2>

            <div className="bg-white/40 dark:bg-white/5 rounded-2xl p-6 mb-10 border border-white/30 dark:border-white/10 max-w-lg">
                <p className="font-mono text-sm md:text-base text-gray-600 dark:text-gray-300 italic">
                    <span className="text-accent font-bold">Developer says:</span> "{state.quote}"
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <button 
                    onClick={closeError}
                    className="flex-1 px-8 py-4 bg-primary dark:bg-white text-white dark:text-primary rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:-translate-y-1"
                >
                    Go Back
                </button>
                <button 
                    onClick={goHome}
                    className="flex-1 px-8 py-4 glass-btn text-primary dark:text-white rounded-2xl font-bold text-lg hover:bg-white/40 dark:hover:bg-white/10 transition-all border border-white/20 hover:-translate-y-1"
                >
                    Return Home
                </button>
            </div>

            <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest">
                Error Code: 404_LINK_IS_A_POTATO
            </p>
        </div>
    </div>
  );
};

export default LinkSafetyMiddleware;