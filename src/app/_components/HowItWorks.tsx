type IconKind = "assess" | "draw" | "review" | "protocol";

function StepIcon({ k }: { k: IconKind }) {
  const s = {
    width: 28,
    height: 28,
    stroke: "var(--pulse-accent)",
    strokeWidth: 1.5,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (k === "assess")
    return (
      <svg {...s} viewBox="0 0 28 28">
        <rect x="4" y="5" width="20" height="18" rx="3" />
        <circle cx="8" cy="10" r="1.4" fill="var(--pulse-accent)" stroke="none" />
        <path d="M11 10h10M8 14h12M8 18h8" />
      </svg>
    );
  if (k === "draw")
    return (
      <svg {...s} viewBox="0 0 28 28">
        <path d="M14 3c-4 4-7 7-7 11a7 7 0 0014 0c0-4-3-7-7-11z" />
      </svg>
    );
  if (k === "review")
    return (
      <svg {...s} viewBox="0 0 28 28">
        <path d="M6 4h12l4 4v16H6z" />
        <path d="M10 14l3 3 6-6" />
      </svg>
    );
  return (
    <svg {...s} viewBox="0 0 28 28">
      <rect x="5" y="11" width="18" height="6" rx="3" transform="rotate(-25 14 14)" />
      <path d="M10 10l8 8" transform="rotate(-25 14 14)" />
    </svg>
  );
}

export function HowItWorks() {
  const steps: { n: string; t: string; ic: IconKind; d: string }[] = [
    {
      n: "01",
      t: "Take the assessment",
      ic: "assess",
      d: "Five minutes — biographical, lifestyle, family history, what you're already taking. We recommend the right panel for you.",
    },
    {
      n: "02",
      t: "Draw at home",
      ic: "draw",
      d: "A licensed nurse arrives in 60–90 minutes. Prefer walk-in? Book a partner-lab collection centre near you.",
    },
    {
      n: "03",
      t: "A doctor reads your results",
      ic: "review",
      d: "A licensed physician explains every marker in plain English — no PDF dumped on you. Replies in minutes, not days.",
    },
    {
      n: "04",
      t: "Your supplement protocol",
      ic: "protocol",
      d: "Built from your actual results, doctor-reviewed. Buy what you need once, or set up monthly renewal. Refreshed at every 6-month retest.",
    },
  ];
  return (
    <section id="how" style={{ padding: "140px 5vw 120px", background: "#000", color: "#fff" }}>
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
          how it works
        </div>
        <h2 className="y-display-md" style={{ margin: "0 0 72px", maxWidth: "16ch" }}>
          Four steps.
          <br />
          One product.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.n}
              style={{
                padding: "32px 28px 32px 0",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                paddingLeft: i === 0 ? 0 : 28,
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontWeight: 900,
                    fontStyle: "italic",
                    fontSize: 72,
                    lineHeight: 0.9,
                    color: "var(--pulse-accent)",
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <StepIcon k={s.ic} />
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-text)",
                  fontWeight: 700,
                  fontSize: 22,
                  lineHeight: 1.2,
                  color: "#fff",
                  letterSpacing: "-0.015em",
                }}
              >
                {s.t}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.65)" }}>
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
