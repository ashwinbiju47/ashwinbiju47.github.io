import React, { useState } from "react";

const Footer: React.FC = () => {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    throw new Error("Manual crash triggered from Footer");
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="pt-20 pb-10 border-t border-white/20 dark:border-white/10 relative z-10 glass-panel border-x-0 border-b-0 bg-white/30 dark:bg-[#0A0A0A]/50 backdrop-blur-md">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-serif text-primary dark:text-white mb-10 drop-shadow-sm">
          Ashwin
        </h2>

        <div className="flex justify-center gap-10 mb-12 text-primary dark:text-gray-300 font-medium">
          {["About", "Projects", "Skills"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.toLowerCase())}
              className="hover:text-gray-600 dark:hover:text-white transition-colors hover:underline underline-offset-4 decoration-accent cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-6 mb-16">
          <a
            href="https://www.instagram.com/_ashwin.biju/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 glass-btn rounded-xl text-primary dark:text-white hover:text-accent hover:border-accent/50 cursor-pointer flex items-center justify-center"
          >
            <i className="bx bxl-instagram text-xl"></i>
          </a>
          <a
            href="https://x.com/4SHx1i"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 glass-btn rounded-xl text-primary dark:text-white hover:text-accent hover:border-accent/50 cursor-pointer flex items-center justify-center"
            aria-label="X Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-500 font-light tracking-wide">
            © 4SHxI. All rights reserved
          </p>
        </div>
      </div>

      <a
        href="#home"
        onClick={(e) => handleScroll(e, "home")}
        className="fixed bottom-24 md:bottom-8 right-8 glass-btn text-primary dark:text-white p-3 rounded-xl z-50 hover:-translate-y-1 hover:text-accent border border-white/20 dark:border-white/10 cursor-pointer shadow-lg"
        aria-label="Back to top"
      >
        <i className="bx bx-up-arrow-alt text-xl"></i>
      </a>
    </footer>
  );
};

export default Footer;
