import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";
import LensSwitch from "@/components/ui/LensSwitch";

// The "Read this as" row: label, the switch, and a note that nothing is hidden.
export default function LensBar({ locale, className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-3 ${className}`}>
      <p className="font-semibold">{tr(ui.lens.label, locale)}</p>
      <LensSwitch
        label={tr(ui.lens.label, locale)}
        options={ui.lens.options.map((option) => ({ id: option.id, label: tr(option.label, locale) }))}
      />
      <p className="t-meta basis-full">{tr(ui.lens.note, locale)}</p>
    </div>
  );
}
