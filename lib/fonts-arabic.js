import localFont from "next/font/local";

// The Arabic halves of the same two families (see fonts-latin.js).
// English pages load this one too, for her name in the hero.
// The Arabic body font lives in fonts-arabic-body.js so English pages skip it.

export const displayAr = localFont({
  src: "../assets/fonts/markazi-text-arabic-wght-normal.woff2",
  weight: "400 700",
  variable: "--f-ar-display",
  display: "swap",
  // No automatic fallback names: the stack in app/styles/theme.css decides what comes next,
  // so Arabic letters reach the Arabic font instead of a system one.
  adjustFontFallback: false,
});
