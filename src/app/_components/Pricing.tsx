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
            margin: "0 0 32px",
          }}
        >
          Pick a ready-made panel — or let Pulse build one around you using onboarding answers and
          your wearables.
        </p>

        <CategoryBrowser accent={accent} />
      </div>
    </section>
  );
}
