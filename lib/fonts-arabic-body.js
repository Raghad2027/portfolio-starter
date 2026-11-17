import localFont from "next/font/local";

// Arabic body text. preload is off so English pages never download it:
// the browser fetches it only where Arabic body text is on the page.
export const bodyAr = localFont({
  src: [
    { path: "../assets/fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2", weight: "400" },
    { path: "../assets/fonts/ibm-plex-sans-arabic-arabic-600-normal.woff2", weight: "600" },
  ],
  variable: "--f-ar-body",
  display: "swap",
  preload: false,
  // No automatic fallback names: the stack in app/styles/theme.css decides what comes next,
  // so Arabic letters reach the Arabic font instead of a system one.
  adjustFontFallback: false,
});
