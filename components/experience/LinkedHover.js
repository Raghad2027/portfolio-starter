"use client";

// Links things that describe the same item. Hover or focus anything carrying
// data-link="some-id" and every element with that id lights up (data-hot).
// Used to tie each bar on the career timeline to its role in the list below.
import { useEffect, useRef } from "react";

export default function LinkedHover({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let current = null;

    const light = (id, on) =>
      root.querySelectorAll(`[data-link="${id}"]`).forEach((el) => el.toggleAttribute("data-hot", on));
    const onEnter = (e) => {
      const id = e.target.closest?.("[data-link]")?.dataset.link ?? null;
      if (id === current) return;
      if (current) light(current, false);
      current = id;
      if (id) light(id, true);
    };
    const onLeave = () => {
      if (current) light(current, false);
      current = null;
    };

    root.addEventListener("pointerover", onEnter);
    root.addEventListener("focusin", onEnter);
    root.addEventListener("pointerleave", onLeave);
    root.addEventListener("focusout", onLeave);
    return () => {
      root.removeEventListener("pointerover", onEnter);
      root.removeEventListener("focusin", onEnter);
      root.removeEventListener("pointerleave", onLeave);
      root.removeEventListener("focusout", onLeave);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
