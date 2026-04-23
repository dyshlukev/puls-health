type CCKind = "glucose" | "heart" | "wave";

function CCIcon({ k }: { k: CCKind }) {
  const accent = "var(--pulse-accent)";
  const s = {
    width: 40,
    height: 40,
    stroke: accent,
    strokeWidth: 1.6,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (k === "glucose")
    return (
      <svg {...s} viewBox="0 0 40 40">
        <path d="M20 4c-4 6-10 11-10 18a10 10 0 0020 0c0-7-6-12-10-18z" />
      </svg>
    );
  if (k === "heart")
    return (
      <svg {...s} viewBox="0 0 40 40">
        <path d="M20 34s-12-7.5-12-16a7 7 0 0112-5 7 7 0 0112 5c0 8.5-12 16-12 16z" />
      </svg>
    );
  return (
    <svg {...s} viewBox="0 0 40 40">
      <path d="M4 22h7l3-10 6 18 4-12 3 4h9" />
    </svg>
  );
}

export function ChronicCare() {
  const accent = "var(--pulse-accent)";
  const conditions: { n: string; d: string; ic: CCKind }[] = [
    {
      n: "Type-2 diabetes",
      d: "Quarterly HbA1c, lifestyle coaching, doctor-led titration.",
      ic: "glucose",
    },
    {
      n: "Hypertension",
      d: "Cuff-paired tracking, lipid/kidney panels, medication review.",
      ic: "heart",
    },
    {
      n: "Dyslipidemia",
      d: "ApoB, Lp(a) deep-dive with cardiology follow-through.",
      ic: "wave",
    },
  ];
  return (
    <section
      id="chronic"
      style={{
        position: "relative",
        padding: "140px 5vw",
        background: "#000",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(40% 50% at 20% 50%, color-mix(in oklch, ${accent} 22%, transparent) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 17,
                color: "rgba(255,255,255,0.55)",
                fontStyle: "italic",
              }}
            >
              chronic care
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
              Stage 3
            </span>
          </div>
          <h2 className="y-display-md" style={{ margin: "0 0 24px", maxWidth: "14ch" }}>
            Monthly care,
            <br />
            not one-off tests.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 20,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.78)",
              margin: "0 0 36px",
              maxWidth: "40ch",
            }}
          >
            For people managing an ongoing condition, Pulse becomes a supervised programme —
            regular panels, a dedicated doctor, medication titration, and compliance tracked in
            the same app.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Employer plans", "Insurer partnerships", "Family accounts"].map((t) => (
              <span
                key={t}
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {conditions.map((c) => (
            <div
              key={c.n}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr auto",
                alignItems: "center",
                gap: 24,
                padding: "24px 28px",
                borderRadius: 20,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: "rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CCIcon k={c.ic} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-text)",
                    fontWeight: 700,
                    fontSize: 19,
                    letterSpacing: "-0.01em",
                    marginBottom: 6,
                  }}
                >
                  {c.n}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.62)" }}>
                  {c.d}
                </div>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-headline)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  fontSize: 26,
                  color: accent,
                  lineHeight: 1,
                }}
              >
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
