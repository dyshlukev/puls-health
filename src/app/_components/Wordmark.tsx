import { BRAND, BRAND_COPY } from "../../brand";

/** Pulse wordmark: a heartbeat line + the product name from brand config. */
export function Wordmark({ size = 20 }: { size?: number }) {
  const { name } = BRAND_COPY[BRAND];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        fontWeight: 800,
        fontSize: size,
        letterSpacing: "-0.01em",
      }}
    >
      <svg width={30} height={18} viewBox="0 0 30 18" fill="none" style={{ display: "block" }}>
        <path
          d="M1 9h6l2-6 3 12 3-9 2 3h9"
          stroke="var(--brand)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {name}
    </span>
  );
}
