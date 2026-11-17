import Shell from "@/components/layout/Shell";
import { display, body } from "@/lib/fonts-latin";
import { displayAr } from "@/lib/fonts-arabic";
import { bodyAr } from "@/lib/fonts-arabic-body";
import { siteMetadata } from "@/lib/meta";
import "../globals.css";

// The shared frame for the Arabic pages: <html lang="ar" dir="rtl">, plus the Arabic fonts.
export const metadata = siteMetadata("ar");
export { viewport } from "@/lib/meta";

export default function Layout({ children }) {
  return (
    <Shell locale="ar" fontClass={`${display.variable} ${body.variable} ${displayAr.variable} ${bodyAr.variable}`}>
      {children}
    </Shell>
  );
}
