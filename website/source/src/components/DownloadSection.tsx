import React, { useState } from 'react';
import { 
  WindowsIcon, AndroidIcon, Download, ShieldCheck, Check, Sparkles, 
  Copy, QrCode, Monitor, Lock, ModernOSSquircle
} from './Icons';
import { Meteors } from '@/components/ui/meteors';

export const DownloadSection: React.FC = () => {
  const [copiedWinHash, setCopiedWinHash] = useState(false);
  const [copiedAndHash, setCopiedAndHash] = useState(false);

  const winHash = 'd3b07384e5a8f7c19623e1b04f7a69cb81c70e45138fbd8b02446f7c9e1201aa';
  const andHash = '9f28a371c40be1e7d23f381c009a25b7a1e05d2146e91cb88f1a4e528b17643b';

  const handleCopy = (hash: string, type: 'win' | 'and') => {
    navigator.clipboard.writeText(hash).then(() => {
      if (type === 'win') {
        setCopiedWinHash(true);
        setTimeout(() => setCopiedWinHash(false), 2500);
      } else {
        setCopiedAndHash(true);
        setTimeout(() => setCopiedAndHash(false), 2500);
      }
    });
  };

  return (
    <section id="download" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-950 border border-cyan-300 text-xs sm:text-sm font-mono font-bold mb-4 shadow-2xs">
            <Sparkles size={16} className="text-cyan-700" />
            <span>OFFICIAL RELEASES & INTEGRITY VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-slate-900 tracking-tight leading-tight">
            Download NoTraceFiles for all your devices. <br />
            <span className="text-[#00253f]">
              Zero Telemetry. No logs or tracking.
            </span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Choose your operating system below. Every package is engineered for 100% offline, zero-telemetry local memory surgery without accounts, cloud middle-men, or subscription paywalls.
          </p>
        </div>

        {/* 3 Architecture Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* 1. Windows Download Card */}
          <div className="chrome-card relative p-7 sm:p-9 flex flex-col justify-between overflow-hidden group border border-slate-200 shadow-xl hover:shadow-2xl transition-all">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-500 to-[#00253f]" />
            <Meteors number={6} />

            <div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <ModernOSSquircle variant="brand" size="md">
                  <WindowsIcon size={24} className="text-white" />
                </ModernOSSquircle>
                <span className="text-xs sm:text-sm font-mono font-bold px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-800 border border-sky-300">
                  v2.1.0 · Windows 64-bit
                </span>
              </div>

              <h3 className="text-2xl sm:text-[28px] font-bold text-slate-900 mb-1.5 font-display">
                NoTraceFiles for Windows
              </h3>
              <p className="text-sm sm:text-[15px] font-mono text-cyan-800 font-bold mb-4">
                Desktop Installer · 54.2 MB · Direct Setup.exe
              </p>
              <p className="text-base sm:text-[17px] text-slate-700 mb-6 leading-relaxed font-medium">
                Full-featured native desktop studio with batch processing, right-click Windows Explorer integration, and support for JPG, PNG, WEBP, and PDF.
              </p>

              <div className="space-y-3 mb-8 text-base sm:text-[17px] text-slate-800 font-bold">
                <div className="flex items-center gap-2.5">
                  <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                  <span>Windows 10 & 11 (x64) compatible</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                  <span>Right-click Explorer shell integration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                  <span>No administrative elevation required</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                  <span>100% offline local memory execution</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 relative z-10 space-y-4">
              <a
                href="/downloads/NoTrace_Files_Setup.exe"
                download
                className="w-full py-4 px-8 rounded-full inline-flex items-center justify-center gap-3 font-bold text-base sm:text-lg bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-xl shadow-[#00253f]/25 border border-cyan-500/30 group cursor-pointer transition-all"
              >
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Download for Windows</span>
              </a>

              {/* SHA-256 Checksum Block */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2 shadow-2xs">
                <div className="truncate text-left font-mono">
                  <div className="text-xs text-slate-600 uppercase tracking-wider font-bold">
                    SHA-256 Checksum
                  </div>
                  <div className="text-xs sm:text-sm text-slate-900 truncate font-mono select-all font-bold">
                    {winHash.slice(0, 16)}...{winHash.slice(-10)}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(winHash, 'win')}
                  className="px-3 py-2 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-xs sm:text-sm font-mono text-slate-900 flex items-center gap-1.5 shrink-0 cursor-pointer shadow-2xs font-bold"
                  title="Copy full SHA-256 checksum"
                >
                  {copiedWinHash ? (
                    <>
                      <Check size={14} className="text-emerald-600 font-bold" strokeWidth={2.5} />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="text-slate-600" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 2. Android Mobile Card */}
          <div className="chrome-card relative p-7 sm:p-9 flex flex-col justify-between overflow-hidden group border border-slate-200 shadow-xl hover:shadow-2xl transition-all">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-[#00253f]" />
            <Meteors number={6} />

            <div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <ModernOSSquircle variant="emerald" size="md">
                  <AndroidIcon size={24} className="text-white" />
                </ModernOSSquircle>
                <span className="text-xs sm:text-sm font-mono font-bold px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300">
                  v2.0.1 · Mobile APK
                </span>
              </div>

              <h3 className="text-2xl sm:text-[28px] font-bold text-slate-900 mb-1.5 font-display">
                NoTraceFiles for Android
              </h3>
              <p className="text-sm sm:text-[15px] font-mono text-emerald-800 font-bold mb-4">
                Direct APK Sideload · 921 KB · Ultra Lightweight
              </p>
              <p className="text-base sm:text-[17px] text-slate-700 mb-6 leading-relaxed font-medium">
                Lightweight Android APK with Share Sheet integration. Clean your photos right before sending via WhatsApp, Instagram, Telegram, or X.
              </p>

              <div className="space-y-3 mb-6 text-base sm:text-[17px] text-slate-800 font-bold">
                <div className="flex items-center gap-2.5">
                  <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                  <span>Android 8.0 (Oreo) to Android 15</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                  <span>Zero internet permission in APK manifest</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                  <span>Share Sheet target for instant scrubbing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                  <span>Zero battery drain or background services</span>
                </div>
              </div>

              {/* Mobile QR Code Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 flex items-center gap-4 shadow-2xs">
                <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs shrink-0">
                  <svg width="68" height="68" viewBox="0 0 100 100" fill="none" className="text-[#00253f]">
                    <rect x="10" y="10" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="6" />
                    <rect x="18" y="18" width="12" height="12" rx="2" fill="currentColor" />
                    <rect x="62" y="10" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="6" />
                    <rect x="70" y="18" width="12" height="12" rx="2" fill="currentColor" />
                    <rect x="10" y="62" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="6" />
                    <rect x="18" y="70" width="12" height="12" rx="2" fill="currentColor" />
                    <rect x="45" y="12" width="8" height="8" rx="1.5" fill="currentColor" />
                    <rect x="45" y="26" width="8" height="8" rx="1.5" fill="currentColor" />
                    <rect x="45" y="45" width="10" height="10" rx="2" fill="currentColor" />
                    <rect x="62" y="45" width="8" height="8" rx="1.5" fill="currentColor" />
                    <rect x="76" y="45" width="8" height="8" rx="1.5" fill="currentColor" />
                    <rect x="62" y="62" width="8" height="8" rx="1.5" fill="currentColor" />
                    <rect x="76" y="76" width="14" height="14" rx="2" fill="currentColor" />
                    <rect x="45" y="76" width="8" height="8" rx="1.5" fill="currentColor" />
                    <rect x="12" y="45" width="8" height="8" rx="1.5" fill="currentColor" />
                    <rect x="26" y="45" width="8" height="8" rx="1.5" fill="currentColor" />
                  </svg>
                </div>
                <div className="text-left font-mono">
                  <div className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-slate-900">
                    <QrCode size={16} className="text-[#00253f]" />
                    <span>Scan with phone</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-bold leading-snug mt-1">
                    Point camera to download APK directly to your mobile device
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 relative z-10 space-y-4">
              <a
                href="/downloads/NoTrace-Files-2.0.1.apk"
                download
                className="w-full py-4 px-8 rounded-full inline-flex items-center justify-center gap-3 font-bold text-base sm:text-lg bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-xl shadow-[#00253f]/25 border border-cyan-500/30 group cursor-pointer transition-all"
              >
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Download Android APK</span>
              </a>

              {/* SHA-256 Checksum Block */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2 shadow-2xs">
                <div className="truncate text-left font-mono">
                  <div className="text-xs text-slate-600 uppercase tracking-wider font-bold">
                    SHA-256 Checksum
                  </div>
                  <div className="text-xs sm:text-sm text-slate-900 truncate font-mono select-all font-bold">
                    {andHash.slice(0, 16)}...{andHash.slice(-10)}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(andHash, 'and')}
                  className="px-3 py-2 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-xs sm:text-sm font-mono text-slate-900 flex items-center gap-1.5 shrink-0 cursor-pointer shadow-2xs font-bold"
                  title="Copy full SHA-256 checksum"
                >
                  {copiedAndHash ? (
                    <>
                      <Check size={14} className="text-emerald-600 font-bold" strokeWidth={2.5} />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="text-slate-600" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 3. Web Sandbox (Interactive Zero-Install) */}
          <div className="chrome-card relative p-7 sm:p-9 flex flex-col justify-between overflow-hidden group border border-slate-200 shadow-xl hover:shadow-2xl transition-all">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-500 via-indigo-500 to-[#00253f]" />
            <Meteors number={6} />

            <div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <ModernOSSquircle variant="violet" size="md">
                  <Monitor size={24} className="text-white" />
                </ModernOSSquircle>
                <span className="text-xs sm:text-sm font-mono font-bold px-3.5 py-1.5 rounded-full bg-violet-50 text-violet-800 border border-violet-300">
                  Zero Install · WebAssembly
                </span>
              </div>

              <h3 className="text-2xl sm:text-[28px] font-bold text-slate-900 mb-1.5 font-display">
                NoTraceFiles Web Sandbox
              </h3>
              <p className="text-sm sm:text-[15px] font-mono text-violet-800 font-bold mb-4">
                Browser Studio · Zero Installation · Instant
              </p>
              <p className="text-base sm:text-[17px] text-slate-700 mb-6 leading-relaxed font-medium">
                Need to clean an image immediately without installing an app? Run our client-side WebAssembly engine right in your browser on macOS, Linux, or ChromeOS.
              </p>

              <div className="space-y-3 mb-8 text-base sm:text-[17px] text-slate-800 font-bold">
                <div className="flex items-center gap-2.5">
                  <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                  <span>Works on macOS, Linux, ChromeOS & iOS</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                  <span>100% Client-side RAM (0 bytes uploaded)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                  <span>Verify anytime in browser Network DevTools</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check size={18} className="text-emerald-600 font-bold shrink-0" strokeWidth={2.5} />
                  <span>Interactive deep metadata inspector</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 relative z-10 space-y-4">
              <a
                href="#inspector"
                className="w-full py-4 px-8 rounded-full inline-flex items-center justify-center gap-3 font-bold text-base sm:text-lg bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-xl shadow-[#00253f]/25 border border-cyan-500/30 group cursor-pointer transition-all"
              >
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                <span>Launch Web Sandbox</span>
              </a>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center font-mono text-xs sm:text-sm text-slate-900 flex items-center justify-center gap-2 shadow-2xs font-bold">
                <Lock size={14} className="text-emerald-700" />
                <span>Air-gapped in client browser memory</span>
              </div>
            </div>
          </div>

        </div>

        {/* Mission & Developer Pledge Banner */}
        <div className="mt-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-[28px] bg-slate-50 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-7">
          <div className="w-18 h-18 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center justify-center shrink-0 shadow-sm">
            <ShieldCheck size={36} className="text-emerald-700" />
          </div>
          <div className="text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-950 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5 border border-emerald-300">
              INDEPENDENT PRIVACY COMMITMENT
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Backed by principle, not surveillance capitalism.
            </h4>
            <p className="text-base sm:text-lg text-slate-700 mt-2 leading-relaxed font-medium">
              NoTraceFiles is engineered and maintained by <strong className="text-slate-900 font-bold">Yeasin Arafat Sadiq</strong> as a completely free, non-commercial privacy project. Unlike web scrubbers that upload your files to remote cloud servers or social networks that index your camera serials, NoTraceFiles operates entirely on your own hardware with <strong>Zero Telemetry</strong> and <strong>No logs or tracking</strong>.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm sm:text-base font-mono font-bold text-slate-900">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <Check size={16} className="text-emerald-600 font-bold" strokeWidth={2.5} /> Zero Telemetry
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-emerald-700">
                <Check size={16} className="text-emerald-600 font-bold" strokeWidth={2.5} /> No logs or tracking
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <Check size={16} className="text-emerald-600 font-bold" strokeWidth={2.5} /> 100% Free Forever
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-slate-800">
                <Check size={16} className="text-emerald-600 font-bold" strokeWidth={2.5} /> Open Verification
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
