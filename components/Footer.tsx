/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { LINKEDIN_URL, GITHUB_PLACEHOLDER_URL } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="bg-[#EBE7DE] dark:bg-[#1A1916] pt-16 md:pt-24 pb-12 px-6 text-[#5D5A53] dark:text-[#9C968E] border-t border-transparent dark:border-[#2E2C28] transition-colors duration-400">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className="text-2xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] mb-6">Syed Ahmed</h4>
          <p className="max-w-xs font-light leading-relaxed">
            Computer Science Engineer specializing in Scientific Computing and Software Development.
            <br/>Hyderabad, India.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-[#2C2A26] dark:text-[#E8E4DA] mb-6 tracking-[0.2em] text-xs uppercase">Portfolio</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors underline-offset-4 hover:underline">All Projects</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors underline-offset-4 hover:underline">About</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors underline-offset-4 hover:underline">Journal</a></li>
            <li><a href="#contact" onClick={(e) => onLinkClick(e, 'contact')} className="hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors underline-offset-4 hover:underline">Contact</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-bold text-[#2C2A26] dark:text-[#E8E4DA] mb-6 tracking-[0.2em] text-xs uppercase">Connect</h4>
          <ul className="space-y-4 font-light text-sm">
            <li><a href={GITHUB_PLACEHOLDER_URL} target="_blank" rel="noreferrer" className="hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors underline-offset-4 hover:underline">GitHub</a></li>
            <li><a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors underline-offset-4 hover:underline">LinkedIn</a></li>
            <li><a href="#contact" onClick={(e) => onLinkClick(e, 'contact')} className="hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors underline-offset-4 hover:underline">Send Message</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-bold text-[#2C2A26] dark:text-[#E8E4DA] mb-6 tracking-[0.2em] text-xs uppercase">Status</h4>
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-3">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 <span className="text-sm font-medium text-[#2C2A26] dark:text-[#E8E4DA]">Seeking Internships: 2026</span>
             </div>
             <p className="text-sm font-light opacity-80">
                 Currently exploring Numerical Methods & Data Structures.
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-[#D6D1C7] dark:border-[#2E2C28] flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60">
        <p>© 2026 Syed Ahmed. Built with React & Gemini.</p>
      </div>
    </footer>
  );
};

export default Footer;
