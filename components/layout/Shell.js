import { ViewTransitions } from "next-view-transitions";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { dirOf, tr } from "@/lib/i18n";
import { buildSearchIndex } from "@/lib/searchIndex";
import { withBase } from "@/lib/withBase";

// Runs before the page paints, so nothing flashes:
// 1. the saved theme, or the device setting;
// 2. the saved "Read this as" lens;
// 3. the flag that says this page was reached by switching language (the page turn).
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.dataset.theme=t;var l=localStorage.getItem("lens");if(l&&l!=="all"){d.dataset.lens=l}var k=sessionStorage.getItem("turn");if(k){sessionStorage.removeItem("turn");d.dataset.turn=k;setTimeout(function(){delete d.dataset.turn},1500)}}catch(e){}})()`;

// The shared frame for every page: <html> in the right language and
// direction, the navbar, the page, the footer.
export default function Shell({ locale, fontClass, children }) {
  return (
    // ViewTransitions animates the change from one page to the next (see app/styles/motion.css).
    <ViewTransitions>
      <html lang={locale} dir={dirOf(locale)} className={fontClass} suppressHydrationWarning>
        {/* In the App Router the root layout owns <head>; the lint rule below is for the old Pages Router. */}
        {/* eslint-disable-next-line @next/next/no-head-element */}
        <head>
          <script dangerouslySetInnerHTML={{ __html: bootScript }} />
          {/* Without JavaScript, show animated pieces in their final state. */}
          <noscript>
            <style>{`[data-motion]{transform:none!important;opacity:1!important}`}</style>
          </noscript>
        </head>
        <body className="flex min-h-screen flex-col">
          <a href="#main" className="skip-link">
            {tr(ui.skip, locale)}
          </a>
          <Navbar
            locale={locale}
            name={tr(cv.shortName, locale)}
            search={buildSearchIndex(locale)}
            cvHref={withBase(`/${cv.cvFile}`)}
          />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer locale={locale} />
        </body>
      </html>
    </ViewTransitions>
  );
}
