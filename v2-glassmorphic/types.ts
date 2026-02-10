export interface Project {
  title: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
}

export interface ExperienceItem {
  title: string;
  subtitle: string;
  year: string;
}

export interface SkillItem {
  name: string;
  level: string;
}

export interface SkillCategory {
  title: string;
  icon: string; // boxicon class
  skills: SkillItem[];
  delay: string;
  duration: string;
}
