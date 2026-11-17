// Switching language turns the page over like a sheet of paper.
// The flag set here is read by the next page (see the script in Shell.js) and
// by the CSS in app/styles/motion.css ("html[data-turn]"). Browsers without
// cross-document view transitions simply load the other language.
export function turnTo(language, href) {
  try {
    sessionStorage.setItem("turn", language);
  } catch {
    // No storage: the page still changes language, just without the turn.
  }
  document.documentElement.dataset.turn = language;
  window.location.assign(href);
}
