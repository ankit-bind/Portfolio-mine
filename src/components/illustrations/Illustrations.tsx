import { motion } from "motion/react";

/* Flat geometric illustrations — ink outlines, terracotta + forest-teal blocks.
   Subjects rephrased for a data-science portfolio. */

const bob = {
  animate: { y: [0, -6, 0] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
};

export function HeroIllustration() {
  return (
    <motion.svg
      viewBox="0 0 360 360"
      className="h-full w-full"
      animate={bob.animate}
      transition={bob.transition}
      aria-label="Illustration of a person at a desk reviewing a data chart"
    >
      {/* backdrop block (forest teal) */}
      <rect x="60" y="50" width="240" height="240" rx="6" fill="#51695B" />
      {/* cream circle highlight */}
      <circle cx="180" cy="160" r="80" fill="#F6F1E3" />

      {/* desk */}
      <rect x="40" y="270" width="280" height="6" fill="#352640" />
      {/* laptop base */}
      <path d="M120 270 L240 270 L250 285 L110 285 Z" fill="#352640" />
      {/* laptop screen */}
      <rect x="135" y="225" width="90" height="50" rx="4" fill="#F6F1E3" stroke="#352640" strokeWidth="2" />
      {/* bars in screen */}
      <rect x="144" y="255" width="8" height="14" fill="#E8A85C" />
      <rect x="158" y="245" width="8" height="24" fill="#E8A85C" />
      <rect x="172" y="250" width="8" height="19" fill="#E8A85C" />
      <rect x="186" y="240" width="8" height="29" fill="#E8A85C" />
      <rect x="200" y="248" width="8" height="21" fill="#E8A85C" />
      <line x1="142" y1="270" x2="218" y2="270" stroke="#352640" strokeWidth="1.5" />

      {/* character — back view, terracotta shirt */}
      <path d="M155 200 Q180 130 205 200 L210 240 L150 240 Z" fill="#E8A85C" stroke="#352640" strokeWidth="2" />
      {/* head */}
      <circle cx="180" cy="120" r="26" fill="#8B5E3C" stroke="#352640" strokeWidth="2" />
      {/* hair */}
      <path d="M156 120 Q160 92 180 92 Q200 92 204 120 Q200 108 180 108 Q160 108 156 120 Z" fill="#352640" />
      {/* arms */}
      <path d="M158 200 L138 240" stroke="#352640" strokeWidth="6" strokeLinecap="round" />
      <path d="M202 200 L222 240" stroke="#352640" strokeWidth="6" strokeLinecap="round" />

      {/* decorative line accent */}
      <path d="M250 110 q14 14 0 28 q-14 14 0 28" stroke="#352640" strokeWidth="1.5" fill="none" />
      <circle cx="100" cy="100" r="5" fill="none" stroke="#352640" strokeWidth="1.5" />
    </motion.svg>
  );
}

export function AboutIllustration() {
  return (
    <motion.svg viewBox="0 0 360 280" className="h-full w-full" animate={bob.animate} transition={bob.transition}>
      <rect x="30" y="20" width="300" height="180" rx="8" fill="#51695B" />
      {/* dashboard window */}
      <rect x="55" y="40" width="250" height="140" rx="4" fill="#F6F1E3" stroke="#352640" strokeWidth="2" />
      <line x1="55" y1="60" x2="305" y2="60" stroke="#352640" strokeWidth="1" />
      <circle cx="65" cy="50" r="3" fill="#E8A85C" />
      <circle cx="75" cy="50" r="3" fill="#352640" opacity="0.4" />
      <circle cx="85" cy="50" r="3" fill="#352640" opacity="0.4" />
      {/* chart line */}
      <path d="M70 150 L110 130 L150 140 L190 100 L230 115 L270 80 L290 90"
        stroke="#E8A85C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* small cards */}
      <rect x="70" y="75" width="60" height="30" rx="3" fill="none" stroke="#352640" strokeWidth="1" />
      <rect x="140" y="75" width="60" height="30" rx="3" fill="none" stroke="#352640" strokeWidth="1" />
      <rect x="210" y="75" width="60" height="30" rx="3" fill="none" stroke="#352640" strokeWidth="1" />

      {/* character on the side */}
      <circle cx="180" cy="225" r="18" fill="#8B5E3C" stroke="#352640" strokeWidth="2" />
      <path d="M158 270 Q180 235 202 270 L210 280 L150 280 Z" fill="#E8A85C" stroke="#352640" strokeWidth="2" />
    </motion.svg>
  );
}

export function OlympicsIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-full w-full">
      <rect x="20" y="45" width="40" height="25" fill="#E8A85C" stroke="#352640" strokeWidth="2" />
      <rect x="8" y="55" width="14" height="15" fill="#51695B" stroke="#352640" strokeWidth="2" />
      <rect x="58" y="50" width="14" height="20" fill="#51695B" stroke="#352640" strokeWidth="2" />
      <circle cx="40" cy="25" r="12" fill="#F6F1E3" stroke="#352640" strokeWidth="2" />
      <path d="M40 13 L43 21 L51 21 L45 26 L47 34 L40 30 L33 34 L35 26 L29 21 L37 21 Z" fill="#E8A85C" />
    </svg>
  );
}

export function StocksIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-full w-full">
      <line x1="10" y1="70" x2="70" y2="70" stroke="#352640" strokeWidth="1.5" />
      <line x1="10" y1="10" x2="10" y2="70" stroke="#352640" strokeWidth="1.5" />
      {/* candles */}
      <line x1="20" y1="25" x2="20" y2="55" stroke="#352640" strokeWidth="1" />
      <rect x="16" y="32" width="8" height="18" fill="#51695B" stroke="#352640" strokeWidth="1.5" />
      <line x1="35" y1="20" x2="35" y2="50" stroke="#352640" strokeWidth="1" />
      <rect x="31" y="28" width="8" height="14" fill="#E8A85C" stroke="#352640" strokeWidth="1.5" />
      <line x1="50" y1="30" x2="50" y2="65" stroke="#352640" strokeWidth="1" />
      <rect x="46" y="42" width="8" height="16" fill="#51695B" stroke="#352640" strokeWidth="1.5" />
      <line x1="63" y1="15" x2="63" y2="45" stroke="#352640" strokeWidth="1" />
      <rect x="59" y="20" width="8" height="18" fill="#E8A85C" stroke="#352640" strokeWidth="1.5" />
    </svg>
  );
}

export function LoanRecoveryIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-full w-full">
      {/* Shield background */}
      <path d="M40 8 L66 18 L66 38 C66 58 40 72 40 72 C40 72 14 58 14 38 L14 18 Z" fill="#F6F1E3" stroke="#352640" strokeWidth="2" />
      {/* Brain / neural network nodes */}
      <circle cx="40" cy="32" r="8" fill="#51695B" stroke="#352640" strokeWidth="1.5" />
      <circle cx="28" cy="28" r="5" fill="#E8A85C" stroke="#352640" strokeWidth="1.5" />
      <circle cx="52" cy="28" r="5" fill="#E8A85C" stroke="#352640" strokeWidth="1.5" />
      <circle cx="28" cy="42" r="5" fill="#E8A85C" stroke="#352640" strokeWidth="1.5" />
      <circle cx="52" cy="42" r="5" fill="#E8A85C" stroke="#352640" strokeWidth="1.5" />
      {/* Connecting lines */}
      <line x1="32" y1="30" x2="36" y2="32" stroke="#352640" strokeWidth="1.5" />
      <line x1="48" y1="30" x2="44" y2="32" stroke="#352640" strokeWidth="1.5" />
      <line x1="32" y1="40" x2="36" y2="36" stroke="#352640" strokeWidth="1.5" />
      <line x1="48" y1="40" x2="44" y2="36" stroke="#352640" strokeWidth="1.5" />
    </svg>
  );
}

export function SkillIcon({ kind }: { kind: "data" | "viz" | "tools" }) {
  if (kind === "viz")
    return (
      <svg viewBox="0 0 48 48" className="h-full w-full">
        <rect x="6" y="26" width="8" height="16" fill="#E8A85C" stroke="#352640" strokeWidth="1.5" />
        <rect x="20" y="16" width="8" height="26" fill="#51695B" stroke="#352640" strokeWidth="1.5" />
        <rect x="34" y="22" width="8" height="20" fill="#E8A85C" stroke="#352640" strokeWidth="1.5" />
      </svg>
    );
  if (kind === "tools")
    return (
      <svg viewBox="0 0 48 48" className="h-full w-full">
        <circle cx="24" cy="24" r="14" fill="none" stroke="#352640" strokeWidth="1.5" />
        <path d="M24 10 L24 38 M10 24 L38 24" stroke="#352640" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="4" fill="#E8A85C" stroke="#352640" strokeWidth="1.5" />
      </svg>
    );
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full">
      <path d="M8 12 H40 V36 H8 Z" fill="#F6F1E3" stroke="#352640" strokeWidth="1.5" />
      <line x1="8" y1="20" x2="40" y2="20" stroke="#352640" strokeWidth="1" />
      <circle cx="14" cy="16" r="1.5" fill="#E8A85C" />
      <line x1="12" y1="26" x2="36" y2="26" stroke="#51695B" strokeWidth="1" />
      <line x1="12" y1="30" x2="30" y2="30" stroke="#51695B" strokeWidth="1" />
    </svg>
  );
}

export function NotFoundIllustration() {
  return (
    <svg viewBox="0 0 360 280" className="h-full w-full">
      <rect x="60" y="40" width="240" height="160" rx="6" fill="#51695B" />
      <text x="180" y="135" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="86" fontWeight="700" fill="#F6F1E3" letterSpacing="6">404</text>
      <path d="M80 220 L130 200 L180 215 L230 195 L280 210" stroke="#E8A85C" strokeWidth="3" fill="none" strokeDasharray="4 4" />
      <circle cx="180" cy="250" r="14" fill="#8B5E3C" stroke="#352640" strokeWidth="2" />
    </svg>
  );
}
