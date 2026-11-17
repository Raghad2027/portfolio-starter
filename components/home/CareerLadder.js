import { Link } from "next-view-transitions";
import { cv } from "@/data/cv";
import { localePath, tr } from "@/lib/i18n";

// Her full-time roles as a staircase, oldest at the bottom step. Each step is
// a little higher than the last and shows the team she led where the CV gives
// a number. The shape is CSS (see .ladder in app/styles/experience.css); the steps come from
// cv.js, so a new role adds a new step.
export default function CareerLadder({ locale }) {
  const steps = cv.experience.filter((job) => job.kind === "full").reverse();

  return (
    <ol className="ladder" style={{ "--steps": steps.length }}>
      {steps.map((job, i) => (
        <li key={job.id} style={{ "--i": i }} data-lens={job.lens.join(" ")}>
          <Link href={localePath(locale, `/experience#${job.id}`)} className="ladder-step">
            <span className="font-display text-[1.5rem] leading-none font-semibold text-gilt">
              {job.span[0].slice(0, 4)}
            </span>
            <span className="mt-2 block leading-snug font-semibold">{tr(job.role, locale)}</span>
            <span className="t-meta mt-1 block">{tr(job.company, locale)}</span>
            {job.team && (
              <span className="mt-3 block">
                <bdi className="block font-display text-[1.9rem] leading-none font-medium text-accent">
                  {job.team.value}
                </bdi>
                <span className="t-meta">{tr(job.team.label, locale)}</span>
              </span>
            )}
          </Link>
        </li>
      ))}
    </ol>
  );
}
