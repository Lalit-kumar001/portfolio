
import React from 'react';
import type { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './Icons';

const projectsData: Project[] = [
  {
    title: 'Allergen',
    description: [
      'Developed a React Native application for users to create personalized allergy profiles for safer food consumption.',
      'Integrated barcode scanning to instantly detect allergens using the OpenFoodFact API.',
      'Optimized API calls and app performance for fast responses, even with limited network connectivity.',
    ],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/Lalit-kumar001',
  },
  {
    title: 'Connect-L',
    description: [
      'Built a dynamic alumni networking platform with secure registration, authentication, and real-time profile management.',
      'Implemented skill-based search and filtering for efficient user discovery.',
      'Developed a real-time messaging system with WebSocket to improve engagement.',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'WebSocket'],
    githubUrl: 'https://github.com/Lalit-kumar001',
  },
  {
    title: 'Typo',
    description: [
      'Created a gamified typing practice platform to enhance typing speed and accuracy.',
      'Designed an animated and interactive user interface entirely with JavaScript to increase user engagement.',
      'Deployed the project on GitHub Pages for global accessibility.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#', // Placeholder
    githubUrl: 'https://github.com/Lalit-kumar001',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>
      <div>
        <ul className="group/list">
          {projectsData.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:col-span-8">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noreferrer noopener" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-violet-400 focus-visible:text-violet-400 group/link text-base">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{project.title}
                          {project.liveUrl && <ExternalLinkIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />}
                        </span>
                      </a>
                    </div>
                  </h3>
                  {project.description.map((desc, i) => (
                      <p key={i} className="mt-2 text-sm leading-normal text-slate-400">{desc}</p>
                  ))}
                  <div className="mt-2 flex items-center gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="text-slate-400 hover:text-violet-400">
                        <GitHubIcon className="h-5 w-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" aria-label="Live Demo" className="text-slate-400 hover:text-violet-400">
                        <ExternalLinkIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-violet-400/10 px-3 py-1 text-xs font-medium leading-5 text-violet-400">{tech}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
