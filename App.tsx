/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import { Project, ViewState } from './types';

function App() {
  // Navigation State
  const [view, setView] = useState<ViewState>({ type: 'home' });
  
  // Theme State
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Keep DOM and localStorage in sync with theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) metaTheme.setAttribute('content', '#141311');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) metaTheme.setAttribute('content', '#F5F2EB');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  
  // Data State - "Shortlist" instead of "Cart"
  const [shortlist, setShortlist] = useState<Project[]>([]);
  const [isShortlistOpen, setIsShortlistOpen] = useState(false);

  // Handle smooth scrolling and view transitions
  useEffect(() => {
    if (view.type === 'home' && view.scrollTarget) {
      // Small delay to ensure DOM is ready after view switch
      const timer = setTimeout(() => {
        const element = document.getElementById(view.scrollTarget!);
        if (element) {
          const headerOffset = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (view.type !== 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [view]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    // Navigate home and scroll to section (including 'contact')
    setView({ type: 'home', scrollTarget: targetId });
  };

  const addToShortlist = (project: Project) => {
    if (!shortlist.find(item => item.id === project.id)) {
        setShortlist([...shortlist, project]);
    }
    setIsShortlistOpen(true);
  };

  const removeFromShortlist = (index: number) => {
    const newItems = [...shortlist];
    newItems.splice(index, 1);
    setShortlist(newItems);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] dark:bg-[#141311] font-sans text-[#2C2A26] dark:text-[#E8E4DA] selection:bg-[#D6D1C7] dark:selection:bg-[#38352F] selection:text-[#2C2A26] dark:selection:text-[#F5F2EB] transition-colors duration-400">
      {view.type !== 'contact' && (
        <Navbar 
            onNavClick={handleNavClick} 
            savedCount={shortlist.length}
            onOpenShortlist={() => setIsShortlistOpen(true)}
            theme={theme}
            onToggleTheme={toggleTheme}
        />
      )}
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero />
            <ProductGrid 
                onProjectClick={(p) => setView({ type: 'project', project: p })} 
                onSave={addToShortlist}
            />
            <About />
            <Journal onArticleClick={(a) => setView({ type: 'journal', article: a })} />
            <Contact />
          </>
        )}

        {view.type === 'project' && (
          <ProductDetail 
            project={view.project} 
            onBack={() => setView({ type: 'home', scrollTarget: 'products' })}
            onAddToShortlist={addToShortlist}
          />
        )}

        {view.type === 'journal' && (
          <JournalDetail 
            article={view.article} 
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'contact' && (
            <Checkout 
                projects={shortlist}
                onBack={() => setView({ type: 'home' })}
            />
        )}
      </main>

      {view.type !== 'contact' && <Footer onLinkClick={handleNavClick} />}
      
      <Assistant />
      
      {/* Shortlist Drawer (Formerly Cart) */}
      <CartDrawer 
        isOpen={isShortlistOpen}
        onClose={() => setIsShortlistOpen(false)}
        projects={shortlist}
        onRemoveProject={removeFromShortlist}
        onProceedToContact={() => {
            setIsShortlistOpen(false);
            setView({ type: 'contact' });
        }}
      />
    </div>
  );
}

export default App;
