import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar, Footer } from "@/components/layout";
import { getPostBySlug, getAllPostSlugs, getLatestPosts } from "@/lib/queries";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error("Error generating static params for posts:", error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
      return {
        title: "Article Not Found",
      };
    }

    const excerpt = post.excerpt
      ? post.excerpt.replace(/<[^>]*>/g, "").substring(0, 160)
      : "";

    return {
      title: `${post.title || "Article"} | Hubuddha Villas`,
      description: excerpt,
      openGraph: {
        title: post.title || "Article",
        description: excerpt,
        type: "article",
        publishedTime: post.date || undefined,
        authors: post.author?.node?.name ? [post.author.node.name] : undefined,
        images: post.featuredImage?.node?.sourceUrl
          ? [
              {
                url: post.featuredImage.node.sourceUrl,
                width: post.featuredImage.node.mediaDetails?.width || 1200,
                height: post.featuredImage.node.mediaDetails?.height || 630,
              },
            ]
          : undefined,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Article | Hubuddha Villas",
    };
  }
}

function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

function getReadTime(content: string | null): string {
  if (!content) return "3 min read";
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related articles (latest posts excluding current)
  const latestPosts = await getLatestPosts(4);
  const relatedPosts = latestPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const authorName = post.author?.node?.name || "Hubuddha Team";
  const category =
    post.categories.nodes.length > 0 ? post.categories.nodes[0].name : "Article";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Article Header */}
      <article>
        <header className="pt-32 pb-12 bg-jungle">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Category */}
              <Link
                href="/articles"
                className="inline-block text-moss-green text-sm uppercase tracking-wider mb-4 hover:text-sage-green transition-colors"
              >
                {category}
              </Link>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-seashell mb-6 heading-display">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center justify-center gap-4 text-seashell/70 text-sm">
                <span>{authorName}</span>
                <span>•</span>
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{getReadTime(post.content)}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative -mt-0">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] -mt-8 relative z-10 overflow-hidden">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-moss-green/30 to-jungle/30" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Content */}
              {post.content && (
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:font-light prose-headings:text-jungle prose-headings:heading-display
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                    prose-p:text-foreground/80 prose-p:leading-relaxed
                    prose-li:text-foreground/80
                    prose-strong:text-jungle prose-strong:font-medium
                    prose-a:text-moss-green prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-none prose-img:shadow-lg"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-sage-green/30">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-muted-foreground mr-2">
                    Tags:
                  </span>
                  {["Ubud", "Bali", category].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 bg-sage-green/30 text-jungle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Share:</span>
                <div className="flex gap-3">
                  <button className="w-10 h-10 flex items-center justify-center bg-sage-green/30 hover:bg-sage-green/50 transition-colors">
                    <svg
                      className="w-5 h-5 text-jungle"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-sage-green/30 hover:bg-sage-green/50 transition-colors">
                    <svg
                      className="w-5 h-5 text-jungle"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-sage-green/30 hover:bg-sage-green/50 transition-colors">
                    <svg
                      className="w-5 h-5 text-jungle"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-sage-green/20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-light text-jungle mb-10 text-center heading-display">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/${related.slug}`}
                  className="group"
                >
                  <div className="aspect-[16/10] bg-sage-green/30 mb-4 overflow-hidden relative">
                    {related.featuredImage ? (
                      <Image
                        src={related.featuredImage.node.sourceUrl}
                        alt={related.featuredImage.node.altText || related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-moss-green/20 to-jungle/20 group-hover:scale-105 transition-transform duration-500" />
                    )}
                  </div>
                  {related.categories.nodes.length > 0 && (
                    <span className="text-xs text-moss-green uppercase tracking-wider">
                      {related.categories.nodes[0].name}
                    </span>
                  )}
                  <h3 className="text-lg font-light text-jungle mt-2 heading-display group-hover:text-moss-green transition-colors">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-jungle text-seashell">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 heading-display">
            Plan Your Stay in Ubud
          </h2>
          <p className="text-seashell/80 max-w-2xl mx-auto mb-8">
            Experience everything Ubud has to offer from the comfort of our
            luxury villas.
          </p>
          <Link
            href="/villas"
            className="inline-block bg-moss-green text-seashell px-8 py-4 font-medium tracking-wider hover:bg-moss-green/90 transition-colors"
          >
            VIEW OUR VILLAS
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
