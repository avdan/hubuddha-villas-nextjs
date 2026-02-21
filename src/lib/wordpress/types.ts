/**
 * WordPress GraphQL Types
 * TypeScript interfaces for all WordPress content
 */

// Media/Image types
export interface WPImage {
  sourceUrl: string;
  altText: string;
  mediaDetails?: {
    width: number;
    height: number;
  };
}

// SEO types (from Rank Math)
export interface WPSeo {
  title: string;
  metaDesc: string;
  opengraphTitle?: string;
  opengraphDescription?: string;
  opengraphImage?: WPImage;
  canonicalUrl?: string;
  readingTime?: number;
}

// Villa types
export interface VillaSpecs {
  size: string;
  beds: string;
  occupancy: string;
  bathrooms: string;
}

export interface VillaFacility {
  iconName: string;
  name: string;
}

export interface Villa {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  featuredImage?: {
    node: WPImage;
  };
  villaDetails: {
    tagline: string;
    additionalDescription: string;
    smoobuApartmentId: number;
    specs: VillaSpecs;
    facilities: VillaFacility[];
    gallery: WPImage[];
    heroImage?: WPImage;
    features?: string[];
  };
  seo?: WPSeo;
}

export interface VillaCard {
  slug: string;
  title: string;
  excerpt?: string;
  featuredImage?: {
    node: WPImage;
  };
  villaDetails: {
    smoobuApartmentId: number;
    tagline: string;
    features?: string[];
  };
}

// Blog Post types
export interface PostCategory {
  name: string;
  slug: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  date: string;
  modified: string;
  featuredImage?: {
    node: WPImage;
  };
  categories?: {
    nodes: PostCategory[];
  };
  author?: {
    node: {
      name: string;
      avatar?: {
        url: string;
      };
    };
  };
  seo?: WPSeo;
}

export interface PostCard {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  featuredImage?: {
    node: WPImage;
  };
  categories?: {
    nodes: PostCategory[];
  };
}

// Testimonial types
export interface Testimonial {
  id: string;
  title: string;
  content: string;
  testimonialDetails: {
    guestName: string;
    guestLocation: string;
    rating?: number;
    displayOrder?: number;
  };
}

// Team Member types
export interface TeamMember {
  id: string;
  title: string;
  featuredImage?: {
    node: WPImage;
  };
  teamMemberDetails: {
    role: string;
    displayOrder?: number;
  };
}

// Service types
export interface Service {
  id: string;
  title: string;
  content: string;
  serviceDetails: {
    iconSvg?: string;
    displayOrder?: number;
  };
}

// Site Options types (ACF Options Page)
export interface SiteOptions {
  heroSection?: {
    title: string;
    subtitle: string;
    backgroundImage?: WPImage;
  };
  aboutSection?: {
    introText: string;
    storyTitle: string;
    storyContent: string;
    storyImage?: WPImage;
  };
  contactInfo?: {
    phone: string;
    email: string;
    address: string;
    whatsappLink: string;
    googleMapsEmbed?: string;
  };
  socialLinks?: {
    facebook?: string;
    instagram?: string;
  };
  footer?: {
    description: string;
  };
}

// Pagination types
export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
  endCursor?: string;
}

export interface PaginatedResponse<T> {
  nodes: T[];
  pageInfo: PageInfo;
}
