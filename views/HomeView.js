import { Link } from "next-view-transitions";
import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { localePath, tr } from "@/lib/i18n";
import { withBase } from "@/lib/withBase";
import Hero from "@/components/home/Hero";
import Section from "@/components/layout/Section";
import ProjectCard from "@/components/projects/ProjectCard";
import LanguageSplit from "@/components/home/LanguageSplit";
import Ribbon3D from "@/components/home/Ribbon3D";
import LensBar from "@/components/ui/LensBar";
import LiveProof from "@/components/home/LiveProof";
import CareerLadder from "@/components/home/CareerLadder";
import SealShelf from "@/components/home/SealShelf";
import FoilDriver from "@/components/recognition/FoilDriver";
import Signature from "@/components/home/Signature";
import { Arrow, Download } from "@/components/ui/Icons";

// A "see more" link shown beside a section heading.
function More({ href, children }) {
  return (
    <Link href={href} className="link inline-flex items-center gap-2 text-ink">
      {children}
      <Arrow />
    </Link>
  );
}

export default function HomeView({ locale }) {
  const featured = cv.projects.filter((p) => p.featured);
  const currentRole = cv.experience[0];
  // The two claims the site can check against itself: load time and accessibility.
  const claims = [currentRole.points[2], currentRole.points[3]].map((point) => tr(point, locale));

  // Structured data so search engines understand who this page is about.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: tr(cv.name, locale),
    honorificSuffix: tr(cv.suffix, locale),
    jobTitle: cv.titles.map((t) => tr(t, locale)),
    email: `mailto:${cv.contact.email}`,
    address: tr(cv.location, locale),
    sameAs: cv.links.map((l) => l.url),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero: one name, two scripts, two directions ───────── */}
      <section className="wrap pt-10 pb-8 md:pt-16 md:pb-10">
        <LanguageSplit
          primary={locale}
          label={tr(ui.split.label, locale)}
          grip={tr(ui.split.grip, locale)}
          english={<Hero locale="en" mirror={locale !== "en"} />}
          arabic={<Hero locale="ar" mirror={locale !== "ar"} />}
          ribbon={
            <>
              {/* One calligraphy stroke in 3D (WebGL) between the two scripts.
                  The thin two-way arrow is the fallback if WebGL is unavailable. */}
              <Ribbon3D className="absolute inset-x-[calc(-1*clamp(1.25rem,4vw,2.5rem))] inset-y-[-22%]" />
              <div className="axis absolute inset-x-0 top-1/2 flex items-center text-gilt" dir="ltr">
                <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M7 1 2 6l5 5" />
                </svg>
                <span className="-mx-[9px] h-px flex-1 bg-current" />
                <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="m5 1 5 5-5 5" />
                </svg>
              </div>
            </>
          }
        />
      </section>

      <div className="wrap pb-10 md:pb-14">
        <LensBar locale={locale} />
      </div>

      {/* ── Career highlights ─────────────────────────────────── */}
      <div className="band-tint">
        <Section id="highlights" title={tr(ui.highlights, locale)}>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-9 lg:grid-cols-4">
            {cv.highlights.map((h) => (
              <li key={tr(h.text, "en")} data-lens={h.lens.join(" ")}>
                <bdi className="t-num block">{h.value}</bdi>
                <span className="mt-2 block max-w-[24ch] text-[0.98rem] leading-normal text-muted">
                  {tr(h.text, locale)}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* ── Her claims, measured live ─────────────────────────── */}
      <Section id="proof" title={tr(ui.proof.title, locale)}>
        <LiveProof
          claims={claims}
          labels={{
            cvSays: tr(ui.proof.cvSays, locale),
            live: tr(ui.proof.live, locale),
            measuring: tr(ui.proof.measuring, locale),
            lcp: tr(ui.proof.lcp, locale),
            fcp: tr(ui.proof.fcp, locale),
            contrast: tr(ui.proof.contrast, locale),
          }}
        />
      </Section>

      {/* ── Selected work ─────────────────────────────────────── */}
      <Section
        id="work"
        title={tr(ui.selectedWork, locale)}
        aside={
          <More href={localePath(locale, "/projects")}>
            {tr(ui.allProjects, locale).replace("{n}", cv.projects.length)}
          </More>
        }
      >
        {/* A hand of cards: fanned on a desktop, a plain grid on touch screens.
            Hover lifts a card out of the hand and turns it over. */}
        <ul className="hand">
          {featured.map((project, i) => {
            const offset = i - (featured.length - 1) / 2;
            return (
              <li
                key={project.slug}
                data-lens={project.lens.join(" ")}
                style={{ "--rot": `${offset * 4}deg`, "--drop": `${offset * offset * 0.5}rem` }}
              >
                <ProjectCard project={project} locale={locale} />
              </li>
            );
          })}
        </ul>
      </Section>

      {/* ── Career ladder ─────────────────────────────────────── */}
      <Section
        id="ladder"
        title={tr(ui.ladder, locale)}
        aside={<More href={localePath(locale, "/experience")}>{tr(ui.fullTimeline, locale)}</More>}
      >
        <CareerLadder locale={locale} />
      </Section>

      {/* ── Recognition: a shelf of award seals ───────────────── */}
      <Section
        id="recognition"
        title={tr(ui.recognition, locale)}
        aside={<More href={localePath(locale, "/recognition")}>{tr(ui.allRecognition, locale)}</More>}
      >
        <FoilDriver />
        <SealShelf
          hint={tr(ui.shelf.hint, locale)}
          awards={cv.awards.map((a) => ({
            id: a.id,
            year: a.year,
            name: tr(a.name, locale),
            issuer: tr(a.issuer, locale),
            reason: tr(a.reason, locale),
            lens: a.lens.join(" "),
          }))}
        />
      </Section>

      {/* ── Contact ───────────────────────────────────────────── */}
      <div className="band-ink mt-10">
        <Section id="contact" title={tr(ui.contact, locale)} className="scroll-mt-20 md:pb-20">
          <Signature className="mb-10 max-w-[26rem] text-gilt md:mb-14" label={tr(cv.shortName, "ar")} />
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <dl className="space-y-6">
                <div>
                  <dt className="t-meta">{tr(ui.email, locale)}</dt>
                  <dd>
                    <a
                      href={`mailto:${cv.contact.email}`}
                      dir="ltr"
                      className="link font-display text-[clamp(1.5rem,3.4vw,2.4rem)] leading-tight break-all"
                    >
                      {cv.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="t-meta">{tr(ui.phone, locale)}</dt>
                  <dd>
                    <a href={`tel:${cv.contact.phone.replace(/\s/g, "")}`} className="link text-[1.2rem]">
                      <bdi dir="ltr">{cv.contact.phone}</bdi>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="t-meta">{tr(ui.basedIn, locale)}</dt>
                  <dd className="text-[1.2rem]">{tr(cv.location, locale)}</dd>
                </div>
              </dl>
              {cv.cvFile && (
                <a href={withBase(`/${cv.cvFile}`)} download className="btn btn-solid mt-8">
                  <Download />
                  {tr(ui.downloadCv, locale)}
                </a>
              )}
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <h3 className="t-meta">{tr(ui.profiles, locale)}</h3>
              <ul className="mt-2 divide-y divide-line border-y border-line">
                {cv.links.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} className="group flex flex-wrap items-baseline justify-between gap-x-4 py-2.5">
                      <span className="font-semibold transition-colors group-hover:text-accent">
                        {tr(l.label, locale)}
                      </span>
                      <span className="t-meta" dir="ltr">
                        {l.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
