import React from 'react';
import { CodeIcon } from './Icons';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-screen-xl px-6 py-4 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-xl font-bold text-slate-200 hover:text-violet-400 transition-colors">
                <CodeIcon className="h-6 w-6 text-violet-400" />
                <span>Lalit Kumar</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="#about" onClick={handleNavClick} className={`transition-colors hover:text-violet-400 ${activeSection === 'about' ? 'text-violet-400' : ''}`}>About</a>
                <a href="#skills" onClick={handleNavClick} className={`transition-colors hover:text-violet-400 ${activeSection === 'skills' ? 'text-violet-400' : ''}`}>Skills</a>
                <a href="#projects" onClick={handleNavClick} className={`transition-colors hover:text-violet-400 ${activeSection === 'projects' ? 'text-violet-400' : ''}`}>Projects</a>
                <a href="#education" onClick={handleNavClick} className={`transition-colors hover:text-violet-400 ${activeSection === 'education' ? 'text-violet-400' : ''}`}>Education</a>
                <a href="#contact" onClick={handleNavClick} className={`transition-colors hover:text-violet-400 ${activeSection === 'contact' ? 'text-violet-400' : ''}`}>Contact</a>
            </nav>
            <a href="mailto:lalitkumar807649@gmail.com" className="px-4 py-2 border border-violet-400 text-violet-400 rounded-md hover:bg-violet-400/10 transition-colors text-sm">
                Get In Touch
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;