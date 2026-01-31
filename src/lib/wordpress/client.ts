/**
 * WordPress GraphQL Client
 * Handles all communication with the WordPress headless CMS
 */

const WORDPRESS_GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL || 'http://localhost/graphql';

export interface FetchOptions {
  revalidate?: number | false;
  tags?: string[];
}

export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
  options?: FetchOptions
): Promise<T> {
  const response = await fetch(WORDPRESS_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: {
      revalidate: options?.revalidate ?? 3600, // Default 1 hour cache
      tags: options?.tags,
    },
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors);
    throw new Error(json.errors[0]?.message || 'GraphQL query failed');
  }

  return json.data;
}

/**
 * Helper for static generation paths
 */
export async function fetchAllSlugs(postType: string): Promise<string[]> {
  const query = `
    query GetAllSlugs($postType: String!) {
      contentNodes(where: { contentTypes: [$postType] }, first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

  const data = await fetchGraphQL<{
    contentNodes: { nodes: { slug: string }[] };
  }>(query, { postType });

  return data.contentNodes.nodes.map((node) => node.slug);
}
