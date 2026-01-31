"use client";

import { motion } from "framer-motion";

// Re-export motion components for use in server components
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionImg = motion.img;
export const MotionA = motion.a;
export const MotionUl = motion.ul;
export const MotionLi = motion.li;

// Common animation variants
export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
};

export const fadeUpSmall = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
};

export const fadeLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
};

export const fadeRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
};

export const viewportOnce = { once: true };

export const defaultTransition = { duration: 0.8 };
export const fastTransition = { duration: 0.5 };

// Staggered delay helper
export const staggerDelay = (index: number, baseDelay = 0.1) => ({
  duration: 0.5,
  delay: index * baseDelay,
});
