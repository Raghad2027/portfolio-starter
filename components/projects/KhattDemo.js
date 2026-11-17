"use client";

// A hands-on version of the Khatt project: the same Arabic paragraph, with the
// three things the engine adjusts (size, spacing, line length) under your
// control. It starts in the "too small and dense" state the project set out to
// fix. Sliders are Radix UI Slider: keyboard, touch and right-to-left aware.
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

const DENSE = { size: 13, leading: 1.35, words: 0, measure: 80 };
const ADAPTED = { size: 21, leading: 2, words: 0.12, measure: 46 };
const same = (a, b) => Object.keys(a).every((k) => a[k] === b[k]);

export default function KhattDemo({ labels, sample, dir }) {
  const [v, setV] = useState(DENSE);

  const controls = [
    { key: "size", label: labels.size, min: 11, max: 30, step: 1, show: `${v.size}px` },
    { key: "leading", label: labels.leading, min: 1.2, max: 2.6, step: 0.05, show: v.leading.toFixed(2) },
    { key: "words", label: labels.words, min: 0, max: 0.4, step: 0.02, show: `${v.words.toFixed(2)}em` },
    { key: "measure", label: labels.measure, min: 24, max: 90, step: 1, show: `${v.measure}ch` },
  ];

  return (
    <div className="grid overflow-hidden rounded-[14px] border border-line bg-card md:grid-cols-12">
      <div className="space-y-6 border-b border-line p-5 md:col-span-4 md:border-e md:border-b-0 md:p-6">
        <div role="group" aria-label={labels.title} className="flex flex-wrap gap-2.5">
          {[
            [labels.dense, DENSE],
            [labels.adapted, ADAPTED],
          ].map(([name, preset]) => (
            <button
              key={name}
              type="button"
              aria-pressed={same(v, preset)}
              onClick={() => setV(preset)}
              className="key"
            >
              {name}
            </button>
          ))}
        </div>

        {controls.map((c) => (
          <div key={c.key}>
            <div className="flex items-baseline justify-between gap-3">
              <span id={`khatt-${c.key}`} className="font-semibold">
                {c.label}
              </span>
              <bdi className="t-meta tabular-nums" dir="ltr">
                {c.show}
              </bdi>
            </div>
            <Slider.Root
              dir={dir}
              min={c.min}
              max={c.max}
              step={c.step}
              value={[v[c.key]]}
              onValueChange={([value]) => setV({ ...v, [c.key]: value })}
              className="relative mt-2 flex h-8 w-full touch-none items-center select-none"
            >
              <Slider.Track className="relative h-1 grow rounded-full bg-line">
                <Slider.Range className="absolute h-full rounded-full bg-accent" />
              </Slider.Track>
              <Slider.Thumb
                aria-labelledby={`khatt-${c.key}`}
                className="block h-6 w-6 rounded-full border-2 border-accent bg-card shadow-[0_3px_0_0_var(--accent)] transition-transform active:translate-y-[2px] active:shadow-none"
              />
            </Slider.Root>
          </div>
        ))}
      </div>

      <div className="p-5 md:col-span-8 md:p-8" aria-label={labels.sample} role="group" dir="rtl">
        <p
          lang="ar"
          dir="rtl"
          className="font-sans transition-[font-size,line-height,word-spacing,max-width] duration-300 ease-out"
          style={{
            fontSize: `${v.size}px`,
            lineHeight: v.leading,
            wordSpacing: `${v.words}em`,
            maxWidth: `${v.measure}ch`,
          }}
        >
          {sample}
        </p>
      </div>
    </div>
  );
}
