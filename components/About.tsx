
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div>
        <p className="mb-4">
          Aspiring full-stack developer with a strong foundation in computer science and hands-on experience in MERN stack development, React Native, and real-time communication systems. I'm skilled in designing and deploying user-focused applications, integrating APIs, and implementing secure authentication workflows.
        </p>
        <p className="mb-4">
          My passion lies in problem-solving, continuous learning, and building scalable, high-performance solutions that make a difference. Whether it's crafting an intuitive mobile app or architecting a robust backend, I'm driven by the challenge of turning complex ideas into reality.
        </p>
        <p>
          When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects, constantly seeking opportunities to grow and improve my skills.
        </p>
      </div>
    </section>
  );
};

export default About;
