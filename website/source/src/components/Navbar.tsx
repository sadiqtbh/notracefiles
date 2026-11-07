import React, { useState } from 'react';
import { Download } from './Icons';

interface NavbarProps {
  activePage?: 'home' | 'about' | 'privacy';
  onNavigate?: (page: 'home' | 'about' | 'privacy') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activePage = 'home', 
  onNavigate = () => {} 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: 'home' | 'about' | 'privacy', anchor?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    if (anchor) {
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand with Circular Logo */}
        <button 
          onClick={() => handleNav('home')} 
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-white border border-slate-200 p-1 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform">
            <img src="/logo.png" alt="NoTraceFiles" className="w-full h-full object-contain" />
          </div>
          <div className="flex items-baseline font-bold text-[22px] tracking-tight text-slate-900 font-display">
            <span>NoTrace</span>
            <span className="text-[#00253f] ml-0.5">Files</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-[15px] lg:text-[16px] font-bold text-slate-700">
          <button 
            onClick={() => handleNav('home')}
            className={`px-4 py-2 rounded-full transition-colors cursor-pointer ${
              activePage === 'home' ? 'text-slate-950 bg-cyan-100 font-bold' : 'hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            Home
          </button>
          
          <button 
            onClick={() => handleNav('home', '#fast')} 
            className="px-4 py-2 rounded-full hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Fast
          </button>

          <button 
            onClick={() => handleNav('home', '#safe')} 
            className="px-4 py-2 rounded-full hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Safe
          </button>

          <button 
            onClick={() => handleNav('home', '#yours')} 
            className="px-4 py-2 rounded-full hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Yours
          </button>

          <button 
            onClick={() => handleNav('home', '#compare')} 
            className="px-4 py-2 rounded-full hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Compare
          </button>

          <button 
            onClick={() => handleNav('about')}
            className={`px-4 py-2 rounded-full transition-colors cursor-pointer ${
              activePage === 'about' ? 'text-slate-950 bg-cyan-100 font-bold' : 'hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            About
          </button>

          <button 
            onClick={() => handleNav('privacy')}
            className={`px-4 py-2 rounded-full transition-colors cursor-pointer ${
              activePage === 'privacy' ? 'text-slate-950 bg-cyan-100 font-bold' : 'hover:text-slate-950 hover:bg-slate-100'
            }`}
          >
            Privacy Policy
          </button>

          <button 
            onClick={() => handleNav('home', '#faq')} 
            className="px-4 py-2 rounded-full hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Download Pill CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#download"
            className="px-6 py-2.5 rounded-full inline-flex items-center justify-center gap-2 font-bold text-base bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-md shadow-[#00253f]/20 border border-cyan-500/30 cursor-pointer transition-all"
          >
            <Download size={16} />
            <span>Download</span>
          </a>
        </div>

        {/* Mobile menu hamburger button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-slate-100 text-slate-700 hover:text-slate-950 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          <button 
            onClick={() => handleNav('home')} 
            className="w-full text-left px-4 py-3 rounded-xl text-base font-bold hover:bg-slate-100 text-slate-900"
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('home', '#fast')} 
            className="w-full text-left px-4 py-3 rounded-xl text-base font-bold hover:bg-slate-100 text-slate-900"
          >
            Fast
          </button>
          <button 
            onClick={() => handleNav('home', '#safe')} 
            className="w-full text-left px-4 py-3 rounded-xl text-base font-bold hover:bg-slate-100 text-slate-900"
          >
            Safe
          </button>
          <button 
            onClick={() => handleNav('home', '#yours')} 
            className="w-full text-left px-4 py-3 rounded-xl text-base font-bold hover:bg-slate-100 text-slate-900"
          >
            Yours
          </button>
          <button 
            onClick={() => handleNav('home', '#compare')} 
            className="w-full text-left px-4 py-3 rounded-xl text-base font-bold hover:bg-slate-100 text-slate-900"
          >
            Compare
          </button>
          <button 
            onClick={() => handleNav('about')} 
            className="w-full text-left px-4 py-3 rounded-xl text-base font-bold hover:bg-slate-100 text-slate-900"
          >
            About
          </button>
          <button 
            onClick={() => handleNav('privacy')} 
            className="w-full text-left px-4 py-3 rounded-xl text-base font-bold hover:bg-slate-100 text-slate-900"
          >
            Privacy Policy
          </button>
          <div className="pt-2">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-center justify-center text-base font-bold inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-md shadow-[#00253f]/20 border border-cyan-500/30 cursor-pointer"
            >
              <Download size={18} />
              <span>Download NoTraceFiles</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
