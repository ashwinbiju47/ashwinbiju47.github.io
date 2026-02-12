import React from "react";
import { ExperienceItem } from "../types";

const education: ExperienceItem[] = [
  {
    title: "B.Tech: Computer Science",
    subtitle: "Mar Baselios Institute",
    year: "2019 - 2023",
  },
  {
    title: "High School",
    subtitle: "Secondary Education Board",
    year: "2017 - 2019",
  },
];

const experience: ExperienceItem[] = [
  {
    title: "Backend Developer",
    subtitle: "Squadra Media",
    year: "09/2024 - Present",
  },
  {
    title: "Jr. Software Developer",
    subtitle: "Probability Gaming",
    year: "08/2023 - 09/2024",
  },
  {
    title: "Full Stack Developer (MERN)",
    subtitle: "Freelance",
    year: "02/2023 - 07/2023",
  },
];

const Qualification: React.FC = () => {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-3 font-serif drop-shadow-sm">
            Qualification
          </h2>
          <span className="text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 font-medium">
            My personal journey
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <i className="bx bxs-graduation text-3xl text-accent drop-shadow-[0_0_5px_rgba(108,99,255,0.5)]"></i>
              <h3 className="text-2xl font-bold font-serif text-primary dark:text-white">
                Education
              </h3>
            </div>
            <div className="space-y-12 pl-2">
              {education.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <h4 className="font-bold text-lg text-primary dark:text-white">
                    {item.title}
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-300 block mt-1">
                    {item.subtitle}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 block mt-1">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <i className="bx bx-briefcase-alt text-3xl text-accent drop-shadow-[0_0_5px_rgba(108,99,255,0.5)]"></i>
              <h3 className="text-2xl font-bold font-serif text-primary dark:text-white">
                Experience
              </h3>
            </div>
            <div className="space-y-12 pl-2">
              {experience.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <h4 className="font-bold text-lg text-primary dark:text-white">
                    {item.title}
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-300 block mt-1">
                    {item.subtitle}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 block mt-1">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
