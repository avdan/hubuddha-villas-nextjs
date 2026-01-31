import { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import {
  MotionDiv,
  MotionSection,
  fadeUp,
  fadeLeft,
  fadeRight,
  fadeIn,
  viewportOnce,
  defaultTransition,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "About Us | Hubuddha Villas",
  description:
    "Learn about Hubuddha Villas - our story, our team, and our commitment to providing authentic Balinese luxury in Ubud.",
};

// Placeholder data - will be replaced with WordPress data
const teamMembers = [
  {
    name: "Made Surya",
    role: "Villa Manager",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Ketut Ayu",
    role: "Housekeeping Lead",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Wayan Putra",
    role: "Garden & Pool",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
];

const whatSetsUsApart = [
  {
    title: "Complete Privacy",
    description: "No shared areas. Your villa is entirely yours.",
  },
  {
    title: "Rice Field Views",
    description: "Wake up to stunning green landscapes every morning.",
  },
  {
    title: "Owner Involvement",
    description: "Personally managed, not run by a faceless corporation.",
  },
  {
    title: "Perfect Location",
    description: "Peaceful surroundings, yet close to everything.",
  },
  {
    title: "Small Scale",
    description: "Just three villas means personalized attention.",
  },
  {
    title: "Genuine Care",
    description: "Every detail is designed with our guests in mind.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          {/* Image placeholder - will be replaced with actual image */}
          <div className="w-full h-full bg-gradient-to-br from-jungle to-moss-green" />
          <div className="absolute inset-0 bg-jungle/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sage-green text-sm tracking-[0.3em] uppercase mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-seashell tracking-wide heading-display">
              The Hubuddha Story
            </h1>
          </MotionDiv>
        </div>
      </section>

      {/* Intro Section - What is Hubuddha */}
      <MotionSection
        className="py-20 lg:py-28 bg-seashell"
        {...fadeUp}
        viewport={viewportOnce}
        transition={defaultTransition}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
              What is Hubuddha
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hubuddha is a collection of premium private villas nestled in the
              heart of Ubud, Bali. We offer calm, space, nature, and complete
              privacy — a sanctuary where you can disconnect from the noise and
              reconnect with what matters. Each villa is designed to provide an
              authentic Balinese experience without compromising on modern
              comfort.
            </p>
          </div>
        </div>
      </MotionSection>

      {/* The Story Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <MotionDiv
              {...fadeLeft}
              viewport={viewportOnce}
              transition={defaultTransition}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                  Our Story
                </span>
                <div className="h-px w-16 bg-sage-green" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
                Why We Built Hubuddha
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We fell in love with Ubud for its spiritual energy, lush
                landscapes, and peaceful atmosphere. But as the town grew more
                popular, finding a quiet retreat became increasingly difficult.
                Hotels were crowded, shared spaces felt impersonal, and the
                tranquility we sought was hard to find.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                So we built Hubuddha — villas that offer the authentic Ubud
                experience without the crowds. Built and run by the owners, not
                an anonymous operator. Every detail is personal, every guest is
                valued, and every stay is crafted with care.
              </p>
            </MotionDiv>
            <MotionDiv
              className="relative"
              {...fadeRight}
              viewport={viewportOnce}
              transition={{ ...defaultTransition, delay: 0.2 }}
            >
              {/* Image placeholder */}
              <div className="aspect-[4/5] bg-sage-green/30 shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-moss-green/30 to-jungle/30" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-sage-green -z-10" />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* The Villas Section */}
      <section className="py-20 lg:py-28 bg-seashell">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            className="text-center mb-16"
            {...fadeUp}
            viewport={viewportOnce}
            transition={defaultTransition}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-sage-green" />
              <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                The Villas
              </span>
              <div className="h-px w-16 bg-sage-green" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
              Three Unique Retreats
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Our collection includes two 2-bedroom villas and one spacious
              3-bedroom villa. Each features a private pool, tropical garden,
              stunning rice field views, and a dedicated workspace for those who
              need to stay connected.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "2-Bedroom Villa",
                desc: "Perfect for couples or small families",
              },
              {
                title: "2-Bedroom Villa",
                desc: "Ideal for a peaceful getaway",
              },
              {
                title: "3-Bedroom Villa",
                desc: "Spacious retreat for groups",
              },
            ].map((villa, index) => (
              <MotionDiv
                key={index}
                className="group"
                {...fadeUp}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="overflow-hidden mb-4">
                  {/* Image placeholder */}
                  <div className="w-full aspect-[4/3] bg-sage-green/30 group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-moss-green/20 to-jungle/20" />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2 heading-display">
                  {villa.title}
                </h3>
                <p className="text-muted-foreground">{villa.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <MotionSection
        className="py-20 lg:py-28 bg-jungle text-seashell"
        {...fadeUp}
        viewport={viewportOnce}
        transition={defaultTransition}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-5 h-5 text-sage-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-sage-green text-sm tracking-[0.3em] uppercase">
                Who It's For
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 tracking-wide heading-display">
              Made for Those Who Seek Peace
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <MotionDiv
                className="space-y-4"
                {...fadeLeft}
                viewport={viewportOnce}
                transition={{ ...defaultTransition, delay: 0.2 }}
              >
                <p className="text-seashell/90 text-lg leading-relaxed">
                  Hubuddha is for couples looking for a romantic escape,
                  families wanting quality time together, and small groups of
                  friends seeking adventure and relaxation.
                </p>
              </MotionDiv>
              <MotionDiv
                className="space-y-4"
                {...fadeRight}
                viewport={viewportOnce}
                transition={{ ...defaultTransition, delay: 0.3 }}
              >
                <p className="text-seashell/90 text-lg leading-relaxed">
                  It's for remote workers who need a beautiful, quiet space to
                  focus. For travelers who value privacy, nature, and comfort
                  over crowded resorts and tourist traps.
                </p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* What Makes It Different Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            className="text-center mb-16"
            {...fadeUp}
            viewport={viewportOnce}
            transition={defaultTransition}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg
                className="w-5 h-5 text-moss-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                The Difference
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
              What Sets Us Apart
            </h2>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whatSetsUsApart.map((item, index) => (
              <MotionDiv
                key={index}
                className="text-center p-6"
                {...fadeUp}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-sage-green/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-moss-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2 heading-display">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 lg:py-28 bg-seashell">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <MotionDiv
              className="order-2 lg:order-1"
              {...fadeLeft}
              viewport={viewportOnce}
              transition={defaultTransition}
            >
              <div className="flex items-center gap-3 mb-6">
                <svg
                  className="w-5 h-5 text-moss-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                  Location
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
                The Perfect Spot in Ubud
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our villas are located in one of the most peaceful parts of Ubud
                — surrounded by rice terraces, tropical forests, and traditional
                Balinese villages. It's the Ubud you imagined before you
                arrived.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Yet we're just 15 minutes from the town center, restaurants,
                yoga studios, and cultural sites. You get the best of both
                worlds: complete tranquility when you want it, and easy access
                to everything Ubud has to offer when you're ready to explore.
              </p>
            </MotionDiv>
            <MotionDiv
              className="order-1 lg:order-2"
              {...fadeRight}
              viewport={viewportOnce}
              transition={{ ...defaultTransition, delay: 0.2 }}
            >
              <div className="aspect-square bg-sage-green/20 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <svg
                    className="w-16 h-16 text-moss-green mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-muted-foreground">
                    Ubud, Bali
                    <br />
                    <span className="text-sm">15 min from town center</span>
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Guest Experience Section */}
      <MotionSection
        className="py-20 lg:py-28 bg-background"
        {...fadeUp}
        viewport={viewportOnce}
        transition={defaultTransition}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg
                className="w-5 h-5 text-moss-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                The Experience
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
              A Day at Hubuddha
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Imagine waking up to birdsong and the gentle rustle of palm
              leaves. You step onto your terrace, coffee in hand, and watch the
              morning mist lift from the rice fields. A dip in your private
              pool, breakfast at your own pace, perhaps some work from your
              comfortable outdoor space.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Afternoons are for exploring — a temple visit, a cooking class, or
              simply reading by the pool. As the sun sets, the sky turns golden
              over the rice terraces. Evenings are quiet, peaceful, yours. This
              is the Ubud experience as it should be — unhurried, authentic, and
              deeply restorative.
            </p>
          </div>
        </div>
      </MotionSection>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-seashell">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            className="text-center mb-16"
            {...fadeUp}
            viewport={viewportOnce}
            transition={defaultTransition}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg
                className="w-5 h-5 text-moss-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
              The People Behind Hubuddha
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Our local team lives nearby and takes pride in making every stay
              special. They're the heart of Hubuddha — warm, helpful, and always
              ready to share their knowledge of Bali with our guests.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <MotionDiv
                key={index}
                className="text-center"
                {...fadeUp}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-1 heading-display">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <MotionSection
        className="py-20 lg:py-28 bg-jungle text-seashell"
        {...fadeUp}
        viewport={viewportOnce}
        transition={defaultTransition}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 tracking-wide heading-display">
              Ready to Experience Hubuddha?
            </h2>
            <p className="text-seashell/90 text-lg leading-relaxed mb-10">
              Explore our villas and find your perfect retreat in Ubud. We'd
              love to welcome you to Hubuddha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/villas"
                className="inline-flex items-center justify-center gap-3 bg-seashell text-jungle px-8 py-4 font-medium hover:bg-sage-green hover:text-seashell transition-colors tracking-wide group"
              >
                <span>Explore Villas</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-seashell text-seashell px-8 py-4 font-medium hover:bg-seashell hover:text-jungle transition-colors tracking-wide"
              >
                <span>Send Booking Request</span>
              </Link>
            </div>
          </div>
        </div>
      </MotionSection>

      <Footer />
    </div>
  );
}
