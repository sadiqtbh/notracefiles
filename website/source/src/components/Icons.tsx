import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  strokeWidth?: number | string;
}

export const Shield = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

export const ShieldCheck = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

export const MapPin = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const Clock = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export const Camera = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
    <circle cx="12" cy="13" r="3"/>
  </svg>
);

export const FileCode = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <path d="m10 13-2 2 2 2"/>
    <path d="m14 17 2-2-2-2"/>
  </svg>
);

export const Lock = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

export const Unlock = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
  </svg>
);

export const Download = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" x2="12" y1="15" y2="3"/>
  </svg>
);

export const Monitor = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <rect width="20" height="14" x="2" y="3" rx="2"/>
    <line x1="8" x2="16" y1="21" y2="21"/>
    <line x1="12" x2="12" y1="17" y2="21"/>
  </svg>
);

export const Smartphone = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
    <path d="M12 18h.01"/>
  </svg>
);

export const Check = ({ size = 16, strokeWidth = 1.75, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export const X = ({ size = 16, strokeWidth = 1.75, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export const AlertTriangle = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <line x1="12" x2="12" y1="9" y2="13"/>
    <line x1="12" x2="12.01" y1="17" y2="17"/>
  </svg>
);

export const RefreshCw = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
    <path d="M21 3v5h-5"/>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
    <path d="M8 16H3v5"/>
  </svg>
);

export const Sparkles = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);

export const Eye = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

export const EyeOff = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
    <line x1="2" x2="22" y1="2" y2="22"/>
  </svg>
);

export const Zap = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

export const UploadCloud = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
    <path d="M12 12v9"/>
    <path d="m16 16-4-4-4 4"/>
  </svg>
);

export const Trash2 = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M3 6h18"/>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
    <line x1="10" x2="10" y1="11" y2="17"/>
    <line x1="14" x2="14" y1="11" y2="17"/>
  </svg>
);

export const ArrowRight = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

export const ChevronDown = ({ size = 16, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export const ChevronRight = ({ size = 16, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export const Layers = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
    <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2 12.5"/>
    <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2 17.5"/>
  </svg>
);

export const WindowsIcon = ({ size = 15, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
  </svg>
);

export const AndroidIcon = ({ size = 15, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4126 13.8533 8.0833 12 8.0833s-3.5902.3293-5.1368.8664L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
  </svg>
);

export const AppleIcon = ({ size = 15, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.07-1.85.95-2.93-.93.04-2.02.63-2.67 1.39-.58.67-1.09 1.77-.95 2.83 1.04.08 2.06-.54 2.67-1.29z"/>
  </svg>
);

export const WifiOff = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <line x1="2" x2="22" y1="2" y2="22"/>
    <path d="M8.5 16.5a5 5 0 0 1 7 0"/>
    <path d="M2 8.82a15 15 0 0 1 4.17-2.65"/>
    <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.82"/>
    <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68"/>
    <path d="M5 13a10 10 0 0 1 5.24-2.76"/>
    <line x1="12" x2="12.01" y1="20" y2="20"/>
  </svg>
);

export const ExternalLink = ({ size = 16, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" x2="21" y1="14" y2="3"/>
  </svg>
);

export const Copy = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);

export const QrCode = ({ size = 18, strokeWidth = 1.5, className = '', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" shapeRendering="geometricPrecision" className={className} {...props}>
    <rect width="5" height="5" x="3" y="3" rx="1"/>
    <rect width="5" height="5" x="16" y="3" rx="1"/>
    <rect width="5" height="5" x="3" y="16" rx="1"/>
    <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
    <path d="M21 21v.01"/>
    <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
    <path d="M3 12h.01"/>
    <path d="M12 3h.01"/>
    <path d="M12 16v.01"/>
    <path d="M16 12h1"/>
    <path d="M21 12v.01"/>
    <path d="M12 21v-1"/>
  </svg>
);

export const WhatsAppIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.631-.929-2.233-.244-.586-.492-.507-.678-.516-.176-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.229 3.111c.15.201 2.124 3.243 5.145 4.549.718.311 1.279.497 1.716.636.721.23 1.377.197 1.895.12.578-.087 1.78-.728 2.031-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351zM12.004 2C6.486 2 2.012 6.474 2.012 11.993c0 1.763.46 3.486 1.334 5.006L2 22l5.148-1.312c1.472.803 3.131 1.226 4.856 1.226 5.518 0 9.992-4.474 9.992-9.993C21.996 6.474 17.522 2 12.004 2z"/>
  </svg>
);

export const SignalIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 2.237.74 4.304 1.99 5.975L2.5 21.5l3.66-1.43A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 3c3.866 0 7 3.134 7 7s-3.134 7-7 7a6.97 6.97 0 0 1-3.695-1.055l-.46-.28-2.345.915.938-2.28-.3-.475A6.97 6.97 0 0 1 5 12c0-3.866 3.134-7 7-7z"/>
  </svg>
);

export const TelegramIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.313 4.674c.458 0 .661-.21.917-.457l2.203-2.14 4.58 3.384c.844.466 1.452.226 1.662-.782l3-14.135c.308-1.237-.473-1.8-1.285-1.431z"/>
  </svg>
);

export const InstagramIcon = ({ size = 18, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

/* -------------------------------------------------------------------------- */
/* MODERN OS ICONOGRAPHY SUITE (macOS Sonoma / iOS / visionOS tactile squircles) */
/* -------------------------------------------------------------------------- */

export type OSSquircleVariant = 
  | 'brand'
  | 'cyan' 
  | 'blue'
  | 'emerald' 
  | 'rose' 
  | 'amber' 
  | 'violet' 
  | 'slate' 
  | 'glass';

interface ModernOSSquircleProps {
  children: React.ReactNode;
  variant?: OSSquircleVariant;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const ModernOSSquircle: React.FC<ModernOSSquircleProps> = ({
  children,
  variant = 'brand',
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 rounded-xl text-xs',
    md: 'w-11 h-11 rounded-2xl text-sm',
    lg: 'w-14 h-14 rounded-2xl text-base',
    xl: 'w-16 h-16 rounded-[22px] text-lg'
  }[size];

  const variantClasses = {
    brand: 'bg-gradient-to-br from-[#00253f] via-[#003b64] to-[#02cfd9] text-white shadow-[0_8px_20px_-3px_rgba(0,37,63,0.35)] border border-cyan-400/30',
    cyan: 'bg-gradient-to-br from-[#02cfd9] via-[#00a8be] to-[#007a99] text-white shadow-[0_8px_20px_-3px_rgba(2,207,217,0.4)] border border-[#02cfd9]/40',
    blue: 'bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#1e40af] text-white shadow-[0_8px_20px_-3px_rgba(37,99,235,0.35)] border border-blue-400/40',
    emerald: 'bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857] text-white shadow-[0_8px_20px_-3px_rgba(16,185,129,0.35)] border border-emerald-400/40',
    rose: 'bg-gradient-to-br from-[#f43f5e] via-[#e11d48] to-[#be123c] text-white shadow-[0_8px_20px_-3px_rgba(244,63,94,0.35)] border border-rose-400/40',
    amber: 'bg-gradient-to-br from-[#f59e0b] via-[#d97706] to-[#b45309] text-white shadow-[0_8px_20px_-3px_rgba(245,158,11,0.35)] border border-amber-400/40',
    violet: 'bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] text-white shadow-[0_8px_20px_-3px_rgba(139,92,246,0.35)] border border-violet-400/40',
    slate: 'bg-gradient-to-br from-[#334155] via-[#1e293b] to-[#0f172a] text-white shadow-[0_8px_20px_-3px_rgba(51,65,85,0.35)] border border-slate-600/40',
    glass: 'bg-white/80 backdrop-blur-md text-[#00253f] shadow-[0_4px_12px_rgba(0,37,63,0.08)] border border-slate-200/80'
  }[variant];

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 overflow-hidden select-none transition-all duration-200 ${sizeClasses} ${variantClasses} ${className}`}>
      {/* Specular glass reflection top sheen */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent pointer-events-none rounded-t-[inherit]" />
      {/* Inner subtle rim */}
      <div className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/25 pointer-events-none" />
      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

/* Modern macOS Traffic Light Window Controls */
export const OSTrafficLights: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] flex items-center justify-center group cursor-pointer">
      <span className="opacity-0 group-hover:opacity-100 text-[8px] text-[#7A0600] font-bold leading-none select-none">×</span>
    </span>
    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] flex items-center justify-center group cursor-pointer">
      <span className="opacity-0 group-hover:opacity-100 text-[8px] text-[#915B00] font-bold leading-none select-none">−</span>
    </span>
    <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] flex items-center justify-center group cursor-pointer">
      <span className="opacity-0 group-hover:opacity-100 text-[7px] text-[#0A640C] font-bold leading-none select-none">+</span>
    </span>
  </div>
);

/* Modern OS App Icon for NoTraceFiles */
export const OSAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => (
  <div 
    style={{ width: size, height: size }}
    className={`relative rounded-[22%] bg-gradient-to-b from-[#00253f] via-[#00385e] to-[#011422] p-1.5 shadow-[0_10px_25px_-5px_rgba(0,37,63,0.35)] border border-cyan-400/30 flex items-center justify-center overflow-hidden shrink-0 group ${className}`}
  >
    {/* Inner Ambient Glow */}
    <div className="absolute inset-0 bg-radial-gradient from-cyan-400/20 via-transparent to-transparent opacity-80" />
    {/* Top Glass Specular Arc */}
    <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/30 to-transparent rounded-t-[22%]" />
    {/* Metallic Inner Border */}
    <div className="absolute inset-0 rounded-[22%] ring-1 ring-inset ring-white/20" />
    <img 
      src="/logo.png" 
      alt="NoTraceFiles" 
      className="relative z-10 w-4/5 h-4/5 object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform" 
    />
  </div>
);
