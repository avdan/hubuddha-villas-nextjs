import { fetchGraphQL } from '../client';
import type { Post, PostCard, PaginatedResponse, PageInfo } from '../types';

const POST_CARD_FIELDS = `
  slug
  title
  excerpt
  date
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
      name
      slug
    }
  }
`;

const POST_FULL_FIELDS = `
  id
  slug
  title
  content
  excerpt
  date
  modified
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
  seo {
    title
    metaDesc
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
    }
    readingTime
  }
`;

export async function getAllPosts(
  first: number = 10,
  after?: string
): Promise<{ posts: PostCard[]; pageInfo: PageInfo }> {
  const query = `
    query GetAllPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          ${POST_CARD_FIELDS}
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  `;

  const data = await fetchGraphQL<{
    posts: { nodes: PostCard[]; pageInfo: PageInfo };
  }>(query, { first, after }, { revalidate: 3600, tags: ['posts'] });

  return {
    posts: data.posts.nodes,
    pageInfo: data.posts.pageInfo,
  };
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        ${POST_FULL_FIELDS}
      }
    }
  `;

  const data = await fetchGraphQL<{ post: Post | null }>(
    query,
    { slug },
    { revalidate: 3600, tags: ['posts', `post-${slug}`] }
  );

  return data.post;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const query = `
    query GetAllPostSlugs {
      posts(first: 1000) {
        nodes {
          slug
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ posts: { nodes: { slug: string }[] } }>(
    query,
    {},
    { revalidate: 3600, tags: ['posts'] }
  );

  return data.posts.nodes.map((post) => post.slug);
}

export async function getPostsByCategory(
  categorySlug: string,
  first: number = 10
): Promise<PostCard[]> {
  const query = `
    query GetPostsByCategory($categorySlug: String!, $first: Int!) {
      posts(first: $first, where: { categoryName: $categorySlug, orderby: { field: DATE, order: DESC } }) {
        nodes {
          ${POST_CARD_FIELDS}
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ posts: { nodes: PostCard[] } }>(
    query,
    { categorySlug, first },
    { revalidate: 3600, tags: ['posts', `category-${categorySlug}`] }
  );

  return data.posts.nodes;
}

export async function getRelatedPosts(
  currentSlug: string,
  categorySlug?: string,
  limit: number = 3
): Promise<PostCard[]> {
  const query = `
    query GetRelatedPosts($categorySlug: String, $limit: Int!, $excludeSlug: String!) {
      posts(
        first: $limit,
        where: {
          categoryName: $categorySlug,
          orderby: { field: DATE, order: DESC }
        }
      ) {
        nodes {
          ${POST_CARD_FIELDS}
        }
      }
    }
  `;

  const data = await fetchGraphQL<{ posts: { nodes: PostCard[] } }>(
    query,
    { categorySlug, limit: limit + 1, excludeSlug: currentSlug },
    { revalidate: 3600, tags: ['posts'] }
  );

  // Filter out current post and limit results
  return data.posts.nodes
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
}
