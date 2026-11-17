import localFont from "next/font/local";

// Self-hosted with next/font: no layout shift, no request to a font CDN.
// Markazi Text was drawn as one family for Arabic and Latin, so headings
// in both languages share a voice. IBM Plex Sans does the same for body text.

export const display = localFont({
  src: "../assets/fonts/markazi-text-latin-wght-normal.woff2",
  weight: "400 700",
  variable: "--f-display",
  display: "swap",
  // No automatic fallback names: the stack in app/styles/theme.css decides what comes next,
  // so Arabic letters reach the Arabic font instead of a system one.
  adjustFontFallback: false,
});

export const body = localFont({
  src: [
    { path: "../assets/fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400" },
    { path: "../assets/fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--f-body",
  display: "swap",
  // No automatic fallback names: the stack in app/styles/theme.css decides what comes next,
  // so Arabic letters reach the Arabic font instead of a system one.
  adjustFontFallback: false,
});
