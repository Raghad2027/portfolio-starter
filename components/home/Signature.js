"use client";

// Her name in Arabic, traced letter by letter (right to left, the way it is
// written) and then filled with ink, the first time it scrolls into view.
// After the idea of dqnamo's Animated Signature (dqnamo.com/kitchen).
// Without JavaScript, or with "reduce motion", the name is simply there.
import { useEffect, useRef } from "react";
import { signature } from "@/assets/signature";

export default function Signature({ className = "", label }) {
  const ref = useRef(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    svg.dataset.state = "waiting";
    const watcher = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        svg.dataset.state = "drawn";
        watcher.disconnect();
      },
      { threshold: 0.6 },
    );
    watcher.observe(svg);
    return () => watcher.disconnect();
  }, []);

  const last = signature.glyphs.length - 1;
  return (
    <svg ref={ref} viewBox={signature.viewBox} role="img" aria-label={label} className={`signature ${className}`}>
      {signature.glyphs.map((d, i) => (
        <path key={i} d={d} pathLength="1" style={{ "--i": last - i }} />
      ))}
    </svg>
  );
}
