import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hubuddha.com";

// Placeholder data - in production, fetch from WordPress via getAllVillaSlugs() and getAllPostSlugs()
const villaSlugs = ["2-bedroom-villa", "3-bedroom-villa"];
const articleSlugs = [
  "best-rice-terraces-near-ubud",
  "digital-nomad-guide-to-ubud",
  "best-restaurants-in-ubud",
  "ubud-temple-etiquette",
  "sunrise-at-mount-batur",
  "balinese-cooking-class-experience",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
  ];

  // Villa pages
  // In production: const villaSlugs = await getAllVillaSlugs();
  const villaPages: MetadataRoute.Sitemap = villaSlugs.map((slug) => ({
    url: `${baseUrl}/villas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Article pages (at root level)
  // In production: const articleSlugs = await getAllPostSlugs();
  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...villaPages, ...articlePages];
}
