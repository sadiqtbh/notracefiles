import React from 'react';
import { Check, ShieldCheck, Lock, ModernOSSquircle, Sparkles, X } from './Icons';

export const ComparisonMatrix: React.FC = () => {
  const comparisons = [
    {
      feature: 'Local Offline Execution',
      description: 'Executes strictly in local device RAM with zero cloud upload',
      notrace: '100% Offline (0 bytes sent)',
      cloud: 'No (Uploads photo to remote server)',
      messaging: 'No (Stores on cloud servers)',
      notracePass: true,
      cloudPass: false,
      messagingPass: false,
    },
    {
      feature: 'Zero Telemetry & No Tracking',
      description: 'No analytical beacons, crash pings, or user profiling',
      notrace: 'Zero Telemetry (0 trackers)',
      cloud: 'No (Google Analytics, Sentry)',
      messaging: 'No (Ad profiling & engagement logs)',
      notracePass: true,
      cloudPass: false,
      messagingPass: false,
    },
    {
      feature: 'Lossless Bit-Perfect Image Quality',
      description: 'Preserves 100% of raw pixel colors, resolution, and sharp details',
      notrace: 'Bit-Perfect (0.00% drift)',
      cloud: 'Lossy Re-compression',
      messaging: 'Aggressive Blurry Compression',
      notracePass: true,
      cloudPass: false,
      messagingPass: false,
    },
    {
      feature: 'Surgical GPS Coordinate Removal',
      description: 'Completely strips satellite latitude, longitude, and elevation',
      notrace: 'Purged in milliseconds',
      cloud: 'Varies by provider',
      messaging: 'Retained in cloud original',
      notracePass: true,
      cloudPass: false,
      messagingPass: false,
    },
    {
      feature: 'Camera Hardware Serial Severing',
      description: 'Prevents device correlation and cross-platform fingerprinting',
      notrace: 'Severed on-the-fly',
      cloud: 'Often ignored or retained',
      messaging: 'Retained in metadata payload',
      notracePass: true,
      cloudPass: false,
      messagingPass: false,
    },
    {
      feature: 'Sub-Second Shutter Timeline Excised',
      description: 'Eliminates millisecond timestamps that reveal daily routines',
      notrace: 'Cleanly Excised',
      cloud: 'Partially stripped',
      messaging: 'Retained in internal records',
      notracePass: true,
      cloudPass: false,
      messagingPass: false,
    },
    {
      feature: 'Non-Commercial & No Account Needed',
      description: 'No email sign-up, no monthly fees, and no paywalled features',
      notrace: '100% Free Forever',
      cloud: 'Freemium / Batch Paywalls',
      messaging: 'Requires Phone / Email Account',
      notracePass: true,
      cloudPass: false,
      messagingPass: false,
    }
  ];

  return (
    <section id="compare" className="py-24 bg-slate-50/50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-300 text-xs sm:text-sm font-mono font-bold mb-4 shadow-2xs">
            <Sparkles size={16} className="text-cyan-700" />
            <span>HOW WE COMPARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-slate-900 tracking-tight leading-tight">
            Compare NoTraceFiles. <br />
            <span className="text-[#00253f]">
              See the difference true privacy makes.
            </span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            NoTraceFiles severs surveillance metadata locally. Here is how byte-level surgical privacy stacks up against cloud web scrubbers and messaging platforms.
          </p>
        </div>

        {/* Comparison Table in Clean Spec Sheet Design */}
        <div className="max-w-5xl mx-auto overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-5 px-6 sm:px-8 text-sm sm:text-base font-bold font-mono uppercase tracking-wider text-slate-700 w-2/5">
                    Privacy & Quality Capability
                  </th>
                  <th className="py-5 px-4 sm:px-6 text-sm sm:text-base font-bold font-mono uppercase tracking-wider text-[#00253f] bg-cyan-50/60 border-x-2 border-cyan-400 w-1/5 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-base sm:text-lg font-bold text-[#00253f]">NoTraceFiles</span>
                      <span className="text-xs font-bold text-cyan-950 uppercase tracking-widest px-3 py-0.5 rounded-full bg-cyan-200 border border-cyan-300">
                        Official Local
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-4 sm:px-6 text-sm sm:text-base font-bold font-mono uppercase tracking-wider text-slate-700 w-1/5 text-center">
                    Online Web Scrubbers
                  </th>
                  <th className="py-5 px-4 sm:px-6 text-sm sm:text-base font-bold font-mono uppercase tracking-wider text-slate-700 w-1/5 text-center">
                    Social Messaging Apps
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisons.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    {/* Feature & Description */}
                    <td className="py-5 px-6 sm:px-8">
                      <div className="font-bold text-base sm:text-lg text-slate-900">
                        {item.feature}
                      </div>
                      <div className="text-sm sm:text-[15px] text-slate-700 font-medium mt-1 leading-snug">
                        {item.description}
                      </div>
                    </td>

                    {/* NoTraceFiles Column */}
                    <td className="py-5 px-4 sm:px-6 bg-cyan-50/20 border-x-2 border-cyan-400/50 text-center font-bold">
                      <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 text-sm font-bold shadow-2xs">
                        <Check size={16} className="text-emerald-700 font-bold shrink-0" strokeWidth={2.5} />
                        <span>{item.notrace}</span>
                      </div>
                    </td>

                    {/* Cloud Scrubbers */}
                    <td className="py-5 px-4 sm:px-6 text-center text-xs sm:text-sm font-mono">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200 font-bold">
                        <X size={14} className="text-rose-600 shrink-0" strokeWidth={2.5} />
                        <span>{item.cloud}</span>
                      </span>
                    </td>

                    {/* Messaging Apps */}
                    <td className="py-5 px-4 sm:px-6 text-center text-xs sm:text-sm font-mono">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200 font-bold">
                        <X size={14} className="text-slate-600 shrink-0" strokeWidth={2.5} />
                        <span>{item.messaging}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Pledge Callout */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-50 via-cyan-50/30 to-emerald-50/30 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck size={20} className="text-emerald-700" />
              </div>
              <span className="text-base sm:text-[17px] font-medium text-slate-900">
                Backed by principle, not surveillance capitalism. Created by <strong className="text-slate-950 font-bold">Yeasin Arafat Sadiq</strong>.
              </span>
            </div>

            <a
              href="/downloads/NoTrace_Files_Setup.exe"
              download
              className="px-7 py-3 text-base font-bold text-white rounded-full bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] shadow-lg shadow-[#00253f]/20 border border-cyan-500/30 shrink-0 cursor-pointer transition-all hover:scale-[1.02]"
            >
              Get NoTraceFiles Free →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
