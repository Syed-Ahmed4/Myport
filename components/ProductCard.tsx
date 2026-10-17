/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Project } from '../types';
import { LINKEDIN_URL, GITHUB_PLACEHOLDER_URL } from '../constants';

// Functionally acts as "ProjectCard"
interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  onSave: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, onSave }) => {
  return (
    <div className="group flex flex-col gap-6 cursor-pointer h-full" onClick={() => onClick(project)}>
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#EBE7DE] shadow-sm">
        <img 
          src={project.imageUrl} 
          alt={project.name} 
          loading="lazy"
          onError={(e) => {
            // Graceful fallback image if external CDN is blocked
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000&fm=webp";
          }}
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#2C2A26]/0 group-hover:bg-[#2C2A26]/10 transition-colors duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 flex flex-col items-center gap-3">
                <span className="bg-[#2C2A26] text-[#F5F2EB] px-6 py-3 text-xs uppercase tracking-widest font-bold shadow-lg">
                    View Case Study
                </span>
                <span className="bg-[#F5F2EB] text-[#2C2A26] px-4 py-2 text-[10px] uppercase tracking-widest font-bold shadow-md">
                    Click to Open
                </span>
            </div>
        </div>
      </div>
      
      <div className="text-left flex flex-col flex-grow">
        <div className="flex justify-between items-baseline mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C]">{project.category}</span>
            <span className="text-xs font-mono text-[#5D5A53] dark:text-[#A8A29E] border border-[#D6D1C7] dark:border-[#38352F] px-2 py-0.5 rounded-full">{project.year}</span>
        </div>
        <h3 className="text-2xl font-serif font-medium text-[#2C2A26] dark:text-[#EDE8DF] mb-2 group-hover:underline underline-offset-4 decoration-1">{project.name}</h3>
        <p className="text-sm font-light text-[#5D5A53] dark:text-[#9E988F] mb-4 tracking-wide line-clamp-2">{project.description}</p>
        
        <div className="flex gap-2 flex-wrap mb-6">
            {project.technologies.slice(0, 3).map((tech, i) => (
                <span key={i} className="text-[10px] uppercase tracking-wider bg-[#EBE7DE] dark:bg-[#22201D] px-2 py-1 text-[#5D5A53] dark:text-[#B5B0A4] border border-transparent dark:border-[#2E2C28]">
                    {tech}
                </span>
            ))}
        </div>

        <div className="mt-auto pt-4 border-t border-[#D6D1C7]/30 dark:border-[#2E2C28] flex items-start justify-between">
             <div className="flex flex-col gap-3">
                 <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick(project);
                    }}
                    className="group/btn flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2C2A26] dark:text-[#E8E4DA] hover:opacity-60 transition-opacity"
                 >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                 </button>

                 <a
                    href={project.repoUrl || GITHUB_PLACEHOLDER_URL} 
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C] hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors"
                 >
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                 </a>
             </div>

             <button
                onClick={(e) => {
                    e.stopPropagation();
                    onSave(project);
                }}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C] hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors p-2 -mr-2"
                title="Save to Shortlist"
             >
                <span>Save</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
             </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
