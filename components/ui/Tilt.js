"use client";

// Tilts its child in 3D toward the pointer and moves a soft light across it.
// The CSS for .tilt is in app/styles/projects.css. Touch screens and "reduce motion"
// get the flat card.
import { useRef } from "react";

export default function Tilt({ children, className = "", max = 7 }) {
  const ref = useRef(null);

  function onMove(e) {
    if (e.pointerType === "touch") return;
    const el = ref.current;
    const box = el.getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width;
    const y = (e.clientY - box.top) / box.height;
    el.style.setProperty("--rx", `${(0.5 - y) * max * 2}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * max * 2}deg`);
    el.style.setProperty("--gx", `${x * 100}%`);
    el.style.setProperty("--gy", `${y * 100}%`);
    el.dataset.active = "true";
  }

  function onLeave() {
    const el = ref.current;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    delete el.dataset.active;
  }

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </div>
  );
}
