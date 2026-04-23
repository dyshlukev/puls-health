"use client";

type ProgKind = "weight" | "men" | "women";
type PaletteKey = "ember" | "azure" | "magenta";

function ProgIllus({ k }: { k: ProgKind }) {
  const col = "rgba(255,255,255,0.92)";
  const dim = "rgba(255,255,255,0.35)";
  const base = {
    fill: "none",
    stroke: col,
    strokeWidth: 1.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (k === "weight")
    return (
      <svg viewBox="0 0 220 240" style={{ width: "100%", height: "100%" }}>
        <g stroke={dim} strokeWidth="0.6">
          {[40, 70, 100, 130, 160, 190].map((y) => (
            <line key={y} x1="20" y1={y} x2="200" y2={y} />
          ))}
          {[40, 80, 120, 160, 200].map((x) => (
            <line key={x} x1={x} y1="40" x2={x} y2="190" />
          ))}
        </g>
        <path
          d="M20 70 L55 90 L90 85 L125 115 L160 140 L200 165"
          {...base}
          strokeWidth="2"
        />
        {(
          [
            [20, 70],
            [55, 90],
            [90, 85],
            [125, 115],
            [160, 140],
            [200, 165],
          ] as [number, number][]
        ).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill={col} />
        ))}
        <g transform="translate(110 212)">
          <path d="M-30 -4 Q0 -16 30 -4 L26 12 L-26 12 Z" {...base} />
          <circle cx="0" cy="2" r="3" fill={col} />
        </g>
      </svg>
    );
  if (k === "men")
    return (
      <svg viewBox="0 0 220 240" style={{ width: "100%", height: "100%" }}>
        <g {...base} strokeWidth="1.6">
          <circle cx="100" cy="130" r="42" />
          <path d="M132 98 L168 62" />
          <path d="M146 62 L168 62 L168 84" />
        </g>
        <g stroke={dim} strokeWidth="0.8">
          <line x1="20" y1="210" x2="200" y2="210" />
        </g>
        <path
          d="M20 205 L50 192 L70 200 L95 182 L120 194 L150 174 L180 186 L200 170"
          {...base}
        />
      </svg>
    );
  return (
    <svg viewBox="0 0 220 240" style={{ width: "100%", height: "100%" }}>
      <g {...base} strokeWidth="1.6">
        <circle cx="110" cy="100" r="42" />
        <path d="M110 142 L110 196" />
        <path d="M90 174 L130 174" />
      </g>
      <g stroke={dim} strokeWidth="0.8" fill="none">
        <circle cx="110" cy="100" r="62" strokeDasharray="3 5" />
      </g>
      <circle cx="172" cy="100" r="3" fill={col} />
      <circle cx="110" cy="38" r="3" fill={col} />
      <circle cx="48" cy="100" r="3" fill={col} />
    </svg>
  );
}

export function Programs() {
  const accent = "var(--pulse-accent)";
  const programs: {
    name: string;
    tagline: string;
    ic: ProgKind;
    palette: PaletteKey;
  }[] = [
    {
      name: "Weight",
      tagline: "Metabolic panel + GLP-1 protocol + monthly tracking",
      ic: "weight",
      palette: "ember",
    },
    {
      name: "Men's Health",
      tagline: "Testosterone, energy, hair, performance — monitored",
      ic: "men",
      palette: "azure",
    },
    {
      name: "Women's Health",
      tagline: "PCOS, perimenopause, thyroid — supervised by a specialist",
      ic: "women",
      palette: "magenta",
    },
  ];
  const PAL: Record<PaletteKey, string> = {
    ember: "radial-gradient(130% 130% at 15% 15%, #D94A2A 0%, #4A0E06 55%, #240803 100%)",
    azure: "radial-gradient(130% 130% at 15% 15%, #2F6BB8 0%, #0E2A4A 55%, #061224 100%)",
    magenta: "radial-gradient(130% 130% at 15% 15%, #B24A80 0%, #4A1D34 55%, #2A0E1E 100%)",
  };
  return (
    <section id="programs" style={{ padding: "140px 5vw", background: "#000", color: "#fff" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 }}>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 17,
              color: "rgba(255,255,255,0.55)",
              fontStyle: "italic",
            }}
          >
            programs
          </span>
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 999,
              padding: "4px 10px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Coming next
          </span>
        </div>
        <h2 className="y-display-md" style={{ margin: "0 0 20px", maxWidth: "18ch" }}>
          When one panel
          <br />
          <span style={{ color: accent }}>isn&apos;t enough.</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "50ch",
            margin: "0 0 56px",
          }}
        >
          Condition-specific programmes that continue past the first result — labs, a specialist,
          medication when needed, and monthly tracking on the same record.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {programs.map((p) => (
            <div
              key={p.name}
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
                background: PAL[p.palette],
                aspectRatio: "0.78",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12), var(--shadow-lg)",
                display: "flex",
                flexDirection: "column",
                transition: "transform .24s var(--ease-standard)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px) rotate(-0.4deg)";
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
                  opacity: 0.22,
                  mixBlendMode: "overlay",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  margin: 22,
                  marginBottom: 0,
                  borderRadius: 20,
                  overflow: "hidden",
                  flex: 1,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.35))",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px",
                }}
              >
                <ProgIllus k={p.ic} />
              </div>
              <div
                style={{
                  position: "relative",
                  padding: "20px 22px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontWeight: 900,
                    fontStyle: "italic",
                    textTransform: "uppercase",
                    fontSize: 26,
                    lineHeight: 1,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 14.5,
                    lineHeight: 1.4,
                    color: "rgba(255,255,255,0.82)",
                  }}
                >
                  {p.tagline}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
