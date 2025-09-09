
import React from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon, PhoneIcon } from './Icons';

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 z-10 hidden w-16 lg:block" aria-label="Social media">
      <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate-600 after:mt-6">
        <li>
          <a href="https://github.com/Lalit-kumar001" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-slate-200 hover:-translate-y-1 transition-transform">
            <span className="sr-only">GitHub</span>
            <GitHubIcon className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/lalit-kumar-348097230" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-slate-200 hover:-translate-y-1 transition-transform">
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon className="h-6 w-6" />
          </a>
        </li>
         <li>
          <a href="mailto:lalitkumar807649@gmail.com" className="block text-slate-400 hover:text-slate-200 hover:-translate-y-1 transition-transform">
            <span className="sr-only">Email</span>
            <EmailIcon className="h-6 w-6" />
          </a>
        </li>
         <li>
          <a href="tel:+91-8076496694" className="block text-slate-400 hover:text-slate-200 hover:-translate-y-1 transition-transform">
            <span className="sr-only">Phone</span>
            <PhoneIcon className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
