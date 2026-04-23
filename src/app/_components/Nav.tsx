export function Nav() {
  const linkStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.85)",
    fontSize: 14,
    textDecoration: "none",
    cursor: "pointer",
    lineHeight: 1,
    fontWeight: 500,
    letterSpacing: "-0.005em",
  };
  return (
    <nav
      style={{
        position: "sticky",
        top: 16,
        zIndex: 50,
        margin: "16px auto 0",
        maxWidth: 1280,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 20px 14px 24px",
        background: "rgba(10,10,10,0.72)",
        backdropFilter: "blur(24px) saturate(1.3)",
        WebkitBackdropFilter: "blur(24px) saturate(1.3)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 999,
      }}
    >
      <a
        href="#top"
        style={{ display: "inline-flex", alignItems: "baseline", gap: 10, textDecoration: "none" }}
      >
        <span
          style={{
            fontFamily: "var(--font-headline)",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: 36,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "#fff",
          }}
        >
          PULSE
        </span>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 13,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.02em",
          }}
        >
          by Yango
        </span>
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        <a href="#problem" style={linkStyle}>
          Why Pulse
        </a>
        <a href="#how" style={linkStyle}>
          How it works
        </a>
        <a href="#ai" style={linkStyle}>
          Pulse AI
        </a>
        <a href="#packages" style={linkStyle}>
          Packages
        </a>
        <a href="#trust" style={linkStyle}>
          Trust
        </a>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 10px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.12)",
            fontSize: 11,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          🇦🇪 UAE
        </span>
        <a style={{ ...linkStyle, color: "rgba(255,255,255,0.75)" }}>Sign in</a>
        <a
          href="#waitlist"
          style={{
            background: "#fff",
            color: "#000",
            border: "none",
            borderRadius: 999,
            padding: "10px 18px",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            lineHeight: 1,
            textDecoration: "none",
            fontFamily: "var(--font-text)",
          }}
        >
          Join waitlist
        </a>
      </div>
    </nav>
  );
}
