"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { images } from "@/data/images";

const serviceIcons: Record<string, ReactNode> = {
  "yacht-charter": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17h18M5 17l2-9h10l2 9M9 8V6a3 3 0 116 0v2M12 3v3" />
    </svg>
  ),
  "cabin-charter": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  tours: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21l1.65-3.8a9 9 0 1112.67 0L21 21M12 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
  "car-rental": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7M5 17h14a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2z" />
    </svg>
  ),
  transfer: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
};

const serviceImages: Record<string, string> = {
  "yacht-charter": images.services.yachtCharter,
  "cabin-charter": images.services.cabinCharter,
  tours: images.services.tours,
  "car-rental": images.services.carRental,
  transfer: images.services.transfer,
};

const servicesList = [
  { id: "yacht-charter", href: "/yacht-charter" },
  { id: "cabin-charter", href: "/cabin-charter" },
  { id: "tours", href: "/tours" },
  { id: "car-rental", href: "/car-rental" },
  { id: "transfer", href: "/transfer" },
];

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">{t("subtitle")}</span>
          <h2 className="section-title mt-2">{t("title")}</h2>
          <p className="section-subtitle mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <Link
              key={service.id}
              href={`/${locale}${service.href}`}
              className="group card relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${serviceImages[service.id]}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[var(--primary)] shadow-lg">
                  {serviceIcons[service.id]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {t(`items.${service.id}.title`)}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-4">
                  {t(`items.${service.id}.description`)}
                </p>
                <div className="flex items-center text-[var(--primary)] font-semibold text-sm">
                  {t("learnMore")}
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
