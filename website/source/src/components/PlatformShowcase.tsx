import React, { useState } from 'react';
import { WindowsIcon, AndroidIcon, Download, Check, Monitor } from './Icons';

export const PlatformShowcase: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'windows' | 'android'>('windows');

  return (
    <section className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-semibold mb-4">
            <Monitor size={13} className="text-cyan-600" />
            <span>NATIVE CROSS-PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Built for your desktop. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00253f] via-[#004e7c] to-cyan-500">
              Ready on your phone.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Engineered as high-performance native apps for Windows and Android with zero bloated dependencies.
          </p>

          {/* Platform Tab Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActivePlatform('windows')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activePlatform === 'windows'
                  ? 'bg-gradient-to-r from-[#00253f] to-cyan-600 text-white shadow-md shadow-cyan-900/20'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <WindowsIcon size={16} />
              <span>Windows Edition</span>
            </button>
            <button
              onClick={() => setActivePlatform('android')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activePlatform === 'android'
                  ? 'bg-gradient-to-r from-[#00253f] to-cyan-600 text-white shadow-md shadow-cyan-900/20'
                  : 'text-slate-700 hover:text-slate-950'
              }`}
            >
              <AndroidIcon size={16} />
              <span>Android Edition</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        {activePlatform === 'windows' ? (
          <div className="rounded-3xl bg-white border border-slate-200 p-8 lg:p-12 shadow-xl shadow-slate-200/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                <WindowsIcon size={14} className="text-slate-900" />
                <span>WINDOWS 10 & 11 (64-BIT) · VERSION 2.1.0</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                Batch scrub thousands of photos in seconds.
              </h3>
              
              <p className="text-slate-700 text-sm leading-relaxed font-normal">
                Whether you’re preparing a photo shoot for a client or cleaning your personal holiday library before uploading to cloud backups, NoTraceFiles for Windows handles massive directories with lightning speed.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 font-bold">
                    <Check size={14} />
                  </div>
                  <div className="text-xs text-slate-800">
                    <strong className="text-slate-950 font-bold">Batch Folder Processing:</strong> Drop entire directories with subfolders and clean thousands of files in parallel.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 font-bold">
                    <Check size={14} />
                  </div>
                  <div className="text-xs text-slate-800">
                    <strong className="text-slate-950 font-bold">Right-Click Context Menu:</strong> Clean files directly from Windows File Explorer without even opening the app window.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 font-bold">
                    <Check size={14} />
                  </div>
                  <div className="text-xs text-slate-800">
                    <strong className="text-slate-950 font-bold">Deep Format Support:</strong> Cleans JPEG, PNG, WebP, TIFF, PDF documents, and MP4 video metadata tags.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="/downloads/NoTrace_Files_Setup.exe"
                  download
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00253f] via-[#003b64] to-cyan-600 hover:from-[#001d32] hover:to-cyan-500 text-white font-extrabold text-sm shadow-xl shadow-cyan-950/20 border border-cyan-700/30 transition-all"
                >
                  <Download size={16} />
                  <span>Download Windows Installer (Setup.exe)</span>
                </a>
                <span className="text-xs font-mono font-semibold text-slate-600">
                  Size: 54.2 MB · Offline Installer
                </span>
              </div>
            </div>

            {/* Windows App UI Mockup */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-cyan-50/30 border-2 border-cyan-200 p-4 shadow-xl font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-cyan-200 text-[11px] text-slate-700">
                  <div className="flex items-center gap-2">
                    <WindowsIcon size={14} className="text-slate-900" />
                    <span className="text-slate-950 font-bold">NoTraceFiles v2.1.0</span>
                  </div>
                  <span className="text-emerald-700 font-bold">Status: Ready</span>
                </div>
                
                <div className="my-4 p-6 rounded-xl border-2 border-dashed border-cyan-300 bg-white text-center flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
                    <Download size={20} />
                  </div>
                  <div className="text-xs font-bold text-slate-900">Drag & drop files or folders here</div>
                  <div className="text-[10px] text-slate-500 font-medium">Supports JPG, PNG, WEBP, TIFF, MP4</div>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between p-2.5 rounded bg-white border border-slate-200">
                    <span className="text-slate-800 font-semibold">vacation_2026_01.jpg</span>
                    <span className="text-emerald-700 font-extrabold">CLEANED (0 trace)</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded bg-white border border-slate-200">
                    <span className="text-slate-800 font-semibold">family_portrait.png</span>
                    <span className="text-emerald-700 font-extrabold">CLEANED (0 trace)</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded bg-white border border-slate-200">
                    <span className="text-slate-800 font-semibold">contract_scan.pdf</span>
                    <span className="text-emerald-700 font-extrabold">CLEANED (0 trace)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl bg-white border border-slate-200 p-8 lg:p-12 shadow-xl shadow-slate-200/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                <AndroidIcon size={14} className="text-emerald-600" />
                <span>ANDROID 8.0+ · VERSION 2.0.1 (APK)</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                One-tap scrub right from your Android Share Sheet.
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Take a photo, tap Share in your Gallery, and choose NoTraceFiles. The app strips coordinates, camera sensors, and device tags, then instantly forwards the sanitized photo to WhatsApp, Instagram, or Discord.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-50 text-emerald-700 mt-0.5 font-bold border border-emerald-200">
                    <Check size={14} />
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-950 font-bold">Zero Internet Permission:</strong> NoTraceFiles does not request the <code className="text-slate-800 bg-slate-100 px-1 py-0.5 rounded font-mono font-bold border border-slate-200">android.permission.INTERNET</code> permission. It is physically impossible for the app to send your data anywhere.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-50 text-emerald-700 mt-0.5 font-bold border border-emerald-200">
                    <Check size={14} />
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-950 font-bold">Seamless Share Sheet Integration:</strong> Works effortlessly with Google Photos, Samsung Gallery, and any camera app.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-50 text-emerald-700 mt-0.5 font-bold border border-emerald-200">
                    <Check size={14} />
                  </div>
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-950 font-bold">Lightweight APK:</strong> Under 1 Megabyte (921 KB). Instant installation, zero battery drain.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="/downloads/NoTrace-Files-2.0.1.apk"
                  download
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00253f] via-[#003b64] to-cyan-600 hover:from-[#001d32] hover:to-cyan-500 text-white font-extrabold text-sm shadow-xl shadow-cyan-950/20 border border-cyan-700/30 transition-all"
                >
                  <Download size={16} />
                  <span>Download Android APK (Direct)</span>
                </a>
                <span className="text-xs font-mono font-semibold text-slate-500">
                  Size: 921 KB · Android 8.0+
                </span>
              </div>
            </div>

            {/* Android Mobile Frame Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[260px] rounded-[36px] bg-slate-900 p-3 border-4 border-slate-700 shadow-2xl relative overflow-hidden">
                <div className="w-3.5 h-3.5 rounded-full bg-black mx-auto mb-3 border border-slate-800"></div>

                <div className="rounded-2xl bg-white p-4 border border-slate-200 text-xs font-mono text-slate-800 space-y-3 shadow-md">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <img src="/logo.png" alt="" className="w-5 h-5" />
                    <span className="text-slate-950 font-bold text-xs">NoTraceFiles</span>
                  </div>

                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-black relative">
                    <img src="/photos/7243113.jpg" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 p-1.5 bg-slate-950/85 text-[10px] text-cyan-400 text-center font-bold">
                      ✓ EXIF & GPS Wiped
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[10px] space-y-1">
                    <div className="text-slate-500 font-semibold">GPS Latitude: <span className="text-emerald-700 font-bold">REMOVED</span></div>
                    <div className="text-slate-500 font-semibold">GPS Longitude: <span className="text-emerald-700 font-bold">REMOVED</span></div>
                    <div className="text-slate-500 font-semibold">Camera Serial: <span className="text-emerald-700 font-bold">REMOVED</span></div>
                  </div>

                  <div className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#00253f] to-cyan-600 text-white font-extrabold text-center text-xs shadow-sm">
                    Share Cleaned Photo
                  </div>
                </div>

                <div className="w-24 h-1 rounded-full bg-slate-500 mx-auto mt-4"></div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
