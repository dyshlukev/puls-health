import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Платформа превентивной медицины — Доступные анализы и ИИ-инсайты",
  description:
    "100+ биомаркеров. ИИ-аналитика здоровья. Доступная превентивная медицина.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
