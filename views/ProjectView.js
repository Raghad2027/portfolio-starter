import { Link } from "next-view-transitions";
import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { localePath, tr } from "@/lib/i18n";
import Metric from "@/components/ui/Metric";
import TechList from "@/components/ui/TechList";
import { Arrow } from "@/components/ui/Icons";
import Compare from "@/components/projects/Compare";
import KhattDemo from "@/components/projects/KhattDemo";
import Section from "@/components/layout/Section";
import { dirOf } from "@/lib/i18n";

// One case study: the problem, what she did, what changed.
export default function ProjectView({ project, locale }) {
  const index = cv.projects.indexOf(project);
  const previous = cv.projects[index - 1];
  const next = cv.projects[index + 1];
  const award = cv.awards.find((a) => a.id === project.award);
  const comma = locale === "ar" ? "، " : ", ";

  const facts = [
    [ui.organization, project.org],
    [ui.period, project.period],
    [ui.role, project.role],
    [ui.team, project.team],
  ].filter(([, value]) => value);

  // Results written as "22 → 6" or "18% → 46%" become before-and-after bars.
  const comparisons = project.metrics
    .map((metric) => {
      const match = /^([\d.]+)(%?)\s*→\s*([\d.]+)(%?)$/.exec(tr(metric.value, "en"));
      return (
        match && {
          label: tr(metric.label, locale),
          before: Number(match[1]),
          after: Number(match[3]),
          beforeText: match[1] + match[2],
          afterText: match[3] + match[4],
        }
      );
    })
    .filter(Boolean);

  const story = [
    [ui.problem, project.problem],
    [ui.action, project.action],
    [ui.result, project.result],
  ];

  return (
    <article>
      <div className="wrap pt-8 md:pt-12">
        <Link href={localePath(locale, "/projects")} className="link inline-flex items-center gap-2">
          <Arrow back />
          {tr(ui.backToWork, locale)}
        </Link>
        <h1 className="t-page mt-6 max-w-[20ch]">{tr(project.name, locale)}</h1>
        <p className="t-lead mt-5 max-w-[56ch] text-muted">{tr(project.summary, locale)}</p>
      </div>

      {/* The numbers from the Result line */}
      <div className="wrap mt-10 md:mt-14">
        <ul className="grid gap-x-10 gap-y-7 border-y border-ink py-7 sm:grid-cols-3 md:py-9">
          {project.metrics.map((metric) => (
            <li key={tr(metric.label, "en")}>
              <Metric metric={metric} locale={locale} />
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap mt-10 grid gap-x-10 gap-y-12 md:mt-14 md:grid-cols-12">
        {/* Facts */}
        <aside className="md:col-span-4 lg:col-span-3">
          <dl className="space-y-5">
            {facts.map(([label, value]) => (
              <div key={label.en}>
                <dt className="t-meta">{tr(label, locale)}</dt>
                <dd className="font-semibold">{tr(value, locale)}</dd>
              </div>
            ))}
            {award && (
              <div>
                <dt className="t-meta">{tr(ui.awardWon, locale)}</dt>
                <dd>
                  <Link href={localePath(locale, "/recognition#awards")} className="link font-semibold">
                    {tr(award.name, locale)}
                  </Link>
                  <span className="t-meta block">
                    {tr(award.issuer, locale)}
                    {comma}
                    {award.year}
                  </span>
                </dd>
              </div>
            )}
            {project.link && (
              <div>
                <dt className="t-meta">{tr(ui.repository, locale)}</dt>
                <dd>
                  <a href={project.link.url} className="link font-semibold break-all" dir="ltr">
                    {project.link.handle}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </aside>

        {/* Problem, Action, Result */}
        <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
          <ol className="space-y-10">
            {story.map(([label, text]) => (
              <li key={label.en} className="grid gap-x-8 gap-y-2 sm:grid-cols-[8rem_1fr]">
                <h2 className="t-h3 text-accent">{tr(label, locale)}</h2>
                <p className="t-lead max-w-[52ch]">{tr(text, locale)}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 border-t border-line pt-6">
            <h2 className="t-meta mb-3">{tr(ui.technologies, locale)}</h2>
            <TechList items={project.tech} label={tr(ui.technologies, locale)} />
          </div>
        </div>
      </div>

      {comparisons.length > 0 && (
        <Section id="before-after" title={tr(ui.beforeAfter, locale)} className="mt-8">
          <Compare items={comparisons} labels={{ before: tr(ui.before, locale), after: tr(ui.after, locale) }} />
        </Section>
      )}

      {project.demo === "khatt" && (
        <Section id="demo" title={tr(ui.demoTitle, locale)} className="mt-8">
          <p className="mb-7 max-w-[62ch] text-muted">{tr(ui.demoIntro, locale)}</p>
          <KhattDemo
            dir={dirOf(locale)}
            sample={[project.problem, project.action, project.result].map((text) => tr(text, "ar")).join(" ")}
            labels={{
              title: tr(ui.demoTitle, locale),
              dense: tr(ui.demoDense, locale),
              adapted: tr(ui.demoAdapted, locale),
              size: tr(ui.demoSize, locale),
              leading: tr(ui.demoLeading, locale),
              words: tr(ui.demoWords, locale),
              measure: tr(ui.demoMeasure, locale),
              sample: tr(ui.demoSample, locale),
            }}
          />
          <p className="t-meta mt-3">{tr(ui.demoNote, locale)}</p>
        </Section>
      )}

      {/* Previous / next */}
      <nav aria-label={tr(ui.work, locale)} className="wrap mt-16 md:mt-24">
        <div className="grid border-y border-ink sm:grid-cols-2">
          <div className="py-6 sm:pe-8">
            {previous && (
              <Link href={localePath(locale, `/projects/${previous.slug}`)} className="group block">
                <span className="t-meta flex items-center gap-2">
                  <Arrow back />
                  {tr(ui.previous, locale)}
                </span>
                <span className="t-h3 mt-1 block transition-colors group-hover:text-accent">
                  {tr(previous.name, locale)}
                </span>
              </Link>
            )}
          </div>
          <div className="border-t border-line py-6 text-end sm:border-s sm:border-t-0 sm:ps-8">
            {next && (
              <Link href={localePath(locale, `/projects/${next.slug}`)} className="group block">
                <span className="t-meta flex items-center justify-end gap-2">
                  {tr(ui.next, locale)}
                  <Arrow />
                </span>
                <span className="t-h3 mt-1 block transition-colors group-hover:text-accent">
                  {tr(next.name, locale)}
                </span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </article>
  );
}
