import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { tr } from "@/lib/i18n";

// Title and description for Google and link previews, in each language.
export function siteMetadata(locale) {
  const name = tr(cv.name, locale);
  const title = `${name} | ${tr(cv.titles[0], locale)}`;
  const description = tr(ui.siteDescription, locale);
  return {
    title: { default: title, template: `%s | ${tr(cv.shortName, locale)}` },
    description,
    authors: [{ name: tr(cv.name, "en") }],
    openGraph: {
      type: "profile",
      title,
      description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
    },
  };
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1322" },
  ],
};
