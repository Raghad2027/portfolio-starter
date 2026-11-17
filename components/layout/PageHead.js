import LensBar from "@/components/ui/LensBar";

// The title block at the top of every inner page.
// Pass lens={locale} to show the "Read this as" switch under the title.
export default function PageHead({ title, intro, lens, children }) {
  return (
    <div className="wrap pt-12 pb-2 md:pt-20">
      <h1 className="t-page">{title}</h1>
      {intro && <p className="t-lead mt-5 max-w-[60ch] text-muted">{intro}</p>}
      {children}
      {lens && <LensBar locale={lens} className="mt-8" />}
    </div>
  );
}
