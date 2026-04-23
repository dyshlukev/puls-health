export function Trust() {
  const blocks = [
    {
      t: "DHA & DOH aligned",
      d: "Operating under UAE Dubai Health Authority and Department of Health frameworks. Physician sign-off on every report.",
    },
    {
      t: "Clinical protocols",
      d: "Recommendations grounded in WHO, ESC, and ADA guidelines — not in internet consensus.",
    },
    {
      t: "Backed by Yango",
      d: "Built by the same team behind Yango Rides and Yango Delivery in the UAE. Infrastructure, payments, and ops at Yango-group standard.",
    },
  ];
  return (
    <section id="trust" style={{ padding: "140px 5vw", background: "#000", color: "#fff" }}>
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
          the foundation
        </div>
        <h2 className="y-display-md" style={{ margin: "0 0 20px", maxWidth: "16ch" }}>
          Licensed labs.
          <br />
          Licensed doctors.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "48ch",
            margin: "0 0 64px",
          }}
        >
          Pulse runs on the UAE&apos;s established lab infrastructure. The product layer —
          booking, AI, cabinet — is ours. Everything else is done by people with licences.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            padding: "28px",
            borderRadius: 24,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            marginBottom: 24,
          }}
        >
          {[
            { k: "Lab partners", v: "Top UAE operators" },
            { k: "Nurse fleet", v: "DHA-licensed" },
            { k: "Regulatory", v: "DHA · DOH" },
            { k: "Group", v: "Yango · MENA HQ" },
          ].map((p) => (
            <div
              key={p.k}
              style={{ padding: "8px 0", display: "flex", flexDirection: "column", gap: 6 }}
            >
              <div className="y-label" style={{ color: "rgba(255,255,255,0.45)" }}>
                {p.k}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-text)",
                  fontWeight: 700,
                  fontSize: 20,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.v}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: 40,
          }}
        >
          {blocks.map((b, i) => (
            <div
              key={b.t}
              style={{
                padding: "40px 32px 0 0",
                paddingLeft: i === 0 ? 0 : 32,
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-text)",
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: "-0.015em",
                  marginBottom: 14,
                }}
              >
                {b.t}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.65)" }}>
                {b.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
