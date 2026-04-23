"use client";

import { useState } from "react";

export function Waitlist() {
  const accent = "var(--pulse-accent)";
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section
        id="waitlist"
        style={{
          position: "relative",
          padding: "160px 5vw 140px",
          background: "#000",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(60% 60% at 50% 40%, color-mix(in oklch, ${accent} 40%, transparent) 0%, transparent 70%)`,
          }}
        />
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
          style={{ position: "relative", maxWidth: 1100, margin: "0 auto", textAlign: "center" }}
        >
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 18,
              color: "rgba(255,255,255,0.65)",
              fontStyle: "italic",
              marginBottom: 20,
            }}
          >
            uae early access
          </div>
          <h2 className="y-display-lg" style={{ margin: "0 0 32px", lineHeight: 0.92 }}>
            Be first in line
            <br />
            <span style={{ color: accent }}>in the Emirates.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 22,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.78)",
              maxWidth: "40ch",
              margin: "0 auto 48px",
            }}
          >
            Leave your email — we&apos;ll write the moment Pulse opens for draws in your
            neighbourhood.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            style={{
              display: "flex",
              gap: 8,
              maxWidth: 540,
              margin: "0 auto",
              padding: 8,
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(8px)",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                padding: "14px 20px",
                fontSize: 16,
                color: "#fff",
                fontFamily: "var(--font-text)",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "14px 28px",
                borderRadius: 999,
                background: "#fff",
                color: "#000",
                border: "none",
                fontWeight: 600,
                fontSize: 15,
                fontFamily: "var(--font-text)",
                cursor: "pointer",
              }}
            >
              {submitted ? "Thanks ✓" : "Join waitlist"}
            </button>
          </form>

          <div style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            By continuing you agree to the processing of your personal data.
          </div>
        </div>
      </section>

      <footer
        style={{
          padding: "40px 5vw 32px",
          background: "#000",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
            <span
              style={{
                fontFamily: "var(--font-headline)",
                fontWeight: 900,
                fontStyle: "italic",
                fontSize: 32,
                letterSpacing: "-0.02em",
                color: "#fff",
              }}
            >
              PULSE
            </span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              by Yango
            </span>
          </div>
          <div
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 600,
              textAlign: "right",
              lineHeight: 1.5,
            }}
          >
            © 2026 Pulse Health. Operated under UAE Dubai Health Authority frameworks. Not a
            medical device — for informational purposes only.
          </div>
        </div>
      </footer>
    </>
  );
}
