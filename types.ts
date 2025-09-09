
export interface Project {
  title: string;
  description: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  result: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
