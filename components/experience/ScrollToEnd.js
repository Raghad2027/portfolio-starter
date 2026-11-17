"use client";

// A sideways-scrolling box that opens at its end. On a phone the career
// timeline is wider than the screen, and the present matters most.
import { useEffect, useRef } from "react";

export default function ScrollToEnd({ className, label, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === "rtl";
    el.scrollLeft = rtl ? -el.scrollWidth : el.scrollWidth;
  }, []);

  return (
    <div ref={ref} className={className} tabIndex={0} role="group" aria-label={label}>
      {children}
    </div>
  );
}
