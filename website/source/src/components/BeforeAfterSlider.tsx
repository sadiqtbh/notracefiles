import React, { useState } from 'react';
import { Eye, EyeOff, MapPin, Clock, Camera, AlertTriangle, Layers } from './Icons';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section id="comparison" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Anchor */}
      <div id="yours" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-300 text-xs sm:text-sm font-mono font-bold mb-4 shadow-2xs">
            <Layers size={16} className="text-cyan-700" />
            <span>INTERACTIVE X-RAY COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Two sides of the same file.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Drag the slider to peel back the pixels and reveal the hidden surveillance payload that travels inside every uncleaned photograph.
          </p>

          {/* Quick preset controls */}
          <div className="mt-8 inline-flex items-center p-2 rounded-full bg-white border border-slate-200 shadow-md gap-2 flex-wrap justify-center">
            <button
              onClick={() => setSliderPos(100)}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer ${
                sliderPos === 100 ? 'bg-gradient-to-r from-[#00253f] to-[#00548a] text-white shadow-md' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              100% Innocent View
            </button>
            <button
              onClick={() => setSliderPos(50)}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer ${
                sliderPos === 50 ? 'bg-gradient-to-r from-[#00253f] to-[#00548a] text-white shadow-md' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              50 / 50 Comparison
            </button>
            <button
              onClick={() => setSliderPos(0)}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer ${
                sliderPos === 0 ? 'bg-gradient-to-r from-[#00253f] to-[#00548a] text-white shadow-md' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              100% X-Ray Telemetry
            </button>
          </div>
        </div>

        {/* The Split Screen Canvas Container */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative h-[440px] sm:h-[520px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl cursor-ew-resize select-none bg-slate-950"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* UNDER LAYER: The "X-Ray" / Exposed Telemetry Side */}
            <div className="absolute inset-0 bg-slate-950">
              <img 
                src="/photo-free.jpg" 
                alt="X-ray view"
                className="w-full h-full object-cover filter contrast-125 saturate-50 brightness-75"
              />
              
              {/* High-tech HUD grid overlay */}
              <div className="absolute inset-0 bg-[#00253f]/30 mix-blend-color-dodge pointer-events-none"></div>
              <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none"></div>

              {/* Simulated GPS Crosshairs & Telemetry UI */}
              <div className="absolute top-6 right-6 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-rose-300 text-left shadow-2xl max-w-xs animate-float">
                <div className="flex items-center gap-1.5 text-rose-700 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5">
                  <AlertTriangle size={16} className="text-rose-600" />
                  <span>GPS BROADCAST DETECTED</span>
                </div>
                <div className="space-y-2 text-sm sm:text-base font-mono text-slate-900">
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-600 font-bold">LAT / LON:</span>
                    <span className="text-rose-700 font-bold">46.6944° N, 12.0856° E</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-600 font-bold">ELEVATION:</span>
                    <span className="font-bold text-slate-900">1,496 m</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-600 font-bold">TIMESTAMP:</span>
                    <span className="text-slate-900 font-bold">17:42:08 UTC+2</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-600 font-bold">DEVICE:</span>
                    <span className="text-slate-900 font-bold">Sony Alpha 7 IV</span>
                  </div>
                </div>
              </div>

              {/* Target Crosshair in Center with electric cyan glow */}
              <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-24 h-24 rounded-full border-2 border-[#02cfd9] flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(2,207,217,0.4)]">
                  <div className="w-12 h-12 rounded-full border border-[#02cfd9] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#02cfd9]"></div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-white bg-[#00253f]/95 border border-[#02cfd9] px-3.5 py-1.5 rounded-lg mt-2 text-center whitespace-nowrap shadow-xl">
                  TARGET LOCATED · 12.0856° E
                </div>
              </div>

              {/* Bottom tag on right */}
              <div className="absolute bottom-5 right-5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 border border-rose-300 text-rose-900 text-xs sm:text-sm font-mono font-bold flex items-center gap-1.5 sm:gap-2 shadow-lg max-w-[85%]">
                <Eye size={15} className="text-rose-600 shrink-0" />
                <span className="truncate">EXPOSED METADATA</span>
              </div>
            </div>

            {/* TOP LAYER: The "Clean" / Innocent Side (clipped by sliderPos) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full" style={{ width: '100%', minWidth: '100%' }}>
                <img 
                  src="/photo-free.jpg" 
                  alt="Innocent view"
                  className="w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Left Innocent Badge */}
                <div className="absolute bottom-5 left-5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-mono font-bold flex items-center gap-1.5 sm:gap-2 shadow-lg max-w-[85%]">
                  <EyeOff size={15} className="text-emerald-600 shrink-0" />
                  <span className="truncate">CLEANED PHOTO</span>
                </div>
              </div>
            </div>

            {/* Slider Divider Line & Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-[#02cfd9] shadow-[0_0_15px_rgba(2,207,217,0.9)] z-30"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-300 text-[#00253f] flex items-center justify-center shadow-[0_4px_20px_rgba(0,37,63,0.3)] ring-4 ring-[#02cfd9]/40 cursor-ew-resize hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-[#00253f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
                </svg>
              </div>
            </div>

          </div>

          {/* Slider Caption */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs sm:text-base font-mono font-bold text-slate-800 px-1 text-center sm:text-left">
            <span>← Slide left to inspect hidden data payload</span>
            <span>Slide right to view sanitized photo →</span>
          </div>
        </div>

      </div>
    </section>
  );
};
