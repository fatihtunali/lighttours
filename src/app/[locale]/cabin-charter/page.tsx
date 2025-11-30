"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { cabinCharters } from "@/data/tours";
import { companyInfo } from "@/data/company";
import { images } from "@/data/images";

const routeImages: Record<string, string> = {
  "fethiye-kekova-7n": images.hero.main2,
  "fethiye-marmaris-7n": images.yachts.gallery1,
  "fethiye-olimpos-4n": images.hero.main3,
  "bodrum-gokova-7n": images.yachts.holidayM,
};

export default function CabinCharterPage() {
  const t = useTranslations("cabinCharter");
  const locale = useLocale();

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${images.services.cabinCharter}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        <div className="container-custom relative z-10">
          <span className="text-[var(--primary-light)] font-semibold text-sm uppercase tracking-wider">{t("hero.subtitle")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">{t("hero.title")}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{t("hero.description")}</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">{t("howItWorks.title")}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["step1", "step2", "step3", "step4"].map((step, i) => (
              <div key={step} className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-2xl font-bold">
                  {t(`howItWorks.${step}.step`)}
                </div>
                <h3 className="font-bold text-lg mb-2">{t(`howItWorks.${step}.title`)}</h3>
                <p className="text-[var(--muted)] text-sm">{t(`howItWorks.${step}.desc`)}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[var(--primary)]/20" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabin Types */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">{t("cabinTypes.title")}</h2>
          <p className="section-subtitle text-center mx-auto mb-12">{t("cabinTypes.subtitle")}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {["standard", "deluxe", "master"].map((type) => (
              <div key={type} className="card p-6 text-center hover:border-[var(--primary)] border-2 border-transparent transition-all">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">{t(`cabinTypes.${type}.name`)}</h3>
                <p className="text-[var(--muted)] mb-4">{t(`cabinTypes.${type}.desc`)}</p>
                <div className="text-2xl font-bold text-[var(--primary)]">€{t(`cabinTypes.${type}.price`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">{t("routes.title")}</h2>
          <p className="section-subtitle text-center mx-auto mb-12">{t("routes.subtitle")}</p>

          <div className="space-y-8">
            {cabinCharters.map((route) => (
              <div key={route.id} className="card flex flex-col lg:flex-row overflow-hidden group">
                <div className="relative lg:w-2/5 h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${routeImages[route.id] || routeImages["fethiye-kekova-7n"]}')` }} />
                  <div className="absolute top-4 left-4 bg-[var(--secondary)] text-white px-3 py-1 rounded-full text-sm font-semibold">{t("routes.popular")}</div>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[var(--muted)] flex items-center gap-1 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {route.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">{route.name}</h3>
                    <p className="text-[var(--muted)] mb-4">{route.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {route.highlights.map((h) => (
                        <span key={h} className="text-sm bg-slate-100 px-3 py-1 rounded-full">{h}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    {route.price && (
                      <div>
                        <span className="text-sm text-[var(--muted)]">{t("routes.from")}</span>
                        <span className="text-3xl font-bold text-[var(--primary)] ml-2">€{route.price.from}</span>
                        <span className="text-sm text-[var(--muted)]">{t("routes.perPerson")}</span>
                      </div>
                    )}
                    <a href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hi! I'm interested in the ${route.name} cabin charter cruise.`} target="_blank" rel="noopener noreferrer" className="btn-secondary">{t("routes.bookNow")}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">{t("included.title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🍽️", key: "meals" },
              { icon: "🛏️", key: "accommodation" },
              { icon: "👨‍✈️", key: "crew" },
              { icon: "⛽", key: "fuel" },
              { icon: "🏊", key: "activities" },
              { icon: "🧹", key: "cleaning" },
              { icon: "☕", key: "beverages" },
              { icon: "📸", key: "memories" },
            ].map((item) => (
              <div key={item.key} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold mb-1">{t(`included.${item.key}.title`)}</h3>
                <p className="text-sm text-[var(--muted)]">{t(`included.${item.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-xl text-white/80 mb-8">{t("cta.subtitle")}</p>
          <Link href={`/${locale}/#quote`} className="btn-secondary text-lg px-8 py-4">{t("cta.button")}</Link>
        </div>
      </section>
    </div>
  );
}
