export function AIIllustration({ className = "w-full h-full" }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#EAB308" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="aiGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#EAB308" stopOpacity="0.15" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="400" height="400" rx="40" fill="url(#aiGrad)" />
      <circle cx="200" cy="200" r="120" fill="url(#aiGrad2)" />
      <circle cx="200" cy="200" r="80" fill="url(#aiGrad)" />
      <g filter="url(#glow)">
        <circle cx="200" cy="200" r="12" fill="#2563EB" opacity="0.6" />
        <circle cx="200" cy="200" r="6" fill="#EAB308" />
      </g>
      {[
        [200, 200, 280, 120],
        [200, 200, 120, 120],
        [200, 200, 280, 280],
        [200, 200, 120, 280],
        [200, 200, 320, 200],
        [200, 200, 80, 200],
        [200, 200, 200, 80],
        [200, 200, 200, 320],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2563EB" strokeWidth="1.5" opacity={0.2 + i * 0.03} />
      ))}
      {[
        { cx: 280, cy: 120, r: 6, color: "#2563EB", delay: 0 },
        { cx: 120, cy: 120, r: 5, color: "#3B82F6", delay: 0.2 },
        { cx: 280, cy: 280, r: 7, color: "#EAB308", delay: 0.4 },
        { cx: 120, cy: 280, r: 5, color: "#2563EB", delay: 0.6 },
        { cx: 320, cy: 200, r: 6, color: "#3B82F6", delay: 0.8 },
        { cx: 80, cy: 200, r: 4, color: "#EAB308", delay: 1.0 },
        { cx: 200, cy: 80, r: 5, color: "#2563EB", delay: 1.2 },
        { cx: 200, cy: 320, r: 6, color: "#3B82F6", delay: 1.4 },
      ].map((node, i) => (
        <circle key={`node-${i}`} cx={node.cx} cy={node.cy} r={node.r} fill={node.color} opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" begin={`${node.delay}s`} repeatCount="indefinite" />
          <animate attributeName="r" values={`${node.r};${node.r + 2};${node.r}`} dur="3s" begin={`${node.delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {[60, 100, 140, 260, 300, 340].map((x, i) => (
        <circle key={`d-${i}`} cx={x} cy={60 + (i % 2) * 20} r="2" fill="#2563EB" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {[60, 100, 140, 260, 300, 340].map((x, i) => (
        <circle key={`d2-${i}`} cx={x} cy={320 + (i % 2) * 20} r="2" fill="#EAB308" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" begin={`${i * 0.3 + 2}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

export function AnalyticsIllustration({ className = "w-full h-full" }) {
  return (
    <svg className={className} viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bar1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="bar2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
        <linearGradient id="bar3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect width="400" height="320" rx="24" fill="#F8FAFC" />
      <rect x="0" y="0" width="400" height="320" rx="24" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="24" y="48" width="352" height="1" fill="#E2E8F0" />
      <rect x="24" y="104" width="352" height="1" fill="#E2E8F0" />
      <rect x="24" y="160" width="352" height="1" fill="#E2E8F0" />
      <rect x="24" y="216" width="352" height="1" fill="#E2E8F0" />
      <text x="16" y="54" fontSize="11" fill="#94A3B8" fontWeight="500">100</text>
      <text x="16" y="110" fontSize="11" fill="#94A3B8" fontWeight="500">75</text>
      <text x="16" y="166" fontSize="11" fill="#94A3B8" fontWeight="500">50</text>
      <text x="16" y="222" fontSize="11" fill="#94A3B8" fontWeight="500">25</text>
      <rect x="52" y="88" width="32" height="128" rx="4" fill="url(#bar1)" opacity="0.8">
        <animate attributeName="height" values="0;128" dur="1s" fill="freeze" />
        <animate attributeName="y" values="216;88" dur="1s" fill="freeze" />
      </rect>
      <rect x="104" y="56" width="32" height="160" rx="4" fill="url(#bar2)" opacity="0.8">
        <animate attributeName="height" values="0;160" dur="1.2s" fill="freeze" />
        <animate attributeName="y" values="216;56" dur="1.2s" fill="freeze" />
      </rect>
      <rect x="156" y="72" width="32" height="144" rx="4" fill="url(#bar3)" opacity="0.8">
        <animate attributeName="height" values="0;144" dur="1.4s" fill="freeze" />
        <animate attributeName="y" values="216;72" dur="1.4s" fill="freeze" />
      </rect>
      <rect x="208" y="40" width="32" height="176" rx="4" fill="url(#bar1)" opacity="0.9">
        <animate attributeName="height" values="0;176" dur="0.9s" fill="freeze" />
        <animate attributeName="y" values="216;40" dur="0.9s" fill="freeze" />
      </rect>
      <rect x="260" y="96" width="32" height="120" rx="4" fill="url(#bar2)" opacity="0.7">
        <animate attributeName="height" values="0;120" dur="1.1s" fill="freeze" />
        <animate attributeName="y" values="216;96" dur="1.1s" fill="freeze" />
      </rect>
      <rect x="312" y="64" width="32" height="152" rx="4" fill="url(#bar3)" opacity="0.85">
        <animate attributeName="height" values="0;152" dur="1.3s" fill="freeze" />
        <animate attributeName="y" values="216;64" dur="1.3s" fill="freeze" />
      </rect>
      <text x="52" y="260" fontSize="10" fill="#94A3B8" textAnchor="middle">AI</text>
      <text x="104" y="260" fontSize="10" fill="#94A3B8" textAnchor="middle">ML</text>
      <text x="156" y="260" fontSize="10" fill="#94A3B8" textAnchor="middle">NLP</text>
      <text x="208" y="260" fontSize="10" fill="#94A3B8" textAnchor="middle">CV</text>
      <text x="260" y="260" fontSize="10" fill="#94A3B8" textAnchor="middle">DA</text>
      <text x="312" y="260" fontSize="10" fill="#94A3B8" textAnchor="middle">IoT</text>
      <rect x="24" y="280" width="352" height="1" fill="#E2E8F0" />
      <circle cx="24" cy="216" r="3" fill="#2563EB" opacity="0.4" />
      <circle cx="24" cy="24" r="4" fill="#EAB308" opacity="0.6" />
    </svg>
  );
}

export function WomenEmpowermentIllustration({ className = "w-full h-full" }) {
  return (
    <svg className={className} viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="weGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#EAB308" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="circGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#EAB308" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="400" height="360" rx="32" fill="url(#weGrad)" />
      <circle cx="200" cy="180" r="130" fill="url(#circGrad)" />
      <circle cx="200" cy="180" r="100" stroke="#2563EB" strokeWidth="0.5" opacity="0.3" fill="none" strokeDasharray="4 4" />
      <circle cx="200" cy="180" r="140" stroke="#EAB308" strokeWidth="0.5" opacity="0.2" fill="none" strokeDasharray="3 6" />
      <g transform="translate(200, 145)">
        <circle cx="0" cy="-20" r="18" fill="#2563EB" opacity="0.15" />
        <path d="M-12 -12 Q0 8 12 -12 Q0 -2 -12 -12Z" fill="#2563EB" opacity="0.25" />
        <path d="M0 -5 L0 25" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
        <path d="M-18 10 Q0 25 18 10" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
        <path d="M-12 25 Q0 40 12 25" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.25" />
      </g>
      <circle cx="160" cy="200" r="20" fill="#2563EB" opacity="0.08" />
      <circle cx="240" cy="200" r="20" fill="#EAB308" opacity="0.08" />
      <circle cx="200" cy="240" r="20" fill="#3B82F6" opacity="0.08" />
      {[
        { x: 100, y: 280, r: 3 },
        { x: 140, y: 300, r: 2.5 },
        { x: 180, y: 310, r: 2 },
        { x: 220, y: 308, r: 2.5 },
        { x: 260, y: 295, r: 3 },
        { x: 300, y: 275, r: 2 },
      ].map((dot, i) => (
        <circle key={i} cx={dot.x} cy={dot.y} r={dot.r} fill="#2563EB" opacity={0.2 + i * 0.03}>
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {[80, 120, 280, 320].map((x, i) => (
        <circle key={`c-${i}`} cx={x} cy={60 + i * 20} r="1.5" fill="#EAB308" opacity="0.3">
          <animate attributeName="opacity" values="0.1;0.6;0.1" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <text x="200" y="334" textAnchor="middle" fontSize="13" fill="#94A3B8" fontWeight="600" letterSpacing="1">WOMEN-LED MSMEs</text>
    </svg>
  );
}

export function ResearchIllustration({ className = "w-full h-full" }) {
  return (
    <svg className={className} viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#EFF6FF" />
        </linearGradient>
      </defs>
      <rect width="400" height="340" rx="24" fill="url(#rGrad)" />
      <rect x="0" y="0" width="400" height="340" rx="24" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="40" y="40" width="320" height="180" rx="16" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="56" y="56" width="136" height="8" rx="4" fill="#2563EB" opacity="0.6" />
      <rect x="56" y="72" width="96" height="6" rx="3" fill="#94A3B8" opacity="0.4" />
      <rect x="56" y="92" width="200" height="6" rx="3" fill="#E2E8F0" />
      <rect x="56" y="106" width="180" height="6" rx="3" fill="#E2E8F0" />
      <rect x="56" y="120" width="220" height="6" rx="3" fill="#E2E8F0" />
      <rect x="56" y="140" width="160" height="6" rx="3" fill="#E2E8F0" />
      <rect x="56" y="160" width="120" height="6" rx="3" fill="#2563EB" opacity="0.3" />
      <rect x="56" y="180" width="192" height="6" rx="3" fill="#E2E8F0" />
      <rect x="56" y="194" width="144" height="6" rx="3" fill="#E2E8F0" />
      <rect x="230" y="56" width="64" height="96" rx="8" fill="#2563EB" opacity="0.08" />
      <rect x="238" y="80" width="48" height="3" rx="1.5" fill="#2563EB" opacity="0.5" />
      <rect x="238" y="90" width="36" height="3" rx="1.5" fill="#94A3B8" opacity="0.4" />
      <rect x="238" y="100" width="42" height="3" rx="1.5" fill="#94A3B8" opacity="0.4" />
      <rect x="238" y="116" width="24" height="3" rx="1.5" fill="#EAB308" opacity="0.5" />
      <rect x="238" y="126" width="30" height="3" rx="1.5" fill="#94A3B8" opacity="0.4" />
      <rect x="238" y="136" width="18" height="3" rx="1.5" fill="#2563EB" opacity="0.3" />
      <rect x="40" y="240" width="152" height="64" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="56" y="256" width="80" height="6" rx="3" fill="#EAB308" opacity="0.5" />
      <rect x="56" y="270" width="120" height="5" rx="2.5" fill="#94A3B8" opacity="0.35" />
      <rect x="56" y="282" width="96" height="5" rx="2.5" fill="#E2E8F0" />
      <rect x="208" y="240" width="152" height="64" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="224" y="256" width="60" height="6" rx="3" fill="#2563EB" opacity="0.5" />
      <rect x="224" y="270" width="110" height="5" rx="2.5" fill="#94A3B8" opacity="0.35" />
      <rect x="224" y="282" width="80" height="5" rx="2.5" fill="#E2E8F0" />
      <circle cx="372" cy="36" r="4" fill="#2563EB" opacity="0.2" />
      <circle cx="28" cy="340" r="3" fill="#EAB308" opacity="0.15" />
    </svg>
  );
}

export function MalaysiaMapIllustration({ className = "w-full h-full" }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" rx="24" fill="#F8FAFC" />
      <rect x="0" y="0" width="400" height="300" rx="24" stroke="#E2E8F0" strokeWidth="1" />
      <path d="M120 40 L160 50 L180 70 L170 100 L190 120 L200 140 L180 160 L160 170 L140 180 L120 170 L100 150 L80 130 L70 100 L80 70 L100 50Z" fill="#2563EB" opacity="0.08" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.3" />
      <path d="M220 60 L260 55 L280 70 L290 90 L270 110 L250 105 L230 85Z" fill="#3B82F6" opacity="0.08" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.3" />
      <path d="M290 100 L340 90 L350 110 L340 130 L310 140 L290 120Z" fill="#EAB308" opacity="0.08" stroke="#EAB308" strokeWidth="1.5" strokeOpacity="0.3" />
      {[
        { cx: 130, cy: 100, label: "KL" },
        { cx: 150, cy: 80, label: "Penang" },
        { cx: 170, cy: 120, label: "Johor" },
        { cx: 100, cy: 90, label: "Perak" },
        { cx: 250, cy: 80, label: "Sabah" },
        { cx: 320, cy: 115, label: "Sarawak" },
      ].map((loc, i) => (
        <g key={i}>
          <circle cx={loc.cx} cy={loc.cy} r="3" fill="#2563EB" opacity="0.6">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
          <text x={loc.cx + 6} y={loc.cy + 3} fontSize="8" fill="#64748B" fontWeight="500">{loc.label}</text>
        </g>
      ))}
      <text x="200" y="270" textAnchor="middle" fontSize="14" fill="#94A3B8" fontWeight="600" letterSpacing="1.5">MALAYSIA</text>
      <text x="200" y="288" textAnchor="middle" fontSize="10" fill="#CBD5E1" fontWeight="500">16 States Covered</text>
    </svg>
  );
}

export function DataInsightsIllustration({ className = "w-full h-full" }) {
  return (
    <svg className={className} viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#FEFCE8" />
        </linearGradient>
      </defs>
      <rect width="400" height="340" rx="24" fill="url(#dGrad)" />
      <circle cx="80" cy="80" r="40" fill="#2563EB" opacity="0.06" />
      <circle cx="80" cy="80" r="28" fill="#2563EB" opacity="0.1" />
      <circle cx="80" cy="80" r="16" fill="#2563EB" opacity="0.15" />
      <circle cx="80" cy="80" r="6" fill="#2563EB" opacity="0.3" />
      <text x="80" y="148" textAnchor="middle" fontSize="28" fontWeight="800" fill="#2563EB">78%</text>
      <text x="80" y="164" textAnchor="middle" fontSize="11" fill="#64748B" fontWeight="500">AI Awareness</text>
      <circle cx="320" cy="80" r="40" fill="#EAB308" opacity="0.06" />
      <circle cx="320" cy="80" r="28" fill="#EAB308" opacity="0.1" />
      <circle cx="320" cy="80" r="16" fill="#EAB308" opacity="0.15" />
      <circle cx="320" cy="80" r="6" fill="#EAB308" opacity="0.3" />
      <text x="320" y="148" textAnchor="middle" fontSize="28" fontWeight="800" fill="#EAB308">62%</text>
      <text x="320" y="164" textAnchor="middle" fontSize="11" fill="#64748B" fontWeight="500">AI Adoption</text>
      <rect x="40" y="190" width="320" height="1" fill="#E2E8F0" />
      <rect x="40" y="210" width="240" height="40" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="40" y="260" width="320" height="40" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="56" y="222" width="160" height="6" rx="3" fill="#2563EB" opacity="0.5" />
      <rect x="56" y="234" width="120" height="4" rx="2" fill="#94A3B8" opacity="0.3" />
      <rect x="240" y="216" width="24" height="28" rx="4" fill="#2563EB" opacity="0.1" />
      <text x="252" y="234" textAnchor="middle" fontSize="10" fill="#2563EB" fontWeight="700">PDF</text>
      <rect x="56" y="272" width="200" height="6" rx="3" fill="#EAB308" opacity="0.5" />
      <rect x="56" y="284" width="140" height="4" rx="2" fill="#94A3B8" opacity="0.3" />
      <rect x="280" y="268" width="64" height="24" rx="6" fill="#EAB308" opacity="0.12" />
      <text x="312" y="284" textAnchor="middle" fontSize="9" fill="#EAB308" fontWeight="600">Download</text>
    </svg>
  );
}
