// components/services/WhyWorkWithUs.tsx
"use client";

import type { FC } from "react";
import { motion, Variants } from "framer-motion";

type ServiceBenefitsProps = {
  title: string;
  benefits: string[];
};

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const WhyWorkWithUs: FC<ServiceBenefitsProps> = ({ title, benefits }) => {
  return (
    <section className="font-nunito bg-[#1677B3] py-12 md:py-16 relative overflow-hidden">
      {/* Optional: Very subtle texture for the background */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header - Compacted margins */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12 text-center mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {title}
          </h2>
          {/* Decorative Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-white/30 mx-auto rounded-full backdrop-blur-sm"
          />
        </motion.div>

        {/* The Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 md:gap-6 sm:grid-cols-2"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // Replaced CSS hover translate with smoother Framer Motion physics
              whileHover={{
                x: -4,
                y: -4,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              className="group relative h-full bg-white border-2 border-transparent p-6 md:p-8 hover:border-[#1677B3] hover:shadow-[6px_6px_0px_0px_#0f172a] transition-colors duration-200"
            >
              {/* Card Header: Compacted */}
              <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-black text-[#1677B3] bg-[#1677B3]/10 px-2 py-1 rounded">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {/* Decorative Line - Hover color changed to Ocean Blue */}
                <div className="h-0.5 flex-grow bg-slate-100 ml-4 group-hover:bg-[#1677B3] transition-colors duration-300" />
              </div>

              {/* Main Content */}
              <div className="flex items-start gap-4">
                {/* Icon wrapper - Rotates on hover */}
                <div className="mt-1.5 flex-shrink-0">
                  <div className="h-2.5 w-2.5 bg-slate-200 rotate-45 group-hover:bg-[#1677B3] group-hover:rotate-90 transition-all duration-300" />
                </div>

                <p className="text-lg lg:text-xl font-bold text-slate-800 leading-snug group-hover:text-[#1677B3] transition-colors">
                  {benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
