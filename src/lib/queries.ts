import { fetchGraphQL } from "./graphql";
import type {
  Villa,
  VillasResponse,
  VillaBySlugResponse,
  Post,
  PostsResponse,
  PostBySlugResponse,
  Service,
  ServicesResponse,
  Testimonial,
  TestimonialsResponse,
  TeamMember,
  TeamMembersResponse,
  FAQ,
  FAQsResponse,
  SiteSettings,
} from "./types";

const VILLA_FIELDS = `
  id
  title
  slug
  content
  featuredImage {
    node {
      sourceUrl
      altText
      mediaDetails {
        width
        height
      }
    }
  }
  villaDetails {
    tagline
    shortDescription
    smoobuApartmentId
    bedrooms
    bathrooms
    maxGuests
    poolType
    villaSize
    amenities
    gallery {
      nodes {
        sourceUrl
        altText
        mediaDetails {
          width
          height
        }
      }
    }
    highlightFeatures {
      title
      description
    }
  }
`;

export async function getAllVillas(): Promise<Villa[]> {
  const query = `
    query GetAllVillas {
      villas(first: 100) {
        nodes {
          ${VILLA_FIELDS}
        }
      }
    }
  `;

  const data = await fetchGraphQL<VillasResponse>(query);
  return data.villas.nodes;
}

export async function getVillaBySlug(slug: string): Promise<Villa | null> {
  const query = `
    query GetVillaBySlug($slug: ID!) {
      villa(id: $slug, idType: SLUG) {
        ${VILLA_FIELDS}
      }
    }
  `;

  const data = await fetchGraphQL<VillaBySlugResponse>(query, { slug });
  return data.villa;
}

export async function getAllVillaSlugs(): Promise<string[]> {
  const query = `
    query GetAllVillaSlugs {
      villas(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ villas: { nodes: { slug: string }[] } }>(query);
  return data.villas.nodes.map((villa) => villa.slug);
}

// ============== POSTS/ARTICLES ==============

const POST_FIELDS = `
  id
  title
  slug
  date
  excerpt
  content
  featuredImage {
    node {
      sourceUrl
      altText
      mediaDetails {
        width
        height
      }
    }
  }
  categories {
    nodes {
      id
      name
      slug
    }
  }
  author {
    node {
      name
      avatar {
        url
      }
    }
  }
`;

export async function getAllPosts(first: number = 100): Promise<Post[]> {
  const query = `
    query GetAllPosts($first: Int!) {
      posts(first: $first, where: { status: PUBLISH }) {
        nodes {
          ${POST_FIELDS}
        }
      }
    }
  `;

  const data = await fetchGraphQL<PostsResponse>(query, { first });
  return data.posts.nodes;
}

export async function getLatestPosts(count: number = 3): Promise<Post[]> {
  return getAllPosts(count);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        ${POST_FIELDS}
      }
    }
  `;

  const data = await fetchGraphQL<PostBySlugResponse>(query, { slug });
  return data.post;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const query = `
    query GetAllPostSlugs {
      posts(first: 100, where: { status: PUBLISH }) {
        nodes {
          slug
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ posts: { nodes: { slug: string }[] } }>(query);
  return data.posts.nodes.map((post) => post.slug);
}

// ============== SERVICES ==============

const GET_ALL_SERVICES = `
  query GetAllServices {
    services(first: 20, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        serviceDetails {
          icon
          description
        }
      }
    }
  }
`;

export async function getAllServices(): Promise<Service[]> {
  try {
    const data = await fetchGraphQL<ServicesResponse>(GET_ALL_SERVICES);
    return data.services.nodes;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

// ============== TESTIMONIALS ==============

const GET_ALL_TESTIMONIALS = `
  query GetAllTestimonials {
    testimonials(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        content
        testimonialDetails {
          guestLocation
          rating
        }
      }
    }
  }
`;

export async function getAllTestimonials(): Promise<Testimonial[]> {
  try {
    const data = await fetchGraphQL<TestimonialsResponse>(GET_ALL_TESTIMONIALS);
    return data.testimonials.nodes;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

// ============== TEAM MEMBERS ==============

const GET_ALL_TEAM_MEMBERS = `
  query GetAllTeamMembers {
    teamMembers(first: 20, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        teamMemberDetails {
          role
          bio
        }
      }
    }
  }
`;

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  try {
    const data = await fetchGraphQL<TeamMembersResponse>(GET_ALL_TEAM_MEMBERS);
    return data.teamMembers.nodes;
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

// ============== FAQS ==============

const GET_ALL_FAQS = `
  query GetAllFaqs {
    faqs(first: 50, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        title
        faqDetails {
          answer
          page
        }
      }
    }
  }
`;

export async function getAllFaqs(page?: string): Promise<FAQ[]> {
  try {
    const data = await fetchGraphQL<FAQsResponse>(GET_ALL_FAQS);
    const faqs = data.faqs.nodes;

    // Filter by page if specified
    if (page) {
      return faqs.filter(faq => faq.faqDetails.page === page);
    }

    return faqs;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

// ============== SITE SETTINGS (ACF OPTIONS PAGE) ==============

const GET_SITE_SETTINGS = `
  query GetSiteSettings {
    siteSettings {
      heroTitle
      heroSubtitle
      heroImage {
        sourceUrl
        altText
      }
      aboutWelcome
      aboutIntro
      aboutStory
      contactPhone
      contactEmail
      contactAddress
      whatsappNumber
      retreatsIntro
      homeAboutImage1 {
        sourceUrl
        altText
      }
      homeAboutImage2 {
        sourceUrl
        altText
      }
      homeContactImage {
        sourceUrl
        altText
      }
      aboutHeroImage {
        sourceUrl
        altText
      }
      aboutMainImage {
        sourceUrl
        altText
      }
      about2BrImage {
        sourceUrl
        altText
      }
      about3BrImage {
        sourceUrl
        altText
      }
      locationHeroImage {
        sourceUrl
        altText
      }
      locationImage1 {
        sourceUrl
        altText
      }
      locationImage2 {
        sourceUrl
        altText
      }
      contactHeroImage {
        sourceUrl
        altText
      }
    }
  }
`;

export async function getSiteSettings(): Promise<SiteSettings['siteSettings'] | null> {
  try {
    const data = await fetchGraphQL<SiteSettings>(GET_SITE_SETTINGS);
    return data.siteSettings;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}
