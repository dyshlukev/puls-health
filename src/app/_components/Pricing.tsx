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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 72,
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
                  AED 499
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
                "50+ curated panels — Base 30+, Thyroid, Heart, Female, Male, more",
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
              href="#waitlist"
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
                Concierge
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
                  AED 599
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
                Your doctor, on your record, on call
              </div>
            </div>

            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "4 panels per year — drawn at home",
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
              Join Pulse Care
            </a>
          </div>
        </div>

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
      </div>
    </section>
  );
}
