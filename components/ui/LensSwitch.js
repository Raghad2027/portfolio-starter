"use client";

// "Read this as…": pick the kind of reader you are and the site highlights
// what matters most to you (the CSS for html[data-lens] is in app/styles/controls.css).
// Nothing is hidden. The choice is remembered and follows you across pages.
import { useSyncExternalStore } from "react";

function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-lens"] });
  return () => observer.disconnect();
}
const getLens = () => document.documentElement.dataset.lens || "all";
const getServerLens = () => "all";

function setLens(id) {
  const root = document.documentElement;
  if (id === "all") delete root.dataset.lens;
  else root.dataset.lens = id;
  try {
    localStorage.setItem("lens", id);
  } catch {
    // Storage can be blocked; the lens still works for this page.
  }
}

export default function LensSwitch({ label, options }) {
  const lens = useSyncExternalStore(subscribe, getLens, getServerLens);

  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2.5">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={lens === option.id}
          onClick={() => setLens(option.id)}
          className="key"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
