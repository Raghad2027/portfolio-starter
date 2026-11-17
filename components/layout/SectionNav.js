"use client";

// A bar that sticks under the header on long pages. It lists the sections and
// marks the one you are reading, so 60+ items on the Recognition page are
// never more than one tap away.
import { useEffect, useRef, useState } from "react";

export default function SectionNav({ items, label }) {
  const [active, setActive] = useState(items[0].id);
  const listRef = useRef(null);

  useEffect(() => {
    const sections = items.map((item) => document.getElementById(item.id)).filter(Boolean);
    // A section counts as "current" while it crosses a band in the upper part of the screen.
    const watcher = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[visible.length - 1].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    sections.forEach((section) => watcher.observe(section));
    return () => watcher.disconnect();
  }, [items]);

  // On a phone the bar scrolls sideways: keep the current chip in view.
  useEffect(() => {
    const list = listRef.current;
    const chip = list?.querySelector('[aria-current="true"]');
    if (!list || !chip) return;
    const target = chip.offsetLeft - (list.clientWidth - chip.offsetWidth) / 2;
    list.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label={label} className="sticky top-16 z-30 mt-8 border-y border-line bg-paper">
      <ul ref={listRef} className="wrap relative flex gap-2.5 overflow-x-auto pt-2.5 pb-3.5 [scrollbar-width:none]">
        {items.map((item) => (
          <li key={item.id} className="shrink-0">
            <a href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined} className="key">
              {item.label}
              {item.count != null && <span className="opacity-70">{item.count}</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
