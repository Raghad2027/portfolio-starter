"use client";

// The awards as foil seals standing on a shelf. Pick one up (click, tap or
// Enter) and it lifts, grows and turns over to show which award it is; the
// full details appear below. Pick it again, or another, to put it back.
// The foil light is driven by FoilDriver.
import { useState } from "react";

export default function SealShelf({ awards, hint }) {
  const [picked, setPicked] = useState(null);
  const award = awards.find((a) => a.id === picked);

  return (
    <div>
      <ul className="shelf">
        {awards.map((a) => (
          <li key={a.id} data-lens={a.lens}>
            <button
              type="button"
              className="seal-pick"
              aria-pressed={picked === a.id}
              aria-label={`${a.year} ${a.name}, ${a.issuer}`}
              onClick={() => setPicked(picked === a.id ? null : a.id)}
            >
              <span className="seal-pick-inner">
                <span className="seal-face foil">
                  <span className="seal-year">{a.year}</span>
                </span>
                <span className="seal-face seal-back">
                  <span>{a.name}</span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div aria-live="polite" className="mt-6 min-h-[6.5rem]">
        {award ? (
          <div key={award.id} className="tour-card">
            <p className="t-meta">{award.year}</p>
            <h3 className="t-h3 mt-1">{award.name}</h3>
            <p className="mt-1">{award.reason}</p>
            <p className="t-meta">{award.issuer}</p>
          </div>
        ) : (
          <p className="t-meta">{hint}</p>
        )}
      </div>
    </div>
  );
}
