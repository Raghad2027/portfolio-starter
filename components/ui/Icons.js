// Small inline icons. They are decorative: the text next to them carries the meaning.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

// Points in the reading direction: right in English, left in Arabic (see .flip).
export function Arrow({ className = "", back = false }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} className={`flip shrink-0 ${className}`}>
      {back ? <path d="M20 12H5M11 6l-6 6 6 6" /> : <path d="M4 12h15M13 6l6 6-6 6" />}
    </svg>
  );
}

export function Download({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...base} className={`shrink-0 ${className}`}>
      <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
    </svg>
  );
}

export function Sun({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" />
    </svg>
  );
}

export function Moon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...base} className={className}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

export function Menu({ open = false }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...base}>
      {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
    </svg>
  );
}
