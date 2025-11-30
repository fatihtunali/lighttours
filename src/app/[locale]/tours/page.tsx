"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { dayTours, activities } from "@/data/tours";
import { companyInfo } from "@/data/company";
import { images } from "@/data/images";

const tourImages: Record<string, string> = {
  cappadocia: images.tours.cappadocia,
  pamukkale: images.tours.pamukkale,
  ephesus: images.tours.ephesus,
  dalyan: images.tours.fethiye,
  "kas-kekova": images.hero.main2,
  "tlos-saklikent": images.hero.main3,
  paragliding: images.hero.main1,
  diving: images.tours.diving,
  "jeep-safari": images.tours.jeepSafari,
  "horse-riding": images.tours.fethiye,
  "boat-tour": images.yachts.gallery1,
  fishing: images.tours.fishing,
};

export default function ToursPage() {
  const t = useTranslations("toursPage");
  const locale = useLocale();

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images.services.tours}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        <div className="container-custom relative z-10">
          <span className="text-[var(--primary-light)] font-semibold text-sm uppercase tracking-wider">{t("hero.subtitle")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b sticky top-[120px] z-40">
        <div className="container-custom">
          <div className="flex gap-4 overflow-x-auto pb-2">
            <a href="#day-tours" className="px-6 py-2 bg-[var(--primary)] text-white rounded-full font-semibold whitespace-nowrap">
              {t("tabs.dayTours")}
            </a>
            <a href="#activities" className="px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-full font-semibold whitespace-nowrap transition-colors">
              {t("tabs.activities")}
            </a>
            <Link href={`/${locale}/cabin-charter`} className="px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-full font-semibold whitespace-nowrap transition-colors">
              {t("tabs.blueCruises")} →
            </Link>
          </div>
        </div>
      </section>

      {/* Day Tours */}
      <section id="day-tours" className="py-20 bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title mb-4">{t("dayTours.title")}</h2>
          <p className="section-subtitle mb-12">
            {t("dayTours.subtitle")}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dayTours.map((tour) => (
              <div key={tour.id} className="card group">
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${tourImages[tour.id] || tourImages.cappadocia}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/80 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tour.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-[var(--muted)] text-sm mb-4 line-clamp-2">{tour.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.slice(0, 3).map((h) => (
                      <span key={h} className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-1 rounded">
                        {h}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hi! I'm interested in the ${tour.name} tour.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    {t("bookTour")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title mb-4">{t("activities.title")}</h2>
          <p className="section-subtitle mb-12">
            {t("activities.subtitle")}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div key={activity.id} className="card group">
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${tourImages[activity.id] || tourImages.paragliding}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[var(--secondary)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {t("adventure")}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white/80 text-sm flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {activity.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {activity.name}
                  </h3>
                  <p className="text-[var(--muted)] text-sm mb-4">{activity.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activity.highlights.slice(0, 3).map((h) => (
                      <span key={h} className="text-xs bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-1 rounded">
                        {h}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hi! I'm interested in ${activity.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    {t("bookNow")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">{t("whyBook.title")}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "✓", key: "bestPrice" },
              { icon: "🗣️", key: "guides" },
              { icon: "🚐", key: "transport" },
              { icon: "⭐", key: "groups" },
            ].map((item) => (
              <div key={item.key} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2">{t(`whyBook.${item.key}.title`)}</h3>
                <p className="text-sm text-[var(--muted)]">{t(`whyBook.${item.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <Link href={`/${locale}/#quote`} className="btn-secondary text-lg px-8 py-4">
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </div>
  );
}
