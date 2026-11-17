"use client";

// The home hero exists in both languages, one on top of the other. This
// component clips each to one side of a divider the visitor can drag:
// English to the left of it, Arabic to the right, the same layout mirrored.
// It is the site's idea ("designs in two directions") made into something
// you do with your hand.
//
// The layer in the other language is a visual comparison only, so it is
// hidden from screen readers and the keyboard (inert): they get the page in
// its own language, and the real switch is the language link in the header.
import { useEffect, useRef, useState } from "react";

export default function LanguageSplit({ primary, english, arabic, ribbon, label, grip }) {
  const rest = primary === "en" ? 100 : 0; // where the divider sits before anyone drags it
  const [split, setSplit] = useState(rest);
  const boxRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  // A short nudge after load shows that the divider moves.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const peek = rest === 100 ? 86 : 14;
    const timers = [setTimeout(() => setSplit(peek), 1400), setTimeout(() => setSplit(rest), 2300)];
    return () => timers.forEach(clearTimeout);
  }, [rest]);

  const moveTo = (clientX) => {
    const box = boxRef.current.getBoundingClientRect();
    setSplit(Math.min(100, Math.max(0, ((clientX - box.left) / box.width) * 100)));
  };

  const onKeyDown = (e) => {
    const step = { ArrowLeft: -5, ArrowRight: 5, Home: -100, End: 100 }[e.key];
    if (!step) return;
    e.preventDefault();
    setSplit((value) => Math.min(100, Math.max(0, value + step)));
  };

  return (
    // dir="ltr" here only fixes the geometry (left = English, right = Arabic);
    // each layer sets its own language and direction.
    <div
      ref={boxRef}
      className="split"
      dir="ltr"
      data-dragging={dragging || undefined}
      style={{ "--split": `${split}%`, "--split-n": split }}
    >
      <div className="split-ribbon" aria-hidden="true">
        {ribbon}
      </div>
      <div
        className="split-layer split-en"
        lang="en"
        dir="ltr"
        inert={primary !== "en"}
        aria-hidden={primary !== "en" || undefined}
      >
        {english}
      </div>
      <div
        className="split-layer split-ar"
        lang="ar"
        dir="rtl"
        inert={primary !== "ar"}
        aria-hidden={primary !== "ar" || undefined}
      >
        {arabic}
      </div>

      <span className="split-line" aria-hidden="true" />
      <div
        className="split-grip"
        role="slider"
        tabIndex={0}
        aria-label={label}
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(split)}
        onKeyDown={onKeyDown}
        onPointerDown={(e) => {
          setDragging(true);
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => dragging && moveTo(e.clientX)}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
      >
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 7 4 12l5 5M15 7l5 5-5 5" />
        </svg>
        <span lang={primary === "en" ? "ar" : "en"} aria-hidden="true">
          {grip}
        </span>
      </div>
    </div>
  );
}
