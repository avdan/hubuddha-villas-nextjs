import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Footer } from "@/components/layout";
import { getAllVillas } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Our Villas | Hubuddha Villas",
  description:
    "Explore our luxury villas in Ubud, Bali. Private pools, rice field views, and modern amenities for the perfect Balinese retreat.",
};

export default async function VillasPage() {
  const villas = await getAllVillas();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-jungle">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-seashell mb-6 heading-display">
            Our Villas
          </h1>
          <p className="text-seashell/80 max-w-2xl mx-auto text-lg">
            Choose from our carefully designed villas, each offering a unique
            experience with private pools and stunning rice field views.
          </p>
        </div>
      </section>

      {/* Villas Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {villas.map((villa) => (
              <Link
                key={villa.id}
                href={`/villas/${villa.slug}`}
                className="group"
              >
                {/* Image */}
                <div className="aspect-[4/3] bg-sage-green/20 mb-6 overflow-hidden relative">
                  {villa.featuredImage ? (
                    <Image
                      src={villa.featuredImage.node.sourceUrl}
                      alt={villa.featuredImage.node.altText || villa.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-moss-green/30 to-jungle/30 group-hover:scale-105 transition-transform duration-700" />
                  )}
                </div>

                {/* Content */}
                <h2 className="text-3xl md:text-4xl font-light text-jungle mb-3 heading-display group-hover:text-moss-green transition-colors">
                  {villa.title}
                </h2>
                {villa.villaDetails.tagline && (
                  <p className="text-muted-foreground text-sm mb-4 tracking-wide">
                    {villa.villaDetails.tagline}
                  </p>
                )}
                {villa.villaDetails.shortDescription && (
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {villa.villaDetails.shortDescription}
                  </p>
                )}

                {/* Amenities */}
                {villa.villaDetails.amenities && villa.villaDetails.amenities.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {villa.villaDetails.amenities.slice(0, 6).map((amenity) => (
                      <span
                        key={amenity}
                        className="text-xs px-3 py-1.5 bg-sage-green/30 text-jungle capitalize"
                      >
                        {amenity.replace(/_/g, " ")}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <span className="inline-flex items-center text-moss-green font-medium tracking-wider group-hover:gap-3 gap-2 transition-all">
                  VIEW DETAILS
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sage-green/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-jungle mb-6 heading-display">
            Need Help Choosing?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us and we&apos;ll help you find the perfect villa for your
            stay. We&apos;re happy to answer any questions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-jungle text-seashell px-8 py-4 font-medium tracking-wider hover:bg-moss-green transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
