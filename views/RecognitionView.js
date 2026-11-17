import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";
import PageHead from "@/components/layout/PageHead";
import Section from "@/components/layout/Section";
import CertList from "@/components/recognition/CertList";
import Seal from "@/components/recognition/Seal";
import FoilDriver from "@/components/recognition/FoilDriver";
import Ticket from "@/components/recognition/Ticket";
import SectionNav from "@/components/layout/SectionNav";

export default function RecognitionView({ locale }) {
  const comma = locale === "ar" ? "، " : ", ";
  const open = locale === "ar" ? "«" : "“";
  const close = locale === "ar" ? "»" : "”";
  const sections = [
    ["awards", ui.awards, cv.awards.length],
    ["patents", ui.patents, cv.patents.length],
    ["publications", ui.publications, cv.publications.length],
    ["speaking", ui.speaking, cv.talks.length],
    ["media", ui.media, cv.media.length],
    ["certifications", ui.certifications, cv.certifications.length],
  ];

  // Translate here, on the server, so the filter component only gets plain text.
  const certifications = cv.certifications.map((c) => ({ ...c, note: c.note ? tr(c.note, locale) : null }));
  const certLabels = {
    filter: tr(ui.certFilter, locale),
    showing: tr(ui.certShowing, locale),
    credentialId: tr(ui.credentialId, locale),
    status: Object.fromEntries(Object.entries(ui.certStatus).map(([key, value]) => [key, tr(value, locale)])),
  };

  return (
    <>
      <PageHead title={tr(ui.recognition, locale)} lens={locale} />
      <SectionNav
        label={tr(ui.onThisPage, locale)}
        items={sections.map(([id, label, count]) => ({ id, label: tr(label, locale), count }))}
      />

      <FoilDriver />
      <Section id="awards" title={tr(ui.awards, locale)} className="mt-4">
        <ul className="divide-y divide-line">
          {cv.awards.map((a) => (
            <li key={a.id} data-lens={a.lens.join(" ")} className="flex items-center gap-5 py-5 first:pt-0 md:gap-8">
              <Seal year={a.year} />
              <div className="grid flex-1 gap-x-10 gap-y-1 md:grid-cols-12 md:items-baseline">
                <div className="md:col-span-7">
                  <h3 className="t-h3">{tr(a.name, locale)}</h3>
                  <p className="t-meta mt-1">
                    {tr(a.issuer, locale)}
                    {comma}
                    {a.year}
                  </p>
                </div>
                <p className="md:col-span-5">{tr(a.reason, locale)}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="patents" title={tr(ui.patents, locale)}>
        <ul className="grid gap-8 md:grid-cols-2">
          {cv.patents.map((p) => (
            <li key={tr(p.number, "en")} className="stamp-wrap">
              <div className="stamp">
                <div className="stamp-inner">
                  <p className={`postmark ${p.status === "granted" ? "text-accent" : "text-gilt"}`}>
                    {tr(ui.patentStatus[p.status], locale)}
                  </p>
                  <h3 className="t-h3 mt-5">{tr(p.title, locale)}</h3>
                  <p className="mt-4">{tr(p.number, locale)}</p>
                  <p className="t-meta">{tr(p.date, locale)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="publications" title={tr(ui.publications, locale)} aside={tr(cv.publicationsNote, locale)}>
        {/* Citations stay in the language they were published in. */}
        <ol className="divide-y divide-line" lang="en" dir="ltr">
          {cv.publications.map((pub) => (
            <li key={pub.title} className="grid gap-x-10 gap-y-1 py-5 first:pt-0 md:grid-cols-12">
              <p className="font-display text-[1.7rem] leading-none text-gilt md:col-span-2">{pub.year}</p>
              <p className="max-w-[72ch] md:col-span-10">
                <span className="text-muted">{pub.authors}</span> ({pub.year}).{" "}
                <cite className="font-semibold not-italic">{pub.title}</cite> <span>{pub.venue}</span>
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="speaking" title={tr(ui.speaking, locale)} aside={tr(cv.talksNote, locale)}>
        <ul className="grid gap-6 md:grid-cols-2">
          {cv.talks.map((talk) => (
            <li key={tr(talk.title, "en")}>
              <Ticket talk={talk} locale={locale} open={open} close={close} />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="media" title={tr(ui.media, locale)}>
        <ul className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {cv.media.map((m) => (
            <li key={tr(m.title, "en")} className="border-s border-line ps-5">
              <p className="t-meta">
                {tr(m.kind, locale)}
                {comma}
                {tr(m.date, locale)}
              </p>
              <h3 className="t-h3 mt-1">{tr(m.title, locale)}</h3>
              <p className="mt-2 text-muted">
                {[m.outlet, m.detail]
                  .filter(Boolean)
                  .map((v) => tr(v, locale))
                  .join(comma)}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="certifications" title={tr(ui.certifications, locale)} aside={tr(cv.certificationsNote, locale)}>
        <CertList certifications={certifications} labels={certLabels} />
      </Section>
    </>
  );
}
