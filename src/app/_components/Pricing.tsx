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
          A panel for every question.
          <br />
          <span style={{ color: accent }}>Drawn at home.</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "58ch",
            margin: "0 0 20px",
          }}
        >
          Pick a ready-made panel — or let Pulse build one around you using onboarding answers and
          your wearables.
        </p>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 14px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.02em",
            color: "rgba(255,255,255,0.85)",
            marginBottom: 32,
          }}
        >
          <span style={{ color: accent }}>From AED 499</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>No subscription</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>No hidden add-ons</span>
        </div>

        <CategoryBrowser accent={accent} />
      </div>
    </section>
  );
}
