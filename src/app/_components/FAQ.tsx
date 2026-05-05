"use client";

import { useState } from "react";

type QA = {
  q: string;
  lead: string;
  bullets: string[];
};

const FAQS: QA[] = [
  {
    q: "Isn't this just another AI chatbot?",
    lead: "Most AI starts every conversation from scratch. Pulse AI works from your record.",
    bullets: [
      "Grounded in your data — labs, wearables, history, prescriptions, family context",
      "A licensed physician signs every answer that touches your care",
      "Operates inside DHA-grade clinical guardrails — no speculation, no off-license advice",
    ],
  },
  {
    q: "Where do you operate, and what hours?",
    lead: "We launch in the UAE first — Dubai and Abu Dhabi, with home-draw windows from early to late.",
    bullets: [
      "Home draws across Dubai and Abu Dhabi · 7 days a week, 06:00–22:00",
      "Other emirates available via partner-lab walk-in collection points",
      "Ramadan-fasting bookings: same-day pre-Suhoor and post-Iftar slots — pick at booking",
      "Doctor messaging on Pulse Care: replies within working hours (4 hrs typical), urgent flags re-routed",
    ],
  },
  {
    q: "Does insurance cover this?",
    lead: "Pulse is a cash-pay product today, but your insurer will often reimburse — we make the paperwork painless.",
    bullets: [
      "We issue an itemised invoice with DHA/DOH codes — accepted by Daman, NAS, Bupa, Cigna, AXA",
      "Most members claim back 50–100% on direct-bill PPOs · check your plan's lab benefit",
      "Pulse Care subscription is not currently insurance-billed; the panels inside are reimbursable",
      "Have a corporate plan? We can confirm coverage before your first draw",
    ],
  },
  {
    q: "Where does my data live, and who owns it?",
    lead: "Your record is yours. In-region, encrypted, exportable, never sold.",
    bullets: [
      "Stored on UAE-region infrastructure, encrypted at rest and in transit",
      "Export your full history at any time, in formats your own doctor can read",
      "Never sold or shared with insurers, employers, or advertisers",
    ],
  },
  {
    q: "How does pricing work?",
    lead: "Take the assessment, then pay for what you actually need.",
    bullets: [
      "Take a 5-minute assessment — recommends the right panel for you",
      "Buy that panel from AED 240 — your record stays on the app forever",
      "After your results, a doctor-reviewed supplement protocol — buy once, or set up monthly renewal",
      "No subscription wrapper. No hidden add-ons.",
    ],
  },
  {
    q: "What if my results come back abnormal?",
    lead: "A doctor reviews every flagged result and decides the next step with you — you're never left with a scary PDF.",
    bullets: [
      "A licensed physician reads abnormal results before they land in your cabinet",
      "You get a plain-English explanation and a recommended action: retest, specialist, or no concern",
      "If a specialist is needed, Pulse routes you and pre-shares your record — you don't repeat yourself",
    ],
  },
  {
    q: "Can I share my record with my own doctor?",
    lead: "Yes — your record is yours, in formats any clinician can read.",
    bullets: [
      "Export a clean clinical PDF for any consultation",
      "Structured data export compatible with hospital systems",
      "Family members and dependents have separate, individually exportable records",
    ],
  },
];

function FAQItem({ qa, isOpen, onToggle }: { qa: QA; isOpen: boolean; onToggle: () => void }) {
  const accent = "var(--pulse-accent)";
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "28px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          cursor: "pointer",
          color: "#fff",
          textAlign: "left",
          fontFamily: "var(--font-text)",
        }}
      >
        <span
          style={{
            fontSize: "clamp(20px, 2vw, 26px)",
            fontWeight: 600,
            letterSpacing: "-0.015em",
            lineHeight: 1.25,
          }}
        >
          {qa.q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            color: isOpen ? accent : "rgba(255,255,255,0.7)",
            transition: "transform .24s var(--ease-standard), color .24s",
            transform: isOpen ? "rotate(45deg)" : "none",
            background: isOpen ? "rgba(255,255,255,0.04)" : "transparent",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? 600 : 0,
          overflow: "hidden",
          transition: "max-height .32s var(--ease-standard)",
        }}
      >
        <div
          style={{
            padding: "0 0 32px",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 48,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 18,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            {qa.lead}
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {qa.bullets.map((b) => (
              <li
                key={b}
                style={{
                  display: "flex",
                  gap: 12,
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                <span style={{ color: accent, marginTop: 2 }}>·</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      style={{ padding: "140px 5vw 100px", background: "#000", color: "#fff" }}
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
          questions
        </div>
        <h2 className="y-display-md" style={{ margin: "0 0 56px", maxWidth: "20ch" }}>
          The things people
          <br />
          <span style={{ color: "var(--pulse-accent)" }}>actually ask.</span>
        </h2>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {FAQS.map((qa, i) => (
            <FAQItem
              key={qa.q}
              qa={qa}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
