"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Vicky",
    location: "Australia",
    text: "Amazing stay, friendly hosts and all round beautiful villa. Would recommend if staying in ubud area. Great value for money and spotless villa, very clean and neatly decorated",
  },
  {
    name: "Johnathan",
    location: "United Kingdom",
    text: "The villa itself is immaculate and excellent value. The kitchen is well-equipped with high-quality appliances, ideal for cooking or just relaxing over a meal. Entertainment is top-notch too—two of the three bedrooms have projectors, and the third bedroom and living area are fitted with large TVs for easy viewing. One of the highlights is the private pool, perfect for a morning dip or an evening wind-down in total privacy.",
  },
  {
    name: "Denis",
    location: "New Zealand",
    text: "Absolutely fantastic last-minute stay! Okay, so we arrived late in the evening and was warmly welcomed by the incredibly helpful and positive staff. They were really accommodating (like really) and instantly made me feel at home. The villa itself is very clean and modern – a real breath of fresh air after staying in some outdated places.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 lg:py-32 bg-seashell">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-sage-green" />
            <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
              Reviews
            </span>
            <div className="h-px w-12 bg-sage-green" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground tracking-wide mb-6 heading-display">
            Feedback From Guests
          </h2>

          {/* Stars */}
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-moss-green fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center px-8 lg:px-16"
          >
            {/* Quote */}
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>

            {/* Author */}
            <div>
              <h4 className="text-foreground font-semibold text-xl mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <span className="text-moss-green">
                {testimonials[currentIndex].location}
              </span>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-sage-green/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-sage-green/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === currentIndex ? "bg-moss-green" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
