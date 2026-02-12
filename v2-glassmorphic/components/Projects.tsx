import React, { useState, useEffect } from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "E-Commerce Analytics Dashboard",
    category: "Analytics Dashboard",
    tags: ["React", "Node.js"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8kWSIjqrHk1V-J866q3JibG_jZGl1oW19uw1U8fVFjcnkKQuWzicBmmsFMNCGb_N_MvNez__XBQ90D2edw-0hF5RbXk3i-9EbVVdgWT5lzkWCxvvH9sfEtW4le7NWKPBXBtU45XwVQXW3hdo5JG4teIvH5i6YtKxdR5-G6gFzm-b1liTrODNb-CMeL0YwEjy3bKKUK_5EdwS3syta1AjPJwBY5Dwq0OaWTth9iF9r8RHBqR-g1JtI_wrZPvFOcQ9tW1DFJH_P9dzj",
    description: "A comprehensive dashboard for tracking sales, user metrics, and inventory with real-time data visualization."
  },
  {
    title: "Interactive 2D Web Game",
    category: "Web Game",
    tags: ["Pixi.js", "GSAP"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXmSiOEK8Zw16D46YsaiJzwwZbwnY79Fz0bXKDc37itsUKOPzcgIJ22nmx9UY5g72PS_VIgi_yIQxbj_tq5IHpXywHy1KQ2CMsSDrOklkfHy1bLXtGeNlSoc-gKTS5UrPGI4cCb14GrOAnQGQ6IJrjLoQWU3A3RqhUqCSKAY1abs0CIcY6ioPp4X2ZqVfkOorf7R4qyZi8MKLwZtUn2slG0jI72i2XDxmBS6xghKxjrEwp1DMdSRlgN9dE6VvF3d9g-rd-48K2Xf7F",
    description: "A browser-based platformer game featuring smooth animations, physics interactions, and particle effects."
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-3 font-serif drop-shadow-sm">Featured Projects</h2>
          <span className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 font-medium">Most recent work</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
                key={index} 
                className={`group relative overflow-hidden rounded-[2rem] glass-panel transition-all duration-300 transform float-animate ${index % 2 === 0 ? 'float-duration-normal float-delay-1' : 'float-duration-slow float-delay-3'} cursor-pointer border border-white/20 dark:border-white/10`}
                onClick={() => setSelectedProject(project)}
            >
              <div className="h-72 overflow-hidden border-b border-white/20 dark:border-white/10 relative">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-primary/70 dark:bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.category}</h3>
                    <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                        className="inline-block px-6 py-3 bg-accent text-white rounded-full font-semibold text-sm hover:bg-opacity-90 shadow-lg dark:shadow-[0_0_15px_rgba(108,99,255,0.4)] transition-colors"
                    >
                        View Details
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white/40 dark:bg-white/10 border border-white/20 dark:border-white/10 text-xs font-semibold rounded-full text-primary dark:text-gray-200 uppercase tracking-wide backdrop-blur-sm">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold font-serif text-primary dark:text-white mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-base mb-8 leading-relaxed line-clamp-2">{project.description}</p>
                <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                    className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary dark:text-white group-hover:underline decoration-2 underline-offset-4 decoration-accent"
                >
                   View Project <i className="bx bx-right-arrow-alt ml-2 text-lg text-accent"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphic Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-gray-900/40 dark:bg-black/60 backdrop-blur-md transition-opacity" 
             onClick={() => setSelectedProject(null)}
           ></div>

           {/* Content */}
           <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white/60 dark:bg-[#121212]/80 backdrop-blur-3xl border border-white/50 dark:border-white/10 shadow-2xl rounded-[2.5rem] flex flex-col lg:flex-row animate-fade-in ring-1 ring-white/20">
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/40 dark:bg-black/40 text-primary dark:text-white hover:bg-red-500 hover:text-white transition-all border border-white/20 backdrop-blur-sm shadow-lg group"
              >
                <i className='bx bx-x text-2xl group-hover:rotate-90 transition-transform duration-300'></i>
              </button>

              {/* Image Section */}
              <div className="w-full lg:w-[45%] h-64 sm:h-80 lg:h-auto relative flex-shrink-0">
                 <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover lg:rounded-l-[2.5rem]" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden"></div>
                 
                 {/* Floating Badges on Image (Desktop) */}
                 <div className="hidden lg:flex absolute bottom-6 left-6 gap-2">
                     <span className="px-4 py-2 bg-black/50 backdrop-blur-md text-white text-xs font-semibold rounded-xl border border-white/10 shadow-lg">
                        {selectedProject.category}
                     </span>
                 </div>
              </div>

              {/* Details Section */}
              <div className="w-full lg:w-[55%] p-8 md:p-12 flex flex-col">
                 <div className="mb-6">
                    <span className="lg:hidden inline-block px-3 py-1 mb-3 bg-accent/10 text-accent rounded-lg text-xs font-bold uppercase tracking-wider">
                        {selectedProject.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold font-serif text-primary dark:text-white mb-4 leading-tight">
                        {selectedProject.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                            <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                 </div>

                 <div className="prose dark:prose-invert prose-sm md:prose-base max-w-none text-gray-600 dark:text-gray-300 leading-relaxed mb-10 overflow-y-auto max-h-[30vh] lg:max-h-none pr-2">
                    <p>{selectedProject.description}</p>
                    <p className="mt-4">
                        This project demonstrates advanced techniques in web development, utilizing modern frameworks and libraries to achieve a high-performance, interactive user experience. Features include responsive design, real-time data processing, and seamless animations.
                    </p>
                    <p className="mt-4">
                        <strong>Key Challenges:</strong> Optimizing performance for low-end devices and ensuring cross-browser compatibility while maintaining visual fidelity.
                    </p>
                 </div>

                 <div className="mt-auto pt-6 border-t border-gray-200/50 dark:border-white/5 flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 py-4 px-6 rounded-2xl bg-accent text-white font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                        Live Preview 
                        <i className='bx bx-link-external group-hover:translate-x-1 transition-transform'></i>
                    </button>
                    <button className="flex-1 py-4 px-6 rounded-2xl border border-gray-300 dark:border-white/20 text-primary dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                        View Code 
                        <i className='bx bxl-github text-xl'></i>
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};

export default Projects;