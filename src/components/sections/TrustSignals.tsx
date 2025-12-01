"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { companyInfo } from "@/data/company";

const icons: Record<string, ReactNode> = {
  certificate: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  clock: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  support: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  price: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const trustItems = [
  { icon: "certificate", key: "licensed" },
  { icon: "clock", key: "experience" },
  { icon: "support", key: "support" },
  { icon: "price", key: "bestPrice" },
];

export default function TrustSignals() {
  const t = useTranslations("trust");

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">{t("subtitle")}</span>
          <h2 className="section-title mt-2">{t("title")}</h2>
          <p className="section-subtitle mx-auto">
            {t("description", { years: companyInfo.yearsOfExperience })}
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.key}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
                {icons[item.icon]}
              </div>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{t(`items.${item.key}.title`)}</h3>
              <p className="text-[var(--muted)] text-sm">{t(`items.${item.key}.description`)}</p>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* TURSAB Badge */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[var(--primary)] font-bold text-sm">TURSAB</span>
                </div>
                <div className="text-white">
                  <span className="block text-sm opacity-80">{t("licensedAgency")}</span>
                  <span className="text-2xl font-bold">#{companyInfo.tursabNo}</span>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{t("cta.title")}</h3>
              <p className="opacity-80">{t("cta.subtitle")}</p>
            </div>

            {/* CTA */}
            <div className="text-center md:text-right">
              <a
                href={`https://wa.me/${companyInfo.contact.whatsapp}?text=${encodeURIComponent(t("cta.whatsappMessage"))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
              >
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t("cta.button")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
