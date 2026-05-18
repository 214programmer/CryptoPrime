import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="#0a0a0a"/>
    <circle cx="50" cy="50" r="48" stroke="#262626" strokeWidth="1"/>
    
    {/* C */}
    <path d="M 45 25 A 25 25 0 0 0 45 75" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
    
    {/* P */}
    <path d="M 40 25 L 40 75" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
    <path d="M 40 25 L 55 25 A 15 15 0 0 1 55 55 L 40 55" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />

    {/* Candlesticks */}
    <g transform="translate(5, 5)">
      <rect x="65" y="45" width="4" height="15" rx="1" fill="#22c55e" />
      <rect x="66.5" y="40" width="1" height="25" fill="#22c55e" />
      
      <rect x="73" y="35" width="4" height="12" rx="1" fill="#22c55e" />
      <rect x="74.5" y="30" width="1" height="22" fill="#22c55e" />
      
      <rect x="81" y="20" width="4" height="18" rx="1" fill="#22c55e" />
      <rect x="82.5" y="15" width="1" height="28" fill="#22c55e" />
    </g>
  </svg>
);
