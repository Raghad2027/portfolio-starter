import { DrawnRule } from "@/components/ui/Motion";

// A page section: a rule that draws itself, a heading, then the content.
// The id lets links jump to it, e.g. <a href="#awards">.
export default function Section({ id, title, aside, children, className = "" }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`wrap py-10 md:py-14 ${className}`}>
      <DrawnRule />
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 pt-4 pb-7 md:pb-9">
        <h2 id={`${id}-title`} className="t-h2">
          {title}
        </h2>
        {aside && <div className="t-meta">{aside}</div>}
      </div>
      {children}
    </section>
  );
}
