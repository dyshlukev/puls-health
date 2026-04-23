import { Fragment } from "react";

type LoopStep = "Ask" | "Test" | "Read" | "Track" | "Retest";

function LoopIcon({ step }: { step: LoopStep }) {
  const s = {
    width: 30,
    height: 30,
    stroke: "#fff",
    strokeWidth: 1.6,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (step === "Ask")
    return (
      <svg {...s} viewBox="0 0 28 28">
        <path d="M5 8a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3h-5l-4 4v-4H8a3 3 0 01-3-3z" />
        <circle cx="14" cy="12" r="0.9" fill="#fff" stroke="none" />
      </svg>
    );
  if (step === "Test")
    return (
      <svg {...s} viewBox="0 0 28 28">
        <path d="M14 3c-4 4-7 7-7 11a7 7 0 0014 0c0-4-3-7-7-11z" />
      </svg>
    );
  if (step === "Read")
    return (
      <svg {...s} viewBox="0 0 28 28">
        <rect x="6" y="4" width="16" height="20" rx="2" />
        <path d="M10 10h8M10 14h8M10 18h5" />
      </svg>
    );
  if (step === "Track")
    return (
      <svg {...s} viewBox="0 0 28 28">
        <path d="M4 20l6-6 4 4 6-8 4 4" />
        <path d="M18 10h4v4" />
      </svg>
    );
  return (
    <svg {...s} viewBox="0 0 28 28">
      <path d="M6 14a8 8 0 1114 5.3" />
      <path d="M20 20v-5h-5" />
    </svg>
  );
}

export function Problem() {
  const accent = "var(--pulse-accent)";
  const fragments = [
    {
      l: "A clinic visit",
      h: "Queue, labs, PDF.",
      d: "You leave with values you can't read. The doctor has ten minutes.",
    },
    {
      l: "A search bar",
      h: "Google, ChatGPT.",
      d: "Generic advice, no access to your actual biomarkers or history.",
    },
    {
      l: "A wearable",
      h: "Apple Watch, Whoop, Oura.",
      d: "Lifestyle signals. Not a diagnosis, not a treatment, not a retest.",
    },
    {
      l: "Supplements",
      h: "Instagram protocols.",
      d: "Bought on vibes. Nobody tracks whether anything actually moved.",
    },
  ];
  return (
    <section
      id="problem"
      style={{ padding: "140px 5vw 120px", background: "#000", color: "#fff" }}
    >
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
          the problem
        </div>
        <h2 className="y-display-md" style={{ margin: "0 0 24px", maxWidth: "22ch" }}>
          Preventive health is
          <br />a dozen disconnected tabs.
          <br />
          <span style={{ color: accent }}>Pulse is one product.</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "58ch",
            margin: "0 0 72px",
          }}
        >
          Today you assemble your own care from labs, search engines, wearables, and supplement
          shops. Nothing connects, nobody owns the outcome.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginBottom: 56,
          }}
        >
          {fragments.map((c, i) => (
            <div
              key={c.l}
              style={{
                padding: "32px 24px 32px 0",
                paddingLeft: i === 0 ? 0 : 24,
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div className="y-label" style={{ color: "rgba(255,255,255,0.5)" }}>
                {c.l}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-text)",
                  fontWeight: 700,
                  fontSize: 21,
                  lineHeight: 1.15,
                  color: "#fff",
                  letterSpacing: "-0.015em",
                }}
              >
                {c.h}
              </div>
              <div style={{ fontSize: 14.5, lineHeight: 1.55, color: "rgba(255,255,255,0.62)" }}>
                {c.d}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            position: "relative",
            padding: "44px 48px",
            borderRadius: 28,
            overflow: "hidden",
            background: `radial-gradient(120% 120% at 10% 10%, color-mix(in oklch, ${accent} 35%, black) 0%, color-mix(in oklch, ${accent} 10%, black) 55%, #0a0a0a 100%)`,
            boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.12), 0 0 80px color-mix(in oklch, ${accent} 18%, transparent)`,
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
          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1.2fr 1.6fr",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <div className="y-label" style={{ color: "#fff", marginBottom: 14 }}>
                Pulse
              </div>
              <div
                style={{
                  fontFamily: "var(--font-headline)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  fontSize: 48,
                  lineHeight: 1,
                  color: "#fff",
                  letterSpacing: "-0.015em",
                  textTransform: "uppercase",
                }}
              >
                One loop.
                <br />
                One record.
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 18,
                  lineHeight: 1.4,
                  color: "rgba(255,255,255,0.8)",
                  marginTop: 18,
                  maxWidth: "34ch",
                }}
              >
                A question becomes a test. A test becomes a tracked biomarker. A biomarker becomes
                a retest on the calendar.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 0,
                justifyContent: "space-between",
              }}
            >
              {(["Ask", "Test", "Read", "Track", "Retest"] as LoopStep[]).map((s, i, arr) => (
                <Fragment key={s}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        background: "rgba(0,0,0,0.3)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                      }}
                    >
                      <LoopIcon step={s} />
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#fff",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {s}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        height: 1,
                        background:
                          "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.15))",
                        margin: "0 8px",
                        position: "relative",
                        top: -12,
                      }}
                    />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
