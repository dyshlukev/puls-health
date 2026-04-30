"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const DEMO_URL = "https://pulse-health-app-demo.vercel.app/";
const DEMO_CODE = "OneLife";

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.75)",
  fontSize: 14,
  textDecoration: "none",
  cursor: "pointer",
  lineHeight: 1,
  fontWeight: 500,
  letterSpacing: "-0.005em",
  background: "none",
  border: "none",
  padding: 0,
  fontFamily: "inherit",
};

export function SignInGate() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    setPwd("");
    setError(false);
    setSubmitting(false);
    const t = setTimeout(() => inputRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pwd.trim() === DEMO_CODE) {
      setSubmitting(true);
      window.location.href = DEMO_URL;
    } else {
      setError(true);
      inputRef.current?.select();
    }
  };

  const accent = "var(--pulse-accent)";

  return (
    <>
      <button
        type="button"
        style={linkStyle}
        onClick={() => setOpen(true)}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.95)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
      >
        Sign in
      </button>

      {open && mounted && createPortal(
        <div
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="signin-title"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            overflowY: "auto",
            display: "flex",
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 440,
              margin: "auto",
              borderRadius: 22,
              padding: "40px 36px 32px",
              background:
                "linear-gradient(180deg, rgba(18,18,20,0.95) 0%, rgba(10,10,12,0.98) 100%)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)",
              color: "#fff",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 14,
                right: 14,
                width: 32,
                height: 32,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.7)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                lineHeight: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
              }}
            >
              ✕
            </button>

            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 14,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.5)",
                marginBottom: 10,
              }}
            >
              early access
            </div>
            <h3
              id="signin-title"
              style={{
                margin: "0 0 10px",
                fontFamily: "var(--font-headline)",
                fontStyle: "italic",
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: 32,
                lineHeight: 1,
                letterSpacing: "-0.015em",
              }}
            >
              Access the
              <br />
              <span style={{ color: accent }}>product demo.</span>
            </h3>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 15,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.6)",
                margin: "14px 0 24px",
              }}
            >
              Enter the early-access code to open the Pulse product preview.
            </p>

            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 12,
                  border: `1px solid ${
                    error ? "rgba(255,90,90,0.55)" : "rgba(255,255,255,0.14)"
                  }`,
                  background: "rgba(255,255,255,0.03)",
                  transition: "border-color .15s",
                }}
              >
                <input
                  ref={inputRef}
                  type="password"
                  value={pwd}
                  onChange={(e) => {
                    setPwd(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="Early-access code"
                  autoComplete="off"
                  spellCheck={false}
                  disabled={submitting}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#fff",
                    fontSize: 15,
                    fontFamily: "var(--font-text)",
                    padding: "14px 16px",
                    letterSpacing: "0.02em",
                  }}
                />
              </div>

              {error && (
                <div
                  style={{
                    fontSize: 13,
                    color: "rgb(255,120,120)",
                    fontFamily: "var(--font-text)",
                  }}
                >
                  Incorrect code. Try again.
                </div>
              )}

              <button
                type="submit"
                disabled={submitting || pwd.length === 0}
                style={{
                  marginTop: 6,
                  padding: "13px 18px",
                  borderRadius: 12,
                  border: "none",
                  background: pwd.length === 0 ? "rgba(255,255,255,0.12)" : "#fff",
                  color: pwd.length === 0 ? "rgba(255,255,255,0.45)" : "#000",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "-0.005em",
                  cursor: pwd.length === 0 ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-text)",
                  transition: "background .15s, transform .12s",
                }}
              >
                {submitting ? "Opening…" : "Continue →"}
              </button>
            </form>

            <div
              style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: "1px solid rgba(255,255,255,0.06)",
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
              }}
            >
              Don&apos;t have a code? Request one on the waitlist.
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
