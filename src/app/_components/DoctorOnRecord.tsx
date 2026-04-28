export function DoctorOnRecord() {
  const accent = "var(--pulse-accent)";

  const flagged: { name: string; value: string; range: string; trend: "up" | "down" | "flat"; status: "watch" | "ok" }[] = [
    { name: "HbA1c", value: "5.8%", range: "<5.7", trend: "up", status: "watch" },
    { name: "Vitamin D", value: "21 ng/mL", range: ">30", trend: "down", status: "watch" },
    { name: "ApoB", value: "92 mg/dL", range: "<90", trend: "up", status: "watch" },
    { name: "TSH", value: "2.1 mIU/L", range: "0.4–4.0", trend: "flat", status: "ok" },
  ];

  return (
    <section
      id="doctor"
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
          background: `radial-gradient(45% 55% at 15% 35%, color-mix(in oklch, ${accent} 22%, transparent) 0%, transparent 70%)`,
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
            doctor on your record
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
            Pulse Care
          </span>
        </div>
        <h2 className="y-display-md" style={{ margin: "0 0 24px", maxWidth: "20ch" }}>
          Ask anything.
          <br />
          <span style={{ color: accent }}>A doctor with your full record answers — in minutes.</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "60ch",
            margin: "0 0 64px",
          }}
        >
          When your doctor opens your message, they already see every result, every wearable
          trend, and what you tried last quarter. No re-explaining. No 30-minute appointments to
          establish context.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {/* PATIENT VIEW */}
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: 24,
              minHeight: 560,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
                paddingBottom: 16,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="y-label"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Your view
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.04em",
                }}
              >
                14:02 · Tuesday
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  alignSelf: "flex-end",
                  maxWidth: "82%",
                  background: "rgba(255,255,255,0.14)",
                  color: "#fff",
                  padding: "12px 16px",
                  borderRadius: "16px 16px 4px 16px",
                  fontSize: 14,
                  lineHeight: 1.45,
                }}
              >
                I&apos;ve been more tired than usual since Ramadan. Worth checking anything?
              </div>

              <div
                style={{
                  alignSelf: "flex-start",
                  maxWidth: "92%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 11,
                    color: "rgba(255,255,255,0.55)",
                    paddingLeft: 4,
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, oklch(0.6 0.16 265), oklch(0.28 0.12 295))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontFamily: "var(--font-headline)",
                      fontStyle: "italic",
                      fontWeight: 900,
                      fontSize: 10,
                    }}
                  >
                    AM
                  </div>
                  <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>Dr. Amira Al-Mansoori</span>
                  <span>· internal medicine · replied in 4 min</span>
                </div>
                <div
                  style={{
                    background: "rgba(0,0,0,0.35)",
                    color: "#fff",
                    padding: "14px 16px",
                    borderRadius: "16px 16px 16px 4px",
                    fontSize: 14,
                    lineHeight: 1.5,
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  I&apos;ve looked at your record. Two things stand out: your Vitamin D dropped
                  from 32 in October to 21 today, and your sleep on Whoop has averaged 5h 40m for
                  three weeks. Both fit the fatigue.
                  <br />
                  <br />
                  Let&apos;s start with Vitamin D — I&apos;m sending a 10,000 IU protocol for 8
                  weeks, then we retest. If sleep doesn&apos;t improve in 2 weeks, ping me again.
                </div>
              </div>

              <div
                style={{
                  alignSelf: "flex-start",
                  width: "92%",
                  background: "rgba(54,194,142,0.08)",
                  border: "1px solid rgba(54,194,142,0.25)",
                  padding: "12px 16px",
                  borderRadius: 14,
                  fontSize: 13,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#36C28E",
                  }}
                />
                <span style={{ color: "rgba(255,255,255,0.85)" }}>
                  Protocol added · retest scheduled · 8 weeks
                </span>
              </div>

              <div
                style={{
                  alignSelf: "flex-end",
                  maxWidth: "55%",
                  background: "rgba(255,255,255,0.14)",
                  padding: "12px 16px",
                  borderRadius: "16px 16px 4px 16px",
                  fontSize: 14,
                }}
              >
                Thanks doc 🙏
              </div>
            </div>
          </div>

          {/* DOCTOR VIEW */}
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              background: `radial-gradient(120% 120% at 80% 0%, color-mix(in oklch, ${accent} 55%, black) 0%, color-mix(in oklch, ${accent} 16%, black) 50%, #0a0a0a 100%)`,
              boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.1), var(--shadow-lg), 0 0 80px color-mix(in oklch, ${accent} 22%, transparent)`,
              padding: 24,
              minHeight: 560,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "var(--grain-url)",
                backgroundSize: "220px 220px",
                opacity: 0.18,
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
                marginBottom: 20,
                paddingBottom: 16,
                borderBottom: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                className="y-label"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Doctor&apos;s view · Pulse Care
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 11,
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "0.04em",
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
                Briefing pre-loaded
              </div>
            </div>

            <div
              style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 16,
                flex: 1,
              }}
            >
              <div
                style={{
                  background: "rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  padding: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 12,
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: 15 }}>Patient · M., 38, Dubai</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>4 panels · 2y on file</div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 10,
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      padding: "10px 12px",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
                      Wearable
                    </div>
                    <div style={{ fontWeight: 600 }}>Whoop · sleep 5h 40m / 3wk</div>
                  </div>
                  <div
                    style={{
                      padding: "10px 12px",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
                      Last panel
                    </div>
                    <div style={{ fontWeight: 600 }}>Base 30+ · 12 days ago</div>
                  </div>
                  <div
                    style={{
                      padding: "10px 12px",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
                      Family
                    </div>
                    <div style={{ fontWeight: 600 }}>Father · T2D</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  padding: 16,
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 12,
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                    Flagged for review
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                    auto-ranked by trend
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {flagged.map((f) => (
                    <div
                      key={f.name}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.4fr 1fr 1fr auto",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 12px",
                        borderRadius: 10,
                        background:
                          f.status === "watch"
                            ? "rgba(217,74,42,0.08)"
                            : "rgba(54,194,142,0.06)",
                        border:
                          f.status === "watch"
                            ? "1px solid rgba(217,74,42,0.25)"
                            : "1px solid rgba(54,194,142,0.18)",
                        fontSize: 13,
                      }}
                    >
                      <div style={{ fontWeight: 600 }}>{f.name}</div>
                      <div style={{ color: "rgba(255,255,255,0.85)" }}>{f.value}</div>
                      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                        ref {f.range}
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 11,
                          color:
                            f.status === "watch"
                              ? "rgba(255,180,160,0.95)"
                              : "rgba(160,230,200,0.95)",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                        }}
                      >
                        {f.trend === "up" ? "↑" : f.trend === "down" ? "↓" : "→"}
                        <span>{f.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: 13,
                }}
              >
                <div style={{ color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ fontWeight: 600, color: "#fff" }}>Suggested next: </span>
                  Vitamin D protocol · retest in 8 weeks · sleep recheck in 2
                </div>
                <div
                  style={{
                    padding: "8px 14px",
                    borderRadius: 999,
                    background: "#fff",
                    color: "#000",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  Send to patient
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {[
            { n: "5 min", k: "median first reply on Pulse Care" },
            { n: "0 min", k: "spent re-explaining your history" },
            { n: "1 record", k: "every doctor sees the same trend" },
          ].map((s, i) => (
            <div
              key={s.k}
              style={{
                padding: "28px 28px 0 0",
                paddingLeft: i === 0 ? 0 : 28,
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-headline)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  fontSize: 44,
                  lineHeight: 1,
                  letterSpacing: "-0.015em",
                  color: "#fff",
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontFamily: "var(--font-serif)",
                  fontSize: 15,
                  lineHeight: 1.4,
                  color: "rgba(255,255,255,0.62)",
                  maxWidth: "32ch",
                }}
              >
                {s.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
