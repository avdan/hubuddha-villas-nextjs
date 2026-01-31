"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-villa.jpg"
          alt="Hubuddha Villas Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-seashell tracking-wide mb-6 heading-display"
        >
          Hubuddha Villas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-seashell/90 font-light tracking-widest"
        >
          Best villas in Ubud, Bali
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-2 border-moss-green bg-moss-green/80 flex items-center justify-center cursor-pointer hover:bg-moss-green transition-colors"
      >
        <ChevronDown className="w-8 h-8 text-seashell animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
