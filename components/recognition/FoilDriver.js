"use client";

// Moves the light on every .foil surface (the award seals). It follows the
// pointer and the scroll position, like tilting a foil stamp in your hand.
// After the idea of dqnamo's Iridescent Foil (dqnamo.com/kitchen).
// One listener for the whole page, batched to one update per frame.
import { useEffect } from "react";

export default function FoilDriver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Only the seals are touched, so the rest of the page is never restyled.
    const seals = document.querySelectorAll(".foil");
    let frame = 0;
    let x = 0.5;
    let y = 0.5;

    const update = () => {
      frame = 0;
      const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = window.scrollY / range;
      const turn = `${(progress * 2 + (x - 0.5) * 0.35).toFixed(4)}turn`;
      seals.forEach((seal) => {
        seal.style.setProperty("--foil-x", `${x * 100}%`);
        seal.style.setProperty("--foil-y", `${y * 100}%`);
        seal.style.setProperty("--foil-turn", turn);
      });
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onPointer = (e) => {
      x = e.clientX / window.innerWidth;
      y = e.clientY / window.innerHeight;
      queue();
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", queue, { passive: true });
    queue();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", queue);
    };
  }, []);

  return null;
}
