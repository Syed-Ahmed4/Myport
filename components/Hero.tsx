/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { LINKEDIN_URL } from '../constants';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError
      }
    }
  };

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-[#D6D1C7]">
      
      {/* Background - Technical/Abstract */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000&fm=webp" 
            alt="Abstract Network" 
            className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.4]"
            loading="eager"
        />
        <div className="absolute inset-0 bg-[#2C2A26]/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-24 max-w-[1800px] mx-auto pt-12 md:pt-0">
        <div className="animate-fade-in-up w-full max-w-4xl">
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-[#F5F2EB] tracking-tight mb-4 md:mb-6 drop-shadow-lg leading-none break-words">
            <a 
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity cursor-pointer hover:underline decoration-1 underline-offset-8 decoration-[#A8A29E]"
              title="Connect on LinkedIn"
            >
              Syed Ahmed
            </a>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6 md:mb-8 text-[#A8A29E] uppercase tracking-[0.15em] text-xs md:text-sm font-medium">
             <span>Computer Science Engineer</span>
             <span className="hidden md:block w-1.5 h-1.5 bg-[#A8A29E] rounded-full"></span>
             <span>Scientific Computing</span>
          </div>

          <p className="text-lg md:text-3xl text-[#D6D1C7] font-light leading-snug mb-10 border-l-2 border-[#A8A29E] pl-6 md:pl-8 max-w-2xl">
            Seeking Software & Research Internships for 2026
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a 
                href="#products" 
                onClick={(e) => handleNavClick(e, 'products')}
                className="group relative px-8 py-4 bg-[#F5F2EB] text-[#2C2A26] text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-lg text-center"
            >
                View Projects
            </a>
            <a 
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="group relative px-8 py-4 border border-[#F5F2EB]/30 text-[#F5F2EB] text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-[#F5F2EB]/10 transition-all duration-300 text-center"
            >
                About Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30 hidden md:block">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;