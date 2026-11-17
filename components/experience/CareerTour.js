"use client";

// "16 years in 60 seconds": a player that walks through the career one role at
// a time, oldest first, about five seconds each. The current role is lit on
// the timeline above (same data-link ids as LinkedHover) and described here.
// With "reduce motion" on it does not advance by itself; the buttons still work.
import { useEffect, useState } from "react";

const STEP_MS = 5000;

export default function CareerTour({ steps, labels }) {
  const [index, setIndex] = useState(-1); // -1 = not started
  const [playing, setPlaying] = useState(false);
  const step = steps[index];

  // Advance while playing; stop after the last role.
  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(() => {
      if (index >= steps.length - 1) setPlaying(false);
      else setIndex(index + 1);
    }, STEP_MS);
    return () => clearTimeout(timer);
  }, [playing, index, steps.length]);

  // Light the current role's bar on the timeline and bring it into view.
  useEffect(() => {
    if (!step) return;
    const marks = document.querySelectorAll(`[data-link="${step.id}"]`);
    marks.forEach((el) => el.setAttribute("data-hot", ""));
    document
      .querySelector(`.tl-bar[data-link="${step.id}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    return () => marks.forEach((el) => el.removeAttribute("data-hot"));
  }, [step]);

  const go = (next) => setIndex(Math.min(steps.length - 1, Math.max(0, next)));
  const toggle = () => {
    if (playing) return setPlaying(false);
    if (index === -1 || index === steps.length - 1) setIndex(0);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPlaying(!still);
  };

  return (
    <div className="tour">
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={toggle} className="btn btn-solid">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            {playing ? <path d="M7 5h4v14H7zM13 5h4v14h-4z" /> : <path d="M7 4.5v15l12-7.5z" />}
          </svg>
          {playing ? labels.pause : labels.play}
        </button>
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={index <= 0}
          aria-label={labels.previous}
          className="tour-arrow"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="flip"
          >
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index >= steps.length - 1}
          aria-label={labels.next}
          className="tour-arrow"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="flip"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
        {step && (
          <p className="t-meta tabular-nums">
            {labels.step.replace("{n}", index + 1).replace("{total}", steps.length)}
          </p>
        )}
      </div>

      {/* One segment per role. The current one fills while it is on screen. */}
      <ol className="mt-5 flex gap-1" aria-hidden="true">
        {steps.map((s, i) => (
          <li
            key={s.id}
            className="tour-seg"
            data-state={i < index ? "done" : i === index ? (playing ? "playing" : "current") : "todo"}
          />
        ))}
      </ol>

      <div aria-live="polite" className="mt-6 min-h-[9.5rem]">
        {step && (
          <div key={step.id} className="tour-card">
            <p className="t-meta">{step.period}</p>
            <h3 className="t-h3 mt-1">{step.role}</h3>
            {step.company && <p className="font-semibold text-accent">{step.company}</p>}
            <p className="mt-3 max-w-[64ch]">{step.text}</p>
            <a href={`#${step.id}`} className="link mt-3 inline-block">
              {labels.details}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
