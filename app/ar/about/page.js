import AboutView from "@/views/AboutView";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";

export const metadata = { title: tr(ui.about, "ar") };

export default function About() {
  return <AboutView locale="ar" />;
}
