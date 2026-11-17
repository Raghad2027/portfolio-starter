import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { tr, years } from "@/lib/i18n";
import PageHead from "@/components/layout/PageHead";
import Section from "@/components/layout/Section";
import SectionNav from "@/components/layout/SectionNav";

export default function AboutView({ locale }) {
  const comma = locale === "ar" ? "، " : ", ";
  const mostYears = Math.max(...cv.skills.map((s) => s.years));

  return (
    <>
      <PageHead title={tr(ui.about, locale)} lens={locale}>
        <p className="t-h3 mt-6 max-w-[40ch] text-muted">{cv.titles.map((t) => tr(t, locale)).join(comma)}</p>
      </PageHead>
      <SectionNav
        label={tr(ui.onThisPage, locale)}
        items={[
          { id: "summary", label: tr(ui.summary, locale) },
          { id: "skills", label: tr(ui.skills, locale), count: cv.skills.length },
          { id: "education", label: tr(ui.education, locale), count: cv.education.length },
          { id: "languages", label: tr(ui.languages, locale), count: cv.languages.length },
          { id: "interests", label: tr(ui.interests, locale), count: cv.interests.length },
        ]}
      />

      <Section id="summary" title={tr(ui.summary, locale)} className="mt-4">
        <p className="t-lead max-w-[66ch]">{tr(cv.summary, locale)}</p>
      </Section>

      <Section id="skills" title={tr(ui.skills, locale)}>
        <ul className="lens-sort grid divide-y divide-line">
          {cv.skills.map((skill) => (
            <li
              key={tr(skill.group, "en")}
              data-lens={skill.lens.join(" ")}
              className="grid gap-x-10 gap-y-2 py-5 first:pt-0 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <h3 className="t-h3">{tr(skill.group, locale)}</h3>
                <p className="t-meta mt-1">
                  {tr(ui.level[skill.level], locale)}
                  {comma}
                  {years(skill.years, locale)}
                </p>
                {/* Bar length = years of practice, against the longest (18). */}
                <div aria-hidden="true" className="mt-3 h-[3px] w-full max-w-[16rem] bg-line">
                  <div className="h-full bg-accent" style={{ width: `${(skill.years / mostYears) * 100}%` }} />
                </div>
              </div>
              <p className="max-w-[60ch] md:col-span-8 md:pt-1">
                {skill.items.map((item) => tr(item, locale)).join(comma)}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="education" title={tr(ui.education, locale)}>
        <ul className="divide-y divide-line">
          {cv.education.map((e) => (
            <li
              key={tr(e.degree, "en")}
              data-lens={e.lens.join(" ")}
              className="grid gap-x-10 gap-y-2 py-6 first:pt-0 md:grid-cols-12"
            >
              <div className="md:col-span-3">
                <p className="font-semibold">{tr(e.period, locale)}</p>
                <p className="t-meta">{tr(e.mode, locale)}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="t-h3">{tr(e.degree, locale)}</h3>
                <p className="mt-1 font-semibold text-accent">{tr(e.school, locale)}</p>
                <ul className="mt-3 max-w-[70ch] list-disc space-y-1 ps-5 marker:text-gilt">
                  {e.details.map((d) => (
                    <li key={tr(d, "en")}>{tr(d, locale)}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="languages" title={tr(ui.languages, locale)}>
        <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
          {cv.languages.map((l) => (
            <li key={tr(l.name, "en")} className="border-s border-line ps-4">
              <h3 className="t-h3">{tr(l.name, locale)}</h3>
              <p className="mt-1 text-muted">{tr(l.level, locale)}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="interests" title={tr(ui.interests, locale)}>
        <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {cv.interests.map((interest) => (
            <li key={tr(interest, "en")} className="t-lead border-s border-line ps-4">
              {tr(interest, locale)}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
