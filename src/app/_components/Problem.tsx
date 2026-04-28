type IOKind =
  | "draw"
  | "wearable"
  | "history"
  | "rx"
  | "family"
  | "doctor"
  | "calendar"
  | "supplements"
  | "specialist"
  | "care";

function IOIcon({ k }: { k: IOKind }) {
  const s = {
    width: 18,
    height: 18,
    stroke: "currentColor",
    strokeWidth: 1.6,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (k === "draw")
    return (
      <svg {...s} viewBox="0 0 24 24">
        <path d="M12 3c-3.5 3.5-6 6-6 9.5a6 6 0 0012 0c0-3.5-2.5-6-6-9.5z" />
      </svg>
    );
  if (k === "wearable")
    return (
      <svg {...s} viewBox="0 0 24 24">
        <rect x="7" y="6" width="10" height="12" rx="2" />
        <path d="M9 6V4h6v2M9 18v2h6v-2" />
      </svg>
    );
  if (k === "history")
    return (
      <svg {...s} viewBox="0 0 24 24">
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M8 9h8M8 13h8M8 17h5" />
      </svg>
    );
  if (k === "rx")
    return (
      <svg {...s} viewBox="0 0 24 24">
        <path d="M7 4h6a3 3 0 010 6H7zM7 10v10M7 13l8 7" />
      </svg>
    );
  if (k === "family")
    return (
      <svg {...s} viewBox="0 0 24 24">
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M3 20c0-2.5 2-4 5-4s5 1.5 5 4M11 20c0-2.5 2-4 5-4s5 1.5 5 4" />
      </svg>
    );
  if (k === "doctor")
    return (
      <svg {...s} viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20c0-3 3-5 7-5s7 2 7 5" />
        <path d="M9 17v3M15 17v3" />
      </svg>
    );
  if (k === "calendar")
    return (
      <svg {...s} viewBox="0 0 24 24">
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <path d="M4 11h16M9 4v4M15 4v4" />
      </svg>
    );
  if (k === "supplements")
    return (
      <svg {...s} viewBox="0 0 24 24">
        <rect x="4" y="9" width="16" height="6" rx="3" transform="rotate(-25 12 12)" />
        <path d="M9 8l6 6" transform="rotate(-25 12 12)" />
      </svg>
    );
  if (k === "specialist")
    return (
      <svg {...s} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1" />
      </svg>
    );
  return (
    <svg {...s} viewBox="0 0 24 24">
      <path d="M12 21s-7-4.5-7-10a4.5 4.5 0 018-2.8A4.5 4.5 0 0119 11c0 5.5-7 10-7 10z" />
    </svg>
  );
}

function Pill({
  k,
  label,
  align,
}: {
  k: IOKind;
  label: string;
  align: "left" | "right";
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 16px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "rgba(255,255,255,0.92)",
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: "-0.005em",
        whiteSpace: "nowrap",
        flexDirection: align === "right" ? "row-reverse" : "row",
      }}
    >
      <span style={{ color: "var(--pulse-accent)", display: "inline-flex" }}>
        <IOIcon k={k} />
      </span>
      <span>{label}</span>
    </div>
  );
}

export function Problem() {
  const accent = "var(--pulse-accent)";
  const fragments = [
    {
      l: "A clinic visit",
      h: "Queue, labs, PDF.",
      missing: "No one owns the follow-up.",
    },
    {
      l: "A search bar",
      h: "Google, ChatGPT.",
      missing: "No access to your biomarkers.",
    },
    {
      l: "A wearable",
      h: "Apple Watch, Whoop, Oura.",
      missing: "No diagnosis. No retest.",
    },
    {
      l: "Supplements",
      h: "Instagram protocols.",
      missing: "Nothing is actually tracked.",
    },
  ];

  const inputs: { k: IOKind; label: string }[] = [
    { k: "draw", label: "Home draw + labs" },
    { k: "wearable", label: "Wearables, CGM" },
    { k: "history", label: "DHA medical history" },
    { k: "rx", label: "Prescriptions" },
    { k: "family", label: "Family context" },
  ];
  const outputs: { k: IOKind; label: string }[] = [
    { k: "doctor", label: "Doctor answers" },
    { k: "calendar", label: "Retest calendar" },
    { k: "supplements", label: "Protocol + supplements" },
    { k: "specialist", label: "Specialist routing" },
    { k: "care", label: "Pulse Care concierge" },
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
          <span style={{ color: accent }}>Pulse is one record.</span>
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
            gap: 14,
            marginBottom: 56,
          }}
        >
          {fragments.map((c) => (
            <div
              key={c.l}
              style={{
                position: "relative",
                padding: "22px 22px 20px",
                borderRadius: 14,
                border: "1px dashed rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.02)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono, ui-monospace, SFMono-Regular, monospace)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {c.l}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-text)",
                  fontWeight: 500,
                  fontSize: 19,
                  lineHeight: 1.2,
                  color: "rgba(255,255,255,0.78)",
                  letterSpacing: "-0.01em",
                  textDecoration: "line-through",
                  textDecorationColor: "rgba(255,255,255,0.35)",
                  textDecorationThickness: "1px",
                }}
              >
                {c.h}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  marginTop: "auto",
                  paddingTop: 6,
                  fontSize: 13.5,
                  lineHeight: 1.45,
                  color: accent,
                  fontWeight: 500,
                }}
              >
                <span aria-hidden="true" style={{ lineHeight: 1.4 }}>✕</span>
                <span>{c.missing}</span>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            position: "relative",
            padding: "56px 48px",
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

          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 8,
                textAlign: "center",
                marginBottom: 40,
              }}
            >
              <div className="y-label" style={{ color: "rgba(255,255,255,0.7)" }}>
                One record · capture · guide · deliver
              </div>
              <div
                style={{
                  fontFamily: "var(--font-headline)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  fontSize: 44,
                  lineHeight: 1,
                  color: "#fff",
                  letterSpacing: "-0.015em",
                  textTransform: "uppercase",
                }}
              >
                Everything you measure.
                <br />
                Everything you do next.
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: 32,
                alignItems: "center",
              }}
            >
              {/* INPUTS */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-end" }}>
                <div
                  className="y-label"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: 6,
                  }}
                >
                  In
                </div>
                {inputs.map((i) => (
                  <Pill key={i.label} k={i.k} label={i.label} align="right" />
                ))}
              </div>

              {/* HUB */}
              <div
                style={{
                  position: "relative",
                  width: 260,
                  height: 260,
                  borderRadius: "50%",
                  background: `radial-gradient(60% 60% at 30% 30%, color-mix(in oklch, ${accent} 65%, #000) 0%, color-mix(in oklch, ${accent} 22%, #000) 60%, #000 100%)`,
                  boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.18), 0 0 60px color-mix(in oklch, ${accent} 35%, transparent)`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 24,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontStyle: "italic",
                    fontWeight: 900,
                    fontSize: 32,
                    lineHeight: 1,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  YOU
                </div>
                <div
                  style={{
                    marginTop: 12,
                    fontFamily: "var(--font-headline)",
                    fontWeight: 900,
                    fontStyle: "italic",
                    fontSize: 56,
                    lineHeight: 0.95,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  47<span style={{ opacity: 0.5, fontSize: 28 }}>/49</span>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    marginTop: 4,
                    letterSpacing: "0.02em",
                  }}
                >
                  biomarkers in range
                </div>
                <div
                  style={{
                    width: "70%",
                    height: 4,
                    borderRadius: 999,
                    marginTop: 14,
                    background: "rgba(255,255,255,0.18)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "92%",
                      height: "100%",
                      background: "linear-gradient(90deg, #36C28E 0%, #36C28E 80%, #fff 100%)",
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: 16,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "5px 10px",
                    borderRadius: 999,
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    fontSize: 11,
                    color: "#fff",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: accent,
                    }}
                  />
                  3 open action points
                </div>
              </div>

              {/* OUTPUTS */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
                <div
                  className="y-label"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: 6,
                  }}
                >
                  Out
                </div>
                {outputs.map((o) => (
                  <Pill key={o.label} k={o.k} label={o.label} align="left" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
