"use client";

type Cat = {
  name: string;
  hook: string;
  price?: string;
  hues: [number, number];
  icon: React.ReactNode;
  personalised?: boolean;
};

const IW = "rgba(255,255,255,0.88)";
const IS = 2;

const CATS: Cat[] = [
  {
    name: "Build mine for me",
    hook: "6-min onboarding + wearable sync. Pulse picks the right panel.",
    hues: [265, 290],
    personalised: true,
    icon: (
      <g fill="none" stroke={IW} strokeWidth={IS} strokeLinecap="round">
        {/* Constellation: 4 input nodes converging to a central hub */}
        <line x1="40" y1="40" x2="80" y2="90" />
        <line x1="120" y1="40" x2="80" y2="90" />
        <line x1="40" y1="130" x2="80" y2="90" />
        <line x1="120" y1="130" x2="80" y2="90" />
        <circle cx="40" cy="40" r="5" fill={IW} />
        <circle cx="120" cy="40" r="5" fill={IW} />
        <circle cx="40" cy="130" r="5" fill={IW} />
        <circle cx="120" cy="130" r="5" fill={IW} />
        <circle cx="80" cy="90" r="11" fill={IW} stroke="none" />
      </g>
    ),
  },
  {
    name: "Women's Health",
    hook: "Irregular cycle, mood swings, hair loss.",
    price: "AED 599",
    hues: [340, 10],
    icon: (
      <g fill="none" stroke={IW} strokeWidth={IS} strokeLinecap="round">
        <circle cx="80" cy="70" r="32" />
        <path d="M80 102 L80 148" />
        <path d="M64 132 L96 132" />
      </g>
    ),
  },
  {
    name: "Men's Health",
    hook: "Low energy. Drive not what it was.",
    price: "AED 549",
    hues: [210, 235],
    icon: (
      <g fill="none" stroke={IW} strokeWidth={IS} strokeLinecap="round">
        <circle cx="72" cy="95" r="32" />
        <path d="M92 75 L124 43" />
        <path d="M104 43 L124 43 L124 63" />
      </g>
    ),
  },
  {
    name: "Heart Health",
    hook: "Family history. Stay ahead of it.",
    price: "AED 499",
    hues: [0, 22],
    icon: (
      <g fill="none" stroke={IW} strokeWidth={IS} strokeLinecap="round" strokeLinejoin="round">
        <path d="M80 152 C 40 120, 24 90, 36 66 C 48 46, 72 46, 80 68 C 88 46, 112 46, 124 66 C 136 90, 120 120, 80 152 Z" />
        <path d="M40 96 L58 96 L66 78 L80 122 L92 82 L100 96 L124 96" />
      </g>
    ),
  },
  {
    name: "Weight & Metabolic",
    hook: "Scale won't move, even trying.",
    price: "AED 699",
    hues: [48, 72],
    icon: (
      <g fill="none" stroke={IW} strokeWidth={IS} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 40 H140 M20 80 H140 M20 120 H140" strokeOpacity="0.25" />
        <path d="M24 52 L50 72 L70 68 L96 100 L122 130" />
        <rect x="42" y="130" width="76" height="18" rx="3" />
        <path d="M52 130 V123 M68 130 V118 M84 130 V115 M100 130 V118 M116 130 V123" />
      </g>
    ),
  },
  {
    name: "Thyroid",
    hook: "Tired, cold, weight creeping up.",
    price: "AED 399",
    hues: [170, 190],
    icon: (
      <g fill="none" stroke={IW} strokeWidth={IS} strokeLinecap="round" strokeLinejoin="round">
        {/* Butterfly body */}
        <line x1="80" y1="46" x2="80" y2="130" />
        {/* Antennae */}
        <path d="M80 46 Q72 36 68 30" />
        <path d="M80 46 Q88 36 92 30" />
        {/* Upper wings */}
        <path d="M80 60 C 50 46, 28 66, 32 90 C 36 104, 58 106, 80 96" />
        <path d="M80 60 C 110 46, 132 66, 128 90 C 124 104, 102 106, 80 96" />
        {/* Lower wings */}
        <path d="M80 96 C 60 100, 42 112, 44 126 C 46 136, 62 134, 80 124" />
        <path d="M80 96 C 100 100, 118 112, 116 126 C 114 136, 98 134, 80 124" />
      </g>
    ),
  },
  {
    name: "Hormones",
    hook: "Off-balance. Not sure why.",
    price: "AED 649",
    hues: [285, 315],
    icon: (
      <g fill="none" stroke={IW} strokeWidth={IS} strokeLinecap="round">
        <circle cx="56" cy="90" r="10" />
        <circle cx="104" cy="70" r="10" />
        <circle cx="104" cy="110" r="10" />
        <path d="M64 84 L96 76" />
        <path d="M64 96 L96 104" />
        <path d="M104 80 L104 100" />
      </g>
    ),
  },
  {
    name: "Longevity",
    hook: "Age on paper. Not in your body.",
    price: "AED 1,290",
    hues: [195, 225],
    icon: (
      <g fill="none" stroke={IW} strokeWidth={IS} strokeLinecap="round" strokeLinejoin="round">
        {/* Hourglass frame */}
        <path d="M42 30 L118 30 L80 90 L118 150 L42 150 L80 90 Z" />
        {/* Top and bottom caps */}
        <line x1="34" y1="30" x2="126" y2="30" />
        <line x1="34" y1="150" x2="126" y2="150" />
        {/* Sand pile at bottom */}
        <path d="M62 150 L80 128 L98 150 Z" fill={IW} stroke="none" />
        {/* Falling grain */}
        <line x1="80" y1="96" x2="80" y2="114" />
      </g>
    ),
  },
  {
    name: "DNA",
    hook: "What your genes actually say.",
    price: "AED 1,990",
    hues: [250, 280],
    icon: (
      <g fill="none" stroke={IW} strokeWidth={IS} strokeLinecap="round">
        <path d="M54 36 C 108 72, 54 108, 108 144" />
        <path d="M108 36 C 54 72, 108 108, 54 144" />
        <path d="M62 54 H100 M66 72 H96 M66 108 H96 M62 126 H100" />
      </g>
    ),
  },
];

export function CategoryBrowser({ accent }: { accent: string }) {
  return (
    <>
      <style>{`
        .pulse-scroller::-webkit-scrollbar { display: none; }
        .pulse-scroller { scrollbar-width: none; }
      `}</style>
      <div style={{ position: "relative", marginTop: 28 }}>
        <div
          className="pulse-scroller"
          style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: 8,
            paddingRight: 40,
          }}
        >
          {CATS.map((c) => {
            const g = `linear-gradient(160deg, oklch(0.58 0.16 ${c.hues[0]}) 0%, oklch(0.32 0.12 ${c.hues[1]}) 100%)`;
            return (
              <a
                key={c.name}
                href="#waitlist"
                style={{
                  flex: "0 0 320px",
                  height: 420,
                  position: "relative",
                  borderRadius: 24,
                  background: g,
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "#fff",
                  scrollSnapAlign: "start",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
                  transition: "transform .2s var(--ease-standard)",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "var(--grain-url)",
                    backgroundSize: "220px 220px",
                    opacity: 0.2,
                    mixBlendMode: "overlay",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 100%)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: -10,
                    top: 60,
                    opacity: 0.85,
                    pointerEvents: "none",
                  }}
                >
                  <svg
                    viewBox="0 0 160 160"
                    width="220"
                    height="220"
                    aria-hidden="true"
                  >
                    {c.icon}
                  </svg>
                </div>
                <div
                  style={{
                    position: "relative",
                    padding: 24,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-headline)",
                        fontStyle: "italic",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        fontSize: 28,
                        lineHeight: 0.98,
                        letterSpacing: "-0.015em",
                        color: "#fff",
                        maxWidth: "11ch",
                      }}
                    >
                      {c.name}
                    </div>
                    {c.personalised && (
                      <div
                        style={{
                          padding: "5px 10px",
                          borderRadius: 999,
                          background: "rgba(255,255,255,0.95)",
                          color: "#0a0a0a",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Most chosen
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 16,
                        lineHeight: 1.35,
                        color: "rgba(255,255,255,0.88)",
                        maxWidth: "22ch",
                      }}
                    >
                      {c.hook}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: c.personalised ? "flex-end" : "space-between",
                        gap: 10,
                      }}
                    >
                      {!c.personalised && (
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#fff",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {c.price}
                        </div>
                      )}
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "8px 14px",
                          borderRadius: 999,
                          background: "rgba(255,255,255,0.95)",
                          color: "#0a0a0a",
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        {c.personalised ? "Start onboarding →" : "See panel →"}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}

          {/* Final "See all" tile */}
          <a
            href="#waitlist"
            style={{
              flex: "0 0 280px",
              height: 420,
              position: "relative",
              borderRadius: 24,
              background: "#0e0e0e",
              border: "1px solid rgba(255,255,255,0.12)",
              overflow: "hidden",
              textDecoration: "none",
              color: "#fff",
              scrollSnapAlign: "start",
              transition: "transform .2s var(--ease-standard), border-color .2s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 24,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor = `color-mix(in oklch, ${accent} 55%, transparent)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 14,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              plus 40+ more
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-headline)",
                  fontStyle: "italic",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: 32,
                  lineHeight: 0.98,
                  letterSpacing: "-0.015em",
                  color: "#fff",
                  marginBottom: 16,
                }}
              >
                See all
                <br />
                check-ups
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 18px",
                  borderRadius: 999,
                  background: accent,
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Browse 50+ panels →
              </div>
            </div>
          </a>
        </div>

        {/* Right fade hint */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 8,
            width: 60,
            pointerEvents: "none",
            background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 100%)",
          }}
        />
      </div>
    </>
  );
}
