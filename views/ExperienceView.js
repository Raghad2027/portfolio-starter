import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";
import PageHead from "@/components/layout/PageHead";
import Section from "@/components/layout/Section";
import TechList from "@/components/ui/TechList";
import Timeline from "@/components/experience/Timeline";
import LinkedHover from "@/components/experience/LinkedHover";
import CareerTour from "@/components/experience/CareerTour";

// Every role from the CV, newest first, including the part-time roles
// and the career break.
export default function ExperienceView({ locale }) {
  const since = cv.highlights[0];
  const kindStyle = {
    full: "border-line",
    part: "border-accent text-accent",
    break: "border-gilt text-gilt",
  };

  return (
    <>
      <PageHead title={tr(ui.experience, locale)} intro={`${since.value} ${tr(since.text, locale)}`} lens={locale} />

      {/* Hovering a timeline bar lights up its role below, and the other way round. */}
      <LinkedHover>
        <Section id="timeline" title={tr(ui.timeline, locale)} className="mt-4">
          <Timeline locale={locale} />
        </Section>

        <Section id="tour" title={tr(ui.tour.title, locale)}>
          <CareerTour
            steps={[...cv.experience].reverse().map((job) => ({
              id: job.id,
              period: tr(job.period, locale),
              role: tr(job.role, locale),
              company: job.company ? tr(job.company, locale) : "",
              text: tr(job.points[0], locale),
            }))}
            labels={Object.fromEntries(Object.entries(ui.tour).map(([key, value]) => [key, tr(value, locale)]))}
          />
        </Section>

        <div className="wrap">
          <ol className="border-t border-ink">
            {cv.experience.map((job) => (
              <li
                key={job.id}
                id={job.id}
                data-link={job.id}
                data-lens={job.lens.join(" ")}
                className="role-row grid scroll-mt-24 gap-x-10 gap-y-3 border-b border-line py-8 md:grid-cols-12 md:py-10"
              >
                <div className="md:col-span-3">
                  <p className="font-semibold">{tr(job.period, locale)}</p>
                  <p className="t-meta">{tr(job.location, locale)}</p>
                  <p className={`chip mt-3 ${kindStyle[job.kind]}`}>{tr(ui.kind[job.kind], locale)}</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="t-h3">{tr(job.role, locale)}</h2>
                  {job.company && <p className="mt-1 font-semibold text-accent">{tr(job.company, locale)}</p>}
                  <ul className="mt-4 max-w-[70ch] list-disc space-y-2 ps-5 marker:text-gilt">
                    {job.points.map((point) => (
                      <li key={tr(point, "en")}>{tr(point, locale)}</li>
                    ))}
                  </ul>
                  {job.tech.length > 0 && (
                    <div className="mt-5">
                      <TechList items={job.tech} label={tr(ui.technologies, locale)} />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </LinkedHover>

      <Section id="leadership" title={tr(ui.leadership, locale)} aside={tr(cv.leadershipNote, locale)} className="mt-6">
        <ul className="divide-y divide-line">
          {cv.leadership.map((item) => (
            <li
              key={tr(item.role, "en") + tr(item.org, "en")}
              className="grid gap-x-10 gap-y-1 py-5 first:pt-0 md:grid-cols-12"
            >
              <p className="t-meta md:col-span-3 md:pt-1">{tr(item.period, locale)}</p>
              <div className="md:col-span-9">
                <h3 className="text-[1.15rem] font-semibold">{tr(item.role, locale)}</h3>
                <p className="text-accent">{tr(item.org, locale)}</p>
                <p className="mt-2 max-w-[68ch]">{tr(item.detail, locale)}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
