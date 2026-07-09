/**
 * CalmCanvas — the warm-paper atmosphere painted once behind the whole landing
 * (fixed, z-index -1). Ported from the Пульс design system's Background pattern:
 * a cream gradient, softly breathing warm blooms, and paper grain. Motion is
 * transform/opacity only and freezes under prefers-reduced-motion (see the
 * `.bg-atmo` rule in globals.css). Pure CSS animation — no client JS.
 */

const BLOOMS = [
  { size: 520, top: "-10%", left: "-6%", color: "rgba(216,104,64,0.42)", anim: "phDriftA 58s" },
  { size: 460, top: "16%", left: "-12%", color: "rgba(255,196,74,0.24)", anim: "phDriftB 74s" },
  { size: 560, top: "2%", left: "44%", color: "rgba(228,138,92,0.40)", anim: "phDriftC 66s" },
  { size: 440, top: "50%", left: "22%", color: "rgba(212,132,158,0.30)", anim: "phDriftD 82s" },
];

const GRAIN_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E";

export function CalmCanvas() {
  return (
    <div className="calm-canvas" aria-hidden>
      {/* center lift — soft white glow, breathes subtly */}
      <div
        className="bg-atmo"
        style={{
          position: "absolute",
          top: "4%",
          left: "50%",
          width: "70%",
          height: "44%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, transparent 70%)",
          animation: "phBreath 26s ease-in-out infinite",
        }}
      />
      {/* warm blooms — the calm wander */}
      {BLOOMS.map((b, i) => (
        <span
          key={i}
          className="bg-atmo"
          style={{
            position: "absolute",
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            borderRadius: "50%",
            willChange: "transform",
            background: `radial-gradient(circle, ${b.color} 0%, transparent 68%)`,
            filter: "blur(30px)",
            animation: `${b.anim} ease-in-out infinite`,
          }}
        />
      ))}
      {/* paper grain — depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("${GRAIN_URI}")`,
          opacity: 0.4,
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}
