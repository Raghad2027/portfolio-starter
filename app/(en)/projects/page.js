import ProjectsView from "@/views/ProjectsView";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";

export const metadata = { title: tr(ui.work, "en") };

export default function Projects() {
  return <ProjectsView locale="en" />;
}
