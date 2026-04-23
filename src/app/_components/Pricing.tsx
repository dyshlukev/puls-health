import { CategoryBrowser } from "./CategoryBrowser";

export function Pricing() {
  const accent = "var(--pulse-accent)";

  return (
    <section id="packages" style={{ padding: "140px 5vw", background: "#000", color: "#fff" }}>
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
          packages
        </div>
        <h2 className="y-display-md" style={{ margin: "0 0 20px", maxWidth: "18ch" }}>
          Two ways to start.
          <br />
          <span style={{ color: accent }}>Both end in blood drawn at home.</span>
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
          Pick a ready-made panel — or let Pulse build one around you using onboarding answers and
          your wearables.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
            marginBottom: 56,
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              padding: "32px 32px 28px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 15,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                option a
              </div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                ~60 seconds
              </div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-headline)",
                fontWeight: 900,
                fontStyle: "italic",
                textTransform: "uppercase",
                fontSize: 38,
                lineHeight: 1,
                color: "#fff",
                letterSpacing: "-0.01em",
              }}
            >
              Pick a panel
            </div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 16,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.7)",
                maxWidth: "38ch",
              }}
            >
              Fifty curated panels in the app. Pick one, book a draw, get results.
            </div>
            <a
              href="#catalog"
              style={{
                alignSelf: "flex-start",
                marginTop: 8,
                padding: "12px 20px",
                borderRadius: 999,
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Browse catalog ↓
            </a>
          </div>

          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              padding: "32px 32px 28px",
              background: `radial-gradient(130% 130% at 15% 15%, color-mix(in oklch, ${accent} 65%, black) 0%, color-mix(in oklch, ${accent} 22%, black) 55%, #0b0b0b 100%)`,
              boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.14), 0 0 60px color-mix(in oklch, ${accent} 22%, transparent)`,
              display: "flex",
              flexDirection: "column",
              gap: 16,
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
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 15,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                option b
              </div>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.95)",
                  color: "#000",
                  fontWeight: 700,
                }}
              >
                Most chosen
              </div>
            </div>
            <div
              style={{
                position: "relative",
                fontFamily: "var(--font-headline)",
                fontWeight: 900,
                fontStyle: "italic",
                textTransform: "uppercase",
                fontSize: 38,
                lineHeight: 1,
                color: "#fff",
                letterSpacing: "-0.01em",
              }}
            >
              Build mine for me
            </div>
            <div
              style={{
                position: "relative",
                fontFamily: "var(--font-serif)",
                fontSize: 16,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.88)",
                maxWidth: "38ch",
              }}
            >
              6-minute onboarding + wearable sync. Pulse suggests the panel that fits your age,
              history, and current metrics.
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 4,
              }}
            >
              {[
                "Age & lifestyle",
                "Family history",
                "Apple Watch / Whoop / Oura",
                "Symptom log",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: "rgba(0,0,0,0.25)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="#waitlist"
              style={{
                position: "relative",
                alignSelf: "flex-start",
                marginTop: 10,
                padding: "12px 20px",
                borderRadius: 999,
                background: "#fff",
                color: "#000",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Start onboarding →
            </a>
          </div>
        </div>

        <div id="catalog" style={{ paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 15,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: 10,
                }}
              >
                browse by category
              </div>
              <div
                style={{
                  fontFamily: "var(--font-headline)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  fontSize: 48,
                  lineHeight: 1,
                  letterSpacing: "-0.015em",
                }}
              >
                The full spectrum
              </div>
            </div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                maxWidth: "26ch",
                textAlign: "right",
              }}
            >
              50+ panels across 16 categories. Transparent AED pricing, VAT included.
            </div>
          </div>

          <CategoryBrowser accent={accent} />

          <div
            style={{
              marginTop: 28,
              paddingTop: 20,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
              Can&apos;t find what you need? Pulse builds a custom panel from your onboarding +
              wearables.
            </div>
            <a
              href="#waitlist"
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Build mine for me →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
