"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { companyInfo } from "@/data/company";
import { images } from "@/data/images";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const yachts = [
  { id: "holiday-m", name: "Holiday M", type: "Luxury Gulet", length: "32m", cabins: 6, capacity: 12, crew: 5, price: "From €15,000/week", features: ["Air Conditioning", "Jacuzzi", "Water Sports", "WiFi"], image: images.yachts.holidayM },
  { id: "holiday-5", name: "Holiday 5", type: "Classic Gulet", length: "28m", cabins: 5, capacity: 10, crew: 4, price: "From €10,000/week", features: ["Air Conditioning", "Snorkeling Gear", "Fishing Equipment"], image: images.yachts.holiday5 },
  { id: "holiday-6", name: "Holiday 6", type: "Motor Yacht", length: "24m", cabins: 4, capacity: 8, crew: 3, price: "From €8,000/week", features: ["Fast Cruising", "Modern Interior", "Jet Ski"], image: images.yachts.gallery1 },
  { id: "holiday-10", name: "Holiday 10", type: "Luxury Gulet", length: "36m", cabins: 8, capacity: 16, crew: 6, price: "From €20,000/week", features: ["VIP Suite", "Spa", "Cinema Room", "Water Sports"], image: images.yachts.holiday10 },
  { id: "blue-dream", name: "Blue Dream", type: "Sailing Yacht", length: "22m", cabins: 4, capacity: 8, crew: 3, price: "From €6,000/week", features: ["Sailing Experience", "Eco-Friendly", "Intimate Setting"], image: images.yachts.uzay },
  { id: "aegean-star", name: "Aegean Star", type: "Motor Sailer", length: "30m", cabins: 6, capacity: 12, crew: 5, price: "From €12,000/week", features: ["Hybrid Power", "Spacious Deck", "BBQ Area"], image: images.yachts.holiday10x },
];

export default function YachtCharterPage() {
  const t = useTranslations("yachtCharter");
  const locale = useLocale();

  return (
    <div className="pt-32">
      {/* Breadcrumbs */}
      <div className="container-custom py-2">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${images.services.yachtCharter}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        <div className="container-custom relative z-10">
          <span className="text-[var(--primary-light)] font-semibold text-sm uppercase tracking-wider">{t("hero.subtitle")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">{t("hero.title")}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{t("hero.description")}</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "🛥️", key: "fleet" },
              { icon: "👨‍✈️", key: "crew" },
              { icon: "🗺️", key: "routes" },
              { icon: "🍽️", key: "service" },
            ].map((item) => (
              <div key={item.key} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-[var(--primary)]/5 transition-colors">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-lg mb-2">{t(`whyChoose.${item.key}.title`)}</h3>
                <p className="text-[var(--muted)] text-sm">{t(`whyChoose.${item.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">{t("fleet.title")}</h2>
            <p className="section-subtitle mx-auto">{t("fleet.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yachts.map((yacht) => (
              <div key={yacht.id} className="card group">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${yacht.image}')` }} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[var(--primary)]">{yacht.type}</div>
                  <div className="absolute bottom-4 right-4 bg-[var(--secondary)] text-white px-4 py-2 rounded-lg font-bold">{yacht.price}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">{yacht.name}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <span className="block text-[var(--muted)]">{t("specs.length")}</span>
                      <span className="font-semibold">{yacht.length}</span>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <span className="block text-[var(--muted)]">{t("specs.cabins")}</span>
                      <span className="font-semibold">{yacht.cabins}</span>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <span className="block text-[var(--muted)]">{t("specs.guests")}</span>
                      <span className="font-semibold">{yacht.capacity}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {yacht.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-1 rounded">{feature}</span>
                    ))}
                  </div>
                  <a href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hi! I'm interested in chartering ${yacht.name}`} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">{t("inquire")}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/contact`} className="btn-secondary">{t("cta.contact")}</Link>
            <a href={`https://wa.me/${companyInfo.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-white text-[var(--primary)] px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2">{t("cta.whatsapp")}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
