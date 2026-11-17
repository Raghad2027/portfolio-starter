// Switch between the light and dark themes and remember the choice.
// Used by the theme button and by the command menu.
export function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Private browsing can block storage. The switch still works for this visit.
  }
}
