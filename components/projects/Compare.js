"use client";

// Before-and-after bars for results written as "22 → 6" in cv.js.
// The two bars share one scale, so the change is visible at a glance.
// They grow from the start edge when scrolled into view (Framer Motion).
import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";

const ease = [0.2, 0.7, 0.2, 1];

export default function Compare({ items, labels }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <ul className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {items.map((item) => {
            const max = Math.max(item.before, item.after);
            const rows = [
              { name: labels.before, value: item.before, text: item.beforeText, bar: "bg-muted", delay: 0 },
              { name: labels.after, value: item.after, text: item.afterText, bar: "bg-accent", delay: 0.3 },
            ];
            return (
              <li key={item.label}>
                <h3 className="font-semibold first-letter:uppercase">{item.label}</h3>
                <dl className="mt-3 space-y-2">
                  {rows.map((row) => (
                    <div key={row.name} className="grid grid-cols-[4.5rem_1fr] items-center gap-3">
                      <dt className="t-meta">{row.name}</dt>
                      <dd className="flex items-center gap-3">
                        <m.span
                          data-motion
                          aria-hidden="true"
                          className={`block h-7 origin-left rounded-[3px] rtl:origin-right ${row.bar}`}
                          style={{ width: `${Math.max(3, (row.value / max) * 82)}%` }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                          transition={{ duration: 0.9, ease, delay: row.delay }}
                        />
                        <bdi className="font-display text-[1.6rem] leading-none font-medium">{row.text}</bdi>
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            );
          })}
        </ul>
      </MotionConfig>
    </LazyMotion>
  );
}
