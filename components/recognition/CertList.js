"use client";

// The 20 certifications with a status filter. This is a Client Component
// because the filter needs state; the data still comes from data/cv.js.
import { useState } from "react";
import ScrambleText from "@/components/ui/ScrambleText";

const order = ["all", "active", "lifetime", "in-progress", "expired"];

export default function CertList({ certifications, labels }) {
  const [status, setStatus] = useState("all");
  const shown = status === "all" ? certifications : certifications.filter((c) => c.status === status);
  const count = (key) =>
    key === "all" ? certifications.length : certifications.filter((c) => c.status === key).length;

  return (
    <div>
      <div role="group" aria-label={labels.filter} className="flex flex-wrap gap-2.5">
        {order.map((key) => (
          <button key={key} type="button" aria-pressed={status === key} onClick={() => setStatus(key)} className="key">
            {labels.status[key]} <span className="opacity-75">{count(key)}</span>
          </button>
        ))}
      </div>
      <p aria-live="polite" className="t-meta mt-4">
        {labels.showing.replace("{n}", shown.length).replace("{total}", certifications.length)}
      </p>

      <ul className="mt-2">
        {shown.map((c) => (
          <li
            key={c.name}
            className="grid gap-x-10 gap-y-1 border-t border-line py-4 md:grid-cols-12 md:items-baseline"
          >
            <p className="md:col-span-2">
              <span className="font-semibold">{c.year ?? labels.status["in-progress"]}</span>
            </p>
            <div className="md:col-span-7" lang="en" dir="ltr">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="t-meta">{c.issuer}</p>
            </div>
            <div className="md:col-span-3">
              <p className={c.status === "expired" ? "text-muted" : c.status === "in-progress" ? "text-gilt" : ""}>
                {c.note ?? labels.status[c.status]}
              </p>
              {c.id && (
                <p className="t-meta">
                  {labels.credentialId}:{" "}
                  <bdi dir="ltr">
                    {/* The ID decodes itself, and again whenever the filter changes. */}
                    <ScrambleText key={status}>{c.id}</ScrambleText>
                  </bdi>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
