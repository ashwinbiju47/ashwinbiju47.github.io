import React from 'react';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Developer",
    icon: "bx-layout",
    delay: "float-delay-3",
    duration: "float-duration-slow",
    skills: [
      { name: "HTML", level: "Basic" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
    ]
  },
  {
    title: "Backend Developer",
    icon: "bx-server",
    delay: "float-delay-0",
    duration: "float-duration-normal",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Node Js", level: "Basic" },
      { name: "Django", level: "Intermediate" },
      { name: "MySQL", level: "Basic" },
    ]
  },
  {
    title: "AI/ML",
    icon: "bx-brain",
    delay: "float-delay-4",
    duration: "float-duration-fast",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Tensorflow", level: "Basic" },
      { name: "Pandas", level: "Basic" },
    ]
  },
  {
    title: "Game Developer",
    icon: "bx-joystick",
    delay: "float-delay-2",
    duration: "float-duration-slow",
    skills: [
      { name: "Pixi Js", level: "Intermediate" },
      { name: "GSAP", level: "Intermediate" },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-3 font-serif drop-shadow-sm">Skills</h2>
          <span className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 font-medium">My technical level</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`glass-panel p-10 rounded-[2.5rem] hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 float-animate ${category.duration} ${category.delay}`}
            >
              <h3 className="text-center text-2xl font-serif font-semibold mb-10 text-primary dark:text-white">{category.title}</h3>
              <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className="flex gap-4 items-start">
                    <i className="bx bxs-badge-check text-xl text-accent mt-0.5 drop-shadow-[0_0_5px_rgba(108,99,255,0.5)]"></i>
                    <div>
                      <h4 className="font-semibold text-primary dark:text-white text-lg">{skill.name}</h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;