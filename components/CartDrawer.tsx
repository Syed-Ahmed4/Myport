/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Project } from '../types';

// Functionally acts as "ShortlistDrawer"
interface ShortlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onRemoveProject: (index: number) => void;
  onProceedToContact: () => void;
}

const CartDrawer: React.FC<ShortlistDrawerProps> = ({ isOpen, onClose, projects, onRemoveProject, onProceedToContact }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-[#2C2A26]/30 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-[#F5F2EB] dark:bg-[#161513] z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-[#D6D1C7] dark:border-[#2E2C28] flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#D6D1C7] dark:border-[#2E2C28]">
          <div>
            <h2 className="text-xl font-serif text-[#2C2A26] dark:text-[#E8E4DA]">Project Shortlist</h2>
            <p className="text-xs text-[#A8A29E] dark:text-[#8C867C] mt-1">Select projects to discuss in your inquiry.</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-[#A8A29E] hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {projects.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-[#A8A29E] dark:text-[#8C867C]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
              <p className="font-light text-[#5D5A53] dark:text-[#ABA59B]">Your shortlist is empty.</p>
              <p className="text-xs text-[#A8A29E] dark:text-[#8C867C]">Save projects to discuss specific technical details.</p>
            </div>
          ) : (
            projects.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 animate-fade-in-up">
                <div className="w-20 h-20 bg-[#EBE7DE] dark:bg-[#1E1D1A] flex-shrink-0 overflow-hidden border border-transparent dark:border-[#2E2C28]">
                  <img src={item.imageUrl} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-serif text-[#2C2A26] dark:text-[#E8E4DA] text-lg leading-none">{item.name}</h3>
                    </div>
                    <p className="text-xs text-[#A8A29E] dark:text-[#8C867C] uppercase tracking-widest mt-2">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => onRemoveProject(idx)}
                    className="text-xs text-[#A8A29E] hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] self-start underline underline-offset-4 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-[#D6D1C7] dark:border-[#2E2C28] bg-[#EBE7DE]/30 dark:bg-[#1A1916]">
          <p className="text-xs text-[#5D5A53] dark:text-[#ABA59B] mb-6 text-center leading-relaxed">
            Ready to discuss these projects or opportunities? Proceed to the contact form.
          </p>
          <button 
            onClick={onProceedToContact}
            disabled={projects.length === 0}
            className="w-full py-4 bg-[#2C2A26] dark:bg-[#E8E4DA] text-[#F5F2EB] dark:text-[#141311] uppercase tracking-widest text-sm font-bold hover:bg-[#433E38] dark:hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Start Inquiry
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;