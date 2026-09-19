import React from "react";

export default function Grain() {
  return (
    <svg
      aria-hidden="true"
      className="grain"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="paperGrain" x="0" y="0" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#paperGrain)" />
    </svg>
  );
}

export function BoltIcon({ size = 30, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path d="M14 3L5 15h7l-2 8 11-13h-7l2-7z" fill="var(--ink)" />
      <path
        d="M13 2L4 14h7l-2 8 11-13h-7l2-7z"
        fill="var(--red)"
        style={{ mixBlendMode: "multiply" }}
      />
    </svg>
  );
}
EOF