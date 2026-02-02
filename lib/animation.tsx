"use client";

import React from "react";
import { motion, type MotionProps, type Variants } from "framer-motion";

type FadeSlideProps = {
  children: React.ReactNode;
  className?: string;
  /** Distance in px the element slides from. */
  offset?: number;
  /** Delay in seconds. */
  delay?: number;
  /** Run only once when it enters viewport. */
  once?: boolean;
  /** Amount of element that must be visible to trigger (0..1). */
  amount?: number;
} & Omit<MotionProps, "children" | "transition" | "variants">;

function buildVariants(dir: "left" | "right", offset: number, delay: number) {
  const x = dir === "left" ? -offset : offset;

  // Slower, smoother spring:
  // - lower stiffness = slower acceleration
  // - a bit higher damping = less bounce
  const spring = {
    type: "spring" as const,
    stiffness: 90,
    damping: 28,
    mass: 1.1,
  };

  const variants: Variants = {
    hidden: { opacity: 0, x, filter: "blur(6px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { ...spring, delay },
    },
  };

  return variants;
}

/** Wrap children to animate in from the LEFT on scroll into view. */
export function InFromLeft({
  children,
  className,
  offset = 32,
  delay = 0,
  once = true,
  amount = 0.25,
  ...rest
}: FadeSlideProps) {
  const variants = buildVariants("left", offset, delay);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Wrap children to animate in from the RIGHT on scroll into view. */
export function InFromRight({
  children,
  className,
  offset = 32,
  delay = 0,
  once = true,
  amount = 0.25,
  ...rest
}: FadeSlideProps) {
  const variants = buildVariants("right", offset, delay);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
