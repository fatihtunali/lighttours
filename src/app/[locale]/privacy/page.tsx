"use client";

import { useTranslations } from "next-intl";
import { companyInfo } from "@/data/company";

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <div className="pt-32">
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
            <p className="text-[var(--muted)] mb-8">{t("lastUpdated")}</p>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.collect.title")}</h2>
              <p className="text-[var(--muted)] mb-4">{t("sections.collect.intro")}</p>
              <ul className="list-disc list-inside text-[var(--muted)] mb-6 space-y-2">
                <li>{t("sections.collect.items.0")}</li>
                <li>{t("sections.collect.items.1")}</li>
                <li>{t("sections.collect.items.2")}</li>
                <li>{t("sections.collect.items.3")}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.use.title")}</h2>
              <p className="text-[var(--muted)] mb-4">{t("sections.use.intro")}</p>
              <ul className="list-disc list-inside text-[var(--muted)] mb-6 space-y-2">
                <li>{t("sections.use.items.0")}</li>
                <li>{t("sections.use.items.1")}</li>
                <li>{t("sections.use.items.2")}</li>
                <li>{t("sections.use.items.3")}</li>
                <li>{t("sections.use.items.4")}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.sharing.title")}</h2>
              <p className="text-[var(--muted)] mb-6">{t("sections.sharing.content")}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.security.title")}</h2>
              <p className="text-[var(--muted)] mb-6">{t("sections.security.content")}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.rights.title")}</h2>
              <p className="text-[var(--muted)] mb-4">{t("sections.rights.intro")}</p>
              <ul className="list-disc list-inside text-[var(--muted)] mb-6 space-y-2">
                <li>{t("sections.rights.items.0")}</li>
                <li>{t("sections.rights.items.1")}</li>
                <li>{t("sections.rights.items.2")}</li>
                <li>{t("sections.rights.items.3")}</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.cookies.title")}</h2>
              <p className="text-[var(--muted)] mb-6">{t("sections.cookies.content")}</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">{t("sections.contact.title")}</h2>
              <p className="text-[var(--muted)] mb-4">{t("sections.contact.intro")}</p>
              <div className="bg-slate-50 p-6 rounded-xl">
                <p className="font-semibold">{companyInfo.fullName}</p>
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
