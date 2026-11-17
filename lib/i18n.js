// Small helpers for the two languages. English lives at "/", Arabic at "/ar".

export const locales = ["en", "ar"];

export function dirOf(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

// Pick the right language from a { en, ar } value. Plain strings pass through.
export function tr(value, locale) {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return value;
  return value[locale] ?? value.en;
}

// Turn a path like "/projects" into the same page in the given language.
export function localePath(locale, path) {
  if (locale !== "ar") return path;
  return path === "/" ? "/ar" : `/ar${path}`;
}

// Arabic uses the plural form for 3–10 and the singular for 11 and up.
export function years(n, locale) {
  if (locale !== "ar") return `${n} years`;
  return n >= 3 && n <= 10 ? `${n} سنوات` : `${n} سنة`;
}
