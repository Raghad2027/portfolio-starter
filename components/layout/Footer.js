import Image from "next/image";
import { Link } from "next-view-transitions";
import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { localePath, tr } from "@/lib/i18n";
import { withBase } from "@/lib/withBase";
// Imported (not a /public path) so it keeps working on GitHub Pages.
import mark from "@/assets/mark.svg";

export default function Footer({ locale }) {
  return (
    <footer className="band-ink border-t border-line">
      <div className="wrap grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image src={mark} alt="" width={40} height={40} className="mb-4 rounded-[8px]" />
          <p className="t-h3">
            {tr(cv.name, locale)}, {tr(cv.suffix, locale)}
          </p>
          <p className="t-meta mt-2 max-w-[38ch]">
            {cv.titles.map((t) => tr(t, locale)).join(locale === "ar" ? "، " : ", ")}
          </p>
        </div>
        <nav aria-label={tr(ui.onThisPage, locale)}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
            {ui.nav.map((item) => (
              <li key={item.key}>
                <Link href={localePath(locale, item.path)} className="link">
                  {tr(item.label, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-1">
          <li>
            <a href={`mailto:${cv.contact.email}`} className="link break-all" dir="ltr">
              {cv.contact.email}
            </a>
          </li>
          {cv.cvFile && (
            <li>
              <a href={withBase(`/${cv.cvFile}`)} download className="link">
                {tr(ui.downloadCv, locale)}
              </a>
            </li>
          )}
          <li>
            <Link href={localePath(locale, "/cv")} className="link">
              {tr(ui.cvPage.link, locale)}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
