import RecognitionView from "@/views/RecognitionView";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";

export const metadata = { title: tr(ui.recognition, "en") };

export default function Recognition() {
  return <RecognitionView locale="en" />;
}
