/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  savedCount: number;
  onOpenShortlist: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onNavClick, 
  savedCount, 
  onOpenShortlist,
  theme,
  onToggleTheme
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const handleShortlistClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      onOpenShortlist();
  };

  const textColorClass = (scrolled || mobileMenuOpen) 
    ? 'text-[#2C2A26] dark:text-[#E8E4DA]' 
    : 'text-[#F5F2EB]';
  const bgColorClass = scrolled 
    ? 'bg-[#F5F2EB]/95 dark:bg-[#141311]/95 backdrop-blur-md shadow-sm border-b border-transparent dark:border-[#2A2824]' 
    : 'bg-transparent';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out py-4 ${bgColorClass} ${mobileMenuOpen ? 'bg-[#F5F2EB] dark:bg-[#141311]' : ''}`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-8 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, ''); 
            }}
            className={`text-2xl font-serif font-medium tracking-tight z-50 relative transition-colors duration-500 ${textColorClass}`}
          >
            {BRAND_NAME}
          </a>
          
          <div className={`hidden md:flex items-center gap-8 lg:gap-12 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-500 ${textColorClass}`}>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:opacity-60 transition-opacity flex items-center gap-2">
                Projects
            </a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:opacity-60 transition-opacity flex items-center gap-2">
                About
            </a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:opacity-60 transition-opacity flex items-center gap-2">
                Journal
            </a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:opacity-60 transition-opacity flex items-center gap-2">
                Contact
            </a>
          </div>

          <div className={`flex items-center gap-5 sm:gap-6 z-50 relative transition-colors duration-500 ${textColorClass}`}>
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 rounded-full hover:opacity-70 transition-opacity focus:outline-none"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                // Sun Icon for Light Mode switch
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-amber-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                // Moon Icon for Dark Mode switch
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            {/* Shortlist Button */}
            <button 
              onClick={handleShortlistClick}
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
              aria-label="View Saved Projects"
            >
              <span className="hidden sm:inline">Shortlist</span>
              <div className="relative">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                 </svg>
                 {savedCount > 0 && (
                     <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-[#F5F2EB] dark:border-[#141311]"></span>
                 )}
              </div>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${textColorClass}`} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-[#F5F2EB] dark:bg-[#141311] z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
           <div className="flex flex-col gap-8 text-center items-center">
              {['Projects', 'About', 'Journal', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    onClick={(e) => handleLinkClick(e, item.toLowerCase())} 
                    className="text-2xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] hover:text-[#A8A29E] transition-colors"
                  >
                    {item}
                  </a>
              ))}
              
              {/* Mobile Theme Toggle */}
              <div className="pt-6 border-t border-[#D6D1C7] dark:border-[#2E2C28] w-48 flex justify-center">
                <button
                  onClick={() => {
                    onToggleTheme();
                  }}
                  className="flex items-center gap-3 px-4 py-2 border border-[#D6D1C7] dark:border-[#38352F] text-xs font-bold uppercase tracking-widest text-[#2C2A26] dark:text-[#E8E4DA]"
                >
                  {theme === 'dark' ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-amber-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                      </svg>
                      <span>Light Theme</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                      </svg>
                      <span>Dark Theme</span>
                    </>
                  )}
                </button>
              </div>
           </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
