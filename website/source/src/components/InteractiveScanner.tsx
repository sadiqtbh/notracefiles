import React, { useState, useRef } from 'react';
import { 
  MapPin, Clock, Camera, FileCode, Check, RefreshCw, 
  Sparkles, Download, AlertTriangle, ShieldCheck, UploadCloud
} from './Icons';

export const InteractiveScanner: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'landscape' | 'selfie' | 'custom'>('landscape');
  const [isCleaned, setIsCleaned] = useState(false);
  const [isSweeping, setIsSweeping] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [customImageSrc, setCustomImageSrc] = useState<string | null>(null);
  const [customFileName, setCustomFileName] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Metadata payloads
  const landscapeMetadata = [
    { key: 'GPS_LATITUDE', label: 'GPS Latitude', exposedValue: '46.6944° N (Exact Pinpoint)', category: 'location', risk: 'Critical' },
    { key: 'GPS_LONGITUDE', label: 'GPS Longitude', exposedValue: '12.0856° E (Lago di Braies, IT)', category: 'location', risk: 'Critical' },
    { key: 'GPS_ALTITUDE', label: 'GPS Altitude', exposedValue: '1,496 meters above sea level', category: 'location', risk: 'Medium' },
    { key: 'DATE_TIME_ORIG', label: 'Capture Time', exposedValue: '30 Sep 2026 · 17:42:08.42', category: 'time', risk: 'High' },
    { key: 'TIME_ZONE', label: 'Timezone Offset', exposedValue: 'UTC +02:00 (Central European)', category: 'time', risk: 'Medium' },
    { key: 'CAMERA_MAKE', label: 'Camera Brand', exposedValue: 'Sony Corporation', category: 'device', risk: 'Medium' },
    { key: 'CAMERA_MODEL', label: 'Camera Body', exposedValue: 'ILCE-7M4 (Alpha 7 IV)', category: 'device', risk: 'High' },
    { key: 'SERIAL_NUMBER', label: 'Hardware Serial', exposedValue: 'SN# 4912-9843-09A (Unique ID)', category: 'device', risk: 'Critical' },
    { key: 'LENS_MODEL', label: 'Lens Specification', exposedValue: 'FE 24-70mm F2.8 GM II', category: 'device', risk: 'Medium' },
    { key: 'SHUTTER_COUNT', label: 'Total Actuations', exposedValue: '14,291 cycles recorded', category: 'device', risk: 'Low' },
    { key: 'GHOST_THUMBNAIL', label: 'Embedded Cache', exposedValue: '64 KB uncropped original cache', category: 'ghost', risk: 'Critical' },
    { key: 'EDIT_SOFTWARE', label: 'Creation Engine', exposedValue: 'Adobe Photoshop 2026 (Macintosh)', category: 'ghost', risk: 'Low' },
  ];

  const selfieMetadata = [
    { key: 'GPS_LATITUDE', label: 'GPS Latitude', exposedValue: '40.7128° N (Exact Pinpoint)', category: 'location', risk: 'Critical' },
    { key: 'GPS_LONGITUDE', label: 'GPS Longitude', exposedValue: '74.0060° W (Manhattan, NY)', category: 'location', risk: 'Critical' },
    { key: 'GPS_ALTITUDE', label: 'GPS Altitude', exposedValue: '28 meters above sea level', category: 'location', risk: 'Low' },
    { key: 'DATE_TIME_ORIG', label: 'Capture Time', exposedValue: '01 Oct 2026 · 09:14:22.10', category: 'time', risk: 'High' },
    { key: 'TIME_ZONE', label: 'Timezone Offset', exposedValue: 'UTC -04:00 (Eastern Daylight)', category: 'time', risk: 'Medium' },
    { key: 'CAMERA_MAKE', label: 'Smartphone Maker', exposedValue: 'Google LLC', category: 'device', risk: 'Medium' },
    { key: 'CAMERA_MODEL', label: 'Phone Model', exposedValue: 'Pixel 8 Pro (Front Camera)', category: 'device', risk: 'High' },
    { key: 'FIRMWARE_BUILD', label: 'OS Build Number', exposedValue: 'Build AP2A.240905.003', category: 'device', risk: 'High' },
    { key: 'DEVICE_ORIENTATION', label: 'Gyroscope Data', exposedValue: 'Portrait (Rotated 90° CW)', category: 'device', risk: 'Low' },
    { key: 'FACE_RECTANGLE', label: 'Biometric Box', exposedValue: 'Bounding coordinates [X:140, Y:88]', category: 'ghost', risk: 'Critical' },
    { key: 'GHOST_THUMBNAIL', label: 'Original Buffer', exposedValue: '48 KB uncropped preview cache', category: 'ghost', risk: 'Critical' },
    { key: 'EDIT_SOFTWARE', label: 'Internal Pipeline', exposedValue: 'Android Camera Framework 14', category: 'ghost', risk: 'Low' },
  ];

  const currentMetadata = activeTab === 'landscape' ? landscapeMetadata : selfieMetadata;
  const currentImage = activeTab === 'landscape' ? '/photo-free.jpg' : '/photo-pro.jpg';
  const currentFileName = activeTab === 'landscape' ? 'dolomites_vacation.jpg' : 'urban_portrait_front.jpg';

  const handleScrub = () => {
    setIsSweeping(true);
    setTimeout(() => {
      setIsSweeping(false);
      setIsCleaned(true);
      setActiveHotspot(null);
    }, 900);
  };

  const handleReset = () => {
    setIsCleaned(false);
    setActiveHotspot(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setCustomImageSrc(uploadEvent.target?.result as string);
        setCustomFileName(file.name);
        setActiveTab('custom');
        setIsCleaned(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadCleaned = () => {
    const img = new Image();
    img.src = activeTab === 'custom' && customImageSrc ? customImageSrc : currentImage;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || 1200;
      canvas.height = img.naturalHeight || 800;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `notrace_${customFileName || 'sanitized_photo.jpg'}`;
          a.click();
          URL.revokeObjectURL(url);
          setIsCleaned(true);
        }, 'image/jpeg', 0.95);
      }
    };
  };

  return (
    <section id="inspector" className="relative py-24 bg-white border-y border-slate-200">
      {/* Anchor for jumplinks */}
      <div id="safe" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-300 text-xs sm:text-sm font-mono font-bold mb-4 shadow-2xs">
            <Camera size={16} className="text-cyan-700" />
            <span>INTERACTIVE METADATA INSPECTOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-slate-900 tracking-tight leading-tight">
            See the invisible footprint. <br />
            <span className="text-[#00253f]">
              Scrub it with a single click.
            </span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Select a demo photo or drop your own image to inspect what an unstripped file broadcasts to the world.
          </p>

          {/* Sample Selectors */}
          <div className="mt-8 inline-flex items-center p-2 rounded-full bg-white border border-slate-200 shadow-md flex-wrap justify-center gap-2">
            <button
              onClick={() => { setActiveTab('landscape'); setIsCleaned(false); }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer ${
                activeTab === 'landscape'
                  ? 'bg-gradient-to-r from-[#00253f] to-[#00548a] text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <MapPin size={16} className={activeTab === 'landscape' ? 'text-white' : 'text-slate-700'} />
              <span>Vacation Landscape</span>
            </button>
            <button
              onClick={() => { setActiveTab('selfie'); setIsCleaned(false); }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer ${
                activeTab === 'selfie'
                  ? 'bg-gradient-to-r from-[#00253f] to-[#00548a] text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <Camera size={16} className={activeTab === 'selfie' ? 'text-white' : 'text-slate-700'} />
              <span>Urban Selfie</span>
            </button>
            <button
              onClick={() => {
                if (fileInputRef.current) {
                  fileInputRef.current.click();
                }
              }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer ${
                activeTab === 'custom'
                  ? 'bg-gradient-to-r from-[#00253f] to-[#00548a] text-white shadow-md'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <UploadCloud size={16} className={activeTab === 'custom' ? 'text-white' : 'text-slate-700'} />
              <span>{customFileName ? customFileName.slice(0, 18) : 'Test Your Own Photo'}</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
            />
          </div>
        </div>

        {/* Main Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Photo Card with Pulsing Hotspots (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl">
              
              {/* Window Header */}
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="text-sm sm:text-base font-mono font-bold text-slate-900 ml-2 truncate max-w-[200px]">
                    {activeTab === 'custom' ? customFileName : currentFileName}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded-full border ${
                    isCleaned 
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800' 
                      : 'bg-rose-50 border-rose-300 text-rose-800 animate-pulse'
                  }`}>
                    {isCleaned ? 'CLEANED' : 'METADATA DETECTED'}
                  </span>
                </div>
              </div>

              {/* Photo Display Box */}
              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden bg-slate-900">
                <img
                  src={activeTab === 'custom' && customImageSrc ? customImageSrc : currentImage}
                  alt="Scanned specimen"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isCleaned ? 'filter-none' : 'brightness-[0.95]'
                  }`}
                />

                {/* Laser Sweep Scanner Effect */}
                {!isCleaned && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#02cfd9] to-transparent shadow-[0_0_15px_#02cfd9] animate-sweep pointer-events-none z-20">
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#02cfd9]/20 to-transparent pointer-events-none"></div>
                  </div>
                )}

                {/* Scrub Laser Wipe Overlay */}
                {isSweeping && (
                  <div className="absolute inset-0 bg-[#00253f]/40 backdrop-blur-xs z-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white font-mono font-bold text-base tracking-wider bg-[#00253f] px-7 py-3.5 rounded-full border border-cyan-400 shadow-2xl">
                      SCRUBBING METADATA CHUNKS...
                    </div>
                  </div>
                )}

                {/* Active Hotspots Over Photo (Only when exposed and not custom) */}
                {!isCleaned && activeTab !== 'custom' && (
                  <>
                    {/* Hotspot 1: GPS Pin */}
                    <div 
                      className="absolute top-[28%] left-[45%] z-20 cursor-pointer group"
                      onClick={() => setActiveHotspot(activeHotspot === 'gps' ? null : 'gps')}
                    >
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-10 h-10 rounded-full bg-rose-500/50 animate-radar"></span>
                        <div className="relative w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <MapPin size={18} />
                        </div>
                      </div>
                      
                      {/* Hotspot Tooltip */}
                      <div className={`absolute left-10 -top-4 w-60 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-rose-200 shadow-2xl text-left pointer-events-none transition-all duration-200 ${
                        activeHotspot === 'gps' ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-100 scale-95'
                      }`}>
                        <div className="text-xs font-mono text-rose-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <AlertTriangle size={14} />
                          <span>EXIF GPS Coordinates</span>
                        </div>
                        <div className="text-base font-bold text-slate-900 mt-1">
                          {activeTab === 'landscape' ? '46.6944° N, 12.0856° E' : '40.7128° N, 74.0060° W'}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-700 mt-0.5 font-bold">
                          {activeTab === 'landscape' ? 'Lago di Braies, Italy' : 'Pinpoints home within 3m'}
                        </div>
                      </div>
                    </div>

                    {/* Hotspot 2: Time */}
                    <div 
                      className="absolute top-[65%] left-[25%] z-20 cursor-pointer group"
                      onClick={() => setActiveHotspot(activeHotspot === 'time' ? null : 'time')}
                    >
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-10 h-10 rounded-full bg-amber-500/50 animate-radar"></span>
                        <div className="relative w-9 h-9 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform font-bold">
                          <Clock size={18} />
                        </div>
                      </div>

                      <div className={`absolute left-10 -top-3 w-56 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-amber-200 shadow-2xl text-left pointer-events-none transition-all duration-200 ${
                        activeHotspot === 'time' ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-100 scale-95'
                      }`}>
                        <div className="text-xs font-mono text-amber-800 font-bold uppercase tracking-wider">
                          Exact Moment
                        </div>
                        <div className="text-base font-bold text-slate-900 mt-0.5">
                          17:42:08.42 UTC+2
                        </div>
                        <div className="text-xs sm:text-sm text-slate-700 font-bold">
                          Sub-second shutter timestamp
                        </div>
                      </div>
                    </div>

                    {/* Hotspot 3: Device / Camera */}
                    <div 
                      className="absolute bottom-[22%] right-[22%] z-20 cursor-pointer group"
                      onClick={() => setActiveHotspot(activeHotspot === 'device' ? null : 'device')}
                    >
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-10 h-10 rounded-full bg-sky-500/50 animate-radar"></span>
                        <div className="relative w-9 h-9 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform font-bold">
                          <Camera size={18} />
                        </div>
                      </div>

                      <div className={`absolute right-10 -top-3 w-60 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-sky-200 shadow-2xl text-left pointer-events-none transition-all duration-200 ${
                        activeHotspot === 'device' ? 'opacity-100 scale-100' : 'opacity-0 group-hover:opacity-100 scale-95'
                      }`}>
                        <div className="text-xs font-mono text-sky-800 font-bold uppercase tracking-wider">
                          Hardware Fingerprint
                        </div>
                        <div className="text-base font-bold text-slate-900 mt-0.5">
                          {activeTab === 'landscape' ? 'Sony Alpha 7 IV · 24mm' : 'Google Pixel 8 Pro'}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-700 font-bold">
                          Unique serial & sensor profile
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Cleaned Badge Watermark */}
                {isCleaned && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-xs flex flex-col items-center justify-center text-center p-6 z-20 animate-fade-in">
                    <div className="w-18 h-18 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xl mb-4">
                      <ShieldCheck size={36} />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-emerald-950 tracking-tight">100% Metadata Free</div>
                    <p className="text-base sm:text-lg text-slate-800 max-w-sm mt-2 font-bold leading-relaxed">
                      All EXIF, GPS coordinates, serials, and edit history wiped. Pure pixels preserved.
                    </p>
                  </div>
                )}
              </div>

              {/* Status Bar Beneath Photo */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex items-center justify-between text-sm sm:text-base font-mono font-bold">
                <div className="flex items-center gap-2.5">
                  <span className={`w-3 h-3 rounded-full ${isCleaned ? 'bg-emerald-500' : 'bg-rose-500 animate-pulse'}`}></span>
                  <span className={isCleaned ? 'text-emerald-800 font-bold' : 'text-rose-800 font-bold'}>
                    {isCleaned ? 'Privacy Score: 100% Safe' : 'Privacy Score: Exposed'}
                  </span>
                </div>
                <div className="text-slate-900 font-bold">
                  {isCleaned ? 'Stripped: -84 KB' : 'Hidden bloat: 84 KB'}
                </div>
              </div>

            </div>

            {/* Interactive Control Buttons */}
            <div className="flex items-center gap-3">
              {!isCleaned ? (
                <button
                  onClick={handleScrub}
                  disabled={isSweeping}
                  className="flex-1 py-4 px-6 rounded-full font-bold text-base sm:text-lg gap-2.5 cursor-pointer bg-gradient-to-r from-[#00253f] via-[#003b64] to-[#00548a] hover:to-[#0284c7] text-white shadow-xl shadow-[#00253f]/25 border border-cyan-500/30 inline-flex items-center justify-center transition-all hover:scale-[1.01]"
                >
                  <Sparkles size={18} />
                  <span>Scrub All Metadata (Live Demo)</span>
                </button>
              ) : (
                <div className="flex-1 flex items-center gap-3">
                  <button
                    onClick={handleReset}
                    className="flex-1 py-4 px-6 rounded-full font-bold text-base gap-2 cursor-pointer border border-slate-300 text-slate-800 hover:bg-slate-100 inline-flex items-center justify-center transition-all shadow-xs"
                  >
                    <RefreshCw size={17} />
                    <span>Reset Demo State</span>
                  </button>
                  {activeTab === 'custom' && (
                    <button
                      onClick={handleDownloadCleaned}
                      className="flex-1 py-4 px-6 rounded-full font-bold text-base gap-2 cursor-pointer bg-gradient-to-r from-[#00253f] to-[#0284c7] text-white inline-flex items-center justify-center shadow-lg"
                    >
                      <Download size={17} />
                      <span>Download Cleaned JPG</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {activeTab === 'custom' && !isCleaned && (
              <button
                onClick={handleDownloadCleaned}
                className="w-full py-4 px-6 rounded-full font-bold text-base gap-2 cursor-pointer bg-gradient-to-r from-[#00253f] to-[#0284c7] text-white inline-flex items-center justify-center shadow-lg"
              >
                <Download size={18} />
                <span>Sanitize & Download Cleaned Photo</span>
              </button>
            )}

            <div className="text-sm sm:text-[15px] text-slate-800 text-center font-bold flex items-center justify-center gap-2 pt-1">
              <ShieldCheck size={18} className="text-emerald-600 shrink-0 font-bold" />
              <span>Processed 100% in your local browser sandbox. Nothing leaves your computer.</span>
            </div>
          </div>

          {/* Right Column: Technical Telemetry & Metadata Inspector (7 cols) */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden min-w-0">
            
            {/* Terminal Top Bar */}
            <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#00253f] text-white flex items-center justify-center shadow-xs shrink-0">
                  <FileCode size={16} />
                </div>
                <span className="text-xs sm:text-base font-mono font-bold tracking-wider text-slate-900 uppercase">
                  RAW FILE TELEMETRY / EXIF DECODER
                </span>
              </div>
              <span className={`text-xs sm:text-sm font-mono font-bold ${isCleaned ? 'text-emerald-700' : 'text-rose-600'}`}>
                {isCleaned ? 'STATUS: ZERO TRACE' : 'STATUS: 12 ATTRIBUTES EXPOSED'}
              </span>
            </div>

            {/* Warning or Success Banner */}
            <div className={`px-4 sm:px-6 py-3 sm:py-3.5 border-b text-xs sm:text-base flex flex-wrap items-center justify-between gap-2.5 ${
              isCleaned 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950 font-bold' 
                : 'bg-rose-50 border-rose-200 text-rose-950 font-bold'
            }`}>
              <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                {isCleaned ? <ShieldCheck size={18} className="text-emerald-600 shrink-0" /> : <AlertTriangle size={18} className="text-rose-600 shrink-0" />}
                <span className="leading-snug">
                  {isCleaned 
                    ? 'All sensitive tags successfully purged from file headers.' 
                    : 'Unscrubbed file: Private coordinates & identifiers broadcasted upon sharing.'}
                </span>
              </div>
              <span className={`font-mono text-xs sm:text-sm uppercase font-bold tracking-wider px-3 py-1 rounded-md shadow-2xs shrink-0 ${
                isCleaned ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
              }`}>
                {isCleaned ? 'SAFE TO SHARE' : 'VULNERABLE'}
              </span>
            </div>

            {/* Table of Metadata Fields */}
            <div className="divide-y divide-slate-100 overflow-x-auto max-h-[520px] overflow-y-auto">
              {currentMetadata.map((item) => (
                <div 
                  key={item.key}
                  className={`px-4 sm:px-6 py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 transition-colors ${
                    isCleaned ? 'bg-emerald-50/20' : 'hover:bg-slate-50/90'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-bold ${
                      item.category === 'location' ? 'bg-rose-100 text-rose-700' :
                      item.category === 'time' ? 'bg-amber-100 text-amber-700' :
                      item.category === 'device' ? 'bg-sky-100 text-sky-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {item.category === 'location' && <MapPin size={16} />}
                      {item.category === 'time' && <Clock size={16} />}
                      {item.category === 'device' && <Camera size={16} />}
                      {item.category === 'ghost' && <FileCode size={16} />}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm sm:text-base font-mono font-bold text-slate-900 truncate">{item.key}</span>
                      <span className="text-xs sm:text-sm text-slate-600 font-bold truncate">({item.label})</span>
                    </div>
                  </div>

                  <div className="flex-1 sm:text-right pl-12 sm:pl-0">
                    {isCleaned ? (
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-md border border-emerald-300">
                        <Check size={15} strokeWidth={2.5} />
                        <span>REMOVED · 0 BITS</span>
                      </span>
                    ) : (
                      <div className="flex flex-col items-start sm:items-end">
                        <span className="text-sm sm:text-base font-mono font-bold text-slate-900">
                          {item.exposedValue}
                        </span>
                        <span className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono uppercase tracking-wider mt-1 font-bold px-2.5 py-0.5 rounded border ${
                          item.risk === 'Critical' 
                            ? 'text-rose-800 bg-rose-50 border-rose-300' 
                            : item.risk === 'High' 
                            ? 'text-amber-900 bg-amber-50 border-amber-300' 
                            : 'text-sky-900 bg-sky-50 border-sky-300'
                        }`}>
                          <AlertTriangle size={12} className={item.risk === 'Critical' ? 'text-rose-600' : item.risk === 'High' ? 'text-amber-600' : 'text-sky-600'} />
                          <span>{item.risk} Risk Tag</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm text-slate-800 font-mono font-bold">
              <span>Standard: EXIF 2.32 / XMP 2026 / IPTC</span>
              <span>Encoding: Lossless Strip</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
