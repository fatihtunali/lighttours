"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

// Map of route segments to translation keys
const routeTranslationMap: Record<string, string> = {
  tours: "nav.tours",
  "yacht-charter": "nav.yachtCharter",
  "cabin-charter": "nav.cabinCharter",
  transfer: "nav.transfer",
  "car-rental": "nav.carRental",
  about: "nav.about",
  contact: "nav.contact",
  blog: "nav.blog",
  faq: "nav.faq",
  privacy: "footer.privacy",
  terms: "footer.terms",
  cookies: "footer.cookies",
};

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  // Generate breadcrumbs from pathname if items not provided
  const breadcrumbs: BreadcrumbItem[] = items || generateBreadcrumbs(pathname, locale, t);

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumbs on home page
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${typeof window !== "undefined" ? window.location.origin : ""}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`py-3 ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="w-4 h-4 mx-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                {isLast ? (
                  <span
                    className="text-gray-600 font-medium"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

function generateBreadcrumbs(
  pathname: string,
  locale: string,
  t: ReturnType<typeof useTranslations>
): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  // Remove locale from segments
  if (segments[0] === locale) {
    segments.shift();
  }

  // Always add home
  breadcrumbs.push({
    label: t("nav.home"),
    href: `/${locale}`,
  });

  // Build breadcrumbs from remaining segments
  let currentPath = `/${locale}`;
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const translationKey = routeTranslationMap[segment];
    const label = translationKey ? t(translationKey) : formatSegment(segment);
    breadcrumbs.push({
      label,
      href: currentPath,
    });
  }

  return breadcrumbs;
}

function formatSegment(segment: string): string {
  // Convert kebab-case to Title Case
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Helper component to render breadcrumbs in a hero section
export function HeroBreadcrumbs({ className = "" }: { className?: string }) {
  return (
    <div className={`container mx-auto px-4 ${className}`}>
      <Breadcrumbs className="text-white/80 [&_a]:text-white [&_a:hover]:text-white/90 [&_span]:text-white" />
    </div>
  );
}
