
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-center">
       <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">Get In Touch</h2>
       <p className="mt-4 max-w-xl mx-auto leading-relaxed text-slate-400">
         I'm currently open to new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out. I'll do my best to get back to you!
       </p>
       <div className="mt-8">
         <a href="mailto:lalitkumar807649@gmail.com" className="inline-block px-8 py-4 border border-violet-400 text-violet-400 rounded-md hover:bg-violet-400/10 transition-colors text-base font-medium">
           Say Hello
         </a>
       </div>
    </section>
  );
};

export default Contact;
