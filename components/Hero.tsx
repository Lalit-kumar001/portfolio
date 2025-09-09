import React from 'react';

interface HeroProps {
  activeSection: string;
}

const Hero: React.FC<HeroProps> = ({ activeSection }) => {
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
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <a href="/">Lalit Kumar</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Full-Stack Developer
      </h2>
      <p className="mt-4 max-w-xs leading-normal text-slate-400">
        I build scalable and user-focused web applications.
      </p>
      <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3" href="#about" onClick={handleNavClick}>
                <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === 'about' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'about' ? 'text-slate-200' : 'text-slate-500'}`}>
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#skills" onClick={handleNavClick}>
                <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === 'skills' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'skills' ? 'text-slate-200' : 'text-slate-500'}`}>
                  Skills
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects" onClick={handleNavClick}>
                <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === 'projects' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'projects' ? 'text-slate-200' : 'text-slate-500'}`}>
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#education" onClick={handleNavClick}>
                <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === 'education' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'education' ? 'text-slate-200' : 'text-slate-500'}`}>
                  Education
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#contact" onClick={handleNavClick}>
                <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === 'contact' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === 'contact' ? 'text-slate-200' : 'text-slate-500'}`}>
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default Hero;