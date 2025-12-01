"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { blogPosts, categoryKeys, getBlogPostsByCategory } from "@/data/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { useToast } from "@/components/ui/Toast";

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const { showToast } = useToast();
  const [activeCategory, setActiveCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const filteredPosts = getBlogPostsByCategory(activeCategory);
  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, language: locale }),
      });

      const result = await response.json();
      if (result.success) {
        showToast(t("newsletter.success"), "success");
        setEmail("");
      } else {
        showToast(result.error || t("newsletter.error"), "error");
      }
    } catch {
      showToast(t("newsletter.error"), "error");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="pt-32">
      {/* Breadcrumbs */}
      <div className="container-custom py-2">
        <Breadcrumbs />
      </div>

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-white/60 font-semibold text-sm uppercase tracking-wider">
              {t("hero.subtitle")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{t("hero.title")}</h1>
            <p className="text-xl text-white/80">{t("hero.description")}</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b sticky top-[120px] z-40">
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categoryKeys.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-[var(--primary)] text-white"
                    : "bg-slate-100 hover:bg-slate-200"
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
          {featuredPost && (
            <>
              {/* Featured Post */}
              <div className="mb-12">
                <Link
                  href={`/${locale}/blog/${featuredPost.slug}`}
                  className="group block"
                >
                  <div className="card overflow-hidden lg:flex">
                    <div className="relative lg:w-1/2 h-64 lg:h-auto min-h-[300px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${featuredPost.image}')` }}
                      />
                      <div className="absolute top-4 left-4 bg-[var(--secondary)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {t("featured")}
                      </div>
                    </div>
                    <div className="p-8 lg:w-1/2 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4 text-sm text-[var(--muted)]">
                        <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded-full">
                          {t(`categories.${featuredPost.category}`)}
                        </span>
                        <span>{t(`posts.${featuredPost.id}.date`)}</span>
                        <span>
                          {featuredPost.readTime} {t("minRead")}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-[var(--primary)] transition-colors">
                        {t(`posts.${featuredPost.id}.title`)}
                      </h2>
                      <p className="text-[var(--muted)] mb-6">
                        {t(`posts.${featuredPost.id}.excerpt`)}
                      </p>
                      <span className="text-[var(--primary)] font-semibold flex items-center gap-2">
                        {t("readMore")}
                        <svg
                          className="w-5 h-5 transition-transform group-hover:translate-x-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          )}

          {/* Posts Grid */}
          {gridPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/${locale}/blog/${post.slug}`}
                  className="group"
                >
                  <article className="card h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${post.image}')` }}
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3 text-sm">
                        <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-0.5 rounded">
                          {t(`categories.${post.category}`)}
                        </span>
                        <span className="text-[var(--muted)]">
                          {post.readTime} {t("minRead")}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-3 group-hover:text-[var(--primary)] transition-colors">
                        {t(`posts.${post.id}.title`)}
                      </h3>
                      <p className="text-[var(--muted)] text-sm mb-4 flex-1">
                        {t(`posts.${post.id}.excerpt`)}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[var(--muted)]">
                          {t(`posts.${post.id}.date`)}
                        </span>
                        <span className="text-[var(--primary)] font-semibold flex items-center gap-1">
                          {t("readMore")}
                          <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[var(--muted)] text-lg">{t("noPosts")}</p>
            </div>
          )}

          {/* Load More */}
          {gridPosts.length >= 5 && (
            <div className="text-center mt-12">
              <button className="btn-primary">{t("loadMore")}</button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">{t("newsletter.title")}</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {t("newsletter.subtitle")}
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("newsletter.placeholder")}
              className="flex-1 px-4 py-3 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              disabled={isSubscribing}
              className="btn-secondary whitespace-nowrap disabled:opacity-50"
            >
              {isSubscribing ? "..." : t("newsletter.button")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
