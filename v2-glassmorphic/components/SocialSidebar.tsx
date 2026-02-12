import React from "react";

const SocialSidebar: React.FC = () => {
  const socialLinks = [
    {
      icon: "bxl-github",
      label: "GitHub",
      href: "https://github.com/ashwinbiju47",
    },
    {
      icon: "bxl-linkedin-square",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/4shx1/",
    },
  ];

  return (
    <div className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-2xl text-primary dark:text-white z-50 glass-panel px-3 py-6 rounded-full border border-white/20 dark:border-white/5 shadow-xl animate-fade-in">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="hover:text-black dark:hover:text-gray-300 transition-all transform hover:scale-110 duration-200 relative group"
          aria-label={link.label}
        >
          <i className={`bx ${link.icon}`}></i>
          {/* Tooltip */}
          <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[60]">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
