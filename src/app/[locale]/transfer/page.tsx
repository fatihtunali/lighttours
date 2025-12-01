"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { companyInfo } from "@/data/company";
import { images } from "@/data/images";
import { useToast } from "@/components/ui/Toast";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

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
  const locale = useLocale();
  const { showToast } = useToast();

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "Dalaman Airport",
    dropoffLocation: "Fethiye",
    date: "",
    time: "",
    passengers: 2,
    flightNumber: "",
    additionalRequests: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/transfer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          transferType: "airport",
          vehicleType: formData.passengers > 6 ? "minibus" : formData.passengers > 3 ? "van" : "standard",
          language: locale,
        }),
      });

      const result = await response.json();

      if (result.success) {
        showToast(t("booking.successMessage"), "success");
        setShowModal(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          pickupLocation: "Dalaman Airport",
          dropoffLocation: "Fethiye",
          date: "",
          time: "",
          passengers: 2,
          flightNumber: "",
          additionalRequests: "",
        });
      } else {
        showToast(result.error || t("booking.errorMessage"), "error");
      }
    } catch {
      showToast(t("booking.errorMessage"), "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I need a transfer.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `From: ${formData.pickupLocation}\n` +
      `To: ${formData.dropoffLocation}\n` +
      `Date: ${formData.date}\n` +
      `Time: ${formData.time}\n` +
      `Passengers: ${formData.passengers}\n` +
      (formData.flightNumber ? `Flight: ${formData.flightNumber}\n` : "") +
      (formData.additionalRequests ? `Notes: ${formData.additionalRequests}` : "")
    );
    window.open(`https://wa.me/${companyInfo.contact.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="pt-32">
      {/* Breadcrumbs */}
      <div className="container-custom py-2">
        <Breadcrumbs />
      </div>

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
            <button onClick={() => setShowModal(true)} className="btn-secondary text-lg px-8 py-4">{t("cta.button")}</button>
            <a href={`tel:${companyInfo.contact.phone}`} className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors inline-flex items-center justify-center gap-2">📞 {companyInfo.contact.phone}</a>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-bold">{t("booking.bookTransfer")}</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">{t("booking.form.name")} *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("booking.form.email")} *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("booking.form.phone")} *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("booking.from")} *</label>
                  <select
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData((prev) => ({ ...prev, pickupLocation: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                  >
                    <option value="Dalaman Airport">{t("destinations.dalaman")}</option>
                    <option value="Fethiye">{t("destinations.fethiye")}</option>
                    <option value="Oludeniz">{t("destinations.oludeniz")}</option>
                    <option value="Kas">{t("destinations.kas")}</option>
                    <option value="Marmaris">{t("destinations.marmaris")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("booking.to")} *</label>
                  <select
                    required
                    value={formData.dropoffLocation}
                    onChange={(e) => setFormData((prev) => ({ ...prev, dropoffLocation: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                  >
                    <option value="Fethiye">{t("destinations.fethiye")}</option>
                    <option value="Oludeniz">{t("destinations.oludeniz")}</option>
                    <option value="Kas">{t("destinations.kas")}</option>
                    <option value="Marmaris">{t("destinations.marmaris")}</option>
                    <option value="Dalaman Airport">{t("destinations.dalaman")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("booking.date")} *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("booking.time")} *</label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData((prev) => ({ ...prev, time: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("booking.passengers")} *</label>
                  <select
                    required
                    value={formData.passengers}
                    onChange={(e) => setFormData((prev) => ({ ...prev, passengers: parseInt(e.target.value) }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                  >
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("booking.form.flight")}</label>
                  <input
                    type="text"
                    value={formData.flightNumber}
                    onChange={(e) => setFormData((prev) => ({ ...prev, flightNumber: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                    placeholder="TK1234"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">{t("booking.form.notes")}</label>
                  <textarea
                    rows={2}
                    value={formData.additionalRequests}
                    onChange={(e) => setFormData((prev) => ({ ...prev, additionalRequests: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none resize-none"
                    placeholder={t("booking.form.notesPlaceholder")}
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 btn-secondary justify-center disabled:opacity-50"
                >
                  {isSubmitting ? t("booking.form.submitting") : t("booking.form.submit")}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  </svg>
                  WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
