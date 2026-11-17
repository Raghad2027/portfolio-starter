import CvView from "@/views/CvView";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";

export const metadata = { title: tr(ui.cvPage.title, "ar") };

export default function Cv() {
  return <CvView locale="ar" />;
}
