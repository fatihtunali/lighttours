"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { companyInfo, stats } from "@/data/company";
import { images } from "@/data/images";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const timelineYears = ["1988", "1995", "2002", "2010", "2018", "2024"];

const team = [
  { name: "Mehmet Yilmaz", role: "Founder & CEO", image: "👨‍💼" },
  { name: "Ayse Demir", role: "Operations Manager", image: "👩‍💼" },
  { name: "Ali Kaya", role: "Fleet Manager", image: "🧑‍✈️" },
  { name: "Zeynep Ozturk", role: "Customer Relations", image: "👩‍💻" },
];

const valueKeys = ["excellence", "trust", "innovation", "sustainability"];
const valueIcons: Record<string, string> = {
  excellence: "🎯",
  trust: "🤝",
  innovation: "💡",
  sustainability: "🌿",
};

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="pt-32">
      {/* Breadcrumbs */}
      <div className="container-custom py-2">
        <Breadcrumbs />
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images.about.office}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        <div className="container-custom relative z-10">
          <span className="text-[var(--primary-light)] font-semibold text-sm uppercase tracking-wider">{t("hero.subtitle")}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            {t("hero.description", { years: companyInfo.yearsOfExperience })}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white relative -mt-16 mx-4 lg:mx-auto max-w-5xl rounded-2xl shadow-xl z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">{stat.value}</div>
              <div className="text-[var(--muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[var(--primary)] font-semibold text-sm uppercase tracking-wider">{t("story.badge")}</span>
              <h2 className="section-title mt-2 mb-6">{t("story.title")}</h2>
              <div className="space-y-4 text-[var(--muted)]">
                <p>{t("story.p1")}</p>
                <p>{t("story.p2")}</p>
                <p>{t("story.p3")}</p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow">
                    <span className="text-[var(--primary)] font-bold text-sm">TURSAB</span>
                  </div>
                  <div>
                    <span className="text-xs text-[var(--muted)]">{t("story.license")}</span>
                    <span className="block font-bold">#{companyInfo.tursabNo}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${images.about.team}')` }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--primary)] text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">{companyInfo.yearsOfExperience}+</div>
                <div className="text-white/80">{t("story.yearsExcellence")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">{t("timeline.title")}</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--primary)]/20 -translate-x-1/2 hidden md:block" />

            {timelineYears.map((year, i) => (
              <div key={year} className={`relative flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <span className="text-[var(--primary)] font-bold text-lg">{year}</span>
                    <h3 className="font-bold text-xl mt-2 mb-2">{t(`timeline.items.${year}.title`)}</h3>
                    <p className="text-[var(--muted)]">{t(`timeline.items.${year}.desc`)}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full bg-[var(--primary)] border-4 border-white shadow absolute left-1/2 -translate-x-1/2" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">{t("values.title")}</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            {t("values.subtitle")}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueKeys.map((key) => (
              <div key={key} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-[var(--primary)]/5 transition-colors">
                <span className="text-5xl mb-4 block">{valueIcons[key]}</span>
                <h3 className="font-bold text-xl mb-2">{t(`values.${key}.title`)}</h3>
                <p className="text-[var(--muted)]">{t(`values.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">{t("team.title")}</h2>
          <p className="section-subtitle text-center mx-auto mb-12">
            {t("team.subtitle")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-5xl">
                  {member.image}
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-[var(--muted)]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-xl text-white/80 mb-8">
            {t("cta.subtitle", { years: companyInfo.yearsOfExperience })}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              {t("cta.contact")}
            </Link>
            <Link href="/#quote" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors">
              {t("cta.quote")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
