import type { CSSProperties, ReactNode } from "react";

/*
 * Icon — the single line-icon system, ported from the Пульс prototype
 * (design-system §7). 24px viewBox · stroke currentColor · strokeWidth 1.8
 * (2.2 at small sizes) · round caps/joins · no fills. Replaces ALL OS emoji
 * and text glyphs (→ ✕ ✓ ★ ↑) on the landing. Color via CSS `color`.
 *
 * Usage: <Icon name="arrowRight" size={18} />
 */

const PATHS = {
  // navigation / chrome
  chevronRight: <path d="M9 18l6-6-6-6" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M4.5 12.5l5 5 10-11" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,

  // domain
  capsule: (
    <>
      <path d="M10.5 20.5l-7-7a5 5 0 117-7l7 7a5 5 0 11-7 7z" />
      <path d="M8.5 8.5l7 7" />
    </>
  ),
  drop: <path d="M12 3.5s6 6.2 6 10.5a6 6 0 11-12 0C6 9.7 12 3.5 12 3.5z" />,
  stethoscope: (
    <>
      <path d="M5 4v5a5 5 0 0010 0V4" />
      <path d="M10 17.5V19a3.5 3.5 0 007 0v-3.2" />
      <circle cx="17" cy="13" r="2.6" />
    </>
  ),
  flask: (
    <>
      <path d="M10 3v6l-5.2 9A2 2 0 006.6 21h10.8a2 2 0 001.8-3l-5.2-9V3" />
      <path d="M8.5 3h7" />
      <path d="M8 15h8" />
    </>
  ),
  document: (
    <>
      <rect x="4.5" y="3" width="15" height="18" rx="2" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4.5" />
    </>
  ),
  sparkle: <path d="M12 3.5l1.9 5.4 5.6 1.6-5.6 1.9L12 18.1l-1.9-5.7-5.6-1.9 5.6-1.6L12 3.5z" />,
  heart: <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0112 7a4.3 4.3 0 017.5 3c0 5.4-7.5 10-7.5 10z" />,
  star: <path d="M12 3.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L3.4 9.8l6-.7L12 3.5z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M5.6 18.4l1.6-1.6M16.8 7.2l1.6-1.6" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 4-13 14-14-.5 10-5 14-11.5 14H5z" />
      <path d="M5 19c3-5 6-8 10-10" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof PATHS;

export function Icon({
  name,
  size = 24,
  strokeWidth,
  className,
  style,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const glyph = PATHS[name];
  if (!glyph) return null;
  const sw = strokeWidth ?? (size <= 16 ? 2.2 : 1.8);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
      style={{ display: "block", flex: "none", ...style }}
    >
      {glyph}
    </svg>
  );
}
