"use client";

import { useTranslations } from "next-intl";
import { companyInfo } from "@/data/company";
import { images } from "@/data/images";

const cars = [
  { category: "economy", cars: [
    { name: "Fiat Egea", type: "Sedan", seats: 5, transmission: "Manual", ac: true, price: "€25/day", image: images.cars.symbol },
    { name: "Renault Clio", type: "Hatchback", seats: 5, transmission: "Manual", ac: true, price: "€22/day", image: images.cars.clio },
  ]},
  { category: "compact", cars: [
    { name: "Toyota Corolla", type: "Sedan", seats: 5, transmission: "Automatic", ac: true, price: "€35/day", image: images.cars.opel },
    { name: "VW Golf", type: "Hatchback", seats: 5, transmission: "Automatic", ac: true, price: "€38/day", image: images.cars.citroen },
  ]},
  { category: "suv", cars: [
    { name: "Nissan Qashqai", type: "SUV", seats: 5, transmission: "Automatic", ac: true, price: "€55/day", image: images.cars.opel },
    { name: "Toyota RAV4", type: "SUV", seats: 5, transmission: "Automatic", ac: true, price: "€65/day", image: images.cars.citroen },
  ]},
  { category: "premium", cars: [
    { name: "Mercedes C-Class", type: "Sedan", seats: 5, transmission: "Automatic", ac: true, price: "€95/day", image: images.cars.audi },
    { name: "BMW 3 Series", type: "Sedan", seats: 5, transmission: "Automatic", ac: true, price: "€99/day", image: images.cars.audi },
  ]},
];

export default function CarRentalPage() {
  const t = useTranslations("carRental");

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${images.services.carRental}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        <div className="container-custom relative z-10">
          <span className="text-[var(--primary-light)] font-semibold text-sm uppercase tracking-wider">{t("hero.subtitle")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">{t("hero.title")}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{t("hero.description")}</p>
        </div>
      </section>

      {/* Quick Booking Form */}
      <section className="py-8 bg-white shadow-lg relative -mt-16 mx-4 lg:mx-auto max-w-5xl rounded-2xl z-20">
        <div className="px-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-[var(--muted)] mb-1">{t("booking.pickup")}</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none">
                <option>{t("booking.locations.airport")}</option>
                <option>{t("booking.locations.office")}</option>
                <option>{t("booking.locations.hotel")}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[var(--muted)] mb-1">{t("booking.pickupDate")}</label>
              <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none" />
            </div>
            <div>
              <label className="block text-sm text-[var(--muted)] mb-1">{t("booking.returnDate")}</label>
              <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none" />
            </div>
            <div className="flex items-end">
              <a href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hi! I'd like to rent a car.`} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center">{t("booking.checkAvailability")}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50 mt-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["selection", "pickup", "insurance", "cancel", "fuel", "support"].map((key) => (
              <div key={key} className="text-center">
                <span className="text-3xl mb-2 block">{key === "selection" ? "🚗" : key === "pickup" ? "📍" : key === "insurance" ? "🛡️" : key === "cancel" ? "🔄" : key === "fuel" ? "⛽" : "📱"}</span>
                <h3 className="font-semibold text-sm mb-1">{t(`features.${key}.title`)}</h3>
                <p className="text-xs text-[var(--muted)]">{t(`features.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Fleet */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">{t("fleet.title")}</h2>
          <p className="section-subtitle text-center mx-auto mb-12">{t("fleet.subtitle")}</p>

          {cars.map((category) => (
            <div key={category.category} className="mb-12">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-[var(--primary)] rounded"></span>
                {t(`categories.${category.category}`)}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.cars.map((car) => (
                  <div key={car.name} className="card group">
                    <div className="relative h-40 overflow-hidden bg-slate-100">
                      <div className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${car.image}')` }} />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">{car.name}</h4>
                      <div className="flex flex-wrap gap-2 mb-3 text-xs text-[var(--muted)]">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {car.seats} {t("fleet.seats")}
                        </span>
                        <span>{car.transmission}</span>
                        {car.ac && <span>A/C</span>}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[var(--primary)]">{car.price}</span>
                        <a href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hi! I'd like to rent a ${car.name}.`} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--primary)] font-semibold hover:underline">{t("fleet.book")} →</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rental Terms */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">{t("info.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {["requirements", "insurance", "extras"].map((section) => (
              <div key={section} className="bg-white p-6 rounded-xl">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-sm">{section === "requirements" ? "✓" : section === "insurance" ? "🛡️" : "⭐"}</span>
                  {t(`info.${section}.title`)}
                </h3>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  {[0, 1, 2, 3].map((i) => (
                    <li key={i}>• {t(`info.${section}.items.${i}`)}</li>
                  ))}
                </ul>
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
          <a href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hi! I need a custom car rental quote.`} target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-4">{t("cta.button")}</a>
        </div>
      </section>
    </div>
  );
}
