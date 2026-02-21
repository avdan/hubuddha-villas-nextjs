"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// Placeholder blog posts - these will be replaced with real content later
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Things to Do in Ubud",
    category: "Popular Places",
    date: "January 12, 2025",
    image: "/images/villa-3br.jpg",
  },
  {
    id: 2,
    title: "Best Restaurants Near Our Villas",
    category: "Local Guide",
    date: "January 26, 2025",
    image: "/images/villa-gallery-3.jpg",
  },
  {
    id: 3,
    title: "Planning Your Perfect Bali Retreat",
    category: "Digital Nomad",
    date: "January 26, 2025",
    image: "/images/villa-office.jpg",
  },
  {
    id: 4,
    title: "A Guide to Living in Ubud",
    category: "Tips & Tricks",
    date: "January 12, 2025",
    image: "/images/villa-outdoor.jpg",
  },
];

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : blogPosts.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < blogPosts.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="blog" className="py-20 lg:py-32 bg-seashell">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-moss-green text-sm tracking-[0.3em] uppercase">
                NEWS & BLOG
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide heading-display max-w-lg leading-tight">
              Check Latest Blog Post from Blog List
            </h2>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 lg:mt-0">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-sage-green/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-sage-green/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Blog Posts Grid - 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image - smaller aspect ratio */}
              <div className="relative overflow-hidden mb-4 aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span className="w-6 h-px bg-muted-foreground" />
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-foreground group-hover:text-moss-green transition-colors heading-display leading-snug">
                {post.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
