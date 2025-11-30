import { defineRouting } from "next-intl/routing";

export const locales = ["en", "tr", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always", // Always show locale prefix in URL
});

export const localeNames: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  tr: "🇹🇷",
  de: "🇩🇪",
};
