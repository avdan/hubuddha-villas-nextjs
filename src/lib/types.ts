export interface VillaDetails {
  tagline: string | null;
  shortDescription: string | null;
  smoobuApartmentId: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  maxGuests: number | null;
  poolType: string | null;
  villaSize: string | null;
  amenities: string[] | null;
  gallery: {
    nodes: {
      sourceUrl: string;
      altText: string;
      mediaDetails: {
        width: number;
        height: number;
      };
    }[];
  } | null;
  highlightFeatures: {
    title: string;
    description: string;
  }[] | null;
}

export interface Villa {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails: {
        width: number;
        height: number;
      };
    };
  } | null;
  villaDetails: VillaDetails;
}

export interface VillasResponse {
  villas: {
    nodes: Villa[];
  };
}

export interface VillaBySlugResponse {
  villa: Villa | null;
}

// Blog/Articles (WordPress Posts)
export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string | null;
  content: string | null;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails: {
        width: number;
        height: number;
      };
    };
  } | null;
  categories: {
    nodes: {
      id: string;
      name: string;
      slug: string;
    }[];
  };
  author: {
    node: {
      name: string;
      avatar: {
        url: string;
      } | null;
    };
  } | null;
}

export interface PostsResponse {
  posts: {
    nodes: Post[];
  };
}

export interface PostBySlugResponse {
  post: Post | null;
}

// ============== ADDITIONAL CPT TYPES ==============

// Common image type
export interface WPImage {
  node: {
    sourceUrl: string;
    altText: string;
    mediaDetails?: {
      width: number;
      height: number;
    };
  };
}

// Service CPT
export interface Service {
  id: string;
  title: string;
  serviceDetails: {
    icon: string;
    description: string;
  };
}

export interface ServicesResponse {
  services: {
    nodes: Service[];
  };
}

// Testimonial CPT
export interface Testimonial {
  id: string;
  title: string; // Guest name
  content: string; // Testimonial text (rendered HTML)
  testimonialDetails: {
    guestLocation: string;
    rating: number;
  };
}

export interface TestimonialsResponse {
  testimonials: {
    nodes: Testimonial[];
  };
}

// Team Member CPT
export interface TeamMember {
  id: string;
  title: string; // Name
  featuredImage: WPImage | null;
  teamMemberDetails: {
    role: string;
    bio: string;
  };
}

export interface TeamMembersResponse {
  teamMembers: {
    nodes: TeamMember[];
  };
}

// FAQ CPT
export interface FAQ {
  id: string;
  title: string; // Question
  faqDetails: {
    answer: string;
    page: string; // 'retreats', 'about', 'general', etc.
  };
}

export interface FAQsResponse {
  faqs: {
    nodes: FAQ[];
  };
}

// ACF Image type
export type ACFImage = {
  sourceUrl: string;
  altText: string;
} | null;

// Site Settings (ACF Options Page)
export interface SiteSettings {
  siteSettings: {
    // Hero Section
    heroTitle: string;
    heroSubtitle: string;
    heroImage: ACFImage;

    // About Section
    aboutWelcome: string;
    aboutIntro: string;
    aboutStory: string;

    // Contact Section
    contactPhone: string;
    contactEmail: string;
    contactAddress: string;
    whatsappNumber: string;

    // Retreats Section
    retreatsIntro: string;

    // Page Images - Home
    homeAboutImage1: ACFImage;
    homeAboutImage2: ACFImage;
    homeContactImage: ACFImage;

    // Page Images - About
    aboutHeroImage: ACFImage;
    aboutMainImage: ACFImage;
    about2BrImage: ACFImage;
    about3BrImage: ACFImage;

    // Page Images - Location
    locationHeroImage: ACFImage;
    locationImage1: ACFImage;
    locationImage2: ACFImage;

    // Page Images - Contact
    contactHeroImage: ACFImage;
  };
}

// Combined Site Data for preloading
export interface SiteData {
  services: Service[];
  testimonials: Testimonial[];
  teamMembers: TeamMember[];
  faqs: FAQ[];
  siteSettings: SiteSettings['siteSettings'] | null;
}

// Utility function to strip HTML
export function stripHtml(html: string): string {
  // Server-safe HTML stripping
  return html.replace(/<[^>]*>/g, '').trim();
}
