import Shell from "@/components/layout/Shell";
import { display, body } from "@/lib/fonts-latin";
import { displayAr } from "@/lib/fonts-arabic";
import { bodyAr } from "@/lib/fonts-arabic-body";
import { siteMetadata } from "@/lib/meta";
import "../globals.css";

// The shared frame for the English pages: fonts, <html lang="en">, navbar, footer.
// The Arabic fonts are declared too, for the Arabic side of the hero.
export const metadata = siteMetadata("en");
export { viewport } from "@/lib/meta";

export default function Layout({ children }) {
  return (
    <Shell locale="en" fontClass={`${display.variable} ${body.variable} ${displayAr.variable} ${bodyAr.variable}`}>
      {children}
    </Shell>
  );
}
