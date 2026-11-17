# Yara Al-Mansouri · Portfolio

A bilingual (English and Arabic) portfolio built from the CV provided for **Portfolio Summit 2026**, on the workshop starter: **Next.js (App Router)**, **JavaScript** and **Tailwind CSS**, exported as a static site for **GitHub Pages**.

The idea comes from a line in the CV itself, the cover story _“The engineer who designs in two directions”_. The site makes that literal: on the home page you can drag between the English and Arabic layouts, a 3D calligraphy stroke joins her name in both scripts, and every page mirrors completely in Arabic.

## Run it

You need Node.js 20 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out  (if it builds, it deploys)
npm run lint
npm run format   # Prettier
```

## Deploy to GitHub Pages

Unchanged from the starter:

1. In the fork, open **Actions** and enable workflows.
2. **Settings → Pages → Source: GitHub Actions**.
3. Push to `main`. The site appears at `https://<username>.github.io/<repo-name>/`.

## Where things are

```
app/                    Routes. One folder per URL, as Next.js expects.
  (en)/                 English pages:  /  /projects  /projects/[slug]  /experience  /recognition  /about  /cv
  ar/                   The same pages in Arabic under /ar, with lang="ar" dir="rtl"
  globals.css           Imports Tailwind and the files in styles/
  styles/               The site's CSS, one file per area (theme, base, controls, hero, projects, …)
data/
  cv.js                 THE WHOLE CV, in both languages. Every page reads from here.
  ui.js                 Interface text (navigation, headings, buttons) in both languages.
views/                  One view per page, shared by both languages. Route files only pass `locale`.
components/
  layout/               Page frame: Shell, Navbar, Footer, PageHead, Section, SectionNav, CommandMenu
  ui/                   Small shared pieces: Icons, Motion, Tilt, LensSwitch, TechList, Metric, …
  home/                 Hero, LanguageSplit, Ribbon3D, LiveProof, CareerLadder, SealShelf, Signature
  projects/             ProjectCard, Compare, KhattDemo
  experience/           Timeline, CareerTour, LinkedHover, ScrollToEnd
  recognition/          CertList, Seal, FoilDriver, Ticket
lib/                    Helpers: languages (i18n), fonts, metadata, search index, theme, withBase
assets/                 Fonts, the footer mark, the signature outlines (imported, so paths survive GitHub Pages)
public/                 The downloadable CV (PDF)
```

Files that start with `"use client"` are the interactive ones; everything else renders on the server at build time.

### How one page is built

Following `/projects/hirfa-ui` from URL to screen:

1. `app/(en)/projects/[slug]/page.js` receives the slug, finds the project in `data/cv.js`, and calls `notFound()` if there is none. `generateStaticParams` lists every slug so each page is built ahead of time.
2. It renders `views/ProjectView.js` with `locale="en"`. The Arabic route (`app/ar/projects/[slug]/page.js`) renders the same view with `locale="ar"`.
3. The view picks the right language with `tr(value, locale)` from `lib/i18n.js` and composes components from `components/`.
4. `app/(en)/layout.js` wraps it in `components/layout/Shell.js`: `<html lang dir>`, fonts, navbar, footer.

Add a project to `data/cv.js` and its card, its case-study page in both languages, its search entry and its line on the printable CV appear automatically.

## Workshop requirements

| Requirement                               | Where                                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| File-based routing                        | `app/(en)` and `app/ar`                                                                     |
| CV as data                                | `data/cv.js`                                                                                |
| One page per project, built ahead of time | `app/*/projects/[slug]/page.js` with `generateStaticParams`, awaited `params`, `notFound()` |
| Server Components by default              | Only interactive pieces use `"use client"`                                                  |
| Images with `next/image`                  | `components/layout/Footer.js` (imported, so the path works on GitHub Pages)                 |
| Fonts with `next/font`                    | `lib/fonts-*.js`, self-hosted from `assets/fonts`                                           |
| SEO metadata                              | `lib/meta.js`, per-page `metadata`, JSON-LD on the home page                                |
| Static export for GitHub Pages            | `next.config.mjs` and `.github/workflows/deploy.yml` from the starter                       |

### The six "stand out" extras

| Extra                               | Where                                                                                                        |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Dark mode that remembers the choice | `components/layout/ThemeToggle.js`, `lib/theme.js`, applied before paint in `components/layout/Shell.js`     |
| Motion with Framer Motion           | `components/ui/Motion.js`, `components/projects/Compare.js`                                                  |
| Arabic + English with full RTL      | Two route trees, logical CSS properties, `:lang()` and `:dir()` rules, Arabic fonts                          |
| Download CV                         | `public/Yara_Al-Mansouri_CV.pdf`, linked with `withBase()`; plus a print-ready page at `/cv`                 |
| Mobile menu                         | `components/layout/Navbar.js` (closes on Escape and on navigation)                                           |
| Lighthouse 90+                      | Measured locally on a compressed static build, mobile profile: 98–100 on the pages tested, accessibility 100 |

## What makes it different

| Piece                               | File                                                                        | Notes                                                                                                                                        |
| ----------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Drag between two languages          | `components/home/LanguageSplit.js`, `components/home/Hero.js`               | The hero is rendered in both languages and clipped either side of a divider you drag. Keyboard: arrow keys on the grip.                      |
| 3D calligraphy stroke               | `components/home/Ribbon3D.js`                                               | WebGL with three.js and a custom shader. Fetched only on the visitor's first pointer move, wheel, touch or key press. Pauses off screen.     |
| "Read this as…" lens                | `components/ui/LensSwitch.js`, `lens` tags in `data/cv.js`                  | Engineering manager, design lead or researcher: the site highlights what matters to that reader. Nothing is hidden. Remembered across pages. |
| Her claims, measured live           | `components/home/LiveProof.js`                                              | Two claims from the CV next to this page's real paint time (PerformanceObserver) and text contrast (computed from the theme colors).         |
| The page turns over                 | `lib/turn.js`, `app/styles/`                                                | Switching language flips the page like a sheet of paper (cross-document view transitions; other browsers simply load the page).              |
| Page transitions                    | `next-view-transitions`, `app/styles/`                                      | Pages slide along the reading direction.                                                                                                     |
| "16 years in 60 seconds"            | `components/experience/CareerTour.js`                                       | A player that walks the career on the timeline, one role at a time.                                                                          |
| Career timeline                     | `components/experience/Timeline.js`, `components/experience/LinkedHover.js` | Drawn from the dates in `cv.js`; shows which roles overlapped. Bars and list rows light each other up.                                       |
| Career ladder                       | `components/home/CareerLadder.js`                                           | Full-time roles as a staircase, with team sizes where the CV gives them.                                                                     |
| Shelf of award seals                | `components/home/SealShelf.js`, `components/recognition/FoilDriver.js`      | Pick a foil seal up and it turns over. The foil light follows the pointer and the scroll.                                                    |
| Project cards that turn over        | `components/projects/ProjectCard.js`                                        | Problem on the front, result on the back, fanned like a hand of cards on the home page.                                                      |
| Search everything (Ctrl/Cmd + K)    | `components/layout/CommandMenu.js`, `lib/searchIndex.js`                    | `cmdk` inside a Radix dialog. Downloaded only when first opened.                                                                             |
| Live typography demo                | `components/projects/KhattDemo.js`                                          | On the Khatt case study: Radix sliders change size, spacing and line length of an Arabic paragraph.                                          |
| Before-and-after bars               | `components/projects/Compare.js`                                            | Any result written as `22 → 6` in `cv.js` becomes two bars on one scale.                                                                     |
| Tickets, stamps, signature, buttons | `components/recognition/Ticket.js`, `components/home/Signature.js`, CSS     | Talks as perforated tickets, patents as postage stamps, her name traced then inked, buttons with depth.                                      |
| Sticky section bar                  | `components/layout/SectionNav.js`                                           | On Recognition and About; marks the section being read.                                                                                      |
| Print-ready CV                      | `views/CvView.js`                                                           | The complete CV on one plain page; print rules give dark ink on white with no navigation.                                                    |

Every moving piece has a still version for people who turn on "reduce motion".

## Credits

- **Fonts:** Markazi Text and IBM Plex Sans / IBM Plex Sans Arabic, SIL Open Font License (licence files in `assets/fonts`).
- **Libraries:** Next.js, React, Tailwind CSS, Framer Motion, three.js, cmdk, Radix UI (Dialog, Slider), next-view-transitions (all MIT).
- **Command Menu:** adapted to JavaScript from uvain's component (Layro System), retrieved through 21st.dev.
- **Scramble Text:** adapted to JavaScript from dqnamo's component, retrieved through 21st.dev.
- **Ideas from dqnamo's Kitchen** (dqnamo.com/kitchen): the ticket, foil, stamp, playing-card, tactile-button and signature pieces are written from scratch for this site, after those studies.
- **Content:** the fictional CV provided by Portfolio Summit 2026.
