"use client";

import { useTranslations } from "next-intl";
import { companyInfo } from "@/data/company";

export default function TermsPage() {
  const t = useTranslations("terms");

  return (
    <div className="pt-32">
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
            <p className="text-[var(--muted)] mb-8">{t("lastUpdated")}</p>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.acceptance.title")}</h2>
              <p className="text-[var(--muted)] mb-6">{t("sections.acceptance.content")}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.booking.title")}</h2>
              <ul className="list-disc list-inside text-[var(--muted)] mb-6 space-y-2">
                <li>{t("sections.booking.items.0")}</li>
                <li>{t("sections.booking.items.1")}</li>
                <li>{t("sections.booking.items.2")}</li>
                <li>{t("sections.booking.items.3")}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.cancellation.title")}</h2>
              <ul className="list-disc list-inside text-[var(--muted)] mb-6 space-y-2">
                <li>{t("sections.cancellation.items.0")}</li>
                <li>{t("sections.cancellation.items.1")}</li>
                <li>{t("sections.cancellation.items.2")}</li>
                <li>{t("sections.cancellation.items.3")}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.insurance.title")}</h2>
              <p className="text-[var(--muted)] mb-6">{t("sections.insurance.content")}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.liability.title")}</h2>
              <p className="text-[var(--muted)] mb-6">{t("sections.liability.content")}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.yachtTerms.title")}</h2>
              <ul className="list-disc list-inside text-[var(--muted)] mb-6 space-y-2">
                <li>{t("sections.yachtTerms.items.0")}</li>
                <li>{t("sections.yachtTerms.items.1")}</li>
                <li>{t("sections.yachtTerms.items.2")}</li>
                <li>{t("sections.yachtTerms.items.3")}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.carTerms.title")}</h2>
              <ul className="list-disc list-inside text-[var(--muted)] mb-6 space-y-2">
                <li>{t("sections.carTerms.items.0")}</li>
                <li>{t("sections.carTerms.items.1")}</li>
                <li>{t("sections.carTerms.items.2")}</li>
                <li>{t("sections.carTerms.items.3")}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.changes.title")}</h2>
              <p className="text-[var(--muted)] mb-6">{t("sections.changes.content")}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.contact.title")}</h2>
              <div className="bg-slate-50 p-6 rounded-xl">
                <p className="font-semibold">{companyInfo.fullName}</p>
                <p className="text-[var(--muted)]">TURSAB: #{companyInfo.tursabNo}</p>
                <p className="text-[var(--muted)]">{companyInfo.address.full}</p>
                <p className="text-[var(--muted)]">Email: {companyInfo.contact.email}</p>
                <p className="text-[var(--muted)]">{t("phone")}: {companyInfo.contact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
