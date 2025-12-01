"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { companyInfo } from "@/data/company";
import { images } from "@/data/images";
import { useToast } from "@/components/ui/Toast";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

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
  const locale = useLocale();
  const { showToast } = useToast();

  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "Dalaman Airport",
    dropoffLocation: "",
    pickupDate: "",
    returnDate: "",
    additionalRequests: "",
  });

  const handleBookCar = (carName: string) => {
    setSelectedCar(carName);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/car-rental", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          vehicleType: selectedCar || "Any",
          dropoffLocation: formData.dropoffLocation || formData.pickupLocation,
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
          dropoffLocation: "",
          pickupDate: "",
          returnDate: "",
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
      `Hi! I'd like to rent a ${selectedCar || "car"}.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Pickup: ${formData.pickupLocation}\n` +
      `Dropoff: ${formData.dropoffLocation || formData.pickupLocation}\n` +
      `Dates: ${formData.pickupDate} to ${formData.returnDate}\n` +
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
                        <button onClick={() => handleBookCar(car.name)} className="text-sm text-[var(--primary)] font-semibold hover:underline">{t("fleet.book")} →</button>
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
          <button onClick={() => { setSelectedCar(null); setShowModal(true); }} className="btn-secondary text-lg px-8 py-4">{t("cta.button")}</button>
        </div>
      </section>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-xl font-bold">
                {selectedCar ? `${t("booking.bookNow")}: ${selectedCar}` : t("booking.requestQuote")}
              </h3>
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
                  <label className="block text-sm font-medium mb-1">{t("booking.pickup")} *</label>
                  <select
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData((prev) => ({ ...prev, pickupLocation: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                  >
                    <option value="Dalaman Airport">{t("booking.locations.airport")}</option>
                    <option value="Fethiye Office">{t("booking.locations.office")}</option>
                    <option value="Hotel Delivery">{t("booking.locations.hotel")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("booking.dropoff")}</label>
                  <select
                    value={formData.dropoffLocation}
                    onChange={(e) => setFormData((prev) => ({ ...prev, dropoffLocation: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                  >
                    <option value="">{t("booking.sameAsPickup")}</option>
                    <option value="Dalaman Airport">{t("booking.locations.airport")}</option>
                    <option value="Fethiye Office">{t("booking.locations.office")}</option>
                    <option value="Hotel Delivery">{t("booking.locations.hotel")}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("booking.pickupDate")} *</label>
                  <input
                    type="date"
                    required
                    value={formData.pickupDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, pickupDate: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">{t("booking.returnDate")} *</label>
                  <input
                    type="date"
                    required
                    value={formData.returnDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, returnDate: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">{t("booking.form.notes")}</label>
                  <textarea
                    rows={3}
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
