export function PulseAI() {
  const accent = "var(--pulse-accent)";
  const capabilities = [
    {
      t: "Question",
      h: "You ask",
      d: '"Why did my cholesterol go up?" — by voice or text, in your own words.',
    },
    {
      t: "Context",
      h: "Reads your data",
      d: "Cross-references your biomarker history, family context, and wearables.",
    },
    {
      t: "Action",
      h: "Books what you need",
      d: "Schedules the retest, routes you to the right specialist, prepares a briefing for the doctor.",
    },
    {
      t: "Follow-through",
      h: "Tracks the trend",
      d: "Monitors the next result, flags direction of change, nudges on schedule.",
    },
  ];
  const skills: [string, string][] = [
    ["Retest scheduling", "Same nurse, same lab, same window"],
    ["Specialist routing", "Right clinician, context pre-shared"],
    ["Supplements", "Suggestions grounded in your results"],
    ["Annual calendar", "A year of screenings, mapped to you"],
    ["Wearables", "Apple Watch, Whoop — unified profile"],
    ["Doctor briefing", "Trend + flagged values before the call"],
  ];
  return (
    <section
      id="ai"
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
          background: `radial-gradient(40% 50% at 80% 30%, color-mix(in oklch, ${accent} 28%, transparent) 0%, transparent 70%)`,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 }}>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 17,
              color: "rgba(255,255,255,0.55)",
              fontStyle: "italic",
            }}
          >
            pulse ai
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
            on your data
          </span>
        </div>
        <h2 className="y-display-md" style={{ margin: "0 0 24px", maxWidth: "18ch" }}>
          AI that reads
          <br />
          <span style={{ color: accent }}>your biomarkers</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "54ch",
            margin: "0 0 72px",
          }}
        >
          Not a chatbot quoting the internet. Pulse AI answers from your actual results, your
          trend, and your family context — then a licensed physician signs off.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              background: `radial-gradient(120% 120% at 20% 0%, color-mix(in oklch, ${accent} 70%, black) 0%, color-mix(in oklch, ${accent} 22%, black) 50%, #0a0a0a 100%)`,
              boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.1), var(--shadow-lg), 0 0 80px color-mix(in oklch, ${accent} 25%, transparent)`,
              padding: 24,
              minHeight: 540,
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
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.3))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                    fontFamily: "var(--font-headline)",
                    fontStyle: "italic",
                    fontWeight: 900,
                    fontSize: 18,
                  }}
                >
                  P
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Pulse AI</div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.55)",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#36C28E",
                      }}
                    />
                    reading your record
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div
                style={{
                  alignSelf: "flex-end",
                  maxWidth: "80%",
                  background: "rgba(255,255,255,0.14)",
                  color: "#fff",
                  padding: "10px 14px",
                  borderRadius: "16px 16px 4px 16px",
                  fontSize: 14,
                  lineHeight: 1.4,
                }}
              >
                My dad had diabetes. What should I check?
              </div>

              <div
                style={{
                  alignSelf: "flex-start",
                  maxWidth: "92%",
                  background: "rgba(0,0,0,0.35)",
                  color: "#fff",
                  padding: "12px 16px",
                  borderRadius: "16px 16px 16px 4px",
                  fontSize: 14,
                  lineHeight: 1.45,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                With a first-degree family history, your doctor will likely add HbA1c, fasting
                glucose, and insulin to a base panel. Your last glucose (Feb) was on the high end
                of normal — worth a recheck. Shall I find a nurse slot near you?
              </div>

              <div
                style={{
                  alignSelf: "flex-start",
                  width: "92%",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: 14,
                  fontSize: 13,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <div style={{ fontWeight: 600 }}>Home draw · Dubai Marina</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>60 min SLA</div>
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
                  Pick a window:
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 6,
                  }}
                >
                  {["Tue · 09:00", "Wed · 10:00", "Thu · 08:30", "Fri · 11:00"].map((s, i) => (
                    <div
                      key={s}
                      style={{
                        padding: "8px 10px",
                        borderRadius: 10,
                        fontSize: 12,
                        background: i === 1 ? "#fff" : "rgba(255,255,255,0.06)",
                        color: i === 1 ? "#000" : "rgba(255,255,255,0.85)",
                        fontWeight: i === 1 ? 600 : 400,
                        border: i === 1 ? "none" : "1px solid rgba(255,255,255,0.08)",
                        textAlign: "center",
                      }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  alignSelf: "flex-end",
                  maxWidth: "70%",
                  background: "rgba(255,255,255,0.14)",
                  padding: "10px 14px",
                  borderRadius: "16px 16px 4px 16px",
                  fontSize: 14,
                }}
              >
                Wednesday 10:00 works
              </div>

              <div
                style={{
                  alignSelf: "flex-start",
                  maxWidth: "92%",
                  background: "rgba(54,194,142,0.12)",
                  border: "1px solid rgba(54,194,142,0.3)",
                  padding: "12px 16px",
                  borderRadius: "16px 16px 16px 4px",
                  fontSize: 14,
                  lineHeight: 1.45,
                }}
              >
                Booked. Nurse arrives Wed 10:00. I&apos;ve pre-filled a trend briefing for Dr.
                Al-Madani and scheduled a retest in 12 weeks on your calendar.
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {capabilities.map((c) => (
                <div
                  key={c.t}
                  style={{
                    padding: 20,
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <div className="y-label" style={{ color: accent }}>
                    {c.t}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em" }}>
                    {c.h}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    {c.d}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                marginBottom: 14,
                marginTop: 28,
                fontStyle: "italic",
              }}
            >
              what pulse ai does
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 0,
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {skills.map((s, i) => (
                <div
                  key={s[0]}
                  style={{
                    padding: "18px 16px 18px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    paddingLeft: i % 2 === 0 ? 0 : 16,
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: 14.5, marginBottom: 4 }}>{s[0]}</div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.4,
                    }}
                  >
                    {s[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
