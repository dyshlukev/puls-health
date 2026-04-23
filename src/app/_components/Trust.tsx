export function Trust() {
  const items = [
    { k: "Regulatory", v: "DHA · DOH licensed" },
    { k: "Lab network", v: "Top UAE operators" },
    { k: "Your data", v: "In-region, exportable" },
    { k: "Group", v: "Backed by Yango" },
  ];
  return (
    <section id="trust" style={{ padding: "80px 5vw", background: "#000", color: "#fff" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            padding: "24px 28px",
            borderRadius: 20,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {items.map((p) => (
            <div
              key={p.k}
              style={{ display: "flex", flexDirection: "column", gap: 6 }}
            >
              <div className="y-label" style={{ color: "rgba(255,255,255,0.45)" }}>
                {p.k}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-text)",
                  fontWeight: 700,
                  fontSize: 18,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
