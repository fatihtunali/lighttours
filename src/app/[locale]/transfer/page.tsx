"use client";

import { useTranslations } from "next-intl";
import { companyInfo } from "@/data/company";
import { images } from "@/data/images";

const routes = [
  { from: "Dalaman Airport", to: "Fethiye", distance: "60 km", duration: "50 min", price: "€40" },
  { from: "Dalaman Airport", to: "Oludeniz", distance: "70 km", duration: "60 min", price: "€45" },
  { from: "Dalaman Airport", to: "Hisaronu", distance: "65 km", duration: "55 min", price: "€45" },
  { from: "Dalaman Airport", to: "Kas", distance: "150 km", duration: "2.5 hrs", price: "€90" },
  { from: "Dalaman Airport", to: "Kalkan", distance: "120 km", duration: "2 hrs", price: "€75" },
  { from: "Dalaman Airport", to: "Marmaris", distance: "95 km", duration: "1.5 hrs", price: "€65" },
  { from: "Dalaman Airport", to: "Gocek", distance: "30 km", duration: "25 min", price: "€35" },
  { from: "Dalaman Airport", to: "Dalyan", distance: "25 km", duration: "20 min", price: "€30" },
];

const vehicles = [
  { name: "Standard Sedan", capacity: "3 pax + luggage", desc: "Mercedes E-Class or similar", image: "🚗" },
  { name: "VIP Van", capacity: "6 pax + luggage", desc: "Mercedes Vito or similar", image: "🚐" },
  { name: "Minibus", capacity: "12 pax + luggage", desc: "Mercedes Sprinter or similar", image: "🚌" },
  { name: "Coach", capacity: "45+ pax", desc: "Luxury touring coach", image: "🚍" },
];

export default function TransferPage() {
  const t = useTranslations("transfer");

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${images.services.transfer}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        <div className="container-custom relative z-10">
          <span className="text-[var(--primary-light)] font-semibold text-sm uppercase tracking-wider">{t("hero.subtitle")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">{t("hero.title")}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{t("hero.description")}</p>
        </div>
      </section>

      {/* Quick Booking */}
      <section className="py-8 bg-white shadow-lg relative -mt-16 mx-4 lg:mx-auto max-w-5xl rounded-2xl z-20">
        <div className="px-8">
          <div className="grid md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm text-[var(--muted)] mb-1">{t("booking.from")}</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none">
                <option>{t("destinations.dalaman")}</option>
                <option>{t("destinations.fethiye")}</option>
                <option>{t("destinations.oludeniz")}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[var(--muted)] mb-1">{t("booking.to")}</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none">
                <option>{t("destinations.fethiye")}</option>
                <option>{t("destinations.oludeniz")}</option>
                <option>{t("destinations.kas")}</option>
                <option>{t("destinations.marmaris")}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[var(--muted)] mb-1">{t("booking.date")}</label>
              <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none" />
            </div>
            <div>
              <label className="block text-sm text-[var(--muted)] mb-1">{t("booking.passengers")}</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none">
                {[1,2,3,4,5,6,"7+"].map(n => <option key={n}>{n}</option>)}
              </select>
            </div>
            <div className="flex items-end">
              <a href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hi! I need a transfer.`} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center">{t("booking.getQuote")}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50 mt-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "✈️", key: "tracking" },
              { icon: "👋", key: "meet" },
              { icon: "💺", key: "support" },
              { icon: "💰", key: "fixed" },
            ].map((item) => (
              <div key={item.key} className="text-center bg-white p-6 rounded-xl">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold mb-2">{t(`features.${item.key}.title`)}</h3>
                <p className="text-sm text-[var(--muted)]">{t(`features.${item.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">{t("destinations.title")}</h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-left font-semibold">{t("booking.from")}</th>
                  <th className="px-6 py-4 text-left font-semibold">{t("booking.to")}</th>
                  <th className="px-6 py-4 text-center font-semibold">Distance</th>
                  <th className="px-6 py-4 text-center font-semibold">Duration</th>
                  <th className="px-6 py-4 text-right font-semibold">Price*</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">{route.from}</td>
                    <td className="px-6 py-4">{route.to}</td>
                    <td className="px-6 py-4 text-center text-[var(--muted)]">{route.distance}</td>
                    <td className="px-6 py-4 text-center text-[var(--muted)]">{route.duration}</td>
                    <td className="px-6 py-4 text-right font-bold text-[var(--primary)]">{route.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">{t("vehicles.title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <span className="text-5xl mb-4 block">{v.image}</span>
                <h3 className="font-bold text-lg mb-2">{v.name}</h3>
                <p className="text-[var(--primary)] font-semibold mb-2">{v.capacity}</p>
                <p className="text-sm text-[var(--muted)]">{v.desc}</p>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${companyInfo.contact.whatsapp}?text=Hi! I need to book a transfer.`} target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-4">{t("cta.button")}</a>
            <a href={`tel:${companyInfo.contact.phone}`} className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors inline-flex items-center justify-center gap-2">📞 {companyInfo.contact.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
