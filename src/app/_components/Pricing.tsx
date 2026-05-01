import { CategoryBrowser } from "./CategoryBrowser";

type Bundle = {
  feature: string;
  detail: string;
  unbundled?: string;
};

type Programme = {
  name: string;
  tagline: string;
  palette: "ember" | "azure" | "magenta";
};

const PROGRAMMES: Programme[] = [
  {
    name: "Weight",
    tagline: "Metabolic panel + GLP-1 protocol + monthly tracking",
    palette: "ember",
  },
  {
    name: "Men's Health",
    tagline: "Testosterone, energy, hair, performance — monitored",
    palette: "azure",
  },
  {
    name: "Women's Health",
    tagline: "PCOS, perimenopause, thyroid — supervised by a specialist",
    palette: "magenta",
  },
];

const PROGRAMME_PALETTES: Record<Programme["palette"], string> = {
  ember: "linear-gradient(135deg, #D94A2A 0%, #4A0E06 100%)",
  azure: "linear-gradient(135deg, #2F6BB8 0%, #0E2A4A 100%)",
  magenta: "linear-gradient(135deg, #B24A80 0%, #4A1D34 100%)",
};

const BUNDLE: Bundle[] = [
  {
    feature: "2 panels per year",
    detail: "Drawn at home · base + targeted retests",
    unbundled: "AED 800/yr",
  },
  {
    feature: "Doctor on your record",
    detail: "Unlimited messages · median reply 5 min",
    unbundled: "AED 18,000/yr",
  },
  {
    feature: "Pulse AI",
    detail: "Trained on your full history · safe-mode answers",
    unbundled: "—",
  },
  {
    feature: "Wearable + CGM connection",
    detail: "Apple Health, Whoop, Oura, Dexcom, Libre",
    unbundled: "—",
  },
  {
    feature: "DHA medical history import",
    detail: "10 years of records via UAE Pass · one tap",
    unbundled: "—",
  },
  {
    feature: "Retest calendar, auto-scheduled",
    detail: "Same nurse, same window, same lab",
    unbundled: "—",
  },
  {
    feature: "Specialist routing",
    detail: "Cardio, endo, OB-GYN · your record pre-shared",
    unbundled: "AED 600/visit saved",
  },
  {
    feature: "Family add-on pricing",
    detail: "Add a spouse, kid, or parent · one bill",
    unbundled: "—",
  },
];

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
        <h2 className="y-display-md" style={{ margin: "0 0 20px", maxWidth: "20ch" }}>
          Two ways to use Pulse.
          <br />
          <span style={{ color: accent }}>Your record, either way.</span>
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
          Buy panels one at a time, or join Pulse Care for an always-on doctor and panels included.
          Either way, every result stays on your record forever.
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
                Packages
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

          {/* PULSE CARE TIER */}
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
                Pulse Care
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
                7-day free trial
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
                  AED 550
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                  /month
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
                A doctor on your side, every day
              </div>
            </div>

            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "2 panels per year — drawn at home",
                "Doctor on your record · answers in minutes",
                "Pulse AI · trained on your full history",
                "Wearable + CGM · Apple Health, Whoop, Oura",
                "Specialist routing with your record pre-shared",
                "Family add-ons · one bill, one app",
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
              href="#waitlist"
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
              Start 7-day free trial
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

        {/* WHAT PULSE CARE INCLUDES — bundle table */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 18,
            }}
          >
            <div>
              <div className="y-label" style={{ color: "rgba(255,255,255,0.55)" }}>
                What Pulse Care includes
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontFamily: "var(--font-serif)",
                  fontSize: 15,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Concierge medicine usually starts at AED 25,000 a year. Pulse Care: AED 6,600.
              </div>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="bundle-header"
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1.6fr 0.7fr",
                padding: "16px 28px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              <div>What you get</div>
              <div>Detail</div>
              <div style={{ textAlign: "right" }}>If you bought it separately</div>
            </div>

            {BUNDLE.map((b, i) => (
              <div
                key={b.feature}
                className="bundle-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 1.6fr 0.7fr",
                  alignItems: "center",
                  padding: "20px 28px",
                  background:
                    i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                  borderBottom:
                    i < BUNDLE.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  fontSize: 15,
                }}
              >
                <div
                  className="bundle-feature"
                  style={{
                    fontFamily: "var(--font-text)",
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                    fontSize: 16,
                  }}
                >
                  {b.feature}
                </div>
                <div
                  className="bundle-detail"
                  style={{
                    color: "rgba(255,255,255,0.62)",
                    fontFamily: "var(--font-serif)",
                    lineHeight: 1.4,
                  }}
                >
                  {b.detail}
                </div>
                <div
                  className={`bundle-price${!b.unbundled || b.unbundled === "—" ? " bundle-price-empty" : ""}`}
                  style={{
                    textAlign: "right",
                    color:
                      b.unbundled && b.unbundled !== "—"
                        ? "rgba(255,255,255,0.85)"
                        : "rgba(255,255,255,0.3)",
                    fontFamily:
                      b.unbundled && b.unbundled !== "—"
                        ? "var(--font-headline)"
                        : "var(--font-text)",
                    fontWeight:
                      b.unbundled && b.unbundled !== "—" ? 900 : 400,
                    fontStyle:
                      b.unbundled && b.unbundled !== "—" ? "italic" : "normal",
                    fontSize:
                      b.unbundled && b.unbundled !== "—" ? 17 : 14,
                    letterSpacing:
                      b.unbundled && b.unbundled !== "—" ? "-0.01em" : "0",
                  }}
                >
                  {b.unbundled || "—"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SPECIALIST PROGRAMMES */}
        <div style={{ marginBottom: 64 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 18,
            }}
          >
            <div className="y-label" style={{ color: "rgba(255,255,255,0.55)" }}>
              Specialist programmes included
            </div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: 14,
                color: "rgba(255,255,255,0.45)",
              }}
            >
              when one panel isn&apos;t enough
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 14,
            }}
          >
            {PROGRAMMES.map((p) => (
              <div
                key={p.name}
                style={{
                  position: "relative",
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "stretch",
                  minHeight: 96,
                }}
              >
                <div
                  style={{
                    width: 8,
                    background: PROGRAMME_PALETTES[p.palette],
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    padding: "18px 20px 18px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-headline)",
                      fontWeight: 900,
                      fontStyle: "italic",
                      textTransform: "uppercase",
                      fontSize: 22,
                      lineHeight: 1,
                      color: "#fff",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 13.5,
                      lineHeight: 1.4,
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {p.tagline}
                  </div>
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
              AED 550 / month
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
              7-day free trial. Cancel any time. Your record stays.
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
            Start 7-day free trial <span style={{ fontSize: 16, lineHeight: 1 }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
