import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function SvgIconChildren() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="45"
      height="45"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4a90e2', stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: '#9b59b6', stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#grad1)" />
      <path
        d="M60,80 Q100,20 140,80 T140,120 Q100,180 60,120 T60,80"
        fill="none"
        stroke="white"
        strokeWidth="4"
      />
      <circle cx="80" cy="90" r="5" fill="white" />
      <circle cx="120" cy="90" r="5" fill="white" />
    </svg>
  );
}
