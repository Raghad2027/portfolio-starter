"use client";

// Two claims from the CV, each next to a real measurement taken in the
// visitor's own browser: how fast this page painted, and how much contrast its
// text has right now (it changes with the theme).
import { useEffect, useState, useSyncExternalStore } from "react";

// WCAG relative luminance of an "rgb(r, g, b)" color.
function luminance(color) {
  const [r, g, b] = color
    .match(/[\d.]+/g)
    .slice(0, 3)
    .map((value) => {
      const c = value / 255;
      return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function subscribeToTheme(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
function readContrast() {
  const style = getComputedStyle(document.documentElement);
  const [ink, paper] = ["--ink", "--paper"].map((name) => {
    const probe = document.createElement("span");
    probe.style.color = style.getPropertyValue(name);
    document.body.appendChild(probe);
    const value = luminance(getComputedStyle(probe).color);
    probe.remove();
    return value;
  });
  return ((Math.max(ink, paper) + 0.05) / (Math.min(ink, paper) + 0.05)).toFixed(1);
}
const noContrastYet = () => null;

export default function LiveProof({ claims, labels }) {
  const [paint, setPaint] = useState(null); // { kind: "lcp" | "fcp", seconds }
  const contrast = useSyncExternalStore(subscribeToTheme, readContrast, noContrastYet);

  useEffect(() => {
    const supported = PerformanceObserver.supportedEntryTypes || [];
    const kind = supported.includes("largest-contentful-paint") ? "lcp" : "fcp";
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries().filter((e) => kind === "lcp" || e.name === "first-contentful-paint");
      const last = entries.at(-1);
      if (last) setPaint({ kind, seconds: (last.startTime / 1000).toFixed(2) });
    });
    observer.observe({ type: kind === "lcp" ? "largest-contentful-paint" : "paint", buffered: true });
    return () => observer.disconnect();
  }, []);

  const live = [
    paint ? labels[paint.kind].replace("{v}", paint.seconds) : labels.measuring,
    contrast ? labels.contrast.replace("{v}", contrast) : labels.measuring,
  ];

  return (
    <ul className="grid gap-x-10 gap-y-8 md:grid-cols-2">
      {claims.map((claim, i) => (
        <li key={claim} className="grid gap-4">
          <div>
            <p className="t-meta">{labels.cvSays}</p>
            <p className="mt-1 max-w-[52ch]">{claim}</p>
          </div>
          <div className="border-s-2 border-gilt ps-5">
            <p className="t-meta">{labels.live}</p>
            <p className="t-h3 mt-1" aria-live="polite">
              {live[i]}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
