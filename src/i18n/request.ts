import { getRequestConfig } from "next-intl/server";
import { routing, locales, type Locale } from "./routing";

export { locales, type Locale } from "./routing";
export { defaultLocale, localeNames, localeFlags } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
