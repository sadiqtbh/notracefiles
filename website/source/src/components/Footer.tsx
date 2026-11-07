import React from 'react';
import { WindowsIcon, AndroidIcon, ShieldCheck, Lock, Check, ModernOSSquircle } from './Icons';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate = () => {} }) => {
  const handleNav = (page: 'home' | 'about' | 'privacy', anchor?: string) => {
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
    <footer className="bg-slate-50 border-t border-slate-200 py-16 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Highlight Card: Zero Telemetry Guarantee */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xl shadow-slate-200/50">
          <div className="flex items-center gap-4">
            <ModernOSSquircle variant="emerald" size="md">
              <ShieldCheck size={24} className="text-white" />
            </ModernOSSquircle>
            <div>
              <div className="text-base sm:text-lg font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
                <span>Zero Telemetry Guarantee</span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs sm:text-sm font-bold">
                  VERIFIED OFFLINE
                </span>
              </div>
              <p className="text-slate-700 font-medium text-base sm:text-[17px] mt-1.5 leading-relaxed">
                Zero Telemetry. No logs or tracking. No cloud uploads. 100% processing happens in local device RAM.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-center shrink-0">
            <button
              onClick={() => handleNav('about')}
              className="px-6 py-3 rounded-full text-base font-bold bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all cursor-pointer shadow-xs"
            >
              About Project
            </button>
            <button
              onClick={() => handleNav('privacy')}
              className="px-6 py-3 rounded-full text-base font-bold bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-md shadow-[#00253f]/20 border border-cyan-500/30 cursor-pointer transition-all"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 p-1 shadow-xs flex items-center justify-center">
                <img src="/logo.png" alt="NoTraceFiles" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight font-display">
                NoTrace<span className="text-[#00253f]">Files</span>
              </span>
            </div>
            
            <p className="text-slate-700 text-base sm:text-[17px] max-w-md leading-relaxed font-medium">
              A high-performance, non-commercial offline metadata stripper for Windows and Android. Protect your location, camera hardware, and personal timeline from unwanted exposure.
            </p>

            <div className="pt-2 text-base text-slate-900 font-mono font-medium">
              Crafted with dedication to privacy by <strong className="text-slate-950 font-bold">Yeasin Arafat Sadiq</strong>.
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-800 font-bold">
              <span className="inline-flex items-center gap-1.5 text-emerald-700">
                <Check size={16} className="text-emerald-600 font-bold" strokeWidth={2.5} /> Zero Telemetry
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-700">
                <Check size={16} className="text-emerald-600 font-bold" strokeWidth={2.5} /> No logs or tracking
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5 text-slate-800">
                <Lock size={15} className="text-cyan-700" /> Air-Gapped Local Code
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-sm sm:text-[15px] font-bold uppercase tracking-wider text-slate-900 mb-4">
              Explore & Legal
            </h4>
            <ul className="space-y-3.5 text-base sm:text-[17px] font-medium">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-slate-900 hover:underline transition-colors text-slate-700 cursor-pointer text-left"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-slate-900 hover:underline transition-colors text-slate-700 cursor-pointer text-left"
                >
                  About NoTraceFiles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('privacy')} 
                  className="hover:text-slate-900 hover:underline transition-colors text-slate-700 cursor-pointer text-left"
                >
                  Privacy Policy (Zero Telemetry)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('home', '#safe')} 
                  className="hover:text-slate-900 hover:underline transition-colors text-slate-700 cursor-pointer text-left"
                >
                  Interactive Scanner
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('home', '#fast')} 
                  className="hover:text-slate-900 hover:underline transition-colors text-slate-700 cursor-pointer text-left"
                >
                  Features & Capabilities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('home', '#yours')} 
                  className="hover:text-slate-900 hover:underline transition-colors text-slate-700 cursor-pointer text-left"
                >
                  Before & After X-Ray
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('home', '#faq')} 
                  className="hover:text-slate-900 hover:underline transition-colors text-slate-700 cursor-pointer text-left"
                >
                  Privacy FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h4 className="font-mono text-sm sm:text-[15px] font-bold uppercase tracking-wider text-slate-900 mb-4">
              Direct Downloads
            </h4>
            <ul className="space-y-3.5 text-base sm:text-[17px]">
              <li>
                <a 
                  href="/downloads/NoTrace_Files_Setup.exe" 
                  download
                  className="inline-flex items-center gap-2 hover:text-slate-950 hover:underline transition-colors font-bold text-slate-800"
                >
                  <WindowsIcon size={18} className="text-cyan-700" />
                  <span>Windows Installer (v2.1)</span>
                </a>
              </li>
              <li>
                <a 
                  href="/downloads/NoTrace-Files-2.0.1.apk" 
                  download
                  className="inline-flex items-center gap-2 hover:text-slate-950 hover:underline transition-colors font-bold text-slate-800"
                >
                  <AndroidIcon size={18} className="text-emerald-700" />
                  <span>Android APK (v2.0.1)</span>
                </a>
              </li>
              <li className="pt-2 text-xs sm:text-sm font-mono text-slate-800 font-bold">
                <div className="flex items-center gap-1.5 text-emerald-800">
                  <Check size={15} className="text-emerald-600 font-bold" strokeWidth={2.5} />
                  <span>Zero Telemetry · No logs or tracking</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono text-slate-800 font-bold">
          <div>
            © 2026 NoTraceFiles · Developed by <strong className="text-slate-950 font-bold">Yeasin Arafat Sadiq</strong>. Free for everyone.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              System Status: All Local & Offline
            </span>
            <span>·</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="hover:text-slate-950 hover:underline cursor-pointer"
            >
              Back to top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
