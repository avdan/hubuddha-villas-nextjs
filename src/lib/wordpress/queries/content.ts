import { fetchGraphQL } from '../client';
import type { Testimonial, TeamMember, Service, SiteOptions } from '../types';

/**
 * Get all testimonials
 */
export async function getAllTestimonials(): Promise<Testimonial[]> {
  const query = `
    query GetAllTestimonials {
      testimonials(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          id
          title
          content
          testimonialDetails {
            guestName
            guestLocation
            rating
            displayOrder
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ testimonials: { nodes: Testimonial[] } }>(
    query,
    {},
    { revalidate: 3600, tags: ['testimonials'] }
  );

  return data.testimonials.nodes;
}

/**
 * Get all team members
 */
export async function getAllTeamMembers(): Promise<TeamMember[]> {
  const query = `
    query GetAllTeamMembers {
      teamMembers(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
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
            displayOrder
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ teamMembers: { nodes: TeamMember[] } }>(
    query,
    {},
    { revalidate: 86400, tags: ['team'] }
  );

  return data.teamMembers.nodes;
}

/**
 * Get all services
 */
export async function getAllServices(): Promise<Service[]> {
  const query = `
    query GetAllServices {
      services(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
        nodes {
          id
          title
          content
          serviceDetails {
            iconSvg
            displayOrder
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ services: { nodes: Service[] } }>(
    query,
    {},
    { revalidate: 86400, tags: ['services'] }
  );

  return data.services.nodes;
}

/**
 * Get site options from ACF Options Page
 */
export async function getSiteOptions(): Promise<SiteOptions> {
  const query = `
    query GetSiteOptions {
      acfOptionsHubuddhaSiteSettings {
        siteSettings {
          heroSection {
            title
            subtitle
            backgroundImage {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
          aboutSection {
            introText
            storyTitle
            storyContent
            storyImage {
              sourceUrl
              altText
            }
          }
          contactInfo {
            phone
            email
            address
            whatsappLink
            googleMapsEmbed
          }
          socialLinks {
            facebook
            instagram
          }
          footer {
            description
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL<{
    acfOptionsHubuddhaSiteSettings: { siteSettings: SiteOptions };
  }>(query, {}, { revalidate: 86400, tags: ['options'] });

  return data.acfOptionsHubuddhaSiteSettings?.siteSettings || {};
}
