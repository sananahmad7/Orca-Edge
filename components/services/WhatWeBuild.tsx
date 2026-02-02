// components/services/ServiceCapabilities.tsx
"use client";

import type { FC } from "react";
import { motion, Variants } from "framer-motion";

type CapabilityItem = {
  title: string;
  description: string;
};

type ServiceCapabilitiesProps = {
  heading: string;
  items: CapabilityItem[];
};

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Faster stagger for a snappy feel
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

const WhatWeBuild: FC<ServiceCapabilitiesProps> = ({ heading, items }) => {
  return (
    <section className="relative overflow-hidden bg-[#1677B3] py-16 font-nunito">
      {/* Decorative Background Elements (Subtle circles) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 -ml-20 -mt-20 h-96 w-96 rounded-full bg-white blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-0 right-0 -mr-20 -mb-20 h-96 w-96 rounded-full bg-white blur-3xl"
      />

      <div className="container relative mx-auto px-4 md:px-8">
        {/* Section heading - Centered and Bold */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }} // 96px approx w-24
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 mx-auto h-1.5 rounded-full bg-white/30"
          />
        </motion.div>

        {/* Creative Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title + index}
              variants={cardVariants}
              // Removed CSS hover:-translate-y-2 and used whileHover for smoother lift
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:shadow-2xl"
            >
              {/* Large Index Number (Creative Element) */}
              <span className="absolute -right-4 -top-6 text-[100px] font-black leading-none text-white/5 transition-colors duration-300 group-hover:text-[#1677B3]/10 select-none pointer-events-none">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="mb-4 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#1677B3]">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base font-medium leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-slate-600">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Line (Animates on hover) */}
              <div className="relative z-10 mt-8">
                <div className="h-0.5 w-12 bg-white/30 transition-all duration-300 group-hover:w-full group-hover:bg-[#1677B3]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
