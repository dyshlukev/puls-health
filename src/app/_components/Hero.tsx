export function Hero() {
  const accent = "var(--pulse-accent)";
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "calc(100vh - 80px)",
        padding: "96px 5vw 64px",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .hero-bg-video { display: none !important; }
        }
      `}</style>
      <video
        className="hero-bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      >
        <source src="/hero/bg.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.7) 100%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: `radial-gradient(60% 50% at 85% 15%, color-mix(in oklch, ${accent} 28%, transparent) 0%, transparent 60%), radial-gradient(50% 40% at 10% 90%, color-mix(in oklch, ${accent} 16%, transparent) 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          backgroundImage: "var(--grain-url)",
          backgroundSize: "220px 220px",
          opacity: 0.2,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 4, maxWidth: 1440, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 14px 8px 10px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(8px)",
            color: "rgba(255,255,255,0.85)",
            fontSize: 13,
            marginBottom: 36,
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 0 4px color-mix(in oklch, ${accent} 25%, transparent)`,
              animation: "pulseDot 1.8s ease-in-out infinite",
            }}
          />
          Early access — UAE
        </div>

        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 17,
            color: "rgba(255,255,255,0.65)",
            marginBottom: 20,
            lineHeight: 1.3,
            fontStyle: "italic",
          }}
        >
          preventive health — finally — a product
        </div>

        <h1
          className="y-display-xl"
          style={{
            margin: 0,
            maxWidth: "14ch",
            fontSize: "clamp(48px, 8.2vw, 144px)",
            lineHeight: 0.92,
            textShadow: "0 2px 24px rgba(0,0,0,0.5)",
          }}
        >
          Know your health
          <br />
          <span
            style={{
              color: accent,
              textShadow:
                "0 1px 0 rgba(0,0,0,0.85), 0 2px 14px rgba(0,0,0,0.9), 0 4px 32px rgba(0,0,0,0.7)",
            }}
          >
            before symptoms do.
          </span>
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 60,
            marginTop: 56,
            alignItems: "end",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 22,
                lineHeight: 1.35,
                color: "rgba(255,255,255,0.82)",
                margin: 0,
                maxWidth: "32ch",
              }}
            >
              Curated lab packages, a personal health cabinet, and AI that reads your own
              biomarkers — not Google, not a pasted-in PDF. Delivered to your door in 60–90
              minutes.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
              <a
                href="#waitlist"
                style={{
                  padding: "18px 32px",
                  borderRadius: 999,
                  background: "#fff",
                  color: "#000",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 16,
                  fontFamily: "var(--font-text)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                Request early access <span style={{ fontSize: 18, lineHeight: 1 }}>↗</span>
              </a>
              <a
                href="#how"
                style={{
                  padding: "18px 32px",
                  borderRadius: 999,
                  background: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: 16,
                  fontFamily: "var(--font-text)",
                }}
              >
                See how it works
              </a>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { n: "60min", k: "home draw" },
              { n: "50+", k: "curated panels" },
              { n: "1 app", k: "every result" },
            ].map((m) => (
              <div
                key={m.k}
                style={{
                  padding: "20px 18px",
                  borderRadius: 20,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontWeight: 900,
                    fontStyle: "italic",
                    fontSize: 44,
                    lineHeight: 0.9,
                    color: "#fff",
                  }}
                >
                  {m.n}
                </div>
                <div className="y-label" style={{ color: "rgba(255,255,255,0.55)", marginTop: 8 }}>
                  {m.k}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
