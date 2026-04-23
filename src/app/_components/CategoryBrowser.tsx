"use client";

const CATS: { name: string; count: number; badge?: string; hues: [number, number] }[] = [
  { name: "Best Sellers", count: 8, badge: "Popular", hues: [28, 48] },
  { name: "Women's Health", count: 6, hues: [330, 12] },
  { name: "Men's Health", count: 5, hues: [210, 240] },
  { name: "Kids' Health", count: 3, hues: [180, 200] },
  { name: "Under 99 AED", count: 4, badge: "50% OFF", hues: [14, 28] },
  { name: "IV Therapy", count: 7, hues: [260, 290] },
  { name: "Intolerance & Allergy", count: 4, hues: [80, 110] },
  { name: "General Blood Tests", count: 9, hues: [200, 220] },
  { name: "Sexual Health", count: 3, hues: [340, 360] },
  { name: "Blood Tests for Wearables", count: 4, badge: "New", hues: [150, 180] },
  { name: "Hormone Tests", count: 6, hues: [300, 330] },
  { name: "DNA Tests", count: 3, hues: [240, 270] },
  { name: "Advanced Blood Tests", count: 5, hues: [20, 50] },
  { name: "Functional Tests", count: 4, hues: [0, 20] },
  { name: "Longevity & Aging", count: 3, hues: [190, 230] },
  { name: "Weight Loss", count: 4, badge: "Programs", hues: [50, 80] },
];

function Icon({ i }: { i: number }) {
  const w = "rgba(255,255,255,0.85)";
  const icons = [
    <path
      key="0"
      d="M16 4l3.6 7.3 8 1.2-5.8 5.7 1.4 8-7.2-3.8-7.2 3.8 1.4-8L4.4 12.5l8-1.2L16 4z"
      fill={w}
    />,
    <g key="1" fill="none" stroke={w} strokeWidth="2">
      <circle cx="16" cy="12" r="6" />
      <path d="M16 18v10M12 24h8" />
    </g>,
    <g key="2" fill="none" stroke={w} strokeWidth="2">
      <circle cx="13" cy="19" r="6" />
      <path d="M17.5 14.5L24 8M20 8h4v4" />
    </g>,
    <g key="3" fill={w}>
      <circle cx="16" cy="9" r="3" />
      <path d="M10 28V17h12v11h-3v-7h-6v7z" />
    </g>,
    <g key="4" fill="none" stroke={w} strokeWidth="2">
      <path d="M6 6h10l10 10-10 10L6 16z" />
      <circle cx="11" cy="11" r="1.5" fill={w} />
    </g>,
    <g key="5" fill="none" stroke={w} strokeWidth="2">
      <path d="M16 4v6M12 10h8l-2 8h-4z" />
      <path d="M16 18v10" />
    </g>,
    <path
      key="6"
      d="M6 26C6 14 14 6 26 6c0 12-8 20-20 20z"
      fill="none"
      stroke={w}
      strokeWidth="2"
    />,
    <path key="7" d="M16 4s8 9 8 14a8 8 0 01-16 0c0-5 8-14 8-14z" fill={w} />,
    <path
      key="8"
      d="M16 26s-9-5.5-9-12a5 5 0 019-3 5 5 0 019 3c0 6.5-9 12-9 12z"
      fill={w}
    />,
    <g key="9" fill="none" stroke={w} strokeWidth="2">
      <rect x="9" y="9" width="14" height="14" rx="3" />
      <path d="M12 9V6h8v3M12 23v3h8v-3" />
    </g>,
    <g key="10" fill="none" stroke={w} strokeWidth="2">
      <circle cx="10" cy="16" r="3" />
      <circle cx="22" cy="10" r="3" />
      <circle cx="22" cy="22" r="3" />
      <path d="M12.5 14.5l7-3M12.5 17.5l7 3" />
    </g>,
    <g key="11" fill="none" stroke={w} strokeWidth="2">
      <path d="M10 6c6 4 6 12 0 20M22 6c-6 4-6 12 0 20" />
      <path d="M11 10h10M11 22h10M12 14h8M12 18h8" />
    </g>,
    <g key="12" fill="none" stroke={w} strokeWidth="2">
      <path d="M16 6l10 5-10 5-10-5z" />
      <path d="M6 16l10 5 10-5M6 21l10 5 10-5" />
    </g>,
    <g key="13" fill="none" stroke={w} strokeWidth="2">
      <path d="M6 22a10 10 0 0120 0" />
      <path d="M16 22l5-6" />
    </g>,
    <path
      key="14"
      d="M8 16c0-3 2-5 4-5s4 2 4 5 2 5 4 5 4-2 4-5-2-5-4-5-4 2-4 5-2 5-4 5-4-2-4-5z"
      fill="none"
      stroke={w}
      strokeWidth="2"
    />,
    <g key="15" fill="none" stroke={w} strokeWidth="2">
      <rect x="6" y="10" width="20" height="14" rx="2" />
      <path d="M16 10v4M12 18h8" />
    </g>,
  ];
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
      {icons[i]}
    </svg>
  );
}

export function CategoryBrowser({ accent }: { accent: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 14,
        marginTop: 28,
      }}
    >
      {CATS.map((c, i) => {
        const g = `linear-gradient(135deg, oklch(0.55 0.15 ${c.hues[0]}) 0%, oklch(0.32 0.12 ${c.hues[1]}) 100%)`;
        return (
          <a
            key={c.name}
            href="#waitlist"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: 14,
              borderRadius: 18,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              textDecoration: "none",
              color: "#fff",
              transition: "all .2s var(--ease-standard)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.borderColor = `color-mix(in oklch, ${accent} 45%, transparent)`;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                position: "relative",
                width: 72,
                height: 72,
                borderRadius: 14,
                flexShrink: 0,
                background: g,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "var(--grain-url)",
                  backgroundSize: "140px 140px",
                  opacity: 0.25,
                  mixBlendMode: "overlay",
                  pointerEvents: "none",
                }}
              />
              <Icon i={i} />
              {c.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: 6,
                    left: 6,
                    fontSize: 8.5,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 800,
                    padding: "3px 6px",
                    borderRadius: 6,
                    background: "#fff",
                    color: "#000",
                  }}
                >
                  {c.badge}
                </span>
              )}
            </div>
            <div
              style={{
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-text)",
                  fontWeight: 700,
                  fontSize: 15.5,
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  color: "#fff",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {c.name}
              </div>
              <div
                style={{
                  fontSize: 11.5,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.02em",
                }}
              >
                {c.count} {c.count === 1 ? "panel" : "panels"}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
