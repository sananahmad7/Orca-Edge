// components/Home/OurValues.tsx
"use client";

import type { FC } from "react";
// 1. Import 'Variants' type to fix the easing error
import { motion, Variants } from "framer-motion";
import {
  FaHeartbeat,
  FaSearch,
  FaBolt,
  FaCheck,
  FaHandshake,
} from "react-icons/fa";

const values = [
  {
    title: "Integrity",
    description:
      "We provide honest advice, realistic timelines, and transparent communication.",
    icon: FaHeartbeat,
  },
  {
    title: "Quality",
    description:
      "We sweat the details—from code structure and content to user flows and branding.",
    icon: FaSearch,
  },
  {
    title: "Innovation",
    description:
      "We stay current with tools, trends, and best practices so your solutions don’t fall behind.",
    icon: FaBolt,
  },
  {
    title: "Accountability",
    description: "We own our work and measure our success by your outcomes.",
    icon: FaCheck,
  },
  {
    title: "Partnership",
    description: "We’re here for the long term, not just one-off projects.",
    icon: FaHandshake,
  },
];

// 2. Explicitly apply the ': Variants' type here
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// 3. Explicitly apply the ': Variants' type here as well
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut", // TypeScript now knows this is a valid Easing type
    },
  },
};

const OurValues: FC = () => {
  return (
    <section className="font-nunito bg-white py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            Our Values
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-[#1677B3] mx-auto rounded-full mt-4"
          />
        </motion.div>

        {/* Values Cards Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="flex items-start space-x-4 bg-[#1677B3] p-6 rounded-lg shadow-md hover:shadow-xl cursor-default"
            >
              {/* FIXED: Changed flex-shrink-0 to shrink-0 */}
              <div className="shrink-0 bg-white rounded-full p-4 shadow-sm">
                <value.icon className="text-[#1677B3] text-2xl md:text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="text-sm 2xl:text-base text-blue-50 mt-2 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;
