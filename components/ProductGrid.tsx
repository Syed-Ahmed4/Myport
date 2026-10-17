/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectCard from './ProductCard'; // Keeping filename but using semantic component

interface ProjectGridProps {
  onProjectClick: (project: Project) => void;
  onSave: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectClick, onSave }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamically derive categories from data
  const categories = useMemo(() => {
    const distinctCategories = Array.from(new Set(PROJECTS.map(p => p.category)));
    return ['All', ...distinctCategories];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" className="py-16 md:py-32 px-6 md:px-12 bg-[#F5F2EB] dark:bg-[#141311] transition-colors duration-400">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] dark:text-[#E8E4DA]">Featured Projects</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4 border-t border-[#D6D1C7]/50 dark:border-[#2E2C28] w-full max-w-3xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-widest pb-1 border-b-2 transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'border-[#2C2A26] text-[#2C2A26] dark:border-[#E8E4DA] dark:text-[#E8E4DA]' 
                    : 'border-transparent text-[#A8A29E] dark:text-[#7A746B] hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] hover:border-[#A8A29E]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
          {filteredProjects.map(project => (
            <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={onProjectClick}
                onSave={onSave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
