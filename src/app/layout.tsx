import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulse — Preventive health, by Yango",
  description:
    "Curated lab packages, a personal health cabinet, and AI that reads your own biomarkers. Home draw in 60–90 min across the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
