type Member = {
  initial: string;
  name: string;
  role: string;
  age: number;
  panels: number;
  status: string;
  hues: [number, number];
  isYou?: boolean;
  active?: boolean;
};

const MEMBERS: Member[] = [
  {
    initial: "M",
    name: "Mohammed",
    role: "You",
    age: 38,
    panels: 4,
    status: "Pulse Care · 2y on file",
    hues: [200, 230],
    isYou: true,
    active: true,
  },
  {
    initial: "S",
    name: "Sara",
    role: "Spouse",
    age: 35,
    panels: 2,
    status: "Female Health · last drawn Mar",
    hues: [330, 355],
  },
  {
    initial: "L",
    name: "Layla",
    role: "Daughter",
    age: 11,
    panels: 1,
    status: "Paediatric base · annual",
    hues: [40, 70],
  },
  {
    initial: "A",
    name: "Ahmed",
    role: "Father",
    age: 67,
    panels: 6,
    status: "Cardio + metabolic · monthly",
    hues: [260, 290],
  },
];

function MemberCard({ m }: { m: Member }) {
  const accent = "var(--pulse-accent)";
  const g = `linear-gradient(160deg, oklch(0.6 0.16 ${m.hues[0]}) 0%, oklch(0.32 0.13 ${m.hues[1]}) 100%)`;
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 22,
        overflow: "hidden",
        background: m.active ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        border: m.active
          ? `1px solid color-mix(in oklch, ${accent} 55%, transparent)`
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: m.active ? `0 0 0 3px color-mix(in oklch, ${accent} 12%, transparent)` : "none",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <div className="member-card-head" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          className="member-card-avatar"
          style={{
            position: "relative",
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: g,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontFamily: "var(--font-headline)",
            fontStyle: "italic",
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: "-0.02em",
            border: "1px solid rgba(255,255,255,0.18)",
            flexShrink: 0,
          }}
        >
          {m.initial}
          {m.active && (
            <span
              style={{
                position: "absolute",
                bottom: -2,
                right: -2,
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#36C28E",
                border: "2px solid #0a0a0a",
              }}
            />
          )}
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div
            className="member-card-name"
            style={{
              fontWeight: 700,
              fontSize: 15,
              color: "#fff",
              letterSpacing: "-0.01em",
              display: "flex",
              alignItems: "baseline",
              gap: 6,
            }}
          >
            {m.name}
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
              · {m.age}
            </span>
          </div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: m.isYou ? accent : "rgba(255,255,255,0.5)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginTop: 2,
            }}
          >
            {m.role}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div
          className="member-card-metric"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <div
            className="member-card-panels"
            style={{
              fontFamily: "var(--font-headline)",
              fontWeight: 900,
              fontStyle: "italic",
              fontSize: 28,
              lineHeight: 1,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            {m.panels}
          </div>
          <div
            className="member-card-panels-label"
            style={{
              fontSize: 10.5,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            panels on record
          </div>
        </div>
        <div
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.6)",
            fontStyle: "italic",
            fontFamily: "var(--font-serif)",
          }}
        >
          {m.status}
        </div>
      </div>
    </div>
  );
}

export function Family() {
  const accent = "var(--pulse-accent)";
  return (
    <section
      id="family"
      style={{ padding: "140px 5vw", background: "#000", color: "#fff" }}
    >
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
          your household
        </div>
        <h2 className="y-display-md" style={{ margin: "0 0 24px", maxWidth: "20ch" }}>
          One Pulse for
          <br />
          <span style={{ color: accent }}>your whole family.</span>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: "rgba(255,255,255,0.65)",
            maxWidth: "58ch",
            margin: "0 0 56px",
          }}
        >
          Add your spouse, your kids, your parents. Each gets their own private record. You see
          what you&apos;re allowed to see, and the doctor sees the right context every time.
        </p>

        <div
          style={{
            position: "relative",
            padding: "32px 32px 28px",
            borderRadius: 28,
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.08)",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 22,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                className="y-label"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Al-Falasi household
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.04em",
                }}
              >
                · 4 members · 13 panels on record
              </div>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontSize: 12,
                color: "rgba(255,255,255,0.75)",
                fontWeight: 500,
              }}
            >
              <span style={{ fontSize: 14, lineHeight: 1 }}>+</span>
              Add member
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 14,
            }}
          >
            {MEMBERS.map((m) => (
              <MemberCard key={m.initial} m={m} />
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {[
            {
              t: "One record per person",
              d: "Each member has their own private cabinet. Only doctors and people they explicitly grant access to can see what's inside.",
            },
            {
              t: "Parental controls for kids",
              d: "Manage your children's panels, give the paediatrician temporary access, switch off when they turn 18.",
            },
            {
              t: "One bill, one app",
              d: "Pulse Care covers the household at a single rate. Add-on panels for specific members billed once a month.",
            },
          ].map((c, i) => (
            <div
              key={c.t}
              style={{
                padding: "32px 28px 0 0",
                paddingLeft: i === 0 ? 0 : 28,
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-text)",
                  fontWeight: 700,
                  fontSize: 19,
                  letterSpacing: "-0.015em",
                  color: "#fff",
                }}
              >
                {c.t}
              </div>
              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.62)",
                }}
              >
                {c.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
