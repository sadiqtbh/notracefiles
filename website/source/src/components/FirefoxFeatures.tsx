import React, { useState } from 'react';
import { 
  ShieldCheck, MapPin, Camera, FileCode, Lock, 
  Sparkles, Check, WindowsIcon, AndroidIcon, ArrowRight, Zap, EyeOff, WifiOff,
  WhatsAppIcon, SignalIcon, InstagramIcon, TelegramIcon,
  ModernOSSquircle, OSTrafficLights
} from './Icons';

export const FirefoxFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'windows' | 'android'>('windows');

  return (
    <section id="features" className="py-24 bg-white border-b border-slate-200 relative">
      {/* Anchor for jumplinks */}
      <div id="fast" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ------------------------------------------------------------------ */}
        {/* BENTO GRID HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-300 bg-sky-50 text-sky-800 text-xs sm:text-sm font-mono font-bold mb-4 shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
            <span>FAST · ZERO TELEMETRY ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-slate-900 tracking-tight leading-[1.15] text-balance">
            The fast way to protect your photos
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 font-medium leading-relaxed text-pretty">
            Built from the ground up as an air-gapped utility. No telemetry servers, no analytical trackers, and zero cloud uploads.
          </p>
        </div>

        {/* 4 Bento Cards with Modern OS Squircles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          {/* Card 1: PRIVACY */}
          <article className="macos-card rounded-3xl p-5 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all border border-slate-200 shadow-xl min-w-0">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <ModernOSSquircle variant="cyan" size="md">
                  <ShieldCheck size={24} className="text-white" />
                </ModernOSSquircle>
                <span className="text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300 font-mono text-xs sm:text-sm font-bold shrink-0">
                  LOCAL ONLY
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 tracking-[-0.02em]">
                Privacy by Default
              </h3>
              <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed font-medium mb-6">
                Removes hidden satellite GPS coordinates, device serial numbers, and timestamps automatically on your local CPU.
              </p>
            </div>

            {/* Visual Inspection Box */}
            <div className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-3.5 space-y-2.5 group-hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-500 uppercase tracking-wider pb-1 border-b border-slate-200">
                <span className="flex items-center gap-1.5 text-cyan-800">
                  <ShieldCheck size={14} className="text-cyan-600" /> Header Scrubber
                </span>
                <span className="text-emerald-700">100% Local</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs sm:text-[13px]">
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs font-bold whitespace-nowrap">
                  <span className="text-slate-600">GPS Location</span>
                  <span className="text-rose-600 bg-rose-50 px-2 py-0.5 rounded text-[11px] font-bold line-through">Excised</span>
                </div>
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs font-bold whitespace-nowrap">
                  <span className="text-slate-600">Camera Serial</span>
                  <span className="text-rose-600 bg-rose-50 px-2 py-0.5 rounded text-[11px] font-bold line-through">Excised</span>
                </div>
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs font-bold whitespace-nowrap">
                  <span className="text-slate-600">Output File</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-bold">Sanitized</span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: DETECTION */}
          <article className="macos-card rounded-3xl p-5 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all border border-slate-200 shadow-xl min-w-0">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <ModernOSSquircle variant="rose" size="md">
                  <MapPin size={24} className="text-white" />
                </ModernOSSquircle>
                <span className="text-rose-800 bg-rose-50 px-3 py-1 rounded-full border border-rose-300 font-mono text-xs sm:text-sm font-bold shrink-0">
                  HIGH EXPOSURE
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 tracking-[-0.02em]">
                Expose the Footprint
              </h3>
              <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed font-medium mb-6">
                Decodes hidden EXIF, XMP, and IPTC segments down to the millisecond so you see exactly what platforms extract.
              </p>
            </div>

            {/* Visual Inspection Box */}
            <div className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-3.5 space-y-2.5 group-hover:border-rose-400 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-500 uppercase tracking-wider pb-1 border-b border-slate-200">
                <span className="flex items-center gap-1.5 text-rose-800">
                  <MapPin size={14} className="text-rose-600" /> Telemetry Radar
                </span>
                <span className="text-rose-700">Detected</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs sm:text-[13px]">
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs font-bold whitespace-nowrap">
                  <span className="text-slate-600">Satellite GPS</span>
                  <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded text-[11px] font-bold">46.69° N</span>
                </div>
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs font-bold whitespace-nowrap">
                  <span className="text-slate-600">Hardware ID</span>
                  <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded text-[11px] font-bold">Sony A7IV</span>
                </div>
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs font-bold whitespace-nowrap">
                  <span className="text-slate-600">Timestamp</span>
                  <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded text-[11px] font-bold">17:42 UTC</span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3: CONTROL */}
          <article className="macos-card rounded-3xl p-5 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all border border-slate-200 shadow-xl min-w-0">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <ModernOSSquircle variant="amber" size="md">
                  <Zap size={24} className="text-white" />
                </ModernOSSquircle>
                <span className="text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-300 font-mono text-xs sm:text-sm font-bold shrink-0">
                  BIT-PERFECT
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 tracking-[-0.02em]">
                Zero Recompression
              </h3>
              <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed font-medium mb-6">
                Surgical byte removal keeps your original pixels 100% untouched. No quality degradation, no JPEG artifacting, and zero visual blur.
              </p>
            </div>

            {/* Visual Inspection Box */}
            <div className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-3.5 space-y-2.5 group-hover:border-amber-400 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-500 uppercase tracking-wider pb-1 border-b border-slate-200">
                <span className="flex items-center gap-1.5 text-amber-800">
                  <Zap size={14} className="text-amber-600" /> Byte Engine
                </span>
                <span className="text-amber-900">Bit-Perfect</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs sm:text-[13px]">
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs font-bold whitespace-nowrap">
                  <span className="text-slate-600">Raw Pixels</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-bold">100% Intact</span>
                </div>
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs font-bold whitespace-nowrap">
                  <span className="text-slate-600">EXIF Headers</span>
                  <span className="text-rose-600 bg-rose-50 px-2 py-0.5 rounded text-[11px] font-bold line-through">Excised</span>
                </div>
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs font-bold whitespace-nowrap">
                  <span className="text-slate-600">Pixel Difference</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-bold">0.00% Drift</span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 4: INDEPENDENCE */}
          <article className="macos-card rounded-3xl p-5 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all border border-slate-200 shadow-xl min-w-0">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <ModernOSSquircle variant="brand" size="md">
                  <Lock size={24} className="text-white" />
                </ModernOSSquircle>
                <span className="text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300 font-mono text-xs sm:text-sm font-bold shrink-0">
                  0 PACKETS
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5 tracking-[-0.02em]">
                No Cloud Dependencies
              </h3>
              <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed font-medium mb-6">
                Created as a free, open utility by <strong className="text-slate-900 font-bold">Yeasin Arafat Sadiq</strong>. No subscription walls, zero telemetry, and no monetized data brokers.
              </p>
            </div>

            {/* Visual Inspection Box */}
            <div className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-3.5 space-y-2.5 group-hover:border-emerald-400 transition-colors">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-500 uppercase tracking-wider pb-1 border-b border-slate-200">
                <span className="flex items-center gap-1.5 text-emerald-800">
                  <Lock size={14} className="text-[#00253f]" /> Air-Gapped Safe
                </span>
                <span className="text-emerald-700">Offline</span>
              </div>
              <div className="space-y-1.5 font-mono text-xs sm:text-[13px]">
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs font-bold whitespace-nowrap">
                  <span className="text-slate-600">Cloud Uploads</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-bold">0 Bytes</span>
                </div>
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs font-bold whitespace-nowrap">
                  <span className="text-slate-600">Telemetry Pings</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-bold">0 Packets</span>
                </div>
                <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs font-bold whitespace-nowrap">
                  <span className="text-slate-600">License Status</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-bold">100% Free</span>
                </div>
              </div>
            </div>
          </article>

        </div>

        {/* ------------------------------------------------------------------ */}
        {/* DEVICE SHOWCASE SECTION                                            */}
        {/* ------------------------------------------------------------------ */}
        <div className="macos-card rounded-3xl p-6 sm:p-12 mb-20 shadow-xl border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
              Native applications for Windows and Android
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
              Take your privacy wherever you go. NoTraceFiles works natively on your operating system without cloud intermediaries.
            </p>

            {/* macOS Segmented Platform Switcher */}
            <div className="mt-8 inline-flex items-center p-2 rounded-2xl bg-slate-100 border border-slate-200 gap-2 shadow-2xs">
              <button
                onClick={() => setActiveTab('windows')}
                className={`flex items-center gap-2.5 px-7 py-3 rounded-xl text-base sm:text-lg font-bold transition-all cursor-pointer ${
                  activeTab === 'windows'
                    ? 'bg-gradient-to-r from-[#00253f] to-[#00548a] text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <WindowsIcon size={18} />
                <span>Windows Desktop</span>
              </button>
              <button
                onClick={() => setActiveTab('android')}
                className={`flex items-center gap-2.5 px-7 py-3 rounded-xl text-base sm:text-lg font-bold transition-all cursor-pointer ${
                  activeTab === 'android'
                    ? 'bg-gradient-to-r from-[#00253f] to-[#00548a] text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <AndroidIcon size={18} />
                <span>Android Mobile</span>
              </button>
            </div>
          </div>

          {/* Interactive Device Mockup Frame */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8 shadow-xs">
            {activeTab === 'windows' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-sky-800 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-300">
                    <WindowsIcon size={16} className="text-sky-800" />
                    <span>DESKTOP SUITE · BATCH FOLDER SCRUBBING</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-[-0.02em] leading-tight">
                    Right-click Explorer integration & drag-and-drop batch power
                  </h3>
                  <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
                    Drop 1,000 photos at once. NoTraceFiles processes up to 80 photos per second with zero memory bloat, preserving subfolders and exporting clean copies in seconds.
                  </p>
                  <div className="space-y-3 pt-2 text-base sm:text-lg text-slate-800 font-bold">
                    <div className="flex items-center gap-3">
                      <Check size={20} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                      <span>Windows 10 & 11 compatible · 64-bit native</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check size={20} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                      <span>Direct Setup.exe installer · No admin rights needed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check size={20} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                      <span>Batch folder export with custom prefix or overwrite protection</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <a
                      href="/downloads/NoTrace_Files_Setup.exe"
                      download
                      className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg inline-flex items-center justify-center gap-2.5 sm:gap-3 font-bold rounded-xl bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-xl shadow-[#00253f]/25 border border-cyan-500/30 transition-all hover:scale-[1.02]"
                    >
                      <WindowsIcon size={20} />
                      <span>Download Windows Installer (54.2 MB)</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>

                {/* Desktop UI Mockup */}
                <div className="lg:col-span-6 rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden min-w-0">
                  {/* Titlebar with Traffic Lights */}
                  <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 select-none">
                    <div className="flex items-center gap-3 min-w-0">
                      <OSTrafficLights />
                      <span className="font-mono font-bold text-slate-900 text-xs sm:text-base truncate">
                        NoTraceFiles — Local Privacy Studio v2.1.0
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 text-xs sm:text-sm font-mono shrink-0">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-200 font-bold text-slate-900">x64 native</span>
                    </div>
                  </div>

                  {/* App Toolbar */}
                  <div className="px-4 sm:px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-900 font-bold text-xs sm:text-sm shadow-2xs flex items-center gap-1.5">
                        <WindowsIcon size={14} className="text-cyan-600" />
                        <span>Queue (48)</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-xs sm:text-sm font-bold">
                        Air-Gapped
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-mono text-cyan-900 font-bold">
                      48 / 48 Cleaned in 38ms
                    </span>
                  </div>

                  {/* File List Grid */}
                  <div className="divide-y divide-slate-100 max-h-[260px] overflow-y-auto bg-white font-mono text-sm">
                    <div className="px-4 sm:px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        <ModernOSSquircle variant="blue" size="sm">
                          <span className="font-mono font-bold text-xs">JPG</span>
                        </ModernOSSquircle>
                        <div className="min-w-0">
                          <div className="font-bold text-slate-900 text-xs sm:text-base truncate">IMG_2026_Braies.jpg</div>
                          <div className="text-[11px] sm:text-sm text-slate-600 font-bold truncate">EXIF GPS 46.6944°N · Sony A7IV</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-[11px] sm:text-xs shrink-0 self-start sm:self-center">
                        ✓ STRIPPED · 0.00% DIFF
                      </span>
                    </div>

                    <div className="px-4 sm:px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        <ModernOSSquircle variant="cyan" size="sm">
                          <span className="font-mono font-bold text-xs">JPG</span>
                        </ModernOSSquircle>
                        <div className="min-w-0">
                          <div className="font-bold text-slate-900 text-xs sm:text-base truncate">Manhattan_Street.jpg</div>
                          <div className="text-[11px] sm:text-sm text-slate-600 font-bold truncate">GPS 40.7128°N · Pixel 8 Pro</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-[11px] sm:text-xs shrink-0 self-start sm:self-center">
                        ✓ STRIPPED · 0.00% DIFF
                      </span>
                    </div>

                    <div className="px-4 sm:px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        <ModernOSSquircle variant="emerald" size="sm">
                          <span className="font-mono font-bold text-xs">PNG</span>
                        </ModernOSSquircle>
                        <div className="min-w-0">
                          <div className="font-bold text-slate-900 text-xs sm:text-base truncate">Passport_Crop.png</div>
                          <div className="text-[11px] sm:text-sm text-slate-600 font-bold truncate">64KB Ghost Thumbnail Purged</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-[11px] sm:text-xs shrink-0 self-start sm:self-center">
                        ✓ STRIPPED · 0.00% DIFF
                      </span>
                    </div>
                  </div>

                  {/* Status Footer */}
                  <div className="px-4 sm:px-6 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-mono text-slate-700 font-bold">
                    <span className="text-emerald-700 font-bold flex items-center gap-1.5 sm:gap-2">
                      <ShieldCheck size={16} />
                      <span>Lossless Excision Complete</span>
                    </span>
                    <span className="text-slate-900 font-bold">Output: ~/Pictures/Cleaned/</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-300">
                    <AndroidIcon size={16} className="text-emerald-800" />
                    <span>ANDROID APK · SYSTEM SHARE SHEET HOOK</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-[-0.02em] leading-tight">
                    Scrub on the fly right inside your phone's Share menu
                  </h3>
                  <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
                    Take a photo and hit Share → choose "NoTraceFiles". The app removes your GPS coordinates and timestamps in 12ms, then passes the clean photo directly to WhatsApp, Signal, Instagram, or X.
                  </p>
                  <div className="space-y-3 pt-2 text-base sm:text-lg text-slate-800 font-bold">
                    <div className="flex items-center gap-3">
                      <Check size={20} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                      <span>Zero INTERNET permission declared in AndroidManifest.xml</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check size={20} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                      <span>Tiny footprint: under 1MB total APK package</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check size={20} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                      <span>Immediate one-tap sharing to any messaging or social app</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <a
                      href="/downloads/NoTrace-Files-2.0.1.apk"
                      download
                      className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg inline-flex items-center justify-center gap-2.5 sm:gap-3 font-bold rounded-xl bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-xl shadow-[#00253f]/25 border border-cyan-500/30 transition-all hover:scale-[1.02]"
                    >
                      <AndroidIcon size={20} />
                      <span>Download Android APK (921 KB)</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>

                {/* Android Smartphone Interface */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-full max-w-sm rounded-[36px] bg-slate-900 p-4 shadow-2xl border border-slate-700 relative overflow-hidden text-slate-900">
                    {/* Punch-hole camera */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border border-slate-700 z-30"></div>
                    
                    <div className="rounded-[26px] overflow-hidden bg-white relative">
                      {/* Status Bar */}
                      <div className="px-6 pt-4 pb-1.5 bg-white flex items-center justify-between text-xs sm:text-sm font-mono text-slate-900 select-none font-bold">
                        <span>10:42</span>
                        <div className="flex items-center gap-2 text-slate-700 font-bold">
                          <span>5G</span>
                          <span>●●●</span>
                          <span>100%</span>
                        </div>
                      </div>

                      {/* Photo Thumbnail */}
                      <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                        <img src="/photo-free.jpg" alt="" className="w-full h-full object-cover" />
                        <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-xs text-xs sm:text-sm font-mono text-white font-bold">
                          Camera Roll · Uncleaned
                        </div>
                      </div>

                      {/* Native Share Sheet Modal */}
                      <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-4 font-sans">
                        <div className="flex items-center justify-between">
                          <span className="text-base font-bold text-slate-900">Share via NoTraceFiles</span>
                          <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-300 font-mono text-xs sm:text-sm font-bold">
                            INSTANT SCRUB
                          </span>
                        </div>

                        {/* Scrub Action Card */}
                        <div className="p-4 rounded-2xl bg-white border border-cyan-300 shadow-2xs flex items-center gap-3.5">
                          <ModernOSSquircle variant="cyan" size="sm">
                            <ShieldCheck size={18} className="text-white" />
                          </ModernOSSquircle>
                          <div className="text-left">
                            <div className="text-base font-bold text-slate-900">Sanitized in 11.4ms</div>
                            <div className="text-xs sm:text-sm font-mono text-slate-600 font-bold">GPS & Serial purged · 0 bytes leaked</div>
                          </div>
                        </div>

                        {/* Direct Share Apps */}
                        <div>
                          <div className="text-xs sm:text-sm font-mono text-slate-600 uppercase mb-3 font-bold">
                            Forward Clean Copy To
                          </div>
                          <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold text-slate-900">
                            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col items-center">
                              <ModernOSSquircle variant="emerald" size="sm" className="mb-2">
                                <WhatsAppIcon size={18} />
                              </ModernOSSquircle>
                              <span className="text-xs sm:text-sm font-bold text-slate-900">WhatsApp</span>
                            </div>
                            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col items-center">
                              <ModernOSSquircle variant="blue" size="sm" className="mb-2">
                                <SignalIcon size={18} />
                              </ModernOSSquircle>
                              <span className="text-xs sm:text-sm font-bold text-slate-900">Signal</span>
                            </div>
                            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col items-center">
                              <ModernOSSquircle variant="rose" size="sm" className="mb-2">
                                <InstagramIcon size={18} />
                              </ModernOSSquircle>
                              <span className="text-xs sm:text-sm font-bold text-slate-900">Instagram</span>
                            </div>
                            <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col items-center">
                              <ModernOSSquircle variant="cyan" size="sm" className="mb-2">
                                <TelegramIcon size={18} />
                              </ModernOSSquircle>
                              <span className="text-xs sm:text-sm font-bold text-slate-900">Telegram</span>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TECHNICAL INTEGRITY GALLERY                                        */}
        {/* ------------------------------------------------------------------ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest font-bold text-cyan-800 mb-2.5">
            TECHNICAL INTEGRITY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 tracking-tight leading-tight">
            Stay safe without sacrificing quality
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
            How NoTraceFiles differs from standard social media re-encoders and compression tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="macos-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <ModernOSSquircle variant="cyan" size="md">
                  <Zap size={24} className="text-white" />
                </ModernOSSquircle>
                <span className="text-xs sm:text-sm font-mono text-cyan-900 font-bold px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300">
                  LOSSLESS
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-[-0.02em]">
                Surgical byte removal keeps every single color pixel intact
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                Most messaging apps and web scrubbers re-encode your image with lossy algorithms to save bandwidth, ruining fine details. NoTraceFiles parses the image binary format and cleanly removes only the metadata headers.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-sm sm:text-base font-mono text-slate-900 font-bold">
              <span>Pixel Diff: 0.00%</span>
              <span className="text-emerald-700 font-bold">BIT-PERFECT</span>
            </div>
          </div>

          <div className="macos-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <ModernOSSquircle variant="violet" size="md">
                  <EyeOff size={24} className="text-white" />
                </ModernOSSquircle>
                <span className="text-xs sm:text-sm font-mono text-violet-900 font-bold px-3 py-1 rounded-full bg-violet-100 border border-violet-300">
                  DE-LINKED
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-[-0.02em]">
                Break device fingerprinting across platforms
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                Cameras bake internal serial numbers into header blocks. Scrapers correlate anonymous posts across Reddit, Twitter, and message boards to single camera bodies. NoTraceFiles completely purges these fields.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-sm sm:text-base font-mono text-slate-900 font-bold">
              <span>Hardware Link:</span>
              <span className="text-rose-700 font-bold">SEVERED</span>
            </div>
          </div>

          <div className="macos-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between md:col-span-2 lg:col-span-1 border border-slate-200 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <ModernOSSquircle variant="emerald" size="md">
                  <WifiOff size={24} className="text-white" />
                </ModernOSSquircle>
                <span className="text-xs sm:text-sm font-mono text-emerald-900 font-bold px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300">
                  AIR-GAPPED
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-[-0.02em]">
                Zero network permissions. Zero server pings.
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                Unlike online converters that require uploading your private family photos to remote servers, NoTraceFiles executes entirely in your local RAM and CPU. Disconnect your Wi-Fi — it works just as fast.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-sm sm:text-base font-mono text-slate-900 font-bold">
              <span>Telemetry Pings:</span>
              <span className="text-emerald-700 font-bold">0 BYTES</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
