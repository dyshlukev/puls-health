type Doctor = {
  name: string;
  credentials: string;
  role: string;
  specialty: string;
  years: string;
  affiliation: string;
  trained: string;
  hues: [number, number];
  photo?: string;
};

const DOCTORS: Doctor[] = [
  {
    name: "Dr. Amira Al-Mansoori",
    credentials: "MD · MRCP",
    role: "Chief Medical Officer",
    specialty: "Internal Medicine",
    years: "14y",
    affiliation: "Cleveland Clinic Abu Dhabi",
    trained: "MBRU · Imperial College London",
    hues: [265, 295],
    photo: "/doctors/amira.jpg",
  },
  {
    name: "Dr. Rohan Mehta",
    credentials: "MD, FACC",
    role: "Cardiology Lead",
    specialty: "Cardiology & Lipids",
    years: "12y",
    affiliation: "American Hospital Dubai",
    trained: "AIIMS · Imperial College London",
    hues: [210, 235],
    photo: "/doctors/rohan.jpg",
  },
  {
    name: "Prof. Omar Khalil",
    credentials: "MD, PhD",
    role: "Endocrinology Lead",
    specialty: "Endocrinology & Metabolism",
    years: "18y",
    affiliation: "King's College Hospital Dubai",
    trained: "Cairo University · Charité Berlin",
    hues: [0, 22],
    photo: "/doctors/omar.jpg",
  },
  {
    name: "Dr. Layla Haddad",
    credentials: "MD, MRCOG",
    role: "Women's Health Lead",
    specialty: "OB-GYN & Hormones",
    years: "11y",
    affiliation: "Mediclinic City Hospital",
    trained: "American University of Beirut",
    hues: [330, 355],
    photo: "/doctors/layla.jpg",
  },
];

const AFFILIATIONS = [
  "Cleveland Clinic Abu Dhabi",
  "American Hospital Dubai",
  "King's College Hospital Dubai",
  "Mediclinic",
  "SSMC",
  "MBRU",
];

function initials(name: string) {
  return name
    .replace(/^(Dr\.|Prof\.)\s*/, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export function Experts() {
  const accent = "var(--pulse-accent)";
  return (
    <section
      id="experts"
      style={{ padding: "140px 5vw 120px", background: "#000", color: "#fff" }}
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
          the people
        </div>
        <h2 className="y-display-md" style={{ margin: "0 0 20px", maxWidth: "20ch" }}>
          Reviewed by doctors.
          <br />
          <span style={{ color: accent }}>Not models.</span>
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
          Every Pulse report is signed off by a DHA-licensed physician before it reaches you. Here
          are the people behind that signature.
        </p>

        {/* Stat strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            marginBottom: 56,
          }}
        >
          {[
            { n: "55+", k: "years combined clinical experience" },
            { n: "4", k: "DHA-licensed physicians on staff" },
            { n: "100%", k: "of reports physician-signed" },
          ].map((s, i) => (
            <div
              key={s.k}
              style={{
                padding: "28px 28px 28px 0",
                paddingLeft: i === 0 ? 0 : 28,
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-headline)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  fontSize: 44,
                  lineHeight: 1,
                  letterSpacing: "-0.015em",
                  color: "#fff",
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontFamily: "var(--font-serif)",
                  fontSize: 15,
                  lineHeight: 1.4,
                  color: "rgba(255,255,255,0.62)",
                  maxWidth: "28ch",
                }}
              >
                {s.k}
              </div>
            </div>
          ))}
        </div>

        {/* Doctor grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
            marginBottom: 48,
          }}
        >
          {DOCTORS.map((d) => {
            const g = `linear-gradient(160deg, oklch(0.6 0.16 ${d.hues[0]}) 0%, oklch(0.28 0.12 ${d.hues[1]}) 100%)`;
            return (
              <div
                key={d.name}
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "1 / 1",
                    background: g,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
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
                    style={{
                      position: "relative",
                      fontFamily: "var(--font-headline)",
                      fontStyle: "italic",
                      fontWeight: 900,
                      fontSize: 96,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      color: "rgba(255,255,255,0.96)",
                      textTransform: "uppercase",
                    }}
                  >
                    {initials(d.name)}
                  </div>
                  {d.photo && (
                    <div
                      role="img"
                      aria-label={d.name}
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("${d.photo}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  )}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 16,
                      bottom: 14,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "5px 10px",
                      borderRadius: 999,
                      background: "rgba(0,0,0,0.45)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      fontSize: 10.5,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    DHA · {d.years}
                  </div>
                </div>
                <div style={{ padding: "20px 20px 22px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-text)",
                      fontWeight: 700,
                      fontSize: 17,
                      letterSpacing: "-0.01em",
                      color: "#fff",
                      marginBottom: 2,
                    }}
                  >
                    {d.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: 12,
                    }}
                  >
                    {d.credentials}
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: accent,
                      marginBottom: 10,
                    }}
                  >
                    {d.role}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.75)",
                      marginBottom: 6,
                    }}
                  >
                    {d.specialty}
                  </div>
                  <div
                    style={{
                      fontSize: 12.5,
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {d.affiliation}
                    <br />
                    <span style={{ fontStyle: "italic", opacity: 0.85 }}>{d.trained}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Affiliations strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 14,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.5)",
              whiteSpace: "nowrap",
            }}
          >
            Trained and practiced at
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {AFFILIATIONS.map((a) => (
              <div
                key={a}
                style={{
                  padding: "7px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.02)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.78)",
                  letterSpacing: "-0.005em",
                }}
              >
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
