import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-28 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start space-y-8 pl-4 lg:pl-12">
          <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-4 inline-flex border border-white/40 dark:border-white/10">
            <span className="h-[2px] w-8 bg-gray-500 dark:bg-gray-400 rounded-full"></span>
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-600 dark:text-gray-300">
              Software Developer
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold font-serif text-primary dark:text-white leading-[1.1] tracking-tight drop-shadow-sm">
            Ashwin <br />
            <span className="relative inline-block">
              Biju
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -z-10 transform -rotate-2 rounded-sm blur-sm"></span>
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed font-light glass-panel p-6 rounded-2xl border-none shadow-none bg-white/10 dark:bg-white/5">
            Creative problem solver with a keen and curious mind for new
            technologies. Building elegant, user-centric digital solutions that
            leave a lasting impression.
          </p>

          <div className="flex items-center gap-6 pt-2">
            <a
              href="#contact"
              className="group glass-btn px-8 py-4 rounded-2xl flex items-center gap-3 text-primary dark:text-white font-semibold"
            >
              <span className="tracking-wide">Say Hello</span>
              <i className="bx bx-send transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-accent"></i>
            </a>
          </div>

          <a
            href="#about"
            className="flex items-center gap-3 text-sm font-medium mt-16 animate-bounce text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors cursor-pointer"
          >
            <div className="border border-gray-400 dark:border-gray-500 rounded-full h-10 w-6 flex justify-center pt-2 bg-white/20 backdrop-blur-sm">
              <div className="w-1 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-scroll-down"></div>
            </div>
            <span className="tracking-wide text-xs uppercase">Scroll Down</span>
          </a>
        </div>

        {/* Hero Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end pr-4 lg:pr-12">
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
            <div className="absolute inset-0 glass-panel rounded-[3rem] rotate-3 transform transition-transform hover:rotate-6 border border-white/20 dark:border-white/10"></div>
            <img
              src="/images/profile.png"
              alt="Ashwin Biju Portrait"
              className="absolute inset-0 w-full h-full object-cover rounded-[3rem] glass-panel p-2 hover:scale-[1.02] transition-all duration-500 ease-out dark:grayscale-[30%] dark:hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
