import { fetchGraphQL } from '../client';
import type { Villa, VillaCard } from '../types';

const VILLA_CARD_FIELDS = `
  slug
  title
  excerpt
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
    pricePerNight
    tagline
    features
  }
`;

const VILLA_FULL_FIELDS = `
  id
  slug
  title
  content
  excerpt
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
    additionalDescription
    pricePerNight
    specs {
      size
      beds
      occupancy
      bathrooms
    }
    facilities {
      iconName
      name
    }
    gallery {
      sourceUrl
      altText
      mediaDetails {
        width
        height
      }
    }
    heroImage {
      sourceUrl
      altText
      mediaDetails {
        width
        height
      }
    }
    features
  }
  seo {
    title
    metaDesc
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
    }
  }
`;

export async function getAllVillas(): Promise<VillaCard[]> {
  const query = `
    query GetAllVillas {
      villas(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          ${VILLA_CARD_FIELDS}
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ villas: { nodes: VillaCard[] } }>(
    query,
    {},
    { revalidate: 86400, tags: ['villas'] }
  );

  return data.villas.nodes;
}

export async function getVillaBySlug(slug: string): Promise<Villa | null> {
  const query = `
    query GetVillaBySlug($slug: ID!) {
      villa(id: $slug, idType: SLUG) {
        ${VILLA_FULL_FIELDS}
      }
    }
  `;

  const data = await fetchGraphQL<{ villa: Villa | null }>(
    query,
    { slug },
    { revalidate: 86400, tags: ['villas', `villa-${slug}`] }
  );

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

  const data = await fetchGraphQL<{ villas: { nodes: { slug: string }[] } }>(
    query,
    {},
    { revalidate: 86400, tags: ['villas'] }
  );

  return data.villas.nodes.map((villa) => villa.slug);
}
