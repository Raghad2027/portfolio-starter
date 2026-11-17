import Shell from "@/components/layout/Shell";
import NotFoundView from "@/views/NotFoundView";
import { display, body } from "@/lib/fonts-latin";
import { displayAr } from "@/lib/fonts-arabic";
import "./globals.css";

// GitHub Pages serves this page (404.html) for any address that does not exist.
export const metadata = { title: "Page not found | Yara Al-Mansouri" };

export default function GlobalNotFound() {
  return (
    <Shell locale="en" fontClass={`${display.variable} ${body.variable} ${displayAr.variable}`}>
      <NotFoundView locale="en" />
    </Shell>
  );
}
