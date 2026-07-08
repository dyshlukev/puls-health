import type { Metadata } from "next";
import "./globals.css";
import { BRAND, BRAND_COPY } from "../brand";

const { name, owner } = BRAND_COPY[BRAND];

export const metadata: Metadata = {
  title: `${owner} ${name} — персональный ИИ-чекап`,
  description:
    "Ответьте на пару вопросов — и Алиса соберёт чекап под ваш возраст, пол и историю. Только нужные анализы, расшифровка простым языком и врач.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-brand={BRAND}>
      <body>{children}</body>
    </html>
  );
}
