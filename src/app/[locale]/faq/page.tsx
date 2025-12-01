"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { companyInfo } from "@/data/company";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function FAQPage() {
  const t = useTranslations("faq");
  const locale = useLocale();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const categories = ["yachtCharter", "cabinCharter", "dayTours", "transfers"];

  return (
    <div className="pt-32">
      {/* Breadcrumbs */}
      <div className="container-custom py-2">
        <Breadcrumbs />
      </div>

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-white/60 font-semibold text-sm uppercase tracking-wider">{t("hero.subtitle")}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{t("hero.title")}</h1>
            <p className="text-xl text-white/80">{t("hero.description")}</p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {categories.map((cat, catIndex) => (
              <div key={cat} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-lg">
                    {catIndex + 1}
                  </span>
                  {t(`categories.${cat}.title`)}
                </h2>
                <div className="space-y-4">
                  {(t.raw(`categories.${cat}.questions`) as Array<{ q: string; a: string }>).map((question, qIndex) => {
                    const key = `${catIndex}-${qIndex}`;
                    const isOpen = openItems[key];
                    return (
                      <div key={qIndex} className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                        >
                          <span className="font-semibold pr-4">{question.q}</span>
                          <svg
                            className={`w-5 h-5 flex-shrink-0 text-[var(--primary)] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 text-[var(--muted)]">{question.a}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="section-title mb-4">{t("cta.title")}</h2>
          <p className="section-subtitle mx-auto mb-8">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/contact`} className="btn-primary">{t("cta.contact")}</Link>
            <a href={`https://wa.me/${companyInfo.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-secondary">{t("cta.whatsapp")}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
