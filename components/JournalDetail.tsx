/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JournalArticle } from '../types';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-[#F5F2EB] dark:bg-[#141311] animate-fade-in-up transition-colors duration-400">
       {/* Hero Image for Article - Full bleed to top so navbar sits on it */}
       <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
          <img 
             src={article.image} 
             alt={article.title} 
             onError={(e) => {
               e.currentTarget.onerror = null;
               e.currentTarget.src = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000&fm=webp";
             }}
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
       </div>

       <div className="max-w-3xl mx-auto px-6 md:px-12 -mt-32 relative z-10 pb-32">
          <div className="bg-[#F5F2EB] dark:bg-[#1A1916] p-8 md:p-16 shadow-xl shadow-[#2C2A26]/5 dark:shadow-black/40 border border-transparent dark:border-[#2E2C28] transition-colors duration-400">
             <div className="flex justify-between items-center mb-12 border-b border-[#D6D1C7] dark:border-[#2E2C28] pb-8">
                <button 
                  onClick={onBack}
                  className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  Back to Journal
                </button>
                <span className="text-xs font-medium uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C]">{article.date}</span>
             </div>

             <h1 className="text-4xl md:text-6xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] mb-12 leading-tight text-center">
               {article.title}
             </h1>

             <div className="prose prose-stone dark:prose-invert prose-lg mx-auto font-light leading-loose text-[#5D5A53] dark:text-[#B5B0A4]">
               {article.content}
             </div>
             
             <div className="mt-16 pt-12 border-t border-[#D6D1C7] dark:border-[#2E2C28] flex justify-center">
                 <span className="text-2xl font-serif italic text-[#2C2A26] dark:text-[#E8E4DA]">Syed Ahmed</span>
             </div>
          </div>
       </div>
    </div>
  );
};

export default JournalDetail;
