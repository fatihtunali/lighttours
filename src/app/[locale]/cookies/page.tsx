"use client";

import { useTranslations } from "next-intl";
import { companyInfo } from "@/data/company";

export default function CookiesPage() {
  const t = useTranslations("cookies");

  return (
    <div className="pt-32">
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
            <p className="text-[var(--muted)] mb-8">{t("lastUpdated")}</p>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.what.title")}</h2>
              <p className="text-[var(--muted)] mb-6">{t("sections.what.content")}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.types.title")}</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">{t("sections.types.essential.title")}</h3>
              <p className="text-[var(--muted)] mb-4">{t("sections.types.essential.content")}</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">{t("sections.types.analytics.title")}</h3>
              <p className="text-[var(--muted)] mb-4">{t("sections.types.analytics.content")}</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">{t("sections.types.marketing.title")}</h3>
              <p className="text-[var(--muted)] mb-4">{t("sections.types.marketing.content")}</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">{t("sections.types.functional.title")}</h3>
              <p className="text-[var(--muted)] mb-6">{t("sections.types.functional.content")}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.managing.title")}</h2>
              <p className="text-[var(--muted)] mb-4">{t("sections.managing.intro")}</p>
              <ul className="list-disc list-inside text-[var(--muted)] mb-6 space-y-2">
                <li>{t("sections.managing.browsers.0")}</li>
                <li>{t("sections.managing.browsers.1")}</li>
                <li>{t("sections.managing.browsers.2")}</li>
                <li>{t("sections.managing.browsers.3")}</li>
              </ul>
              <p className="text-[var(--muted)] mb-6">{t("sections.managing.note")}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.thirdParty.title")}</h2>
              <p className="text-[var(--muted)] mb-6">{t("sections.thirdParty.intro")}</p>
              <ul className="list-disc list-inside text-[var(--muted)] mb-6 space-y-2">
                <li>{t("sections.thirdParty.services.0")}</li>
                <li>{t("sections.thirdParty.services.1")}</li>
                <li>{t("sections.thirdParty.services.2")}</li>
                <li>{t("sections.thirdParty.services.3")}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.updates.title")}</h2>
              <p className="text-[var(--muted)] mb-6">{t("sections.updates.content")}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.contact.title")}</h2>
              <p className="text-[var(--muted)] mb-4">{t("sections.contact.intro")}</p>
              <div className="bg-slate-50 p-6 rounded-xl">
                <p className="font-semibold">{companyInfo.fullName}</p>
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
