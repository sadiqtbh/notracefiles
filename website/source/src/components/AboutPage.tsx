import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Zap, 
  Monitor, 
  Smartphone, 
  Check, 
  WindowsIcon,
  AndroidIcon,
  ModernOSSquircle,
  OSAppIcon
} from './Icons';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'about' | 'privacy') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-slate-900 min-h-screen py-12 sm:py-20 relative">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern bg-radial-mask opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-slate-700 mb-8 font-bold">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-slate-950 font-bold transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-slate-950 font-bold">About NoTraceFiles</span>
        </div>

        {/* Hero Section */}
        <header className="mb-14 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
            <OSAppIcon size={72} className="hover:scale-105 transition-transform shrink-0" />
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-300 bg-cyan-50 text-cyan-950 text-xs sm:text-sm font-mono font-bold mb-3 shadow-2xs">
                <ShieldCheck size={16} className="text-cyan-700" />
                <span>100% INDEPENDENT PRIVACY UTILITY</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 tracking-[-0.03em] leading-[1.15] text-balance">
                Built to safeguard your personal life, <br className="hidden sm:inline" />
                <span className="text-[#00253f]">
                  not monetize your digital footprints.
                </span>
              </h1>
            </div>
          </div>
          <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed text-pretty max-w-3xl">
            Every photo you take carries an invisible dossier: your home GPS coordinates, camera serial numbers, and exact millisecond timestamps. NoTraceFiles was created to sever this surveillance pipeline right at the source — completely offline on your device.
          </p>
        </header>

        {/* ------------------------------------------------------------------ */}
        {/* MANDATORY PROMINENT CALLOUT: ZERO TELEMETRY & NO LOGS OR TRACKING */}
        {/* ------------------------------------------------------------------ */}
        <div className="macos-card rounded-3xl p-7 sm:p-9 mb-14 relative overflow-hidden shadow-xl border border-slate-200">
          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00253f] to-[#00548a] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
                Core Architectural Guarantee
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-2xs">
                100% Air-Gapped & Offline
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-[-0.02em] mb-3">
              Zero Telemetry. No logs or tracking. Ever.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6">
              Unlike cloud services that claim to protect privacy while logging your IP and metadata on remote servers, NoTraceFiles adheres to an uncompromised design rule: <strong className="text-slate-900 font-bold">we collect nothing because we transmit nothing</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <ModernOSSquircle variant="emerald" size="sm" className="mb-3">
                  <ShieldCheck size={18} className="text-white" />
                </ModernOSSquircle>
                <div className="text-slate-900 font-mono text-sm sm:text-[15px] font-bold uppercase mb-1.5">
                  Zero Telemetry
                </div>
                <p className="text-base text-slate-700 font-medium leading-relaxed">
                  No telemetry beacons, no analytics pings, and no background check-ins. The application code contains zero surveillance libraries.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <ModernOSSquircle variant="brand" size="sm" className="mb-3">
                  <Lock size={18} className="text-white" />
                </ModernOSSquircle>
                <div className="text-slate-900 font-mono text-sm sm:text-[15px] font-bold uppercase mb-1.5">
                  No Logs or Tracking
                </div>
                <p className="text-base text-slate-700 font-medium leading-relaxed">
                  No tracking of processed files, no crash reporter uploads, and no user activity logging. What runs in memory vanishes when you exit.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <ModernOSSquircle variant="cyan" size="sm" className="mb-3">
                  <Check size={18} className="text-white" strokeWidth={2.5} />
                </ModernOSSquircle>
                <div className="text-slate-900 font-mono text-sm sm:text-[15px] font-bold uppercase mb-1.5">
                  Air-Gapped Operation
                </div>
                <p className="text-base text-slate-700 font-medium leading-relaxed">
                  Works seamlessly in Airplane Mode or behind total network isolation. Zero external server dependencies required.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Origin Story */}
        <section className="mb-16 space-y-6">
          <div className="inline-block text-xs sm:text-sm font-mono font-bold text-cyan-800 uppercase tracking-wider">
            THE STORY BEHIND NOTRACEFILES
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 font-display">
            Why this project exists
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            <p>
              In recent years, the everyday act of sharing an image has turned into an involuntary transmission of sensitive personal telemetry. When you capture a vacation photo, a snapshot of your children at a park, or a document in your study, modern smartphones and digital cameras silently embed:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-900 text-base sm:text-lg font-bold">
              <li>Exact satellite GPS coordinates (latitude, longitude, elevation) pin-pointing your home or current location.</li>
              <li>Unique camera sensor serial numbers and lens model IDs that link anonymous posts across Reddit, Twitter, and forum accounts.</li>
              <li>Precise UTC timestamps down to the second and sub-second shutter actuations.</li>
              <li>Embedded uncropped thumbnails (up to 64KB) that preserve sensitive content even after you manually cropped the outer picture!</li>
            </ul>
            <p>
              When people search for solutions, the top web results are cloud-based websites that ask users to <em>"Upload your photo here to strip EXIF"</em>. This ironical paradox replaces one surveillance risk with another: handing private photos over to unvetted third-party cloud servers.
            </p>
            <p>
              <strong className="text-slate-900 font-bold">NoTraceFiles</strong> was created by <strong className="text-slate-900 font-bold">Yeasin Arafat Sadiq</strong> as a clean, independent countermeasure. Built as a high-performance offline utility, it empowers anyone to perform instant, byte-level metadata surgery directly on their own device with zero middlemen.
            </p>
          </div>
        </section>

        {/* 4 Pillars of Architecture */}
        <section className="mb-14">
          <div className="inline-block text-xs sm:text-sm font-mono font-bold text-cyan-800 uppercase tracking-wider mb-2.5">
            ARCHITECTURAL PILLARS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.02em] mb-8">
            How NoTraceFiles is engineered differently
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="macos-card p-6 sm:p-8 rounded-3xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-slate-200">
              <ModernOSSquircle variant="cyan" size="md" className="mb-4">
                <Zap size={24} className="text-white" />
              </ModernOSSquircle>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-display">
                1. Surgical Byte-Level Surgery
              </h3>
              <p className="text-base sm:text-[17px] text-slate-700 font-medium leading-relaxed">
                Standard image converters re-compress the picture into a lossy format, causing visual compression artifacts. NoTraceFiles preserves raw DCT entropy and pixel data with <strong className="text-emerald-700 font-bold">0.00% pixel drift</strong>, only excising metadata chunks (APP1, EXIF, XMP, IPTC).
              </p>
            </div>

            <div className="macos-card p-6 sm:p-8 rounded-3xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-slate-200">
              <ModernOSSquircle variant="emerald" size="md" className="mb-4">
                <Smartphone size={24} className="text-white" />
              </ModernOSSquircle>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-display">
                2. Zero Android Internet Permissions
              </h3>
              <p className="text-base sm:text-[17px] text-slate-700 font-medium leading-relaxed">
                The NoTraceFiles Android APK deliberately omits <code className="bg-rose-50 px-2.5 py-0.5 rounded text-rose-700 font-mono font-bold text-sm border border-rose-200">android.permission.INTERNET</code> from its manifest. The mobile operating system physically forbids the app from making external connections.
              </p>
            </div>

            <div className="macos-card p-6 sm:p-8 rounded-3xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-slate-200">
              <ModernOSSquircle variant="brand" size="md" className="mb-4">
                <Monitor size={24} className="text-white" />
              </ModernOSSquircle>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-display">
                3. Native 64-Bit Batch Performance
              </h3>
              <p className="text-base sm:text-[17px] text-slate-700 font-medium leading-relaxed">
                The Windows desktop suite scrubs up to 80 photos per second with right-click File Explorer integration and drag-and-drop batch folder processing, requiring no administrative privileges and leaving zero registry residue.
              </p>
            </div>

            <div className="macos-card p-6 sm:p-8 rounded-3xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-slate-200">
              <ModernOSSquircle variant="violet" size="md" className="mb-4">
                <Lock size={24} className="text-white" />
              </ModernOSSquircle>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-display">
                4. Non-Commercial & Uncompromising
              </h3>
              <p className="text-base sm:text-[17px] text-slate-700 font-medium leading-relaxed">
                No subscription models, no premium paywalls, no advertising trackers, and no venture capital obligations. NoTraceFiles is a free privacy contribution to digital civil liberties.
              </p>
            </div>
          </div>
        </section>

        {/* Creator & Contact Info */}
        <section className="macos-card p-7 sm:p-9 rounded-2xl mb-14 border border-slate-200 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-mono font-bold text-cyan-800 uppercase tracking-wider">
                MAINTAINER & DEVELOPER
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.02em]">
                Yeasin Arafat Sadiq
              </h3>
              <p className="text-base sm:text-lg text-slate-700 font-medium max-w-xl leading-relaxed">
                An independent developer focused on building high-performance local privacy utilities, offline tools, and transparent security applications that give users control over their digital footprint.
              </p>
            </div>

            <button 
              onClick={() => onNavigate('privacy')}
              className="px-6 py-3 rounded-full text-base font-bold bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all text-center cursor-pointer shrink-0 shadow-xs"
            >
              Read Privacy Policy →
            </button>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-slate-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.02em] mb-2.5">
            Ready to sanitize your photo library?
          </h3>
          <p className="text-base sm:text-lg text-slate-700 font-medium mb-6">
            Get the free apps for Windows and Android, or test the live browser inspector.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('home')}
              className="px-7 py-3.5 rounded-full text-base sm:text-lg font-bold bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-xl shadow-[#00253f]/25 border border-cyan-500/30 cursor-pointer"
            >
              Open Interactive Scrubber
            </button>
            <a
              href="/downloads/NoTrace_Files_Setup.exe"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base sm:text-lg font-bold bg-white border border-slate-300 hover:border-slate-400 text-slate-800 transition-all shadow-xs"
            >
              <WindowsIcon size={18} className="text-cyan-700" />
              <span>Download for Windows</span>
            </a>
            <a
              href="/downloads/NoTrace-Files-2.0.1.apk"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base sm:text-lg font-bold bg-white border border-slate-300 hover:border-slate-400 text-slate-800 transition-all shadow-xs"
            >
              <AndroidIcon size={18} className="text-emerald-700" />
              <span>Download for Android</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
