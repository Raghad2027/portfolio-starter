import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { tr, years } from "@/lib/i18n";
import PrintButton from "@/components/ui/PrintButton";

// One heading and its content, kept together on a printed page where possible.
function Block({ title, children }) {
  return (
    <section className="cv-block">
      <h2 className="cv-heading">{title}</h2>
      {children}
    </section>
  );
}

// A row with a date (or year) on one side and the entry on the other.
function Row({ when, children }) {
  return (
    <div className="cv-row">
      <p className="t-meta">{when}</p>
      <div>{children}</div>
    </div>
  );
}

// The complete CV on one plain page, built from the same data as the rest of
// the site. Printing it (or "Save as PDF") gives a clean document: the print
// rules in app/styles/cv.css remove the navigation and use dark ink on white.
export default function CvView({ locale }) {
  const t = (value) => tr(value, locale);
  const comma = locale === "ar" ? "، " : ", ";

  return (
    <article className="wrap cv pt-10 md:pt-14">
      <header className="flex flex-wrap items-end justify-between gap-6 border-b border-ink pb-6">
        <div>
          <h1 className="t-h2">
            {t(cv.name)}
            {comma}
            {t(cv.suffix)}
          </h1>
          <p className="mt-2 font-semibold">{cv.titles.map(t).join(comma)}</p>
          <p className="t-meta mt-2">
            {t(cv.location)}
            {comma}
            <bdi dir="ltr">{cv.contact.phone}</bdi>
            {comma}
            <bdi dir="ltr">{cv.contact.email}</bdi>
          </p>
          <p className="t-meta" dir="ltr">
            {cv.links.map((link) => link.handle).join("  |  ")}
          </p>
        </div>
        <PrintButton>{t(ui.cvPage.print)}</PrintButton>
      </header>

      <Block title={t(ui.summary)}>
        <p>{t(cv.summary)}</p>
      </Block>

      <Block title={t(ui.highlights)}>
        <ul className="cv-list columns-2 gap-x-10">
          {cv.highlights.map((h) => (
            <li key={tr(h.text, "en")}>
              {/* Some highlight texts already begin with their own number. */}
              {!/^\d/.test(tr(h.text, "en")) && <bdi className="font-semibold">{h.value} </bdi>}
              {t(h.text)}
            </li>
          ))}
        </ul>
      </Block>

      <Block title={t(ui.skills)}>
        {cv.skills.map((skill) => (
          <p key={tr(skill.group, "en")} className="mt-1">
            <span className="font-semibold">{t(skill.group)}</span> ({t(ui.level[skill.level])}
            {comma}
            {years(skill.years, locale)}): {skill.items.map(t).join(comma)}
          </p>
        ))}
      </Block>

      <Block title={t(ui.experience)}>
        {cv.experience.map((job) => (
          <Row key={job.id} when={t(job.period)}>
            <h3 className="font-semibold">
              {t(job.role)}
              {job.company && (
                <>
                  {comma}
                  {t(job.company)}
                </>
              )}
            </h3>
            <p className="t-meta">{t(job.location)}</p>
            <ul className="cv-list">
              {job.points.map((point) => (
                <li key={tr(point, "en")}>{t(point)}</li>
              ))}
            </ul>
            {job.tech.length > 0 && (
              <p className="t-meta" dir="ltr">
                {job.tech.join(", ")}
              </p>
            )}
          </Row>
        ))}
      </Block>

      <Block title={t(ui.cvPage.projects)}>
        {cv.projects.map((project) => (
          <Row key={project.slug} when={t(project.period)}>
            <h3 className="font-semibold">{t(project.name)}</h3>
            <p className="t-meta">{[project.org, project.role, project.team].filter(Boolean).map(t).join(comma)}</p>
            <ul className="cv-list">
              <li>
                <span className="font-semibold">{t(ui.problem)}:</span> {t(project.problem)}
              </li>
              <li>
                <span className="font-semibold">{t(ui.action)}:</span> {t(project.action)}
              </li>
              <li>
                <span className="font-semibold">{t(ui.result)}:</span> {t(project.result)}
              </li>
            </ul>
            <p className="t-meta" dir="ltr">
              {project.tech.join(", ")}
            </p>
          </Row>
        ))}
      </Block>

      <Block title={t(ui.education)}>
        {cv.education.map((e) => (
          <Row key={tr(e.degree, "en")} when={t(e.period)}>
            <h3 className="font-semibold">
              {t(e.degree)}
              {comma}
              {t(e.school)}
            </h3>
            <p className="t-meta">{t(e.mode)}</p>
            <ul className="cv-list">
              {e.details.map((detail) => (
                <li key={tr(detail, "en")}>{t(detail)}</li>
              ))}
            </ul>
          </Row>
        ))}
      </Block>

      <Block title={t(ui.certifications)}>
        <p className="t-meta">{t(cv.certificationsNote)}</p>
        {cv.certifications.map((c) => (
          <Row key={c.name} when={c.year ?? t(ui.certStatus["in-progress"])}>
            <p>
              <span lang="en" dir="ltr" className="font-semibold">
                {c.name}
              </span>
              {comma}
              <span lang="en" dir="ltr">
                {c.issuer}
              </span>
              {comma}
              {c.note ? t(c.note) : t(ui.certStatus[c.status])}
              {c.id && (
                <>
                  {comma}
                  <bdi dir="ltr">{c.id}</bdi>
                </>
              )}
            </p>
          </Row>
        ))}
      </Block>

      <Block title={t(ui.awards)}>
        {cv.awards.map((a) => (
          <Row key={a.id} when={a.year}>
            <p>
              <span className="font-semibold">{t(a.name)}</span>
              {comma}
              {t(a.issuer)}. {t(a.reason)}
            </p>
          </Row>
        ))}
      </Block>

      <Block title={t(ui.patents)}>
        {cv.patents.map((p) => (
          <p key={tr(p.number, "en")} className="mt-1">
            <span className="font-semibold">{t(p.title)}</span>
            {comma}
            {t(p.number)}
            {comma}
            {t(p.date)}
          </p>
        ))}
      </Block>

      <Block title={t(ui.publications)}>
        <p className="t-meta">{t(cv.publicationsNote)}</p>
        <ol className="cv-list" lang="en" dir="ltr">
          {cv.publications.map((pub) => (
            <li key={pub.title}>
              {pub.authors} ({pub.year}). <span className="font-semibold">{pub.title}</span> {pub.venue}
            </li>
          ))}
        </ol>
      </Block>

      <Block title={`${t(ui.speaking)} ${locale === "ar" ? "و" : "and "}${t(ui.media)}`}>
        <p className="t-meta">{t(cv.talksNote)}</p>
        {cv.talks.map((talk) => (
          <Row key={tr(talk.title, "en")} when={talk.year}>
            <p>
              {t(talk.kind)}: <span className="font-semibold">{t(talk.title)}</span>
              {comma}
              {t(talk.event)}
              {comma}
              {t(talk.city)}
            </p>
          </Row>
        ))}
        {cv.media.map((m) => (
          <Row key={tr(m.title, "en")} when={t(m.date)}>
            <p>
              {t(m.kind)}: <span className="font-semibold">{t(m.title)}</span>
              {[m.outlet, m.detail].filter(Boolean).map((part) => comma + t(part))}
            </p>
          </Row>
        ))}
      </Block>

      <Block title={t(ui.leadership)}>
        <p className="t-meta">{t(cv.leadershipNote)}</p>
        {cv.leadership.map((item) => (
          <Row key={tr(item.role, "en") + tr(item.org, "en")} when={t(item.period)}>
            <p>
              <span className="font-semibold">{t(item.role)}</span>
              {comma}
              {t(item.org)}. {t(item.detail)}
            </p>
          </Row>
        ))}
      </Block>

      <Block title={t(ui.languages)}>
        <p>{cv.languages.map((l) => `${t(l.name)}: ${t(l.level)}`).join(locale === "ar" ? "؛ " : "; ")}</p>
      </Block>

      <Block title={t(ui.interests)}>
        <p>{cv.interests.map(t).join(locale === "ar" ? "؛ " : "; ")}</p>
      </Block>
    </article>
  );
}
