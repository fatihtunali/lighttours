import { MetadataRoute } from "next";

const baseUrl = "https://lighttours.com";
const locales = ["en", "tr", "de"];

// Define all pages with their priorities and change frequencies
const pages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/tours", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/yacht-charter", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/cabin-charter", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/car-rental", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/transfer", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each page in each locale
  for (const page of pages) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${page.path}`;

      // Build alternates for hreflang
      const languages: Record<string, string> = {};
      for (const altLocale of locales) {
        languages[altLocale] = `${baseUrl}/${altLocale}${page.path}`;
      }
      // Add x-default pointing to English
      languages["x-default"] = `${baseUrl}/en${page.path}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages,
        },
      });
    }
  }

  return sitemapEntries;
}
