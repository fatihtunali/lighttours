"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { dayTours, cabinCharters } from "@/data/tours";
import { images } from "@/data/images";

const tourImages: Record<string, string> = {
  cappadocia: images.tours.cappadocia,
  pamukkale: images.tours.pamukkale,
  ephesus: images.tours.ephesus,
  dalyan: images.tours.fethiye,
  "fethiye-kekova-7n": images.hero.main2,
  "fethiye-marmaris-7n": images.yachts.gallery1,
};

export default function PopularTours() {
  const t = useTranslations("tours");
  const locale = useLocale();
  const popularDayTours = dayTours.slice(0, 4);
  const popularCabinCharters = cabinCharters.slice(0, 2);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">{t("subtitle")}</span>
          <h2 className="section-title mt-2">{t("title")}</h2>
          <p className="section-subtitle mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Featured Cabin Charters */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17h18M5 17l2-9h10l2 9" />
            </svg>
            {t("featuredCruises")}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {popularCabinCharters.map((tour) => (
              <Link
                key={tour.id}
                href={`/${locale}/cabin-charter`}
                className="group card flex flex-col md:flex-row overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full md:w-2/5 h-48 md:h-auto">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${tourImages[tour.id] || tourImages.cappadocia}')` }}
                  />
                  <div className="absolute top-4 left-4 bg-[var(--secondary)] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t("popular")}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[var(--muted)] text-sm mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tour.duration}
                    </div>
                    <h4 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {tour.name}
                    </h4>
                    <p className="text-[var(--muted)] text-sm mb-4">{tour.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tour.highlights.slice(0, 3).map((highlight) => (
                        <span key={highlight} className="text-xs bg-slate-100 text-[var(--muted)] px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    {tour.price && (
                      <div>
                        <span className="text-xs text-[var(--muted)]">{t("from")}</span>
                        <span className="text-2xl font-bold text-[var(--primary)] ml-1">
                          €{tour.price.from}
                        </span>
                        <span className="text-xs text-[var(--muted)]">/{t("person")}</span>
                      </div>
                    )}
                    <span className="text-[var(--primary)] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t("viewDetails")}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Day Tours Grid */}
        <div>
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l1.65-3.8a9 9 0 1112.67 0L21 21" />
            </svg>
            {t("popularDayTours")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDayTours.map((tour) => (
              <Link
                key={tour.id}
                href={`/${locale}/tours`}
                className="group card"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${tourImages[tour.id] || tourImages.cappadocia}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-white/80 text-xs flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tour.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                    {tour.name}
                  </h4>
                  <p className="text-[var(--muted)] text-sm line-clamp-2 mb-3">{tour.description}</p>
                  <div className="flex items-center text-[var(--primary)] font-semibold text-sm">
                    {t("learnMore")}
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href={`/${locale}/tours`} className="btn-primary">
            {t("viewAll")}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
