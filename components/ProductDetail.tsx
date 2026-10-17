/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Project } from '../types';
import { GITHUB_PLACEHOLDER_URL } from '../constants';

// Functionally acts as "ProjectDetail"
interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onAddToShortlist: (project: Project) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onAddToShortlist }) => {
  return (
    <div className="pt-24 min-h-screen bg-[#F5F2EB] dark:bg-[#141311] animate-fade-in-up transition-colors duration-400">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
        
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
             <span className="text-xs font-bold text-[#A8A29E] dark:text-[#8C867C] uppercase tracking-[0.2em] mb-4">{project.category} • {project.year}</span>
             <h1 className="text-4xl md:text-6xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] mb-6 leading-tight">{project.name}</h1>
             <p className="text-xl font-light text-[#5D5A53] dark:text-[#ABA59B] italic mb-12">{project.tagline}</p>
             
             <div className="prose prose-stone dark:prose-invert prose-lg text-[#5D5A53] dark:text-[#ABA59B] leading-relaxed font-light mb-12 border-t border-[#D6D1C7] dark:border-[#2E2C28] pt-12">
               <h3 className="font-serif text-[#2C2A26] dark:text-[#E8E4DA] text-2xl mb-4">Project Overview</h3>
               <p>{project.longDescription || project.description}</p>
             </div>

             <div className="mb-12">
                 <h3 className="font-serif text-[#2C2A26] dark:text-[#E8E4DA] text-xl mb-6">Technologies & Stack</h3>
                 <div className="flex flex-wrap gap-3">
                   {project.technologies.map((tech, idx) => (
                     <span key={idx} className="flex items-center gap-2 bg-[#EBE7DE] dark:bg-[#1E1D1A] border border-transparent dark:border-[#2E2C28] px-4 py-2 rounded-sm text-sm text-[#2C2A26] dark:text-[#E8E4DA]">
                       <span className="w-1.5 h-1.5 bg-[#2C2A26] dark:bg-[#E8E4DA] rounded-full"></span>
                       {tech}
                     </span>
                   ))}
                 </div>
             </div>

             <div className="flex flex-col sm:flex-row gap-4">
               <button 
                 onClick={() => onAddToShortlist(project)}
                 className="px-8 py-4 bg-[#2C2A26] dark:bg-[#E8E4DA] text-[#F5F2EB] dark:text-[#141311] uppercase tracking-widest text-xs font-bold hover:bg-[#433E38] dark:hover:bg-white transition-colors shadow-lg"
               >
                 Shortlist for Inquiry
               </button>
               <a 
                 href={project.repoUrl || GITHUB_PLACEHOLDER_URL} 
                 target="_blank" 
                 rel="noreferrer"
                 className="px-8 py-4 border border-[#2C2A26] dark:border-[#E8E4DA] text-[#2C2A26] dark:text-[#E8E4DA] uppercase tracking-widest text-xs font-bold hover:bg-[#2C2A26] dark:hover:bg-[#E8E4DA] hover:text-[#F5F2EB] dark:hover:text-[#141311] transition-colors text-center"
               >
                 View Source Code
               </a>
             </div>
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="w-full aspect-[4/5] bg-[#EBE7DE] dark:bg-[#1E1D1A] overflow-hidden shadow-2xl border border-transparent dark:border-[#2E2C28]">
              <img 
                src={project.imageUrl} 
                alt={project.name} 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000&fm=webp";
                }}
                className="w-full h-full object-cover animate-fade-in-up"
              />
            </div>
            <p className="text-xs text-[#A8A29E] dark:text-[#8C867C] text-center mt-4">Project Visualization</p>
            
            {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {project.gallery.map((img, idx) => (
                        <div key={idx} className="aspect-square bg-[#EBE7DE] dark:bg-[#1E1D1A] overflow-hidden shadow-md border border-transparent dark:border-[#2E2C28]">
                            <img src={img} alt={`${project.name} gallery ${idx}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                        </div>
                    ))}
                </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;