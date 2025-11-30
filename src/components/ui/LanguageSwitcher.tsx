"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/request";

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
];

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
  className?: string;
}

export function LanguageSwitcher({ variant = "light", className = "" }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => switchLocale(lang.code)}
            className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
              locale === lang.code
                ? variant === "light"
                  ? "text-[var(--primary)] bg-[var(--primary)]/10"
                  : "text-white bg-white/20"
                : variant === "light"
                ? "text-slate-600 hover:text-[var(--primary)]"
                : "text-white/70 hover:text-white"
            }`}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className={`mx-1 ${
              variant === "light" ? "text-slate-300" : "text-white/50"
            }`}>
              |
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
