import type { Metadata } from "next";
import "./globals.css";
import { BRAND, BRAND_COPY } from "../brand";
import { CalmCanvas } from "./_components/CalmCanvas";

const { name, owner } = BRAND_COPY[BRAND];

export const metadata: Metadata = {
  title: `${owner} ${name} — комплексные лабораторные обследования`,
  description:
    "Готовые комплексные обследования с понятным составом и ценой. Выберите точку лаборатории-партнёра, оформите заказ и следите за его статусом.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-brand={BRAND}>
      <body>
        <CalmCanvas />
        {children}
      </body>
    </html>
  );
}
