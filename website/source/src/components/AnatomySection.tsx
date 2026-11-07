import React from 'react';
import { MapPin, Clock, Camera, FileCode, AlertTriangle, ModernOSSquircle, OSSquircleVariant } from './Icons';

export const AnatomySection: React.FC = () => {
  const vectors: Array<{
    id: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    tag: string;
    tagBg: string;
    headline: string;
    description: string;
    fields: string[];
    variant: OSSquircleVariant;
  }> = [
    {
      id: '01',
      icon: MapPin,
      variant: 'rose',
      title: 'Geographic Pinpointing',
      tag: 'EXIF 0x0002 · GPSInfo',
      tagBg: 'bg-rose-50 text-rose-800 border-rose-300',
      headline: 'A photo on your balcony reveals your street address.',
      description: 'Smartphones and modern cameras silently embed your latitude, longitude, and altitude. When you send an original image, anyone can paste the coordinates into Google Maps and find your home, child’s school, or secret spots.',
      fields: ['GPSLatitude: 46.6944° N', 'GPSLongitude: 12.0856° E', 'GPSAltitude: 1,496m', 'GPSImgDirection: 142° SE']
    },
    {
      id: '02',
      icon: Clock,
      variant: 'amber',
      title: 'Behavioral Timeline',
      tag: 'EXIF 0x9003 · DateTimeOriginal',
      tagBg: 'bg-amber-50 text-amber-900 border-amber-300',
      headline: 'Sub-second timestamps map your daily routine.',
      description: 'Unlike the file creation date on your PC, EXIF records the exact millisecond the shutter opened, alongside the timezone offset. This creates a detailed timeline revealing when your house is empty or when you travel.',
      fields: ['DateTimeOriginal: 2026:09:30 17:42:08', 'OffsetTime: +02:00', 'SubSecTimeOriginal: 420ms']
    },
    {
      id: '03',
      icon: Camera,
      variant: 'violet',
      title: 'Hardware Fingerprint',
      tag: 'EXIF 0xA431 · BodySerialNumber',
      tagBg: 'bg-violet-50 text-violet-900 border-violet-300',
      headline: 'Unique camera serials connect anonymous posts.',
      description: 'Your camera body serial number, lens serial, and internal sensor calibration are baked into the raw metadata headers. Data scrapers can correlate multiple anonymous photos across different platforms back to one camera.',
      fields: ['Make: Sony Corp', 'Model: ILCE-7M4', 'SerialNumber: 4912-9843-09A', 'LensModel: FE 24-70mm F2.8']
    },
    {
      id: '04',
      icon: FileCode,
      variant: 'cyan',
      title: 'Ghost Thumbnails & Edits',
      tag: 'IFD1 · XMP History & Thumbnail',
      tagBg: 'bg-cyan-50 text-cyan-900 border-cyan-300',
      headline: 'Cropped something out? The thumbnail might still show it.',
      description: 'Many phone and desktop editors generate an embedded thumbnail cache when saving. If you crop out a face, address, or credit card, the hidden thumbnail inside the EXIF header often retains the unedited original!',
      fields: ['Software: Adobe Photoshop 2026', 'ThumbnailData: 64KB uncropped', 'HistoryAction: saved / modified']
    }
  ];

  return (
    <section id="anatomy" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-300 text-rose-800 text-xs sm:text-sm font-mono font-bold mb-4 shadow-2xs">
            <AlertTriangle size={16} className="text-rose-600" />
            <span>THE 4 HIDDEN THREAT VECTORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-slate-900 tracking-tight leading-tight">
            What an unstripped file <br />
            <span className="text-[#00253f]">
              actually reveals about you.
            </span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            A photograph isn't just color pixels. Modern image formats pack dozens of technical data headers that persist when emailed, airdropped, or shared.
          </p>
        </div>

        {/* 4 Attack Vector Cards in Modern OS Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vectors.map((v) => {
            const IconComponent = v.icon;
            return (
              <div 
                key={v.id}
                className="macos-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 shadow-xl"
              >
                <div>
                  {/* Top Bar with Number & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <ModernOSSquircle variant={v.variant} size="md">
                        <IconComponent size={24} className="text-white" />
                      </ModernOSSquircle>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-600 font-bold">
                          Vector {v.id}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display truncate">
                          {v.title}
                        </h3>
                      </div>
                    </div>
                    <span className={`text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-full border font-bold shrink-0 ${v.tagBg}`}>
                      {v.tag}
                    </span>
                  </div>

                  {/* Headline & Body */}
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 leading-snug">
                    {v.headline}
                  </h4>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                    {v.description}
                  </p>
                </div>

                {/* Example Payload Chips */}
                <div className="mt-7 pt-4 border-t border-slate-200">
                  <div className="text-xs sm:text-sm font-mono uppercase text-slate-600 mb-3 font-bold flex items-center gap-2">
                    <span>Sample exposed bytes:</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {v.fields.map((f, i) => (
                      <span 
                        key={i} 
                        className="text-sm sm:text-base font-mono font-bold px-3.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 shadow-2xs hover:border-slate-300 transition-colors"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
