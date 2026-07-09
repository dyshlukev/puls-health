import { BRAND, BRAND_COPY } from "../../brand";
import { PulseMark } from "./Marks";

/** Pulse wordmark: the canonical disc + heartbeat mark + the product name. */
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
      <PulseMark size={Math.round(size * 1.1)} />
      {name}
    </span>
  );
}
