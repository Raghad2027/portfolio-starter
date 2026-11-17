import { Link } from "next-view-transitions";
import { cv } from "@/data/cv";
import { ui } from "@/data/ui";
import { dirOf, localePath, tr } from "@/lib/i18n";
import { withBase } from "@/lib/withBase";
import { Slide } from "@/components/ui/Motion";
import { Arrow, Download } from "@/components/ui/Icons";

// Keeps each word whole, so "Al-Mansouri" never breaks at the hyphen.
function Words({ text }) {
  return text.split(" ").map((word, i, all) => (
    <span key={word} className="inline-block">
      {word}
      {i < all.length - 1 && <>&nbsp;</>}
    </span>
  ));
}

// The top of the home page in one language. The home page renders it twice,
// once per language, and LanguageSplit lets the visitor drag between them.
// `mirror` marks the copy in the other language: it has no <h1> and no entrance
// motion, because the page's own language already provides both.
export default function Hero({ locale, mirror = false }) {
  const dir = dirOf(locale);
  const other = locale === "ar" ? "en" : "ar";
  const comma = locale === "ar" ? "، " : ", ";
  const [openQuote, closeQuote] = locale === "ar" ? ["«", "»"] : ["“", "”"];
  const coverStory = cv.media[0]; // "The engineer who designs in two directions"

  const name = (
    <>
      <Words text={tr(cv.name, locale)} />
      <span className="ms-[0.2em] inline-block align-top text-[0.3em] leading-[1.6] font-normal text-gilt">
        {tr(cv.suffix, locale)}
      </span>
    </>
  );
  const otherName = <Words text={tr(cv.name, other)} />;
  const otherNameProps = {
    lang: other,
    dir: dirOf(other),
    className: `t-hero other-script text-accent ${dir === "ltr" ? "text-right" : "text-left"}`,
  };

  return (
    <>
      {/* Row 1: her name in this language */}
      <div>
        <p className="t-meta">{tr(cv.location, locale)}</p>
        {mirror ? (
          <p className="t-hero mt-4 md:mt-6">{name}</p>
        ) : (
          <Slide as="h1" from="start" pageDir={dir} className="t-hero mt-4 md:mt-6">
            {name}
          </Slide>
        )}
      </div>

      {/* Row 2: left empty here. The 3D ribbon is drawn in this row by HomeView. */}
      <div aria-hidden="true" className="-my-3 h-[clamp(8.5rem,21vw,17rem)] md:-my-8" />

      {/* Row 3: her name in the other script, then who she is */}
      <div>
        {mirror ? (
          <p {...otherNameProps}>{otherName}</p>
        ) : (
          <Slide
            as="p"
            from="end"
            delay={0.12}
            pageDir={dir}
            aria-label={`${tr(ui.secondName, locale)}: ${tr(cv.name, other)}`}
            {...otherNameProps}
          >
            {otherName}
          </Slide>
        )}

        <div className="mt-10 grid gap-x-10 gap-y-10 md:mt-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="t-h3">
              {cv.titles.map((title, i) => (
                <span key={title.lens} data-lens={title.lens}>
                  {tr(title, locale)}
                  {i < cv.titles.length - 1 && comma}
                </span>
              ))}
            </p>
            <p className="t-lead mt-5 max-w-[62ch]">{tr(cv.summary, locale)}</p>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <figure className="border-s-2 border-gilt ps-5">
              <blockquote className="t-h3">
                {openQuote}
                {tr(coverStory.title, locale)}
                {closeQuote}
              </blockquote>
              <figcaption className="t-meta mt-3">
                {[coverStory.kind, coverStory.outlet, coverStory.date].map((part) => tr(part, locale)).join(comma)}
              </figcaption>
            </figure>
            <div className="mt-8 flex flex-wrap gap-3">
              {cv.cvFile && (
                <a href={withBase(`/${cv.cvFile}`)} download className="btn btn-solid">
                  <Download />
                  {tr(ui.downloadCv, locale)}
                </a>
              )}
              <Link href={localePath(locale, "/projects")} className="btn">
                {tr(ui.seeWork, locale)}
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
