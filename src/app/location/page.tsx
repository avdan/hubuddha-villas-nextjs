import { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import {
  MotionDiv,
  fadeUp,
  fadeUpSmall,
  fadeLeft,
  fadeRight,
  fadeIn,
  viewportOnce,
  defaultTransition,
} from "@/components/motion";

export const metadata: Metadata = {
  title: "Location | Hubuddha Villas",
  description:
    "Hubuddha Villas are located in Pejeng Kawan, about 10–15 minutes from central Ubud. Green, peaceful, and surrounded by rice fields.",
};

const transportOptions = [
  {
    title: "Scooter rental",
    description:
      "The easiest way to get around Ubud. We can arrange rentals for you — just let our villa manager know. Most guests find this the most convenient option.",
  },
  {
    title: "Local drivers",
    description:
      "For pickups from the villa, we work with local drivers from the village. Our manager can arrange rides for you, usually within 10 minutes. Drop-offs back to the villa from elsewhere in Ubud are easy to arrange on your own.",
  },
  {
    title: "Food delivery",
    description:
      "Don't feel like going out? Food delivery is easy to arrange — from local warungs to nicer restaurants. Our manager can help, or you can order directly through delivery apps.",
  },
];

const walkingDistance = [
  "3 restaurants",
  "Minimart for basics",
  "Rice field walk just around the corner",
];

const shortDrive = [
  "Central Ubud — restaurants, cafes, shops (8–10 min)",
  "Yoga studios (10 min)",
  "Ubud traditional market (15 min)",
  "Monkey Forest (20 min)",
  "Tegallalang Rice Terraces (30 min)",
];

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Image placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-jungle to-moss-green" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-seashell tracking-wide mb-6 heading-display">
              Location
            </h1>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-seashell/90 font-light max-w-2xl mx-auto">
              Hubuddha Villas are located in Pejeng Kawan, about 10–15 minutes
              from central Ubud. Green, peaceful, and surrounded by rice fields.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Location Description Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <MotionDiv
              initial={fadeLeft.initial}
              whileInView={fadeLeft.whileInView}
              viewport={viewportOnce}
              transition={defaultTransition}
            >
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 heading-display">
                Where We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hubuddha Villas are located in Pejeng Kawan, an area about 10–15
                minutes by car from central Ubud. The area is green, peaceful,
                and surrounded by rice fields — the kind of Bali you came
                looking for. You're close enough to town for dinner or a yoga
                class, but far enough that your mornings are quiet and
                uninterrupted.
              </p>
            </MotionDiv>

            <MotionDiv
              initial={fadeRight.initial}
              whileInView={fadeRight.whileInView}
              viewport={viewportOnce}
              transition={defaultTransition}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                {/* Image placeholder */}
                <div className="w-full h-[400px] bg-sage-green/30">
                  <div className="w-full h-full bg-gradient-to-br from-moss-green/30 to-jungle/30" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-moss-green/20 rounded-full blur-2xl" />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Getting Around Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={fadeUpSmall.initial}
            whileInView={fadeUpSmall.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 heading-display">
              Getting Around
            </h2>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <MotionDiv
                key={option.title}
                initial={fadeUp.initial}
                whileInView={fadeUp.whileInView}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full bg-card border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
              >
                <div className="w-16 h-16 bg-moss-green/10 rounded-full flex items-center justify-center mb-6">
                  {index === 0 && (
                    <svg
                      className="w-8 h-8 text-moss-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      className="w-8 h-8 text-moss-green"
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
                  )}
                  {index === 2 && (
                    <svg
                      className="w-8 h-8 text-moss-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  {option.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* What's Nearby Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={fadeUpSmall.initial}
            whileInView={fadeUpSmall.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 heading-display">
              What's Nearby
            </h2>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-4xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <h3 className="text-xl font-medium text-foreground">
                  Walking distance (5–10 minutes)
                </h3>
              </div>
              <ul className="space-y-3">
                {walkingDistance.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 bg-moss-green rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-medium text-foreground">
                  Short drive
                </h3>
              </div>
              <ul className="space-y-3">
                {shortDrive.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 bg-moss-green rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            viewport={viewportOnce}
            transition={{ delay: 0.3 }}
            className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto"
          >
            <p>
              You have a few options on foot, but for the full range of Ubud's
              restaurants and activities, a scooter or car is recommended.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* The Neighborhood Section */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0">
          {/* Image placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-jungle to-moss-green" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <MotionDiv
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light text-seashell mb-8 heading-display">
              The Neighborhood
            </h2>
            <div className="space-y-6 text-lg text-seashell/90">
              <p>
                Pejeng Kawan is green and quiet. The villas face rice fields and
                are surrounded by jungle and palm trees. Mornings are birds, not
                traffic.
              </p>
              <p>
                It's peaceful, but not remote. In about fifteen minutes, you're
                in the middle of Ubud.
              </p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* From the Airport Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <MotionDiv
              initial={fadeUpSmall.initial}
              whileInView={fadeUpSmall.whileInView}
              viewport={viewportOnce}
              transition={defaultTransition}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-14 h-14 bg-moss-green/10 rounded-full flex items-center justify-center">
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
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground heading-display">
                From the Airport
              </h2>
            </MotionDiv>

            <MotionDiv
              initial={fadeUpSmall.initial}
              whileInView={fadeUpSmall.whileInView}
              viewport={viewportOnce}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed space-y-4"
            >
              <p>
                Ngurah Rai International Airport is about 1.5 to 2.5 hours away,
                depending on traffic. Bali traffic is unpredictable, so we
                recommend allowing extra time, especially for evening flights.
              </p>
              <p>
                We can arrange airport pickup — just share your flight details
                when you book.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Address and Map Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <MotionDiv
              initial={fadeUpSmall.initial}
              whileInView={fadeUpSmall.whileInView}
              viewport={viewportOnce}
              transition={defaultTransition}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <svg
                  className="w-8 h-8 text-moss-green"
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
              </div>
              <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-2">
                Hubuddha Villas
              </h3>
              <p className="text-lg text-muted-foreground">
                Pejeng Kawan, Ubud, Gianyar, Bali, Indonesia
              </p>
            </MotionDiv>

            <MotionDiv
              initial={fadeUp.initial}
              whileInView={fadeUp.whileInView}
              viewport={viewportOnce}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl mb-8"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7!2d115.3!3d-8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMDAuMCJTIDExNcKwMTgnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hubuddha Villas Location"
                className="w-full"
              />
            </MotionDiv>

            <MotionDiv
              initial={fadeIn.initial}
              whileInView={fadeIn.whileInView}
              viewport={viewportOnce}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <a
                href="https://www.google.com/maps/search/Pejeng+Kawan+Ubud+Bali"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-moss-green hover:bg-moss-green/90 text-seashell px-6 py-3 transition-colors"
              >
                View on Google Maps
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={viewportOnce}
            transition={defaultTransition}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 heading-display">
              Have questions about the location or getting around?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-moss-green hover:bg-moss-green/90 text-seashell px-8 py-4 text-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Request availability
              </Link>
              <a
                href="https://wa.me/6281215990063"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-moss-green text-moss-green hover:bg-moss-green/10 px-8 py-4 text-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp us
              </a>
            </div>
          </MotionDiv>
        </div>
      </section>

      <Footer />
    </div>
  );
}
