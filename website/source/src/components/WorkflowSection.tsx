import React from 'react';
import { UploadCloud, Zap, ShieldCheck, Check, ModernOSSquircle, OSSquircleVariant } from './Icons';

export const WorkflowSection: React.FC = () => {
  const steps: Array<{
    num: string;
    title: string;
    desc: string;
    badge: string;
    badgeBg: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    variant: OSSquircleVariant;
  }> = [
    {
      num: '01',
      title: 'Select or Drop',
      desc: 'Drag photos into NoTraceFiles on Windows, or share directly via the Android share sheet from your camera roll.',
      badge: 'Batch or Single',
      badgeBg: 'bg-sky-50 text-sky-800 border-sky-300',
      icon: UploadCloud,
      variant: 'blue',
    },
    {
      num: '02',
      title: 'Surgical Local Scrub',
      desc: 'NoTraceFiles parses image headers and excises EXIF, GPS, IPTC, and XMP payloads in under 2 milliseconds per file.',
      badge: 'Zero Cloud Upload',
      badgeBg: 'bg-cyan-50 text-cyan-900 border-cyan-300',
      icon: Zap,
      variant: 'cyan',
    },
    {
      num: '03',
      title: 'Share With Confidence',
      desc: 'Export sanitized copies with pristine original pixel resolution. Post to social media or message friends with zero footprint.',
      badge: '100% Lossless Pixels',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      icon: ShieldCheck,
      variant: 'emerald',
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-slate-50/50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-950 border border-cyan-300 text-xs sm:text-sm font-mono font-bold mb-4 shadow-2xs">
            <Zap size={16} className="text-cyan-700" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 tracking-tight leading-tight">
            Cleaned in milliseconds. <br />
            <span className="text-[#00253f]">
              Never touches the cloud.
            </span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            A frictionless privacy routine that fits seamlessly into your photo sharing habits on desktop and mobile.
          </p>
        </div>

        {/* 3 Steps Grid in Modern OS Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="macos-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-slate-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-bold font-mono text-slate-300 group-hover:text-cyan-700 transition-colors">
                      {step.num}
                    </span>
                    <ModernOSSquircle variant={step.variant} size="md">
                      <Icon size={24} className="text-white" />
                    </ModernOSSquircle>
                  </div>

                  <span className={`inline-block text-xs sm:text-sm font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border mb-3 ${step.badgeBg}`}>
                    {step.badge}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center text-sm sm:text-base font-mono font-bold text-slate-800">
                  <Check size={16} className="text-emerald-600 mr-2 shrink-0 font-bold" strokeWidth={2.5} />
                  <span>Offline verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Architecture Callout in Modern OS Style */}
        <div className="mt-14 macos-card rounded-3xl p-7 sm:p-9 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-7 text-center sm:text-left shadow-xl border border-slate-200">
          <ModernOSSquircle variant="brand" size="lg" className="shrink-0">
            <ShieldCheck size={32} className="text-white" />
          </ModernOSSquircle>
          <div>
            <div className="text-xs sm:text-sm font-mono text-cyan-800 font-bold uppercase tracking-wider mb-1">
              PROPRIETARY ENGINE
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Lossless Header Decoupling Engine
            </h4>
            <p className="text-base sm:text-lg text-slate-700 mt-2 leading-relaxed font-medium">
              Unlike online converters that recompress images and introduce artifacting or blurry compression, NoTraceFiles parses file segments at the byte level. It excises APP1, ExifIFD, and GPS metadata markers while leaving the compressed Huffman and DCT entropy data untouched.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
