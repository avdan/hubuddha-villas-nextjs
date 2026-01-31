import { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import {
  MotionDiv,
  fadeUp,
  fadeUpSmall,
  fadeLeft,
  fadeRight,
  scaleIn,
  viewportOnce,
  defaultTransition,
  fastTransition,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Retreats | Hubuddha Villas",
  description:
    "Three private villas in Ubud for small groups seeking calm, nature, and full privacy. Host yoga retreats, wellness programs, team offsites, and more.",
};

const retreatTypes = [
  {
    title: "Yoga Retreats",
    desc: "Daily practice in serene natural surroundings",
  },
  {
    title: "Wellness Retreats",
    desc: "Focus on health, rest, and rejuvenation",
  },
  {
    title: "Meditation Retreats",
    desc: "Deep silence and mindfulness practice",
  },
  {
    title: "Creative Retreats",
    desc: "Writing, art, and creative exploration",
  },
  { title: "Team Offsites", desc: "Focused work sessions in inspiring setting" },
  {
    title: "Private Hosted Retreats",
    desc: "Your vision, our space and support",
  },
];

const includedItems = [
  "Full accommodation in all three villas",
  "Daily housekeeping and villa maintenance",
  "Breakfast option available",
  "On-site team support throughout your stay",
  "Basic setup for sessions and practice",
  "Private pools and garden access",
];

const arrangableServices = [
  { title: "Yoga Teachers", desc: "Experienced local instructors" },
  { title: "Private Chefs", desc: "Custom menus and dietary needs" },
  { title: "Spa & Massage", desc: "In-villa treatments" },
  { title: "Transport", desc: "Airport and local transfers" },
  { title: "Excursions", desc: "Temple visits and nature tours" },
  { title: "Special Setups", desc: "Decor, flowers, ceremonies" },
];

const faqs = [
  {
    question: "What is the minimum stay for retreats?",
    answer:
      "We recommend a minimum of 5 nights for retreats to allow proper settling in and meaningful experience. For larger groups, 7+ nights work best.",
  },
  {
    question: "Is the property fully exclusive to our group?",
    answer:
      "Yes, when you book all three villas, the entire property is exclusively yours. No other guests, no shared spaces.",
  },
  {
    question: "Are there noise restrictions?",
    answer:
      "We maintain a peaceful environment. Music and group activities are welcome during daytime, with quiet hours after 10 PM to respect the natural surroundings.",
  },
  {
    question: "What food options are available?",
    answer:
      "We can arrange private chefs for all meals, or guests can use the fully equipped kitchens. We accommodate all dietary requirements including vegan, vegetarian, and gluten-free.",
  },
  {
    question: "How does booking and payment work?",
    answer:
      "Contact us with your dates and group size. We'll send a detailed proposal. A 50% deposit secures your booking, with the balance due 30 days before arrival.",
  },
];

export default function RetreatsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          {/* Image placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-jungle to-moss-green" />
          <div className="absolute inset-0 bg-jungle/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sage-green text-sm tracking-[0.3em] uppercase mb-4 block">
              Private Retreat Space
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-seashell tracking-wide heading-display mb-6">
              Retreats at Hubuddha
            </h1>
            <p className="text-seashell/90 text-lg md:text-xl max-w-2xl mx-auto">
              Three private villas in Ubud for small groups seeking calm,
              nature, and full privacy
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 bg-seashell">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
              Your Private Retreat Sanctuary
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hubuddha offers a unique opportunity to host intimate retreats in
              complete privacy. With all three villas combined, you have
              exclusive access to a peaceful compound surrounded by rice fields
              — the perfect setting for transformation, connection, and renewal.
              No outside guests, no distractions, just your group immersed in
              Bali's natural beauty.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Types of Retreats */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="text-center mb-16"
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                What We Host
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 tracking-wide heading-display">
              Types of Retreats
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our space adapts to your vision. Here's what works beautifully
              here.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {retreatTypes.map((type, index) => (
              <MotionDiv
                key={index}
                initial={fadeUpSmall.initial}
                whileInView={fadeUpSmall.whileInView}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-seashell hover:bg-sage-green/20 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-sage-green/30 flex items-center justify-center mx-auto mb-4">
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2 heading-display">
                  {type.title}
                </h3>
                <p className="text-muted-foreground">{type.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Group Size */}
      <section className="py-20 lg:py-28 bg-jungle text-seashell">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="max-w-4xl mx-auto"
          >
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
                For Whom
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 tracking-wide heading-display">
              Intimate Groups, Meaningful Experiences
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-sage-green/30">
                <div className="text-5xl font-light text-sage-green mb-2 heading-display">
                  8-10
                </div>
                <p className="text-seashell/80">Ideal group size</p>
              </div>
              <div className="text-center p-6 border border-sage-green/30">
                <div className="text-5xl font-light text-sage-green mb-2 heading-display">
                  14
                </div>
                <p className="text-seashell/80">Maximum capacity</p>
              </div>
              <div className="text-center p-6 border border-sage-green/30">
                <div className="text-5xl font-light text-sage-green mb-2 heading-display">
                  7
                </div>
                <p className="text-seashell/80">Bedrooms total</p>
              </div>
            </div>
            <p className="text-seashell/90 text-lg leading-relaxed mt-8">
              Small groups work better here. With intimate numbers, everyone
              gets personal attention, sessions stay focused, and the peaceful
              atmosphere remains undisturbed. It's the difference between a
              retreat and a conference.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Accommodation Setup */}
      <section className="py-20 lg:py-28 bg-seashell">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <MotionDiv
              initial={fadeLeft.initial}
              whileInView={fadeLeft.whileInView}
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                  Accommodation
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
                Three Villas, One Compound
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <strong className="text-foreground">Villa Layout:</strong> Two
                  2-bedroom villas and one 3-bedroom villa, all within a shared
                  private compound but each with complete privacy.
                </p>
                <p>
                  <strong className="text-foreground">Private Pools:</strong>{" "}
                  Each villa has its own pool and tropical garden. Perfect for
                  downtime between sessions.
                </p>
                <p>
                  <strong className="text-foreground">Flexible Bedding:</strong>{" "}
                  Most bedrooms can be configured as double or twin beds to suit
                  your group's needs.
                </p>
                <p>
                  <strong className="text-foreground">
                    Work & Practice Spaces:
                  </strong>{" "}
                  Large living areas, covered terraces, and outdoor spaces that
                  adapt to yoga, workshops, or team sessions.
                </p>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={fadeRight.initial}
              whileInView={fadeRight.whileInView}
              viewport={viewportOnce}
              transition={defaultTransition}
              className="grid grid-cols-2 gap-4"
            >
              {/* Image placeholders */}
              <div className="aspect-[4/5] bg-sage-green/30">
                <div className="w-full h-full bg-gradient-to-br from-moss-green/30 to-jungle/30" />
              </div>
              <div className="aspect-[4/5] bg-sage-green/30 mt-8">
                <div className="w-full h-full bg-gradient-to-br from-moss-green/30 to-jungle/30" />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Spaces for Practice */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <MotionDiv
              initial={fadeLeft.initial}
              whileInView={fadeLeft.whileInView}
              viewport={viewportOnce}
              transition={defaultTransition}
              className="order-2 lg:order-1"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-sage-green/30 shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-moss-green/30 to-jungle/30" />
              </div>
            </MotionDiv>
            <MotionDiv
              initial={fadeRight.initial}
              whileInView={fadeRight.whileInView}
              viewport={viewportOnce}
              transition={defaultTransition}
              className="order-1 lg:order-2"
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                  Practice Spaces
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
                Where Sessions Happen
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-green/30 flex items-center justify-center flex-shrink-0 mt-1">
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
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      Outdoor Garden Deck
                    </h3>
                    <p className="text-muted-foreground">
                      Shaded yoga and practice area overlooking rice fields.
                      Morning mist, birdsong, natural ambiance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-green/30 flex items-center justify-center flex-shrink-0 mt-1">
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      Open Living Areas
                    </h3>
                    <p className="text-muted-foreground">
                      Spacious indoor spaces with high ceilings. Perfect for
                      workshops, discussions, or rainy day sessions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage-green/30 flex items-center justify-center flex-shrink-0 mt-1">
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
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      Poolside Terraces
                    </h3>
                    <p className="text-muted-foreground">
                      Intimate gathering spots for smaller groups, meditation,
                      or casual conversations.
                    </p>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-seashell">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <MotionDiv
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
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
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                  What's Included
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
                The Essentials
              </h2>
              <div className="space-y-4">
                {includedItems.map((item, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-moss-green flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-seashell"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-muted-foreground text-lg">{item}</span>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
            <MotionDiv
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={viewportOnce}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                  Can Be Arranged
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
                Extra Services
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {arrangableServices.map((service, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 bg-background"
                  >
                    <svg
                      className="w-6 h-6 text-moss-green mb-2"
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
                    <h3 className="font-medium text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.desc}
                    </p>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="max-w-4xl mx-auto"
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
                Why Here
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
              The Perfect Location
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Ubud is Bali's spiritual and cultural heart — known worldwide
                  for yoga, wellness, and creative inspiration. Our location
                  captures what people come here seeking: rice field views,
                  jungle sounds, and genuine tranquility.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're in a quiet area away from the tourist crowds, yet just
                  15 minutes from central Ubud with its restaurants, shops, and
                  cultural sites. Close enough for convenience, far enough for
                  peace.
                </p>
              </div>
              <div className="bg-sage-green/20 p-8">
                <h3 className="text-xl font-medium text-foreground mb-4 heading-display">
                  Getting Here
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
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
                        d="M5 3l14 9-14 9V3z"
                      />
                    </svg>
                    <span>1.5 hours from Bali Airport</span>
                  </li>
                  <li className="flex items-center gap-3">
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
                    </svg>
                    <span>15 minutes to Ubud center</span>
                  </li>
                  <li className="flex items-center gap-3">
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
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                    <span>Airport transfers can be arranged</span>
                  </li>
                </ul>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Who It's Best For */}
      <section className="py-20 lg:py-28 bg-jungle text-seashell">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-sage-green text-sm tracking-[0.3em] uppercase">
                Ideal For
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 tracking-wide heading-display">
              Who Thrives Here
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-sage-green/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-sage-green"
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
                </div>
                <h3 className="text-xl font-medium mb-2 heading-display">
                  Retreat Hosts
                </h3>
                <p className="text-seashell/80">
                  Who want full control over the space and experience without
                  hotel limitations.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-sage-green/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-sage-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 heading-display">
                  Groups Seeking Calm
                </h3>
                <p className="text-seashell/80">
                  Who value focus, nature, and peace over crowds and
                  distractions.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-sage-green/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-sage-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 heading-display">
                  Privacy Seekers
                </h3>
                <p className="text-seashell/80">
                  Who want exclusive access without other guests sharing the
                  property.
                </p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Typical Retreat Flow */}
      <section className="py-20 lg:py-28 bg-seashell">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="text-center mb-16"
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 tracking-wide heading-display">
              A Typical Retreat Flow
            </h2>
          </MotionDiv>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <MotionDiv
              initial={fadeUpSmall.initial}
              whileInView={fadeUpSmall.whileInView}
              viewport={viewportOnce}
              transition={fastTransition}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-jungle flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-seashell"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2 heading-display">
                Arrival
              </h3>
              <p className="text-muted-foreground text-sm">
                Welcome, villa orientation, settling in, opening circle
              </p>
            </MotionDiv>
            <MotionDiv
              initial={fadeUpSmall.initial}
              whileInView={fadeUpSmall.whileInView}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-moss-green flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-seashell"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2 heading-display">
                Daily Rhythm
              </h3>
              <p className="text-muted-foreground text-sm">
                Morning practice, meals, sessions, pool time, rest
              </p>
            </MotionDiv>
            <MotionDiv
              initial={fadeUpSmall.initial}
              whileInView={fadeUpSmall.whileInView}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-bamboo-pole flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-seashell"
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
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2 heading-display">
                Free Time
              </h3>
              <p className="text-muted-foreground text-sm">
                Explore Ubud, spa visits, nature walks, personal time
              </p>
            </MotionDiv>
            <MotionDiv
              initial={fadeUpSmall.initial}
              whileInView={fadeUpSmall.whileInView}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-sage-green flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-jungle"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2 heading-display">
                Departure
              </h3>
              <p className="text-muted-foreground text-sm">
                Closing circle, farewells, airport transfers arranged
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide heading-display">
              The Space
            </h2>
          </MotionDiv>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MotionDiv
              initial={scaleIn.initial}
              whileInView={scaleIn.whileInView}
              viewport={viewportOnce}
              transition={fastTransition}
              className="col-span-2 row-span-2 bg-sage-green/30"
            >
              <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-moss-green/30 to-jungle/30" />
            </MotionDiv>
            <MotionDiv
              initial={scaleIn.initial}
              whileInView={scaleIn.whileInView}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-sage-green/30 aspect-square"
            >
              <div className="w-full h-full bg-gradient-to-br from-moss-green/30 to-jungle/30" />
            </MotionDiv>
            <MotionDiv
              initial={scaleIn.initial}
              whileInView={scaleIn.whileInView}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-sage-green/30 aspect-square"
            >
              <div className="w-full h-full bg-gradient-to-br from-moss-green/30 to-jungle/30" />
            </MotionDiv>
            <MotionDiv
              initial={scaleIn.initial}
              whileInView={scaleIn.whileInView}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-sage-green/30 aspect-square"
            >
              <div className="w-full h-full bg-gradient-to-br from-moss-green/30 to-jungle/30" />
            </MotionDiv>
            <MotionDiv
              initial={scaleIn.initial}
              whileInView={scaleIn.whileInView}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-sage-green/30 aspect-square"
            >
              <div className="w-full h-full bg-gradient-to-br from-moss-green/30 to-jungle/30" />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-seashell">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="text-center mb-16"
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                Questions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide heading-display">
              Frequently Asked
            </h2>
          </MotionDiv>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <MotionDiv
                key={index}
                initial={fadeUpSmall.initial}
                whileInView={fadeUpSmall.whileInView}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6"
              >
                <h3 className="text-lg font-medium text-foreground mb-2 heading-display">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 tracking-wide heading-display">
              Why Trust Hubuddha
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="w-12 h-12 rounded-full bg-sage-green/30 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-moss-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Owner-run, not managed by a distant company
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-sage-green/30 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-moss-green"
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
                </div>
                <p className="text-muted-foreground">
                  Real photos, honest descriptions
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-sage-green/30 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-moss-green"
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
                </div>
                <p className="text-muted-foreground">
                  Past guests happy to share their experience
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-sage-green/30 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-moss-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Direct communication, personal touch
                </p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-28 bg-jungle text-seashell">
        <div className="container mx-auto px-4 lg:px-8">
          <MotionDiv
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 tracking-wide heading-display">
              Ready to Plan Your Retreat?
            </h2>
            <p className="text-seashell/90 text-lg mb-10">
              Tell us about your vision. We'll respond within 24 hours with
              availability and a custom proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Hi, I'm interested in hosting a retreat at Hubuddha."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-sage-green text-jungle px-8 py-4 text-sm uppercase tracking-wider hover:bg-seashell transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-sage-green text-seashell px-8 py-4 text-sm uppercase tracking-wider hover:bg-sage-green hover:text-jungle transition-colors"
              >
                Send an Inquiry
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
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}
