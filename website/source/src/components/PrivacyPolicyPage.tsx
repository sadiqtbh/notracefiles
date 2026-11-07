import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Check, 
  WindowsIcon, 
  AndroidIcon,
  ModernOSSquircle,
  OSAppIcon
} from './Icons';

interface PrivacyPolicyPageProps {
  onNavigate: (page: 'home' | 'about' | 'privacy') => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-slate-900 min-h-screen py-12 sm:py-20 relative">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern bg-radial-mask opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-slate-700 mb-8 font-bold">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-slate-950 font-bold transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-slate-950 font-bold">Privacy Policy</span>
        </div>

        {/* Header */}
        <header className="mb-14">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-5">
            <OSAppIcon size={72} className="hover:scale-105 transition-transform shrink-0" />
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-300 bg-cyan-50 text-cyan-950 text-xs sm:text-sm font-mono font-bold mb-3 shadow-2xs">
                <Lock size={16} className="text-cyan-700" />
                <span>RADICAL PRIVACY · ZERO COMPROMISE</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 tracking-[-0.03em] mb-2 font-display">
                Privacy Policy
              </h1>
              <p className="text-base font-mono text-slate-800 font-bold">
                Effective Date: <strong className="text-slate-950 font-bold">October 2026</strong> · Version 2.1 · 100% Local Utility
              </p>
            </div>
          </div>
        </header>

        {/* ------------------------------------------------------------------ */}
        {/* MANDATORY PROMINENT CALLOUT: ZERO TELEMETRY & NO LOGS OR TRACKING */}
        {/* ------------------------------------------------------------------ */}
        <div className="macos-card rounded-3xl p-7 sm:p-9 mb-14 shadow-xl border border-slate-200">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-300 w-fit mb-3.5">
            <ShieldCheck size={18} className="text-emerald-700" />
            <span>FOUNDATIONAL PRIVACY DECLARATION</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-[-0.02em] mb-3 font-display">
            Zero Telemetry. No logs or tracking.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6">
            The core principle of NoTraceFiles is total mathematical privacy: <strong className="text-slate-900 font-bold">we cannot compromise your data because we never touch, see, or transmit it</strong>. There are no telemetry servers to breach, no logs to subpoena, and no tracking cookies to profile you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <ModernOSSquircle variant="emerald" size="sm" className="mb-3">
                <ShieldCheck size={18} className="text-white" />
              </ModernOSSquircle>
              <span className="text-slate-900 font-mono font-bold block mb-1.5 text-sm sm:text-[15px] uppercase tracking-wider">
                ZERO TELEMETRY
              </span>
              <p className="text-slate-700 font-medium text-base leading-relaxed">
                No diagnostic packets, crash dumps, or ping-backs sent across the internet.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <ModernOSSquircle variant="brand" size="sm" className="mb-3">
                <Lock size={18} className="text-white" />
              </ModernOSSquircle>
              <span className="text-slate-900 font-mono font-bold block mb-1.5 text-sm sm:text-[15px] uppercase tracking-wider">
                NO LOGS OR TRACKING
              </span>
              <p className="text-slate-700 font-medium text-base leading-relaxed">
                Zero retention of file names, processed timestamps, or personal device IDs.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Policy Sections */}
        <div className="space-y-12 text-slate-700 leading-relaxed">

          {/* Section 1 */}
          <section className="space-y-4 border-b border-slate-200 pb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.02em] flex items-center gap-3">
              <span className="text-cyan-800 font-mono text-xl sm:text-2xl font-bold">01.</span>
              <span>Information We Do Not Collect</span>
            </h3>
            <p className="font-medium text-slate-700 text-base sm:text-lg">
              Neither the NoTraceFiles website, the Windows desktop installer, the portable Windows utility, nor the Android mobile application collect, record, or store any of the following:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-900 text-base sm:text-lg font-bold">
              <li><strong>Photos or Files:</strong> Images dropped into the native applications or the browser inspector are parsed strictly in local memory and are never uploaded to any remote server.</li>
              <li><strong>Metadata Payloads:</strong> Extracted GPS coordinates, camera serial numbers, camera model details, and timestamps remain on your device and are severed on-the-fly.</li>
              <li><strong>Personal Identifiers:</strong> We do not ask for, collect, or store names, email addresses, phone numbers, or account credentials.</li>
              <li><strong>Hardware & Telemetry Identifiers:</strong> No MAC addresses, Android Advertising IDs (AAID), Windows GUIDs, or hardware serial numbers are collected.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-slate-200 pb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.02em] flex items-center gap-3">
              <span className="text-cyan-800 font-mono text-xl sm:text-2xl font-bold">02.</span>
              <span>Local Memory Execution Architecture</span>
            </h3>
            <p className="font-medium text-slate-700 text-base sm:text-lg">
              When you drag a file into NoTraceFiles, the file binary is decoded directly into local system RAM. The application inspects the file header segments (such as APP1 for JPEG or chunks for PNG) and excises the metadata payload without re-encoding your image pixels.
            </p>
            <p className="font-medium text-slate-700 text-base sm:text-lg">
              Once sanitization completes, the sanitized file is written to your local storage, and the RAM buffer is immediately cleared.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-slate-200 pb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.02em] flex items-center gap-3">
              <span className="text-cyan-800 font-mono text-xl sm:text-2xl font-bold">03.</span>
              <span>Android Application Permissions</span>
            </h3>
            <p className="font-medium text-slate-700 text-base sm:text-lg">
              The NoTraceFiles Android application is specifically engineered with zero external communication capabilities:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-sm sm:text-base text-slate-800 space-y-2.5 font-bold">
              <div className="flex items-center gap-2 text-rose-700 font-bold">
                <span>✕</span>
                <span>NO android.permission.INTERNET</span>
              </div>
              <div className="flex items-center gap-2 text-rose-700 font-bold">
                <span>✕</span>
                <span>NO android.permission.ACCESS_NETWORK_STATE</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <span>✓</span>
                <span>ONLY scoped URI read/write for selected images via Android Storage Access Framework</span>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-slate-200 pb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.02em] flex items-center gap-3">
              <span className="text-cyan-800 font-mono text-xl sm:text-2xl font-bold">04.</span>
              <span>Third-Party Sharing & Data Monetization</span>
            </h3>
            <p className="font-medium text-slate-700 text-base sm:text-lg">
              We do not sell, rent, license, trade, or share any user information with data brokers, ad networks, or government surveillance entities. Because we operate under a <strong className="text-slate-900 font-bold">Zero Telemetry</strong> architecture, we possess no user data to monetize or disclose.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-slate-200 pb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.02em] flex items-center gap-3">
              <span className="text-cyan-800 font-mono text-xl sm:text-2xl font-bold">05.</span>
              <span>Independent Verification (How to Audit)</span>
            </h3>
            <p className="font-medium text-slate-700 text-base sm:text-lg">
              We believe privacy should be verifiable, not merely promised. Anyone can verify our claims using standard packet analysis and monitoring tools:
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-sm sm:text-base text-slate-800 space-y-3 leading-relaxed font-bold">
              <div>Verification Step 1: Launch Wireshark, GlassWire, or Little Snitch on your desktop.</div>
              <div>Verification Step 2: Filter by process name <code className="bg-slate-200 px-2 py-0.5 rounded text-slate-950 font-bold">NoTraceFiles.exe</code>.</div>
              <div>Verification Step 3: Drop 100 images into the app and initiate a batch scrub.</div>
              <div className="text-emerald-700 font-bold pt-1">
                Result: 0 outbound network packets, 0 DNS queries, and 0 socket connections will be recorded.
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-[-0.02em] flex items-center gap-3">
              <span className="text-cyan-800 font-mono text-xl sm:text-2xl font-bold">06.</span>
              <span>Contact & Transparency</span>
            </h3>
            <p className="font-medium text-slate-700 text-base sm:text-lg">
              NoTraceFiles is developed and maintained by <strong className="text-slate-900 font-bold">Yeasin Arafat Sadiq</strong> as a public interest privacy utility. If you have questions about this policy or want to review our architecture, feel free to reach out.
            </p>
          </section>

        </div>

        {/* Back to Home CTA */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="px-7 py-3.5 rounded-full text-base sm:text-lg font-bold bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-xl shadow-[#00253f]/25 border border-cyan-500/30 cursor-pointer"
          >
            ← Return to Home
          </button>
          
          <button
            onClick={() => onNavigate('about')}
            className="px-6 py-3.5 rounded-full text-base sm:text-lg font-bold bg-white text-slate-800 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all cursor-pointer shadow-xs"
          >
            Read About NoTraceFiles →
          </button>
        </div>

      </div>
    </div>
  );
};
