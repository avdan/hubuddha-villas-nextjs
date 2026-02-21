const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hubuddha.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Hubuddha Villas";

// Organization schema for site-wide use
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      "https://www.instagram.com/hubuddhavillas",
      "https://www.facebook.com/hubuddhavillas",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-812-1599-0063",
      contactType: "customer service",
      availableLanguage: ["English", "Indonesian"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Tegallalang",
      addressLocality: "Ubud",
      addressRegion: "Bali",
      postalCode: "80561",
      addressCountry: "ID",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// LodgingBusiness schema for villa pages
export function VillaJsonLd({
  name,
  description,
  slug,
  amenities,
}: {
  name: string;
  description: string;
  slug: string;
  amenities: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: `${name} - ${siteName}`,
    description,
    url: `${baseUrl}/villas/${slug}`,
    image: `${baseUrl}/villas/${slug}/hero.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Tegallalang",
      addressLocality: "Ubud",
      addressRegion: "Bali",
      postalCode: "80561",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-8.4347",
      longitude: "115.2785",
    },
    amenityFeature: amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    checkinTime: "14:00",
    checkoutTime: "11:00",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article schema for blog posts
export function ArticleJsonLd({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  author,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${baseUrl}/${slug}`,
    image: `${baseUrl}/articles/${slug}/featured.jpg`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList schema
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ schema for pages with FAQ sections
export function FAQJsonLd({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// LocalBusiness schema for the main site
export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: siteName,
    description:
      "Luxury private villas in Ubud, Bali with private pools, rice field views, and modern amenities.",
    url: baseUrl,
    image: `${baseUrl}/og-image.jpg`,
    priceRange: "$150-$250",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Tegallalang",
      addressLocality: "Ubud",
      addressRegion: "Bali",
      postalCode: "80561",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-8.4347",
      longitude: "115.2785",
    },
    telephone: "+62-812-1599-0063",
    email: "info@hubuddha.com",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
