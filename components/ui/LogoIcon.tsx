export function LogoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Magnifying glass circle */}
      <circle cx="13" cy="13" r="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      {/* Magnifying glass handle */}
      <line x1="19" y1="19" x2="27" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* AI Sparkle - 4 point star */}
      <path
        d="M13 6 L14.5 10.5 L19 12 L14.5 13.5 L13 18 L11.5 13.5 L7 12 L11.5 10.5 Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}
