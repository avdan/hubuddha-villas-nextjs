"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const villas = [
  {
    slug: "2-bedroom-villa",
    images: ["/images/villa-2br.jpg", "/images/villa-gallery-2.jpg"],
    title: "2 Bedroom Villa",
    price: "$150",
    features: [
      {
        col1: ["Private pool", "Modern kitchen"],
        col2: ["Flexible bed setups", "Fibre Internet"],
      },
    ],
    description:
      "Brand-new villa designed by expats to meet Western standards. Features private pool, peaceful garden, rice field views, and dedicated office space. Flexible bed setups - beds can be separated.",
    reversed: false,
  },
  {
    slug: "3-bedroom-villa",
    images: ["/images/villa-3br.jpg", "/images/villa-gallery-4.jpg"],
    title: "3 Bedroom Villa",
    price: "$250",
    features: [
      {
        col1: ["Private sunken gazebo", "Cinema-style projectors"],
        col2: ["Bathtub with the view", "Spacious office"],
      },
    ],
    description:
      "Spacious retreat with wavy pool, transparent wall, and sunken gazebo. Features projectors instead of TVs, epic sunset views, and 2-person office. Flexible bed setups - beds can be separated.",
    reversed: true,
  },
];

const Villas = () => {
  return (
    <section id="villas" className="py-20 lg:py-32 bg-seashell overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Villas */}
        <div className="space-y-24 lg:space-y-40">
          {villas.map((villa, index) => (
            <motion.div
              key={villa.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* "LUXURY VILLAS" vertical text - only on first villa */}
              {index === 0 && (
                <div className="hidden xl:block absolute -left-8 top-0">
                  <span
                    className="text-bali-sand text-7xl font-light tracking-[0.3em] heading-display whitespace-nowrap"
                    style={{
                      writingMode: "vertical-lr",
                      transform: "rotate(180deg)",
                    }}
                  >
                    LUXURY VILLAS
                  </span>
                </div>
              )}

              {/* "Online Booking" decorative text - only on second villa */}
              {index === 1 && (
                <div className="hidden lg:block absolute right-0 -top-16">
                  <span className="text-bali-sand/70 text-5xl xl:text-6xl font-light tracking-wide heading-display italic">
                    Online Booking
                  </span>
                </div>
              )}

              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                {/* Images - Two overlapping images with background element */}
                <div
                  className={`relative ${villa.reversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  {/* Green/Sand background element */}
                  <div
                    className={`absolute ${villa.reversed ? "-right-4 lg:-right-8" : "-left-4 lg:-left-8"} top-8 w-[60%] h-[80%] bg-bali-sand -z-10`}
                  />

                  <div className="relative">
                    {/* Main image */}
                    <div className={`${villa.reversed ? "ml-auto" : ""} w-[75%]`}>
                      <div className="relative aspect-square shadow-xl">
                        <Image
                          src={villa.images[0]}
                          alt={villa.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Overlapping secondary image */}
                    <div
                      className={`absolute ${villa.reversed ? "left-0 -bottom-8" : "right-0 -bottom-8"} w-[55%] z-10`}
                    >
                      <div className="relative aspect-[4/3] shadow-xl">
                        <Image
                          src={villa.images[1]}
                          alt={`${villa.title} interior`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${villa.reversed ? "lg:order-1" : "lg:order-2"} pt-8 lg:pt-0`}
                >
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 tracking-wide heading-display">
                    {villa.title}
                  </h3>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-3xl lg:text-4xl text-moss-green font-light">
                      {villa.price}
                    </span>
                    <span className="text-muted-foreground text-lg"> / Night</span>
                  </div>

                  {/* Features */}
                  <div className="flex gap-8 mb-8">
                    <div className="space-y-3">
                      {villa.features[0].col1.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-moss-green flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {villa.features[0].col2.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-moss-green flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                    {villa.description}
                  </p>

                  <Link
                    href={`/villas/${villa.slug}`}
                    className="inline-block border-2 border-jungle text-jungle px-8 py-4 font-medium hover:bg-jungle hover:text-seashell transition-colors tracking-wide uppercase"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Villas;
