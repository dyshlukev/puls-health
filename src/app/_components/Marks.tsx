/*
 * Пульс brand marks, ported from the prototype (src/components/Logo.jsx +
 * pulseEcgPath.js) so identity is identical across product and landing.
 *
 *  - PulseMark   : filled coral disc bisected edge-to-edge by a soft white
 *                  heartbeat line. The canonical brand mark.
 *  - AliceAvatar : coral-gradient disc + white heartbeat mark. The face of the
 *                  assistant — replaces the old letter-"А" badges.
 */

const BRAND = "#FC3F1D";
const CORAL_GRAD = "linear-gradient(135deg,#FC3F1D 0%,#E4361A 100%)";
const CORAL_SHADOW = "0 8px 22px rgba(252,63,29,0.20)";

// The brand-mark heartbeat line — a horizontal ECG edge-to-edge across a filled
// disc (viewBox 0 0 100 100, baseline y=50). Symmetric raised-cosine bumps,
// generated exactly as in the prototype so the marks stay pixel-identical.
const ECG_DISC_LINE = (() => {
  const bumps = [
    { c: 50, w: 13, a: 19 },
    { c: 35, w: 9, a: -15 },
    { c: 65, w: 9, a: -15 },
    { c: 19, w: 10, a: 11 },
    { c: 81, w: 10, a: 11 },
  ];
  const rc = (x: number, c: number, w: number) =>
    Math.abs(x - c) < w ? 0.5 * (1 + Math.cos((Math.PI * (x - c)) / w)) : 0;
  const pts: string[] = [];
  for (let x = 6; x <= 94; x += 0.6) {
    let y = 50;
    for (const b of bumps) y -= b.a * rc(x, b.c, b.w);
    pts.push((pts.length ? "L" : "M") + x.toFixed(1) + "," + y.toFixed(1));
  }
  return pts.join(" ");
})();

export function PulseMark({ size = 22, color = BRAND }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden style={{ display: "block", flex: "none" }}>
      <circle cx="50" cy="50" r="46" fill={color} />
      <path d={ECG_DISC_LINE} fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AliceAvatar({ size = 34, ring = false }: { size?: number; ring?: boolean }) {
  const mark = Math.round(size * 0.56);
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        background: CORAL_GRAD,
        display: "grid",
        placeItems: "center",
        boxShadow: ring ? `0 0 0 4px rgba(252,63,29,0.10), ${CORAL_SHADOW}` : CORAL_SHADOW,
      }}
      aria-hidden
    >
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M2 12h4l2-6 4 12 2-6h6" />
      </svg>
    </span>
  );
}
