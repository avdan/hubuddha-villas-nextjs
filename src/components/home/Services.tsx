"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="8" y="24" width="48" height="20" rx="2" />
        <path d="M12 44v12M52 44v12" />
        <ellipse cx="32" cy="24" rx="16" ry="8" />
        <path d="M20 24c0-8 5.373-14 12-14s12 6 12 14" />
      </svg>
    ),
    title: "VERY Comfy Mattresses",
    description:
      "Premium super-king mattresses with luxury linens for the perfect night's sleep",
  },
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <ellipse cx="32" cy="40" rx="20" ry="8" />
        <path d="M12 40v4c0 4.418 8.954 8 20 8s20-3.582 20-8v-4" />
        <circle cx="24" cy="28" r="6" />
        <circle cx="40" cy="28" r="6" />
        <path d="M24 22v-6M40 22v-6M32 22v-10" />
        <circle cx="24" cy="12" r="3" />
        <circle cx="40" cy="12" r="3" />
        <circle cx="32" cy="8" r="3" />
      </svg>
    ),
    title: "Breakfast included",
    description:
      "Fully equipped modern kitchens with premium appliances and dishwashers",
  },
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="8" y="20" width="48" height="32" rx="2" />
        <path d="M8 28h48" />
        <rect x="16" y="36" width="12" height="8" rx="1" />
        <rect x="36" y="36" width="12" height="8" rx="1" />
      </svg>
    ),
    title: "Working area",
    description:
      "Spacious office with an AC in case you need to catch up on work",
  },
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="32" cy="48" r="4" />
        <path d="M32 44v-8" />
        <path d="M20 36c0-6.627 5.373-12 12-12s12 5.373 12 12" />
        <path d="M12 28c0-11.046 8.954-20 20-20s20 8.954 20 20" />
        <circle cx="32" cy="48" r="2" fill="currentColor" />
      </svg>
    ),
    title: "High-Speed Wi-Fi",
    description:
      "Fiber-optic internet throughout, perfect for digital nomads and remote work",
  },
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <ellipse cx="32" cy="44" rx="24" ry="10" />
        <path d="M8 44v4c0 5.523 10.745 10 24 10s24-4.477 24-10v-4" />
        <circle cx="24" cy="20" r="4" />
        <path d="M24 24v8" />
        <path d="M20 28l8 4" />
        <circle cx="44" cy="16" r="3" />
        <path d="M44 19v6" />
      </svg>
    ),
    title: "Private pool",
    description:
      "Each villa features its own private pool with stunning garden and rice field views",
  },
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="12" y="16" width="40" height="32" rx="2" />
        <path d="M12 24h40" />
        <path d="M20 16v-4M44 16v-4" />
        <rect x="20" y="32" width="8" height="8" rx="1" />
        <rect x="36" y="32" width="8" height="8" rx="1" />
      </svg>
    ),
    title: "Blackout curtains",
    description:
      "Complete darkness for perfect sleep with premium blackout curtains in every bedroom",
  },
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="32" cy="16" r="8" />
        <path d="M32 24v8" />
        <path d="M24 40l8-8 8 8" />
        <path d="M20 48h24" />
        <ellipse cx="32" cy="52" rx="16" ry="4" />
        <path d="M28 28l-4 12M36 28l4 12" />
      </svg>
    ),
    title: "Daily Housekeeping",
    description:
      "Daily cleaning service and breakfast included with every stay",
  },
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="32" cy="32" r="20" />
        <path d="M32 20v-4M32 48v-4M20 32h-4M48 32h-4" />
        <circle cx="32" cy="32" r="8" />
        <path d="M32 12c-11.046 0-20 8.954-20 20" strokeDasharray="4 4" />
      </svg>
    ),
    title: "Group & Retreat Friendly",
    description:
      "Merge 3 villas into one private retreat, hosting up to 14 people (separate beds)",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-bali-sand relative overflow-hidden"
    >
      {/* Cloud-like decorative background */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute top-0 right-0 w-96 h-96 text-seashell/50"
          viewBox="0 0 400 400"
          fill="currentColor"
        >
          <circle cx="300" cy="100" r="80" />
          <circle cx="350" cy="150" r="60" />
          <circle cx="250" cy="150" r="50" />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-80 h-80 text-seashell/50"
          viewBox="0 0 400 400"
          fill="currentColor"
        >
          <circle cx="100" cy="300" r="70" />
          <circle cx="50" cy="250" r="50" />
          <circle cx="150" cy="280" r="40" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <svg
              className="w-6 h-3 text-moss-green"
              viewBox="0 0 24 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 6c4-4 8-4 10 0s6 4 10 0" />
            </svg>
            <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
              services
            </span>
            <svg
              className="w-6 h-3 text-moss-green"
              viewBox="0 0 24 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 6c4-4 8-4 10 0s6 4 10 0" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide heading-display italic">
            Come Enjoy Our Facilities
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              {/* Circular icon container with hover effect */}
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-seashell shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-jungle/70 group-hover:text-jungle group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-base lg:text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
