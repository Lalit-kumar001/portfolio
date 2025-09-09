
import React from 'react';
import type { SkillCategory } from '../types';

const skillsData: SkillCategory[] = [
  {
    title: 'Primary',
    skills: ['Python', 'C++', 'Node.js', 'Express', 'React.js', 'HTML', 'CSS', 'JavaScript', 'Pandas', 'NumPy', 'Basic Azure']
  },
  {
    title: 'Familiar With',
    skills: ['Git', 'GitHub', 'React Native']
  },
  {
    title: 'Databases',
    skills: ['SQL', 'MongoDB']
  },
  {
    title: 'Languages',
    skills: ['English', 'Hindi']
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Teamwork', 'Communication', 'Time Management', 'Adaptability']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Technical Skills">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h2>
      </div>
      <div>
        {skillsData.map((category) => (
          <div key={category.title} className="mb-6">
            <h3 className="font-semibold text-slate-200 mb-2">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-400">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
