import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { localePath, tr } from "@/lib/i18n";

// Everything the command menu (Ctrl/Cmd + K) can jump to, built from cv.js on
// the server and handed to the menu as plain text. Add something to the CV and
// it becomes searchable.
export function buildSearchIndex(locale) {
  const t = (v) => tr(v, locale);
  const to = (path) => localePath(locale, path);
  const g = ui.searchGroups;

  return [
    {
      heading: t(g.pages),
      items: [
        { label: t(ui.home), href: to("/") },
        ...ui.nav.map((n) => ({ label: t(n.label), href: to(n.path) })),
        { label: t(ui.cvPage.link), href: to("/cv") },
      ],
    },
    {
      heading: t(g.projects),
      items: cv.projects.map((p) => ({
        label: t(p.name),
        hint: t(p.summary),
        keywords: p.tech.join(" "),
        href: to(`/projects/${p.slug}`),
      })),
    },
    {
      heading: t(g.experience),
      items: cv.experience.map((j) => ({
        label: t(j.role),
        hint: [j.company && t(j.company), t(j.period)].filter(Boolean).join(" / "),
        keywords: j.tech.join(" "),
        href: to(`/experience#${j.id}`),
      })),
    },
    {
      heading: t(g.awards),
      items: cv.awards.map((a) => ({
        label: t(a.name),
        hint: `${t(a.issuer)} / ${a.year}`,
        href: to("/recognition#awards"),
      })),
    },
    {
      heading: t(g.talks),
      items: cv.talks.map((k) => ({
        label: t(k.title),
        hint: `${t(k.event)} / ${t(k.city)}`,
        href: to("/recognition#speaking"),
      })),
    },
    {
      heading: t(g.publications),
      items: cv.publications.map((p) => ({
        label: p.title,
        hint: `${p.authors} (${p.year})`,
        href: to("/recognition#publications"),
      })),
    },
    {
      heading: t(g.certifications),
      items: cv.certifications.map((c) => ({
        label: c.name,
        hint: `${c.issuer}${c.year ? ` / ${c.year}` : ""}`,
        keywords: c.id || "",
        href: to("/recognition#certifications"),
      })),
    },
    {
      heading: t(g.education),
      items: cv.education.map((e) => ({
        label: t(e.degree),
        hint: `${t(e.school)} / ${t(e.period)}`,
        href: to("/about#education"),
      })),
    },
    {
      heading: t(g.skills),
      items: cv.skills.map((s) => ({
        label: t(s.group),
        hint: s.items.map(t).join(locale === "ar" ? "، " : ", "),
        href: to("/about#skills"),
      })),
    },
    {
      heading: t(g.actions),
      items: [
        cv.cvFile && { label: t(ui.downloadCv), action: "cv" },
        { label: t(ui.toggleTheme), action: "theme" },
        { label: t(ui.otherLanguageLabel), action: "language" },
      ].filter(Boolean),
    },
  ];
}
