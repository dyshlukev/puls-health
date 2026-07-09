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
 * Where the product-entry CTAs ("Собрать чекап" / "подобрать") send the user —
 * the live Пульс funnel. Kept here so every CTA points at one place.
 */
export const PRODUCT_URL = "https://pulse-v01.vercel.app/";

/** Per-brand copy that differs beyond color (product name in the wordmark). */
export const BRAND_COPY: Record<Brand, { name: string; owner: string }> = {
  yandex: { name: "Пульс", owner: "Яндекс" },
  yango: { name: "Pulse", owner: "Yango" },
};
