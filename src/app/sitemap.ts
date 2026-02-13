import { MetadataRoute } from "next";
import { getAllVillaSlugs, getAllPostSlugs } from "@/lib/queries";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hubuddha.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic slugs from WordPress
  let villaSlugs: string[] = [];
  let articleSlugs: string[] = [];

  try {
    villaSlugs = await getAllVillaSlugs();
  } catch (e) {
    console.error("Failed to fetch villa slugs for sitemap:", e);
  }

  try {
    articleSlugs = await getAllPostSlugs();
  } catch (e) {
    console.error("Failed to fetch post slugs for sitemap:", e);
  }

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/villas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/location`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/retreats`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Villa pages
  const villaPages: MetadataRoute.Sitemap = villaSlugs.map((slug) => ({
    url: `${baseUrl}/villas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Article pages (at root level)
  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...villaPages, ...articlePages];
}
