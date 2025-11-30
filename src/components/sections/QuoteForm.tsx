"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { companyInfo } from "@/data/company";
import { generateItinerary, createTourRequest, getItineraryPreview, submitCruiseBooking, type ItineraryResponse, type Itinerary } from "@/lib/travelQuoteBot";
import { generateCruiseItinerary, type CruiseRoute } from "@/data/cruiseItineraries";

const serviceTypes = [
  { id: "yacht-charter", key: "yachtCharter" },
  { id: "cabin-charter", key: "cabinCharter" },
  { id: "day-tour", key: "dayTour" },
  { id: "multi-day", key: "multiDay" },
  { id: "transfer", key: "transfer" },
  { id: "car-rental", key: "carRental" },
];

const coastalDestinations = [
  "Fethiye", "Ölüdeniz", "Butterfly Valley", "Kaş", "Kekova",
  "Kalkan", "Göcek", "Marmaris", "Dalyan", "Bodrum"
];

const landDestinations = [
  "Cappadocia", "Pamukkale", "Ephesus", "Istanbul",
  "Antalya", "Dalyan", "Fethiye", "Kaş"
];

const interestKeys = [
  "historyCulture", "natureHiking", "beachSwimming",
  "foodCuisine", "adventureSports", "photography", "relaxation"
];

export default function QuoteForm() {
  const t = useTranslations("quote");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    destinations: [] as string[],
    startDate: "",
    duration: "7",
    travelers: "2",
    interests: [] as string[],
    budget: "moderate" as "budget" | "moderate" | "luxury",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [aiResponse, setAiResponse] = useState<ItineraryResponse | null>(null);
  const [aiItinerary, setAiItinerary] = useState<Itinerary | null>(null);

  const [cruiseResult, setCruiseResult] = useState<{
    route: CruiseRoute;
    totalPrice: number;
    pricePerPerson: number;
    startDate: string;
    endDate: string;
  } | null>(null);

  const [showAiSuggestion, setShowAiSuggestion] = useState(false);

  const isYachtService = formData.serviceType === "yacht-charter" || formData.serviceType === "cabin-charter";
  const isTransferOrCar = formData.serviceType === "transfer" || formData.serviceType === "car-rental";

  const availableDestinations = isYachtService ? coastalDestinations : landDestinations;

  const handleServiceTypeChange = (serviceType: string) => {
    setFormData(prev => ({
      ...prev,
      serviceType,
      destinations: [],
    }));
    setShowAiSuggestion(false);
    setCruiseResult(null);
    setAiResponse(null);
    setAiItinerary(null);
  };

  const handleDestinationToggle = (dest: string) => {
    setFormData(prev => ({
      ...prev,
      destinations: prev.destinations.includes(dest)
        ? prev.destinations.filter(d => d !== dest)
        : [...prev.destinations, dest]
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleGetSuggestion = async () => {
    if (formData.destinations.length === 0) {
      alert(t("errors.selectDestination"));
      return;
    }

    if (!formData.name || !formData.email) {
      alert(t("errors.enterNameEmail"));
      return;
    }

    setShowAiSuggestion(true);
    setIsSubmitting(true);
    setCruiseResult(null);
    setAiItinerary(null);
    setAiResponse(null);

    if (isYachtService) {
      const result = generateCruiseItinerary({
        destinations: formData.destinations,
        duration: parseInt(formData.duration),
        travelers: parseInt(formData.travelers),
        startDate: formData.startDate || new Date().toISOString().split("T")[0],
        charterType: formData.serviceType === "cabin-charter" ? "cabin" : "private",
      });

      setCruiseResult(result);
      setIsSubmitting(false);
    } else {
      const hotelCategory = formData.budget === "budget" ? 3 : formData.budget === "luxury" ? 5 : 4;

      const request = createTourRequest({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        destinations: formData.destinations,
        duration: parseInt(formData.duration),
        travelers: parseInt(formData.travelers),
        startDate: formData.startDate || new Date().toISOString().split("T")[0],
        hotelCategory,
        tourType: "PRIVATE",
        specialRequests: formData.message || undefined,
      });

      const result = await generateItinerary(request);
      setAiResponse(result);

      if (result.success && result.itinerary_id) {
        const itinerary = await getItineraryPreview(result.itinerary_id);
        setAiItinerary(itinerary);
      }

      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceLabel = t(`serviceTypes.${serviceTypes.find(s => s.id === formData.serviceType)?.key || formData.serviceType}`);

      if (isYachtService && cruiseResult) {
        const cruiseBookingResult = await submitCruiseBooking({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          service_type: formData.serviceType as "yacht-charter" | "cabin-charter",
          cruise_route: cruiseResult.route.name,
          start_date: cruiseResult.startDate,
          end_date: cruiseResult.endDate,
          adults: parseInt(formData.travelers),
          price_per_person: cruiseResult.pricePerPerson,
          total_price: cruiseResult.totalPrice,
          special_requests: formData.message || undefined,
          destinations: formData.destinations,
        });

        if (cruiseBookingResult.success) {
          console.log("Cruise booking saved to TravelQuoteBot:", cruiseBookingResult.itinerary_id);
        }
      }

      const whatsappMessage = encodeURIComponent(
        `${t("whatsapp.greeting")}\n\n` +
        `${t("whatsapp.request")}:\n\n` +
        `${t("whatsapp.name")}: ${formData.name}\n` +
        `${t("whatsapp.email")}: ${formData.email}\n` +
        `${t("whatsapp.service")}: ${serviceLabel}\n` +
        `${t("whatsapp.destinations")}: ${formData.destinations.join(", ")}\n` +
        `${t("whatsapp.date")}: ${formData.startDate}\n` +
        `${t("whatsapp.duration")}: ${formData.duration} ${t("days")}\n` +
        `${t("whatsapp.travelers")}: ${formData.travelers}\n` +
        `${t("whatsapp.budget")}: ${t(`budget.${formData.budget}`)}\n` +
        (formData.interests.length > 0 ? `${t("whatsapp.interests")}: ${formData.interests.join(", ")}\n\n` : "\n") +
        (cruiseResult ? `${t("whatsapp.interestedRoute")}: ${cruiseResult.route.name}\n${t("whatsapp.totalPrice")}: €${cruiseResult.totalPrice}\n\n` : "") +
        `${t("whatsapp.additionalInfo")}: ${formData.message}`
      );

      window.open(`https://wa.me/${companyInfo.contact.whatsapp}?text=${whatsappMessage}`, "_blank");

      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">{t("subtitle")}</span>
            <h2 className="section-title mt-2">{t("title")}</h2>
            <p className="section-subtitle mx-auto">
              {t("description")}
              {isYachtService && ` ${t("cruiseHint")}`}
              {!isYachtService && !isTransferOrCar && ` ${t("aiHint")}`}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {t("sections.personalInfo")}
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder={`${t("fields.fullName")} *`}
                  required
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder={`${t("fields.email")} *`}
                  required
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder={t("fields.phone")}
                  value={formData.phone}
                  onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                />
              </div>
            </div>

            {/* Service Type */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {t("sections.serviceType")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceTypes.map(service => (
                  <label
                    key={service.id}
                    className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.serviceType === service.id
                        ? "border-[var(--primary)] bg-[var(--primary)]/5"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="serviceType"
                      value={service.id}
                      checked={formData.serviceType === service.id}
                      onChange={() => handleServiceTypeChange(service.id)}
                      className="sr-only"
                    />
                    <span className={`text-sm text-center ${formData.serviceType === service.id ? "text-[var(--primary)] font-semibold" : ""}`}>
                      {t(`serviceTypes.${service.key}`)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Destinations */}
            {!isTransferOrCar && formData.serviceType && (
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {isYachtService ? t("sections.cruiseDestinations") : t("sections.tourDestinations")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {availableDestinations.map(dest => (
                    <button
                      key={dest}
                      type="button"
                      onClick={() => handleDestinationToggle(dest)}
                      className={`px-4 py-2 rounded-full border-2 transition-all ${
                        formData.destinations.includes(dest)
                          ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                          : "border-slate-200 hover:border-[var(--primary)]"
                      }`}
                    >
                      {dest}
                    </button>
                  ))}
                </div>
                {isYachtService && (
                  <p className="text-sm text-[var(--muted)] mt-3">
                    {t("cruiseDestinationHint")}
                  </p>
                )}
              </div>
            )}

            {/* Trip Details */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {t("sections.tripDetails")}
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-[var(--muted)] mb-1">{t("fields.startDate")}</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={e => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--muted)] mb-1">
                    {isYachtService ? t("fields.cruiseDuration") : t("fields.duration")}
                  </label>
                  <select
                    value={formData.duration}
                    onChange={e => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                  >
                    {isYachtService ? (
                      <>
                        <option value="4">{t("duration.4nights")}</option>
                        <option value="7">{t("duration.7nights")}</option>
                        <option value="8">{t("duration.8nights")}</option>
                        <option value="10">{t("duration.10nights")}</option>
                        <option value="14">{t("duration.14nights")}</option>
                      </>
                    ) : (
                      [1, 2, 3, 4, 5, 7, 10, 14].map(d => (
                        <option key={d} value={d}>{d} {d === 1 ? t("day") : t("days")}</option>
                      ))
                    )}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[var(--muted)] mb-1">{t("fields.travelers")}</label>
                  <select
                    value={formData.travelers}
                    onChange={e => setFormData(prev => ({ ...prev, travelers: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? t("person") : t("people")}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[var(--muted)] mb-1">{t("fields.budgetLevel")}</label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData(prev => ({ ...prev, budget: e.target.value as typeof formData.budget }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                  >
                    <option value="budget">{t("budget.budget")}</option>
                    <option value="moderate">{t("budget.moderate")}</option>
                    <option value="luxury">{t("budget.luxury")}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Interests */}
            {!isYachtService && !isTransferOrCar && formData.serviceType && (
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {t("sections.interests")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interestKeys.map(key => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleInterestToggle(t(`interests.${key}`))}
                      className={`px-4 py-2 rounded-full border-2 transition-all ${
                        formData.interests.includes(t(`interests.${key}`))
                          ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                          : "border-slate-200 hover:border-[var(--accent)]"
                      }`}
                    >
                      {t(`interests.${key}`)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Message */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                {t("sections.additionalInfo")}
              </h3>
              <textarea
                placeholder={isYachtService ? t("placeholders.cruiseMessage") : t("placeholders.tourMessage")}
                rows={4}
                value={formData.message}
                onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all resize-none"
              />
            </div>

            {/* Cruise Itinerary Result */}
            {showAiSuggestion && isYachtService && (
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17h18M5 17l2-9h10l2 9" />
                  </svg>
                  {t("cruise.recommendedRoute")}
                </h3>
                {isSubmitting ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="ml-3 text-[var(--muted)]">{t("cruise.finding")}</span>
                  </div>
                ) : cruiseResult ? (
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-blue-900">{cruiseResult.route.name}</h4>
                        <p className="text-[var(--muted)]">{cruiseResult.route.duration} • {cruiseResult.route.startPort} to {cruiseResult.route.endPort}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-[var(--muted)]">{t("from")}</div>
                        <div className="text-2xl font-bold text-blue-600">€{cruiseResult.pricePerPerson}</div>
                        <div className="text-sm text-[var(--muted)]">{t("perPerson")}</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-semibold text-blue-900">{t("cruise.dayByDay")}</h5>
                      {cruiseResult.route.days.map(day => (
                        <div key={day.day} className="bg-white rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <span className="text-blue-600 font-bold">{t("day")} {day.day}</span>
                              <span className="text-[var(--muted)] mx-2">•</span>
                              <span className="text-slate-700">{day.departure} → {day.arrival}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              {day.swimmingStops > 0 && (
                                <span className="bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded">
                                  {day.swimmingStops} {t("cruise.swimStops")}
                                </span>
                              )}
                              <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded">
                                {day.meals}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-[var(--muted)] mb-2">{day.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {day.highlights.map(h => (
                              <span key={h} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-semibold text-green-700 mb-2">{t("cruise.included")}</h5>
                        <ul className="text-sm space-y-1">
                          {cruiseResult.route.included.map(item => (
                            <li key={item} className="text-[var(--muted)]">• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-semibold text-red-700 mb-2">{t("cruise.notIncluded")}</h5>
                        <ul className="text-sm space-y-1">
                          {cruiseResult.route.notIncluded.map(item => (
                            <li key={item} className="text-[var(--muted)]">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-900 text-white rounded-xl p-4 flex justify-between items-center">
                      <div>
                        <div className="text-blue-200">{t("cruise.totalFor", { count: formData.travelers })}</div>
                        <div className="text-sm text-blue-300">{cruiseResult.startDate} to {cruiseResult.endDate}</div>
                      </div>
                      <div className="text-3xl font-bold">€{cruiseResult.totalPrice.toLocaleString()}</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4 text-[var(--muted)]">
                    {t("cruise.noRoute")}
                  </div>
                )}
              </div>
            )}

            {/* Land Tour AI Suggestion */}
            {showAiSuggestion && !isYachtService && !isTransferOrCar && (
              <div className="bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 rounded-2xl p-6 border border-[var(--primary)]/20">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  {t("ai.title")}
                </h3>
                {isSubmitting ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)]"></div>
                    <span className="ml-3 text-[var(--muted)]">{t("ai.generating")}</span>
                  </div>
                ) : aiResponse?.success && aiItinerary ? (
                  <div className="space-y-4">
                    {aiResponse.total_price && (
                      <div className="bg-white rounded-lg p-4 flex justify-between items-center">
                        <span className="text-[var(--muted)]">{t("ai.estimatedPrice")}</span>
                        <span className="text-2xl font-bold text-[var(--primary)]">
                          ${aiResponse.total_price.toLocaleString()}
                        </span>
                      </div>
                    )}
                    <div className="space-y-3">
                      {aiItinerary.days.map(day => (
                        <div key={day.day_number} className="bg-white rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-semibold text-[var(--primary)]">
                              {t("day")} {day.day_number}: {day.title}
                            </div>
                            <span className="text-xs text-[var(--muted)] bg-slate-100 px-2 py-1 rounded">
                              {day.location}
                            </span>
                          </div>
                          <p className="text-sm text-[var(--muted)] mt-1">{day.narrative}</p>
                          {day.meals && (
                            <p className="text-xs text-[var(--accent)] mt-2">{t("ai.meals")}: {day.meals}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : aiResponse?.error ? (
                  <div className="text-center py-4">
                    <p className="text-red-500 mb-2">{t("ai.failed")}</p>
                    <p className="text-sm text-[var(--muted)]">{aiResponse.error}</p>
                  </div>
                ) : null}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!isTransferOrCar && formData.serviceType && (
                <button
                  type="button"
                  onClick={handleGetSuggestion}
                  disabled={isSubmitting || formData.destinations.length === 0}
                  className={`btn-primary disabled:opacity-50 ${
                    isYachtService
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                      : "bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]"
                  }`}
                >
                  {isYachtService ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17h18M5 17l2-9h10l2 9" />
                      </svg>
                      {t("buttons.findCruiseRoute")}
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      {t("buttons.getAiSuggestion")}
                    </>
                  )}
                </button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-secondary disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    {t("buttons.sending")}
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    {t("buttons.sendWhatsApp")}
                  </>
                )}
              </button>
            </div>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-green-700 font-semibold">{t("success")}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
