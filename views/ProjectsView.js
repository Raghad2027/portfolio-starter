import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";
import PageHead from "@/components/layout/PageHead";
import ProjectCard from "@/components/projects/ProjectCard";

// Add a project to data/cv.js and its row shows up here automatically.
export default function ProjectsView({ locale }) {
  return (
    <>
      <PageHead title={tr(ui.work, locale)} intro={tr(ui.workIntro, locale)} lens={locale} />
      <div className="wrap pt-8 md:pt-12">
        <ul className="lens-sort grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cv.projects.map((project) => (
            <li key={project.slug} data-lens={project.lens.join(" ")}>
              <ProjectCard project={project} locale={locale} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
