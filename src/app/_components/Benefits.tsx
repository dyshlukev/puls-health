"use client";

type BenefitKind = "price" | "clinical" | "early" | "doctor" | "wear" | "lock";
type PaletteKey = "violet" | "magenta" | "graphite" | "azure" | "ember" | "crimson";

function BenefitIcon({ kind }: { kind: BenefitKind }) {
  const s = {
    width: 44,
    height: 44,
    stroke: "rgba(255,255,255,0.92)",
    strokeWidth: 1.4,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const icons: Record<BenefitKind, React.ReactElement> = {
    price: (
      <svg {...s} viewBox="0 0 44 44">
        <circle cx="22" cy="22" r="16" />
        <path d="M22 13v18M17 17h7.5a3.5 3.5 0 010 7h-5a3.5 3.5 0 000 7H27" />
      </svg>
    ),
    clinical: (
      <svg {...s} viewBox="0 0 44 44">
        <path d="M16 8v10l-7 14a4 4 0 003.6 5.8h18.8A4 4 0 0035 32L28 18V8M14 8h16M18 24h8" />
      </svg>
    ),
    early: (
      <svg {...s} viewBox="0 0 44 44">
        <path d="M6 26h6l3-10 6 20 4-14 3 6h10" />
      </svg>
    ),
    doctor: (
      <svg {...s} viewBox="0 0 44 44">
        <path d="M22 6a8 8 0 018 8v4a8 8 0 01-16 0v-4a8 8 0 018-8z" />
        <path d="M10 38c0-7 5.4-12 12-12s12 5 12 12" />
        <path d="M28 21l3 2 4-4" />
      </svg>
    ),
    wear: (
      <svg {...s} viewBox="0 0 44 44">
        <rect x="14" y="12" width="16" height="20" rx="3" />
        <path d="M17 12l1-5h8l1 5M17 32l1 5h8l1-5M22 18v5l3 2" />
      </svg>
    ),
    lock: (
      <svg {...s} viewBox="0 0 44 44">
        <rect x="10" y="20" width="24" height="17" rx="3" />
        <path d="M15 20v-5a7 7 0 0114 0v5M22 27v3" />
      </svg>
    ),
  };
  return icons[kind];
}

export function Benefits() {
  const items: { t: string; d: string; p: PaletteKey; i: BenefitKind }[] = [
    {
      t: "Priced to use",
      d: "Entry panels start at AED 499. No subscription trap, no hidden add-ons.",
      p: "ember",
      i: "price",
    },
    {
      t: "Clinically grounded",
      d: 'Results read against WHO, ESC, and local clinical protocols. Never "because the AI said so."',
      p: "azure",
      i: "clinical",
    },
    {
      t: "Caught early",
      d: "Biomarker trends surface cardio, metabolic, and thyroid drift before symptoms do.",
      p: "crimson",
      i: "early",
    },
    {
      t: "Signed off by a doctor",
      d: "Every report is reviewed by a DHA-licensed physician. Ask follow-ups in the app.",
      p: "graphite",
      i: "doctor",
    },
    {
      t: "Wearables, unified",
      d: "Apple Watch, Whoop, and Oura land in the same timeline as your bloodwork.",
      p: "violet",
      i: "wear",
    },
    {
      t: "Your data, your rules",
      d: "Records encrypted, stored on in-region infrastructure, owned by you — export any time.",
      p: "magenta",
      i: "lock",
    },
  ];
  const PAL: Record<PaletteKey, string> = {
    violet:
      "radial-gradient(130% 130% at 15% 15%, #6B4EE8 0%, #2E1E5E 55%, #120930 100%)",
    magenta:
      "radial-gradient(130% 130% at 15% 15%, #B24A80 0%, #4A1D34 55%, #2A0E1E 100%)",
    graphite:
      "radial-gradient(130% 130% at 15% 15%, #6F7479 0%, #242628 55%, #111 100%)",
    azure:
      "radial-gradient(130% 130% at 15% 15%, #2F6BB8 0%, #0E2A4A 55%, #061224 100%)",
    ember:
      "radial-gradient(130% 130% at 15% 15%, #D94A2A 0%, #4A0E06 55%, #240803 100%)",
    crimson:
      "radial-gradient(130% 130% at 15% 15%, #C8173B 0%, #3E0510 55%, #1A020A 100%)",
  };
  return (
    <section id="benefits" style={{ padding: "140px 5vw", background: "#000", color: "#fff" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 17,
            color: "rgba(255,255,255,0.55)",
            marginBottom: 14,
            fontStyle: "italic",
          }}
        >
          what you get
        </div>
        <h2 className="y-display-md" style={{ margin: "0 0 20px", maxWidth: "18ch" }}>
          Labs, AI, and a doctor —
          <br />
          on one record
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "48ch",
            margin: "0 0 64px",
          }}
        >
          Six reasons to start caring about your health before anything is wrong.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {items.map((it) => (
            <div
              key={it.t}
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                background: PAL[it.p],
                padding: 28,
                minHeight: 300,
                display: "flex",
                flexDirection: "column",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1), var(--shadow-lg)",
                transition: "transform .24s var(--ease-standard)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "var(--grain-url)",
                  backgroundSize: "220px 220px",
                  opacity: 0.2,
                  mixBlendMode: "overlay",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", marginBottom: "auto" }}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 18,
                    background: "rgba(0,0,0,0.25)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BenefitIcon kind={it.i} />
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  fontFamily: "var(--font-headline)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  fontSize: 26,
                  lineHeight: 1,
                  color: "#fff",
                  margin: "32px 0 14px",
                  letterSpacing: "-0.01em",
                }}
              >
                {it.t}
              </div>
              <div
                style={{
                  position: "relative",
                  fontFamily: "var(--font-serif)",
                  fontSize: 15.5,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                {it.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
