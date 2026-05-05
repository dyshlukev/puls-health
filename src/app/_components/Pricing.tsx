import { CategoryBrowser } from "./CategoryBrowser";

export function Pricing() {
  const accent = "var(--pulse-accent)";

  return (
    <section id="pricing" style={{ padding: "140px 5vw", background: "#000", color: "#fff" }}>
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
          pricing
        </div>
        <h2 className="y-display-md" style={{ margin: "0 0 20px", maxWidth: "22ch" }}>
          A panel.
          <br />
          <span style={{ color: accent }}>Then your protocol.</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "60ch",
            margin: "0 0 48px",
          }}
        >
          Take a 5-minute assessment. Pay for the panel it recommends. After your results, a
          doctor-reviewed supplement protocol — buy once, or set up monthly renewal.
        </p>

        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 56,
          }}
        >
          {/* PACKAGES TIER */}
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              padding: "32px 32px 28px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div className="y-label" style={{ color: "rgba(255,255,255,0.55)" }}>
                Step 1 · Test
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  padding: "5px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                Pay per panel
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontWeight: 900,
                    fontStyle: "italic",
                    fontSize: 64,
                    lineHeight: 0.95,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  AED 240
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
                  · from
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 16,
                  color: "rgba(255,255,255,0.7)",
                  fontStyle: "italic",
                }}
              >
                One panel · drawn at home · doctor-reviewed
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "50+ curated panels — Essentials, Heart, Hormones, Thyroid, more",
                "Licensed nurse · 60–90 min home draw",
                "Doctor reads and explains every result",
                "Your record stays on the app forever",
              ].map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 14,
                    lineHeight: 1.45,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  <span style={{ color: accent, marginTop: 1 }}>·</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#packages"
              style={{
                marginTop: "auto",
                padding: "14px 22px",
                borderRadius: 999,
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 14,
                fontFamily: "var(--font-text)",
                textAlign: "center",
              }}
            >
              Browse panels
            </a>
          </div>

          {/* SUPPLEMENTS TIER */}
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              padding: "32px 32px 28px",
              background: `radial-gradient(120% 120% at 80% 0%, color-mix(in oklch, ${accent} 55%, black) 0%, color-mix(in oklch, ${accent} 16%, black) 50%, #0a0a0a 100%)`,
              boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.12), 0 0 80px color-mix(in oklch, ${accent} 22%, transparent)`,
              display: "flex",
              flexDirection: "column",
              gap: 22,
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
              }}
            >
              <div className="y-label" style={{ color: "#fff" }}>
                Step 2 · Supplements
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#fff",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  padding: "5px 10px",
                  borderRadius: 999,
                  background: "rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                After your test
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontWeight: 900,
                    fontStyle: "italic",
                    fontSize: 64,
                    lineHeight: 0.95,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  AED 80
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                  · from / month per SKU
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 16,
                  color: "rgba(255,255,255,0.85)",
                  fontStyle: "italic",
                }}
              >
                Built from your results, doctor-reviewed.
              </div>
            </div>

            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Recommended after your panel results",
                "Doctor-reviewed protocol — never generic",
                "Buy once, or set up monthly renewal",
                "Adjusted at every 6-month retest",
              ].map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 14,
                    lineHeight: 1.45,
                    color: "rgba(255,255,255,0.92)",
                  }}
                >
                  <span style={{ color: "#fff", marginTop: 1 }}>·</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#packages"
              style={{
                position: "relative",
                marginTop: "auto",
                padding: "14px 22px",
                borderRadius: 999,
                background: "#fff",
                color: "#000",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 14,
                fontFamily: "var(--font-text)",
                textAlign: "center",
              }}
            >
              Start with your panel →
            </a>
          </div>
        </div>

        {/* SEE IT IN THE APP — real product screens */}
        <div style={{ marginBottom: 56 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <div className="y-label" style={{ color: "rgba(255,255,255,0.55)" }}>
              See it in the app
            </div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: 14,
                color: "rgba(255,255,255,0.45)",
              }}
            >
              early-access build · UAE
            </div>
          </div>
          <div
            className="app-screens"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 18,
            }}
          >
            {[
              { src: "/demo/built-for-you.png", label: "Build your panel" },
              { src: "/demo/dashboard.png", label: "Your dashboard" },
              { src: "/demo/results.png", label: "Post-test results" },
              { src: "/demo/doctor.png", label: "Doctor on call" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "390 / 844",
                    borderRadius: 28,
                    overflow: "hidden",
                    background: "#0a0a0a",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 18px 48px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.04)",
                  }}
                >
                  <img
                    src={s.src}
                    alt={s.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORY BROWSER */}
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 17,
            color: "rgba(255,255,255,0.55)",
            marginBottom: 14,
            fontStyle: "italic",
          }}
          id="packages"
        >
          browse the panel catalogue
        </div>
        <h3
          className="y-display-md"
          style={{ margin: "0 0 32px", maxWidth: "22ch", fontSize: "clamp(36px, 4vw, 56px)" }}
        >
          A panel for every question.
        </h3>

        <CategoryBrowser accent={accent} />

        {/* FINAL CTA */}
        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            padding: "24px 28px",
            borderRadius: 20,
            background: `radial-gradient(120% 200% at 90% 50%, color-mix(in oklch, ${accent} 28%, black) 0%, #0a0a0a 70%)`,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-headline)",
                fontWeight: 900,
                fontStyle: "italic",
                fontSize: 32,
                lineHeight: 1,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              Find your panel.
            </div>
            <div
              style={{
                marginTop: 8,
                fontFamily: "var(--font-serif)",
                fontSize: 16,
                color: "rgba(255,255,255,0.7)",
                fontStyle: "italic",
              }}
            >
              5-minute assessment recommends the right one. Or browse the catalogue.
            </div>
          </div>
          <a
            href="#waitlist"
            style={{
              padding: "16px 28px",
              borderRadius: 999,
              background: "#fff",
              color: "#000",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 15,
              fontFamily: "var(--font-text)",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Start assessment <span style={{ fontSize: 16, lineHeight: 1 }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
