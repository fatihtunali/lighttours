"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { getBlogPost, getRelatedPosts, blogPosts } from "@/data/blog";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { companyInfo } from "@/data/company";

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const locale = useLocale();
  const t = useTranslations("blog");
  const tArticle = useTranslations(`blog.articles.${slug}`);

  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);

  // Check if article content exists
  let hasContent = true;
  try {
    tArticle("content.intro");
  } catch {
    hasContent = false;
  }

  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = t(`posts.${post.id}.title`);

    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    };

    window.open(shareUrls[platform], "_blank", "width=600,height=400");
  };

  return (
    <div className="pt-32">
      {/* Breadcrumbs */}
      <div className="container-custom py-2">
        <Breadcrumbs />
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {t(`categories.${post.category}`)}
              </span>
              <span className="text-white/80 text-sm">
                {post.readTime} {t("minRead")}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t(`posts.${post.id}.title`)}
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-xl">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium">{post.author.name}</div>
                  <div className="text-sm">{t(`posts.${post.id}.date`)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {hasContent ? (
                  <>
                    {/* Intro */}
                    <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
                      {tArticle("content.intro")}
                    </p>

                    {/* Dynamic sections based on translation keys */}
                    {(() => {
                      const sections = [];
                      for (let i = 1; i <= 10; i++) {
                        try {
                          const heading = tArticle(`content.section${i}.heading`);
                          const paragraphs = tArticle.raw(`content.section${i}.paragraphs`) as string[];
                          sections.push(
                            <section key={i} className="mb-10">
                              <h2 className="text-2xl font-bold mb-4">{heading}</h2>
                              {paragraphs.map((p, idx) => (
                                <p key={idx} className="text-[var(--muted)] mb-4">{p}</p>
                              ))}
                            </section>
                          );
                        } catch {
                          break; // No more sections
                        }
                      }
                      return sections;
                    })()}

                    {/* Conclusion */}
                    {(() => {
                      try {
                        const conclusion = tArticle("content.conclusion");
                        return (
                          <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">{t("conclusion")}</h2>
                            <p className="text-[var(--muted)]">{conclusion}</p>
                          </section>
                        );
                      } catch {
                        return null;
                      }
                    })()}
                  </>
                ) : (
                  <>
                    {/* Fallback: Show excerpt as main content */}
                    <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
                      {t(`posts.${post.id}.excerpt`)}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-8 text-center mb-8">
                      <h3 className="text-xl font-bold mb-4">{t("fullArticleComingSoon")}</h3>
                      <p className="text-[var(--muted)] mb-6">
                        {t("fullArticleComingSoonDesc")}
                      </p>
                      <Link
                        href={`/${locale}/contact`}
                        className="btn-primary inline-block"
                      >
                        {t("contactForInfo")}
                      </Link>
                    </div>
                  </>
                )}

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-[var(--muted)] mr-2">{t("tags")}:</span>
                    {["Turkey", "Fethiye", post.category].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 rounded-full text-sm text-[var(--muted)] hover:bg-slate-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Share */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-8 sticky top-36">
                <h3 className="font-bold mb-4">{t("shareArticle")}</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="Share on WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">{t("ctaTitle")}</h3>
                <p className="text-white/80 text-sm mb-4">{t("ctaDesc")}</p>
                <Link
                  href={`/${locale}/#quote`}
                  className="btn-secondary w-full text-center block"
                >
                  {t("ctaButton")}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">{t("relatedPosts")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relPost) => (
              <Link
                key={relPost.id}
                href={`/${locale}/blog/${relPost.slug}`}
                className="group"
              >
                <article className="card h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${relPost.image}')` }}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-0.5 rounded">
                        {t(`categories.${relPost.category}`)}
                      </span>
                      <span className="text-[var(--muted)]">
                        {relPost.readTime} {t("minRead")}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-3 group-hover:text-[var(--primary)] transition-colors">
                      {t(`posts.${relPost.id}.title`)}
                    </h3>
                    <p className="text-[var(--muted)] text-sm mb-4 flex-1">
                      {t(`posts.${relPost.id}.excerpt`)}
                    </p>
                    <span className="text-[var(--primary)] font-semibold text-sm flex items-center gap-2">
                      {t("readMore")}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">{t("newsletter.title")}</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">{t("newsletter.subtitle")}</p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              className="flex-1 px-4 py-3 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button type="submit" className="btn-secondary whitespace-nowrap">
              {t("newsletter.button")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
