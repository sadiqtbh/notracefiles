import React from 'react';
import { ChevronDown, Sparkles } from './Icons';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: 'Does NoTraceFiles upload my photos to any cloud server?',
      a: 'Never. NoTraceFiles processes all files 100% locally on your device. The Windows application runs in an isolated desktop runtime, and the Android application does not even request the INTERNET permission in its manifest. Your pictures never leave your device.'
    },
    {
      q: 'Does stripping metadata reduce the image quality or change resolution?',
      a: 'No. NoTraceFiles performs lossless header excision. Image pixels, resolution, colors, and sharpness remain 100% untouched. Only the binary metadata headers (EXIF, IPTC, XMP, GPS segments) are stripped out, which typically reduces the file size by 50KB to 200KB.'
    },
    {
      q: 'Don’t platforms like Instagram and Twitter strip metadata automatically?',
      a: 'While some social media feeds re-encode uploaded photos, they ingest and read the metadata first upon upload. Furthermore, when you share photos via email, messaging apps (e.g. WhatsApp "Send as Document", Telegram "Send as File"), AirDrop, Google Drive, or shared albums, the original file is preserved with all GPS and camera telemetry intact.'
    },
    {
      q: 'What file formats can NoTraceFiles clean?',
      a: 'On Android, NoTraceFiles cleans JPEG, PNG, and static WebP images. On Windows, it additionally supports TIFF, multi-page PDF documents, and common media container metadata.'
    },
    {
      q: 'Why did Yeasin Arafat Sadiq create NoTraceFiles, and is it really free?',
      a: 'NoTraceFiles was built by Yeasin Arafat Sadiq as a free, independent privacy tool to give everyday people control over what their photos broadcast. There are no subscriptions, no ads, no locked "pro" features, and no telemetry.'
    },
    {
      q: 'Can I batch clean hundreds of photos at once?',
      a: 'Yes! The Windows desktop app is engineered for bulk operations. You can drag and drop folders containing thousands of photos, and NoTraceFiles will sanitize them in parallel in seconds.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-950 border border-cyan-300 text-xs sm:text-sm font-mono font-bold mb-4 shadow-2xs">
            <Sparkles size={16} className="text-cyan-700" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 tracking-tight leading-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
            Everything you need to know about hidden metadata, file headers, and how NoTraceFiles keeps you safe.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              name="notrace-faq"
              className="group border border-slate-200 rounded-2xl p-6 sm:p-8 transition-all duration-200 open:bg-slate-50/80 shadow-2xs hover:border-slate-300"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none text-lg sm:text-xl font-bold text-slate-900 select-none font-display">
                <span className="pr-4">{faq.q}</span>
                <span className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-open:rotate-180 group-open:text-cyan-700 transition-transform duration-200 flex-shrink-0 shadow-2xs">
                  <ChevronDown size={18} />
                </span>
              </summary>
              <div className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium pt-4 border-t border-slate-200">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};
