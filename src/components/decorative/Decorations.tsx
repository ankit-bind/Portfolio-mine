import { motion } from "motion/react";
import type { ReactNode } from "react";

/* Tiny outlined rotated square — used before nav links, in bullets, as floating accent */
export function DiamondMarker({ size = 8, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block rotate-45 border-[1.5px] border-current ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

/* Hairline zigzag with line-draw on view */
export function ZigzagDivider({ className = "", width = 140, color }: { className?: string; width?: number; color?: string }) {
  return (
    <svg
      aria-hidden
      width={width}
      height={18}
      viewBox="0 0 140 18"
      fill="none"
      className={className}
      style={{ color: color ?? "currentColor" }}
    >
      <motion.path
        d="M2 9 L14 2 L26 16 L38 2 L50 16 L62 2 L74 16 L86 2 L98 16 L110 2 L122 16 L134 2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
    </svg>
  );
}

/* Outlined / dashed circle with short uppercase text inside */
export function StampBadge({
  children,
  dashed = true,
  size = 120,
  className = "",
}: {
  children: ReactNode;
  dashed?: boolean;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-ink">
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray={dashed ? "3 4" : undefined}
        />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      </svg>
      <div className="relative px-3 text-center font-sans text-[10px] font-semibold uppercase leading-tight tracking-[0.18em] text-ink">
        {children}
      </div>
    </div>
  );
}

/* Thin rounded-rect frame around content (illustrations, featured cards) */
export function HairlineFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-[28px] border border-ink/30 p-3 ${className}`}>
      {children}
    </div>
  );
}
