"use client";

// Light / dark switch. The choice is saved in localStorage and applied
// before the page paints (see the script in Shell.js), so there is no flash.
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "@/components/ui/Icons";
import { toggleTheme } from "@/lib/theme";

function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const getTheme = () => document.documentElement.dataset.theme || "light";
const getServerTheme = () => "light";

export default function ThemeToggle({ toDark, toLight }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  return (
    <button type="button" onClick={toggleTheme} aria-label={theme === "dark" ? toLight : toDark} className="icon-btn">
      <Moon className="dark:hidden" />
      <Sun className="hidden dark:block" />
    </button>
  );
}
