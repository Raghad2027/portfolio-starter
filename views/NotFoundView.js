import { Link } from "next-view-transitions";
import { ui } from "@/data/ui";
import { localePath, tr } from "@/lib/i18n";
import { Arrow } from "@/components/ui/Icons";

export default function NotFoundView({ locale }) {
  return (
    <div className="wrap py-24 md:py-32">
      <h1 className="t-page max-w-[14ch]">{tr(ui.notFoundTitle, locale)}</h1>
      <p className="t-lead mt-5 text-muted">{tr(ui.notFoundBody, locale)}</p>
      <Link href={localePath(locale, "/")} className="btn mt-8">
        {tr(ui.goHome, locale)}
        <Arrow />
      </Link>
    </div>
  );
}
