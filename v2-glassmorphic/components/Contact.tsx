import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-3 font-serif drop-shadow-sm">Get in touch</h2>
          <span className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 font-medium">Contact me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-serif font-medium text-center lg:text-left text-primary dark:text-white mb-8">Connect with me</h3>
            
            <div className="glass-panel p-8 rounded-[2rem] text-center transition-all group hover:bg-white/40 dark:hover:bg-white/5 border border-white/20 dark:border-white/10">
              <i className="bx bx-envelope text-4xl mb-4 text-primary dark:text-white group-hover:scale-110 transition-transform drop-shadow-sm"></i>
              <h4 className="font-bold text-lg text-primary dark:text-white">Email</h4>
              <span className="text-sm text-gray-600 dark:text-gray-300 block mb-6 mt-1">ashwin.biju.k@gmail.com</span>
              <a href="mailto:ashwin.biju.k@gmail.com" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                 Write me <i className="bx bx-right-arrow-alt text-lg text-accent"></i>
              </a>
            </div>

            <div className="glass-panel p-8 rounded-[2rem] text-center transition-all group hover:bg-white/40 dark:hover:bg-white/5 border border-white/20 dark:border-white/10">
              <i className="bx bxl-whatsapp text-4xl mb-4 text-primary dark:text-white group-hover:scale-110 transition-transform drop-shadow-sm"></i>
              <h4 className="font-bold text-lg text-primary dark:text-white">Whatsapp</h4>
              <span className="text-sm text-gray-600 dark:text-gray-300 block mb-6 mt-1">+917356064321</span>
              <a href="#" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                 Write me <i className="bx bx-right-arrow-alt text-lg text-accent"></i>
              </a>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-[2.5rem] border border-white/20 dark:border-white/10">
            <h3 className="text-2xl font-serif font-medium text-center lg:text-left text-primary dark:text-white mb-8">Write me your project</h3>
            <form className="space-y-8 glass-input" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <fieldset className="relative rounded-2xl p-0 bg-transparent transition-colors">
                  <label className="text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 block mb-2 ml-2">Name</label>
                  <input type="text" placeholder="Insert your name" className="w-full rounded-xl p-4 text-primary dark:text-white placeholder-gray-500 focus:ring-0 text-base" />
                </fieldset>
              </div>
              
              <div className="relative group">
                <fieldset className="relative rounded-2xl p-0 bg-transparent transition-colors">
                  <label className="text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 block mb-2 ml-2">Mail</label>
                  <input type="email" placeholder="Insert your email" className="w-full rounded-xl p-4 text-primary dark:text-white placeholder-gray-500 focus:ring-0 text-base" />
                </fieldset>
              </div>
              
              <div className="relative group">
                <fieldset className="relative rounded-2xl p-0 bg-transparent transition-colors">
                  <label className="text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400 block mb-2 ml-2">Project</label>
                  <textarea placeholder="Tell me about your project" className="w-full rounded-xl h-48 p-4 text-primary dark:text-white placeholder-gray-500 focus:ring-0 text-base resize-none"></textarea>
                </fieldset>
              </div>
              
              <button type="submit" className="glass-btn text-primary dark:text-white px-10 py-5 rounded-2xl flex items-center gap-3 font-semibold group w-full sm:w-auto justify-center hover:bg-white/80 dark:hover:bg-white/10 dark:hover:border-accent/30">
                <span className="tracking-wide">Send Message</span>
                <i className="bx bx-send transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-accent"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;