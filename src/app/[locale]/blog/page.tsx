"use client";

import { useTranslations } from "next-intl";
import { images } from "@/data/images";

const blogPosts = [
  { id: "best-time-visit-fethiye", image: images.tours.fethiye, category: "travelGuide", date: "2024-11-28", readTime: 5 },
  { id: "12-islands-tour-guide", image: images.yachts.gallery1, category: "tours", date: "2024-11-25", readTime: 7 },
  { id: "blue-cruise-vs-yacht-charter", image: images.services.yachtCharter, category: "yachtCharter", date: "2024-11-20", readTime: 6 },
  { id: "paragliding-oludeniz", image: images.hero.main1, category: "activities", date: "2024-11-15", readTime: 4 },
  { id: "dalyan-mud-baths", image: images.tours.fethiye, category: "dayTrips", date: "2024-11-10", readTime: 5 },
  { id: "turkish-cuisine-fethiye", image: images.blog.post1, category: "foodCulture", date: "2024-11-05", readTime: 6 },
];

const categoryKeys = ["all", "travelGuide", "tours", "yachtCharter", "activities", "dayTrips", "foodCulture"];

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-white/60 font-semibold text-sm uppercase tracking-wider">{t("hero.subtitle")}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{t("hero.title")}</h1>
            <p className="text-xl text-white/80">{t("hero.description")}</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b sticky top-[120px] z-40">
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categoryKeys.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                  i === 0 ? 'bg-[var(--primary)] text-white' : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {t(`categories.${cat}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          {/* Featured Post */}
          <div className="mb-12">
            <div className="group block cursor-pointer">
              <div className="card overflow-hidden lg:flex">
                <div className="relative lg:w-1/2 h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${blogPosts[0].image}')` }} />
                  <div className="absolute top-4 left-4 bg-[var(--secondary)] text-white px-3 py-1 rounded-full text-sm font-semibold">{t("featured")}</div>
                </div>
                <div className="p-8 lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-[var(--muted)]">
                    <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full">{t(`categories.${blogPosts[0].category}`)}</span>
                    <span>{t(`posts.${blogPosts[0].id}.date`)}</span>
                    <span>{blogPosts[0].readTime} {t("minRead")}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-[var(--primary)] transition-colors">{t(`posts.${blogPosts[0].id}.title`)}</h2>
                  <p className="text-[var(--muted)] mb-6">{t(`posts.${blogPosts[0].id}.excerpt`)}</p>
                  <span className="text-[var(--primary)] font-semibold flex items-center gap-2">
                    {t("comingSoon")}
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <article className="card h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${post.image}')` }} />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-0.5 rounded">{t(`categories.${post.category}`)}</span>
                      <span className="text-[var(--muted)]">{post.readTime} {t("minRead")}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-3 group-hover:text-[var(--primary)] transition-colors">{t(`posts.${post.id}.title`)}</h3>
                    <p className="text-[var(--muted)] text-sm mb-4 flex-1">{t(`posts.${post.id}.excerpt`)}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--muted)]">{t(`posts.${post.id}.date`)}</span>
                      <span className="text-[var(--primary)] font-semibold">{t("comingSoon")}</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-primary">{t("loadMore")}</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">{t("newsletter.title")}</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">{t("newsletter.subtitle")}</p>
          <form className="max-w-md mx-auto flex gap-3">
            <input type="email" placeholder={t("newsletter.placeholder")} className="flex-1 px-4 py-3 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-white/50" />
            <button type="submit" className="btn-secondary whitespace-nowrap">{t("newsletter.button")}</button>
          </form>
        </div>
      </section>
    </div>
  );
}
