
import React from 'react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="text-center text-sm text-slate-500 py-8">
            <div className="flex items-center justify-center space-x-4 mb-4 lg:hidden">
                <a href="https://github.com/Lalit-kumar001" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors">
                    <GitHubIcon className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/in/lalit-kumar-348097230" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors">
                    <LinkedInIcon className="h-6 w-6" />
                </a>
            </div>
            <p>
                Built with React & Tailwind CSS. Design inspired by modern developer portfolios.
            </p>
            <p>
                &copy; {new Date().getFullYear()} Lalit Kumar. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;
