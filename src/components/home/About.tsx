"use client";

import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-seashell overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                welcome to Hubuddha
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

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 tracking-wide leading-tight heading-display">
              Tranquil villas in Ubud, Bali
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Each villa is thoughtfully designed to provide the perfect blend
              of luxury, comfort, and authentic Balinese charm.
            </p>

            <a
              href="#villas"
              className="inline-flex items-center gap-3 bg-jungle text-seashell px-8 py-4 font-medium hover:bg-moss-green transition-colors tracking-wide group"
            >
              <span>DISCOVER MORE</span>
              <ChevronsRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Images - Two overlapping images layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main large image - right side */}
              <div className="ml-auto w-[85%] lg:w-[80%]">
                <div className="relative aspect-[4/5] shadow-xl">
                  <Image
                    src="/images/villa-interior.jpg"
                    alt="Hubuddha Villa Interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Smaller overlapping image - bottom left */}
              <div className="absolute -bottom-8 lg:-bottom-12 -left-4 lg:left-0 w-[55%] lg:w-[50%] z-10">
                <div className="relative aspect-[4/3] shadow-xl">
                  <Image
                    src="/images/villa-gallery-1.jpg"
                    alt="Hubuddha Villa Exterior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
