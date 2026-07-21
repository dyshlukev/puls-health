/**
 * BRAND CONFIG
 * ----------------------------------------------------------------------------
 * Single switch that recolors the whole site. The actual color tokens live in
 * `globals.css` (`:root` = Yandex default, `[data-brand="yango"]` = override).
 * `layout.tsx` writes this value to `<html data-brand="...">`, so flipping this
 * constant is all it takes to re-skin the landing for the Yango partner brand.
 *
 * We ship Yandex as the default for now; Yango stays wired up for the future.
 */
export type Brand = "yandex" | "yango";

export const BRAND: Brand = "yandex";

/**
 * Where product-entry CTAs send the user. Kept here so every CTA points at
 * the same Пульс prototype while the MVP funnel is being built.
 */
export const PRODUCT_URL = "https://pulse-v01.vercel.app/";

/** Per-brand copy that differs beyond color (product name in the wordmark). */
export const BRAND_COPY: Record<Brand, { name: string; owner: string }> = {
  yandex: { name: "Пульс", owner: "Яндекс" },
  yango: { name: "Pulse", owner: "Yango" },
};
