"use client";

import dynamic from "next/dynamic";
import { Link, useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ui } from "@/data/ui";
import { dirOf, localePath, tr } from "@/lib/i18n";
import { toggleTheme } from "@/lib/theme";
import { turnTo } from "@/lib/turn";
import { withBase } from "@/lib/withBase";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { Menu } from "@/components/ui/Icons";
import { ScrollProgress } from "@/components/ui/Motion";

// The command menu (and the cmdk + Radix code it needs) is only downloaded
// the first time someone opens it.
const CommandMenu = dynamic(() => import("@/components/layout/CommandMenu"), { ssr: false });

export default function Navbar({ locale, name, search, cvHref }) {
  const pathname = usePathname() || "/";
  const router = useTransitionRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchLoaded, setSearchLoaded] = useState(false);

  // The same page without the "/ar" prefix, e.g. "/ar/projects/" -> "/projects".
  const bare = pathname.replace(/^\/ar(?=\/|$)/, "").replace(/\/$/, "") || "/";
  const other = locale === "ar" ? "en" : "ar";
  // A full URL, because changing language is a real page load (and a page turn).
  const otherPath = localePath(other, bare);
  const otherHref = withBase(otherPath === "/" ? "/" : `${otherPath}/`);

  const openSearch = () => {
    setSearchLoaded(true);
    setSearchOpen(true);
    setOpen(false);
  };

  // Escape closes the mobile menu. Ctrl/Cmd + K opens search.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchLoaded(true);
        setSearchOpen((isOpen) => !isOpen);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // What happens when a search result is chosen.
  function onSelect(item) {
    setSearchOpen(false);
    if (item.href) return router.push(item.href);
    if (item.action === "cv") window.location.assign(cvHref);
    if (item.action === "language") turnTo(other, otherHref);
    if (item.action === "theme") toggleTheme();
  }

  const isActive = (path) => !path.includes("#") && bare.startsWith(path);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-line bg-paper">
      <div className="wrap flex h-16 items-center justify-between gap-3">
        <Link
          href={localePath(locale, "/")}
          onClick={() => setOpen(false)}
          className="font-display text-[1.45rem] leading-none font-[number:var(--display-weight)] whitespace-nowrap sm:text-[1.75rem]"
        >
          {name}
        </Link>

        <nav aria-label={tr(ui.mainNav, locale)} className="hidden md:block">
          <ul className="flex items-center gap-6 text-[0.98rem] lg:gap-7">
            {ui.nav.map((item) => (
              <li key={item.key}>
                <Link
                  href={localePath(locale, item.path)}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className="border-b border-transparent py-1 transition-colors hover:text-accent aria-[current=page]:border-accent aria-[current=page]:text-accent"
                >
                  {tr(item.label, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={openSearch}
            aria-label={tr(ui.search, locale)}
            aria-keyshortcuts="Control+K Meta+K"
            title={`${tr(ui.search, locale)} (Ctrl K)`}
            className="icon-btn hidden sm:grid"
          >
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
          </button>
          {/* The other language, written in its own script. */}
          <a
            href={otherHref}
            hrefLang={other}
            lang={other}
            aria-label={tr(ui.otherLanguageLabel, locale)}
            onClick={(e) => {
              e.preventDefault();
              turnTo(other, otherHref);
            }}
            className={`icon-btn w-auto px-3 ${
              other === "ar" ? "font-display text-[1.45rem] leading-none" : "text-[0.95rem] font-semibold"
            }`}
          >
            {tr(ui.otherLanguage, locale)}
          </a>
          <ThemeToggle toDark={tr(ui.themeToDark, locale)} toLight={tr(ui.themeToLight, locale)} />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={tr(open ? ui.closeMenu : ui.menu, locale)}
            className="icon-btn md:hidden"
          >
            <Menu open={open} />
          </button>
        </div>
      </div>

      <ScrollProgress />

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        aria-label={tr(ui.mainNav, locale)}
        hidden={!open}
        className="border-t border-line bg-paper md:hidden"
      >
        <ul className="wrap py-3">
          <li className="border-b border-line">
            <button type="button" onClick={openSearch} className="t-h3 block w-full py-3 text-start">
              {tr(ui.search, locale)}
            </button>
          </li>
          {ui.nav.map((item) => (
            <li key={item.key} className="border-b border-line last:border-0">
              <Link
                href={localePath(locale, item.path)}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.path) ? "page" : undefined}
                className="t-h3 block py-3 aria-[current=page]:text-accent"
              >
                {tr(item.label, locale)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {searchLoaded && (
        <CommandMenu
          open={searchOpen}
          onOpenChange={setSearchOpen}
          groups={search}
          dir={dirOf(locale)}
          onSelect={onSelect}
          labels={{
            title: tr(ui.search, locale),
            placeholder: tr(ui.searchPlaceholder, locale),
            empty: tr(ui.searchEmpty, locale),
          }}
        />
      )}
    </header>
  );
}
