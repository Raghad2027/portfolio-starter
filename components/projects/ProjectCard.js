import { Link } from "next-view-transitions";
import { ui } from "@/data/ui";
import { localePath, tr } from "@/lib/i18n";
import { Arrow } from "@/components/ui/Icons";

// One project as a card you turn over. The front asks the question (the
// problem); the back answers it (the result). With a mouse or keyboard the
// card flips in 3D; on a touch screen both sides are shown, one under the
// other. Either way the whole card links to the case study.
// The card shape and corner marks are after dqnamo's Playing Cards.
export default function ProjectCard({ project, locale, headingLevel = "h3" }) {
  const Heading = headingLevel;
  const year = project.span[0].slice(0, 4);
  const metric = project.metrics[0];

  return (
    <Link href={localePath(locale, `/projects/${project.slug}`)} className="pcard">
      <span className="pcard-inner">
        {/* Front: the problem */}
        <span className="pcard-face pcard-front">
          <span className="card-index" aria-hidden="true">
            {year}
          </span>
          <Heading className="t-h3 mt-10">{tr(project.name, locale)}</Heading>
          <span className="t-meta mt-2 block">{tr(project.org, locale)}</span>
          <span className="mt-6 block">
            <span className="t-meta block">{tr(ui.problem, locale)}</span>
            <span className="mt-1 block">{tr(project.problem, locale)}</span>
          </span>
          <span className="card-index card-index-end" aria-hidden="true">
            {year}
          </span>
        </span>

        {/* Back: the result */}
        <span className="pcard-face pcard-back">
          <span className="t-meta block">{tr(ui.result, locale)}</span>
          <bdi className="t-num mt-3 block">{tr(metric.value, locale)}</bdi>
          <span className="mt-1 block">{tr(metric.label, locale)}</span>
          <span className="mt-6 block text-[0.98rem]">{tr(project.result, locale)}</span>
          <span className="mt-auto flex items-center gap-2 pt-6 font-semibold">
            {tr(ui.readCase, locale)}
            <Arrow />
          </span>
        </span>
      </span>
    </Link>
  );
}
