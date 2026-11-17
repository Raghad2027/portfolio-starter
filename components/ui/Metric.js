import { tr } from "@/lib/i18n";

// One result number with its label. <bdi> keeps values such as "22 → 6"
// or "+19%" in the right order inside Arabic text.
export default function Metric({ metric, locale, className = "" }) {
  return (
    <p className={className}>
      <bdi className="t-num block text-accent">{tr(metric.value, locale)}</bdi>
      <span className="t-meta mt-1 block">{tr(metric.label, locale)}</span>
    </p>
  );
}
