const GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL || '';

export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  if (!GRAPHQL_URL) {
    console.warn("WORDPRESS_GRAPHQL_URL not set");
    throw new Error("WordPress GraphQL URL not configured");
  }

  try {
    const res = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!res.ok) {
      console.error(`GraphQL fetch failed: ${res.status} ${res.statusText}`);
      throw new Error(`GraphQL fetch failed: ${res.status}`);
    }

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL Errors:", json.errors);
      throw new Error(json.errors[0]?.message || "GraphQL Error");
    }

    return json.data;
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    throw error;
  }
}
