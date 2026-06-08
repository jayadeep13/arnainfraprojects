interface Props { size?: number; className?: string; }

export default function ArnaLogo({ size = 48, className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer sky-blue ring */}
      <circle cx="60" cy="60" r="58" fill="none" stroke="#29aae1" strokeWidth="4" />
      {/* Navy background circle */}
      <circle cx="60" cy="60" r="54" fill="#1a2f7a" />

      {/* Orange roof / chevron */}
      <polyline
        points="15,60 60,22 105,60"
        fill="none"
        stroke="#e8941a"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* White A letterform */}
      <polygon
        points="60,30 40,82 47,82 60,50 73,82 80,82"
        fill="white"
      />
      {/* A crossbar */}
      <rect x="48" y="66" width="24" height="5" fill="white" />

      {/* Orange I pillar */}
      <rect x="56" y="50" width="8" height="32" rx="2" fill="#e8941a" />
      {/* I top cap */}
      <rect x="53" y="48" width="14" height="5" rx="2" fill="#e8941a" />
      {/* I base cap */}
      <rect x="53" y="78" width="14" height="5" rx="2" fill="#e8941a" />
    </svg>
  );
}
