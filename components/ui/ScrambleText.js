"use client";

// Decodes its text out of symbols, one character at a time.
// Adapted to plain JavaScript from dqnamo's Scramble Text (dqnamo.com/kitchen,
// via 21st.dev). It splits text with Intl.Segmenter, so Arabic letters and
// their marks stay whole. Changes: the real text is in the HTML from the start
// (no scrambled text for search engines or without JavaScript), and the
// animation starts when the text scrolls into view.
import { useEffect, useRef, useState } from "react";

const SYMBOLS = "-_~!@#$%^&*()+=[]{}|;:,.<>?";
const MAX_STEPS = 40;

function segmentsOf(text) {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }
  return Array.from(text);
}

function scramble(segments, revealed) {
  return segments
    .map((ch, i) => (ch.trim() === "" || i < revealed ? ch : SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]))
    .join("");
}

export default function ScrambleText({ children, className = "", intervalMs = 28 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(children);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const segments = segmentsOf(children);
    let timer;

    const watcher = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      watcher.disconnect();
      let revealed = 0;
      const step = Math.max(1, Math.ceil(segments.length / MAX_STEPS));
      timer = window.setInterval(() => {
        revealed = Math.min(segments.length, revealed + step);
        setShown(scramble(segments, revealed));
        if (revealed >= segments.length) window.clearInterval(timer);
      }, intervalMs);
    });
    watcher.observe(el);

    return () => {
      watcher.disconnect();
      window.clearInterval(timer);
    };
  }, [children, intervalMs]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">{shown}</span>
      <span className="sr-only">{children}</span>
    </span>
  );
}
