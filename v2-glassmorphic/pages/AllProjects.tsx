import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types';
import projectsData from '../data/projects.json';

const projects: Project[] = projectsData as Project[];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <div
    className="group relative overflow-hidden rounded-[2rem] glass-panel transition-all duration-300 cursor-pointer border border-white/20 dark:border-white/10"
    onClick={onClick}
  >
    <div className="h-56 overflow-hidden border-b border-white/20 dark:border-white/10 relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-primary/70 dark:bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white mb-2">{project.category}</h3>
          <button
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            className="inline-block px-5 py-2.5 bg-accent text-white rounded-full font-semibold text-sm hover:bg-opacity-90 shadow-lg transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
    <div className="p-7">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-white/40 dark:bg-white/10 border border-white/20 dark:border-white/10 text-xs font-semibold rounded-full text-primary dark:text-gray-200 uppercase tracking-wide backdrop-blur-sm">{tag}</span>
        ))}
      </div>
      <h3 className="text-xl font-bold font-serif text-primary dark:text-white mb-3">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed line-clamp-2">{project.description}</p>
      <button
        onClick={(e) => { e.stopPropagation(); onClick(); }}
        className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary dark:text-white group-hover:underline decoration-2 underline-offset-4 decoration-accent"
      >
        View Project <i className="bx bx-right-arrow-alt ml-2 text-lg text-accent"></i>
      </button>
    </div>
  </div>
);

const AllProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen pt-32 pb-28">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 mb-8 text-primary dark:text-white hover:text-accent transition-colors group"
            >
              <i className="bx bx-left-arrow-alt text-xl group-hover:-translate-x-1 transition-transform"></i>
              Back
            </button>
            <h1 className="text-5xl md:text-6xl font-bold text-primary dark:text-white mb-3 font-serif drop-shadow-sm">
              All Projects
            </h1>
            <span className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 font-medium">
              Complete portfolio of work
            </span>
          </div>

          {/* Grid of projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-gray-900/40 dark:bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white/60 dark:bg-[#121212]/80 backdrop-blur-3xl border border-white/50 dark:border-white/10 shadow-2xl rounded-[2.5rem] flex flex-col lg:flex-row animate-fade-in ring-1 ring-white/20">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/40 dark:bg-black/40 text-primary dark:text-white hover:bg-red-500 hover:text-white transition-all border border-white/20 backdrop-blur-sm shadow-lg group"
            >
              <i className='bx bx-x text-2xl group-hover:rotate-90 transition-transform duration-300'></i>
            </button>
            <div className="w-full lg:w-[45%] h-64 sm:h-80 lg:h-auto relative flex-shrink-0">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover lg:rounded-l-[2.5rem]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden"></div>
              <div className="hidden lg:flex absolute bottom-6 left-6">
                <span className="px-4 py-2 bg-black/50 backdrop-blur-md text-white text-xs font-semibold rounded-xl border border-white/10 shadow-lg">
                  {selectedProject.category}
                </span>
              </div>
            </div>
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
              </div>
              <div className="mt-auto pt-6 border-t border-gray-200/50 dark:border-white/5">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-accent text-white font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  Live Preview
                  <i className='bx bx-link-external group-hover:translate-x-1 transition-transform'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllProjects;
