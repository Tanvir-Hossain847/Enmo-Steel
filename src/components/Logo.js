export default function Logo({ className = "w-8 h-8" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Leaf shape with gradient */}
      <defs>
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1B211A', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#628141', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#F1F3E0', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Leaf outline */}
      <path
        d="M50 10 C70 10, 85 25, 85 45 C85 65, 70 80, 50 90 C30 80, 15 65, 15 45 C15 25, 30 10, 50 10 Z"
        fill="url(#leafGradient)"
      />
      
      {/* Leaf vein - center line */}
      <path
        d="M50 15 L50 85"
        stroke="#1B211A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Leaf veins - side lines */}
      <path
        d="M50 30 Q60 35, 65 45"
        stroke="#1B211A"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 30 Q40 35, 35 45"
        stroke="#1B211A"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 50 Q60 55, 70 65"
        stroke="#1B211A"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 50 Q40 55, 30 65"
        stroke="#1B211A"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
