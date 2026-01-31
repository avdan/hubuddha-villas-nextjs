"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left side - Background image with WhatsApp overlay */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[400px] lg:min-h-[600px]"
        >
          <Image
            src="/images/villa-hero-wide.jpg"
            alt="Hubuddha Villa"
            fill
            className="object-cover object-center"
          />

          {/* WhatsApp Box with rotating phone icon */}
          <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-auto">
            <a
              href="https://api.whatsapp.com/send/?phone=6281215990063&text=Hi%21+I+have+a+question+about+Hubuddha+Villas.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 bg-jungle/95 backdrop-blur-sm px-6 py-5 lg:px-8 lg:py-6 hover:bg-jungle transition-colors"
            >
              <div>
                <p className="text-seashell/70 text-sm mb-1">
                  Call us or text us on WhatsApp
                </p>
                <p className="text-xl lg:text-2xl font-semibold text-seashell">
                  +62 812 1599 0063
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-seashell/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Phone className="w-6 h-6 text-seashell" />
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-bali-sand relative"
        >
          {/* Decorative architectural sketch background */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="absolute bottom-0 right-0 w-80 h-80"
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <rect x="20" y="60" width="160" height="120" />
              <rect x="30" y="70" width="40" height="50" />
              <rect x="80" y="70" width="40" height="50" />
              <rect x="130" y="70" width="40" height="50" />
              <line x1="20" y1="130" x2="180" y2="130" />
              <rect x="30" y="140" width="30" height="40" />
              <rect x="70" y="140" width="30" height="40" />
              <rect x="110" y="140" width="30" height="40" />
              <rect x="150" y="140" width="20" height="40" />
            </svg>
          </div>

          <div className="relative z-10 px-8 py-12 lg:px-16 lg:py-16">
            <div className="mb-8">
              <span className="text-jungle text-sm tracking-[0.3em] uppercase block mb-4">
                CONTACT US
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide heading-display">
                Get in Touch
              </h2>
            </div>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 bg-seashell border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-moss-green/50 transition-all"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 bg-seashell border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-moss-green/50 transition-all"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Check In"
                  className="w-full px-5 py-4 bg-seashell border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-moss-green/50 transition-all"
                />
                <input
                  type="text"
                  placeholder="Check Out"
                  className="w-full px-5 py-4 bg-seashell border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-moss-green/50 transition-all"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-5 py-4 bg-seashell border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-moss-green/50 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-jungle text-seashell py-4 font-medium hover:bg-moss-green transition-colors tracking-widest uppercase"
              >
                Send a Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
