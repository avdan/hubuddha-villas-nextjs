import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Footer } from "@/components/layout";
import { getAllPosts } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Articles | Hubuddha Villas",
  description:
    "Discover Bali through our stories. Travel tips, local guides, and inspiration for your stay in Ubud.",
};

const categories = [
  "All",
  "Local Guide",
  "Digital Nomad",
  "Food & Drink",
  "Culture",
  "Adventure",
  "Experience",
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getReadTime(content: string | null): string {
  if (!content) return "3 min read";
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function stripHtml(html: string | null): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").substring(0, 200) + "...";
}

export default async function ArticlesPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-jungle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-seashell mb-6 heading-display">
            Articles
          </h1>
          <p className="text-seashell/80 max-w-2xl mx-auto text-lg">
            Discover Bali through our stories. Travel tips, local guides, and
            inspiration for your stay in Ubud.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-sage-green/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm tracking-wider transition-colors ${
                  category === "All"
                    ? "bg-jungle text-seashell"
                    : "bg-transparent text-jungle hover:bg-sage-green/30"
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/${post.slug}`} className="group">
                  {/* Image */}
                  <div className="aspect-[16/10] bg-sage-green/20 mb-4 overflow-hidden relative">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-moss-green/20 to-jungle/20 group-hover:scale-105 transition-transform duration-500" />
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    {post.categories.nodes.length > 0 && (
                      <span className="text-xs text-moss-green uppercase tracking-wider font-medium">
                        {post.categories.nodes[0].name}
                      </span>
                    )}
                    <span className="text-muted-foreground text-xs">•</span>
                    <span className="text-muted-foreground text-xs">
                      {getReadTime(post.content)}
                    </span>
                  </div>

                  {/* Content */}
                  <h2 className="text-xl md:text-2xl font-light text-jungle mb-3 heading-display group-hover:text-moss-green transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt
                      ? stripHtml(post.excerpt)
                      : stripHtml(post.content)}
                  </p>

                  {/* Date */}
                  <span className="text-xs text-muted-foreground">
                    {formatDate(post.date)}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles yet. Check back soon!
              </p>
            </div>
          )}

          {/* Load More */}
          {posts.length > 0 && (
            <div className="text-center mt-12">
              <button className="border border-jungle text-jungle px-8 py-4 font-medium tracking-wider hover:bg-jungle hover:text-seashell transition-colors">
                LOAD MORE ARTICLES
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-sage-green/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-jungle mb-4 heading-display">
            Stay Updated
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Subscribe to our newsletter for travel tips, local insights, and
            exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-background border border-sage-green/50 focus:border-moss-green outline-none"
            />
            <button
              type="submit"
              className="bg-jungle text-seashell px-6 py-3 font-medium tracking-wider hover:bg-moss-green transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
