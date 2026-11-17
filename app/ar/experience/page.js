import ExperienceView from "@/views/ExperienceView";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";

export const metadata = { title: tr(ui.experience, "ar") };

export default function Experience() {
  return <ExperienceView locale="ar" />;
}
