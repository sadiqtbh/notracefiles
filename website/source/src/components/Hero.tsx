import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Zap, Lock, Check, Download, MapPin, Camera, Clock, Sparkles
} from './Icons';

export const Hero: React.FC = () => {
  const [heroScrubbed, setHeroScrubbed] = useState(false);
  const [selectedOS, setSelectedOS] = useState<'windows' | 'android'>('windows');

  // Rotating headline pill with vibrant modern accent colors
  const words = [
    { text: 'fast', bg: 'bg-sky-50', textCol: 'text-sky-800', border: 'border-sky-300', dot: 'bg-sky-500' },
    { text: 'safe', bg: 'bg-emerald-50', textCol: 'text-emerald-800', border: 'border-emerald-300', dot: 'bg-emerald-500' },
    { text: 'yours', bg: 'bg-indigo-50', textCol: 'text-indigo-800', border: 'border-indigo-300', dot: 'bg-indigo-500' },
    { text: 'private', bg: 'bg-cyan-50', textCol: 'text-cyan-900', border: 'border-cyan-300', dot: 'bg-[#02cfd9]' },
  ];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [words.length]);

  const currentWord = words[wordIndex];

  return (
    <section className="relative min-h-[850px] w-full overflow-hidden bg-white pt-10 pb-24 md:pt-16 md:pb-32 flex flex-col items-center justify-center">
      {/* Subtle Logo Color Background Ambience with electric cyan tint */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-sky-50/80 via-[#00253f]/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Centered Circular Logo with subtle glow */}
        <div className="mb-6 relative group">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-3 bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,37,63,0.14)] flex items-center justify-center transition-transform hover:scale-105">
            <img 
              src="/logo.png" 
              alt="NoTraceFiles Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Headline - Larger and more prominent on all screens */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold tracking-[-0.03em] text-[#00253f] font-display leading-[1.12] text-balance max-w-4xl">
          The file scrubber <br className="hidden sm:inline" />
          built to be{' '}
          <span 
            className={`inline-flex items-center gap-2.5 px-6 sm:px-7 py-1.5 sm:py-2 rounded-full border transition-all duration-300 font-bold ${currentWord.bg} ${currentWord.textCol} ${currentWord.border} shadow-2xs align-middle`}
          >
            <span className={`w-3 h-3 rounded-full ${currentWord.dot} animate-pulse`} />
            <span className="capitalize">{currentWord.text}</span>
          </span>
        </h1>

        {/* Subtitle - Optimized for big screens and mobile */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto font-medium leading-relaxed text-pretty">
          The fast, personal, and completely offline privacy utility. Removes hidden satellite GPS tags, camera hardware serials, and timestamps directly on your device before you share.
        </p>

        {/* ------------------------------------------------------------------ */}
        {/* ICONIC PILL DOWNLOAD BUTTON & OPTIMIZED READABLE SUBTEXT           */}
        {/* ------------------------------------------------------------------ */}
        <div className="mt-9 flex flex-col items-center w-full max-w-2xl">
          {selectedOS === 'windows' ? (
            <a
              href="/downloads/NoTrace_Files_Setup.exe"
              download
              className="gap-3.5 text-lg sm:text-xl md:text-[22px] font-bold px-10 sm:px-12 py-4.5 sm:py-5 rounded-full inline-flex items-center justify-center group bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-2xl shadow-[#00253f]/30 border border-cyan-500/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Download size={22} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download NoTraceFiles</span>
            </a>
          ) : (
            <a
              href="/downloads/NoTrace-Files-2.0.1.apk"
              download
              className="gap-3.5 text-lg sm:text-xl md:text-[22px] font-bold px-10 sm:px-12 py-4.5 sm:py-5 rounded-full inline-flex items-center justify-center group bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-2xl shadow-[#00253f]/30 border border-cyan-500/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Download size={22} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download Android APK</span>
            </a>
          )}

          {/* Subtext under button - Clear, large, and highly readable */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-sm sm:text-base md:text-[17px] text-slate-900 font-bold">
            <span>{selectedOS === 'windows' ? 'For Windows 11/10 (64-bit).' : 'For Android 8.0 and up.'}</span>
            <button
              onClick={() => setSelectedOS(selectedOS === 'windows' ? 'android' : 'windows')}
              className="text-[#0284c7] hover:text-[#00548a] underline underline-offset-4 font-bold cursor-pointer"
            >
              {selectedOS === 'windows' ? 'Need Android APK?' : 'Need Windows Setup?'}
            </button>
          </div>

          {/* Trust Checkbox Row - Larger font and visible badges */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-bold text-slate-900 bg-slate-50/90 px-4 py-2 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
              <span>Zero Telemetry</span>
            </span>
            <span className="text-slate-400">·</span>
            <span className="flex items-center gap-1.5 text-emerald-700">
              <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
              <span>No logs or tracking</span>
            </span>
            <span className="text-slate-400">·</span>
            <span className="flex items-center gap-1.5 text-slate-800">
              <Check size={18} className="text-cyan-700 font-bold shrink-0" strokeWidth={2.5} />
              <span>100% Offline Local Processing</span>
            </span>
          </div>

          {/* All Platforms Link - Readable & clear */}
          <div className="mt-3">
            <a 
              href="#download" 
              className="text-sm sm:text-base text-[#003b64] hover:text-[#0284c7] font-bold underline underline-offset-4"
            >
              Need another version? See all platforms & checksums
            </a>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* FLOATING JUMPLINKS PILL BAR - Larger and easy to tap               */}
        {/* ------------------------------------------------------------------ */}
        <div className="mt-10 inline-flex items-center p-2 rounded-full bg-white border border-slate-200 shadow-[0_4px_16px_rgba(0,37,63,0.10)] z-20 gap-1.5 sm:gap-2.5 flex-wrap justify-center">
          <a 
            href="#fast" 
            className="px-5 py-2.5 rounded-full text-sm sm:text-base font-bold text-slate-800 hover:text-[#00253f] hover:bg-slate-100 transition-colors"
          >
            Fast
          </a>
          <a 
            href="#safe" 
            className="px-5 py-2.5 rounded-full text-sm sm:text-base font-bold text-slate-800 hover:text-[#00253f] hover:bg-slate-100 transition-colors"
          >
            Safe
          </a>
          <a 
            href="#yours" 
            className="px-5 py-2.5 rounded-full text-sm sm:text-base font-bold text-slate-800 hover:text-[#00253f] hover:bg-slate-100 transition-colors"
          >
            Yours
          </a>
          <a 
            href="#compare" 
            className="px-5 py-2.5 rounded-full text-sm sm:text-base font-bold text-slate-800 hover:text-[#00253f] hover:bg-slate-100 transition-colors"
          >
            Compare
          </a>
          <a 
            href="#download" 
            className="px-6 py-2.5 rounded-full text-sm sm:text-base font-bold bg-[#00253f] text-white hover:bg-[#003b64] transition-colors shadow-md"
          >
            Download
          </a>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* AIR-GAPPED WINDOW PREVIEW                                          */}
        {/* ------------------------------------------------------------------ */}
        <div className="mt-14 w-full max-w-4xl text-left">
          <div className="rounded-[28px] border border-slate-200/90 bg-white shadow-[0_16px_45px_-10px_rgba(0,37,63,0.14)] overflow-hidden transition-all">
            {/* Window Header */}
            <div className="h-14 px-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500 border border-rose-600/80"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-amber-500/80"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-emerald-600/80"></span>
                <span className="text-sm sm:text-base font-mono font-bold text-slate-800 hidden sm:inline ml-2">
                  NoTraceFiles — Local Privacy Sandbox
                </span>
              </div>

              {/* Status Chip */}
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-sm font-mono font-bold text-emerald-800 shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Air-Gapped Local RAM</span>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* File Thumbnail & Live Tags */}
                <div className="md:col-span-7 flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <img 
                    src="/photo-free.jpg" 
                    alt="Active File" 
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover shadow-sm border border-slate-200 shrink-0"
                  />
                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-base sm:text-lg font-bold text-slate-900 truncate">dolomites_vacation.jpg</span>
                      <span className="text-sm font-mono font-bold text-slate-700">3.8 MB</span>
                    </div>
                    
                    {!heroScrubbed ? (
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200 text-xs sm:text-sm font-mono text-rose-800 font-bold">
                          <MapPin size={14} className="text-rose-600" /> GPS 46.69°N
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200 text-xs sm:text-sm font-mono text-sky-800 font-bold">
                          <Camera size={14} className="text-sky-600" /> Sony A7 IV
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs sm:text-sm font-mono text-amber-900 font-bold">
                          <Clock size={14} className="text-amber-600" /> 17:42 UTC
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-emerald-800 font-bold pt-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>100% SANITIZED · 0.00% PIXEL DRIFT</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Instant Action CTA */}
                <div className="md:col-span-5 flex flex-col justify-center space-y-3.5">
                  <button
                    onClick={() => setHeroScrubbed(!heroScrubbed)}
                    className="w-full py-4 px-6 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white hover:scale-[1.02]"
                  >
                    <Sparkles size={18} />
                    <span>{heroScrubbed ? 'Sanitized! Click to Reset' : 'Scrub Metadata (Live Test)'}</span>
                  </button>
                  <p className="text-sm font-mono font-bold text-slate-700 text-center">
                    0 telemetry beacons · 0 bytes transmitted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillar Feature Badges - Clear, bold, readable */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-slate-200">
          <div className="p-4.5 rounded-2xl border border-slate-200 bg-white shadow-2xs text-left flex items-center gap-4 hover:border-sky-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 shadow-2xs">
              <Lock size={22} strokeWidth={2} />
            </div>
            <div>
              <div className="text-base sm:text-[17px] font-bold text-slate-900">100% Offline</div>
              <div className="text-sm sm:text-[15px] font-bold text-slate-600">Zero cloud upload</div>
            </div>
          </div>

          <div className="p-4.5 rounded-2xl border border-slate-200 bg-white shadow-2xs text-left flex items-center gap-4 hover:border-amber-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 shadow-2xs">
              <Zap size={22} strokeWidth={2} />
            </div>
            <div>
              <div className="text-base sm:text-[17px] font-bold text-slate-900">Lossless Quality</div>
              <div className="text-sm sm:text-[15px] font-bold text-slate-600">0.00% pixel drift</div>
            </div>
          </div>

          <div className="p-4.5 rounded-2xl border border-slate-200 bg-white shadow-2xs text-left flex items-center gap-4 hover:border-emerald-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck size={22} strokeWidth={2} />
            </div>
            <div>
              <div className="text-base sm:text-[17px] font-bold text-slate-900">Zero Telemetry</div>
              <div className="text-sm sm:text-[15px] font-bold text-slate-600">No logs or tracking</div>
            </div>
          </div>

          <div className="p-4.5 rounded-2xl border border-slate-200 bg-white shadow-2xs text-left flex items-center gap-4 hover:border-indigo-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 shadow-2xs">
              <Check size={22} strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-base sm:text-[17px] font-bold text-slate-900">Free & Open</div>
              <div className="text-sm sm:text-[15px] font-bold text-slate-700">By Yeasin Arafat Sadiq</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
