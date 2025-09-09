
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px',
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="text-slate-300 font-sans leading-relaxed antialiased selection:bg-violet-400 selection:text-violet-900">
      <Header activeSection={activeSection} />
      <SocialLinks />
      <main id="content" className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:w-1/2 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
            <Hero activeSection={activeSection} />
          </div>
          <div className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
