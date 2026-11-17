import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";
import ScrollToEnd from "@/components/experience/ScrollToEnd";

// The whole career drawn on one time axis, straight from data/cv.js.
// It shows what a list cannot: which roles ran side by side.
// Positions use inset-inline-start, so time runs right-to-left in Arabic.

const toNumber = (ym) => {
  const [y, m] = ym.split("-").map(Number);
  return y + (m - 1) / 12;
};

// Put overlapping bars on separate rows.
function pack(items) {
  const rowEnds = [];
  return [...items]
    .sort((a, b) => a.start - b.start)
    .map((item) => {
      let row = rowEnds.findIndex((end) => end <= item.start);
      if (row === -1) row = rowEnds.length;
      rowEnds[row] = item.end;
      return { ...item, row };
    });
}

export default function Timeline({ locale }) {
  const today = new Date();
  const now = today.getFullYear() + today.getMonth() / 12;
  const bar = (entry, label, extra = {}) => ({
    label: tr(label, locale),
    period: tr(entry.period, locale),
    start: toNumber(entry.span[0]),
    end: entry.span[1] ? toNumber(entry.span[1]) + 1 / 12 : now,
    ...extra,
  });

  const lanes = [
    {
      key: "full",
      style: "bg-accent text-paper",
      items: cv.experience
        .filter((j) => j.kind !== "part")
        .map((j) => bar(j, j.role, { href: `#${j.id}`, link: j.id, isBreak: j.kind === "break" })),
    },
    {
      key: "part",
      style: "border border-accent bg-tint text-ink",
      items: cv.experience
        .filter((j) => j.kind === "part")
        .map((j) => bar(j, j.company, { href: `#${j.id}`, link: j.id })),
    },
    {
      key: "education",
      style: "bg-gilt text-paper",
      items: cv.education.map((e) => bar(e, e.degree)),
    },
    {
      key: "leadership",
      style: "border border-ink text-ink",
      items: cv.leadership.map((l) => bar(l, l.role, { href: "#leadership" })),
    },
  ].map((lane) => ({ ...lane, items: pack(lane.items) }));

  const all = lanes.flatMap((l) => l.items);
  const min = Math.floor(Math.min(...all.map((i) => i.start)));
  const max = Math.floor(now) + 1;
  const pct = (value) => `${((value - min) / (max - min)) * 100}%`;
  const ticks = [];
  for (let y = min; y <= max; y += 2) ticks.push(y);
  const rowHeight = 2.15; // rem

  return (
    <figure>
      <ScrollToEnd className="overflow-x-auto pb-2" label={tr(ui.timeline, locale)}>
        <div className="min-w-[60rem]">
          {/* Year axis */}
          <div className="grid grid-cols-[6.5rem_1fr] md:grid-cols-[10rem_1fr]">
            <span className="sticky start-0 z-10 bg-paper" />
            <div className="relative h-7 border-b border-ink">
              {ticks.map((y) => (
                <span
                  key={y}
                  className="t-meta absolute bottom-1 border-s border-line ps-1.5 leading-none"
                  style={{ insetInlineStart: pct(y) }}
                >
                  {y}
                </span>
              ))}
            </div>
          </div>

          {lanes.map((lane) => {
            const rows = Math.max(...lane.items.map((i) => i.row)) + 1;
            return (
              <div
                key={lane.key}
                className="grid grid-cols-[6.5rem_1fr] border-b border-line py-2.5 md:grid-cols-[10rem_1fr]"
              >
                <p className="t-meta sticky start-0 z-10 bg-paper pe-3 pt-1 leading-tight md:pe-4">
                  {tr(ui.lanes[lane.key], locale)}
                </p>
                <ul className="relative" style={{ height: `${rows * rowHeight}rem` }}>
                  {lane.items.map((item) => {
                    const share = (item.end - item.start) / (max - min);
                    // Bars too narrow to tap comfortably are not links.
                    const isLink = item.href && share > 0.032;
                    const Tag = isLink ? "a" : "span";
                    return (
                      <li key={item.label + item.start}>
                        <Tag
                          href={isLink ? item.href : undefined}
                          data-link={item.link}
                          title={`${item.label} (${item.period})`}
                          className={`tl-bar absolute block h-7 overflow-hidden rounded-[3px] px-2 text-[0.82rem] leading-7 text-ellipsis whitespace-nowrap transition-opacity ${
                            item.isBreak ? "border border-dashed border-gilt text-gilt" : lane.style
                          } ${isLink ? "hover:opacity-80" : ""}`}
                          style={{
                            insetInlineStart: pct(item.start),
                            width: `calc(${pct(item.end)} - ${pct(item.start)} - 2px)`,
                            top: `${item.row * rowHeight}rem`,
                          }}
                        >
                          {/* Short bars show no text; screen readers always get the full name. */}
                          {share > 0.045 && <span aria-hidden="true">{item.label}</span>}
                          <span className="sr-only">
                            {item.label}, {item.period}
                          </span>
                        </Tag>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </ScrollToEnd>
      <figcaption className="t-meta mt-3">{tr(ui.timelineHint, locale)}</figcaption>
    </figure>
  );
}
