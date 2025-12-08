// components/services/WhyWorkWithUs.tsx
import type { FC } from "react";

type ServiceBenefitsProps = {
  title: string;
  benefits: string[];
};

const WhyWorkWithUs: FC<ServiceBenefitsProps> = ({ title, benefits }) => {
  return (
    <section className="font-nunito bg-[#009f8b] py-12 md:py-16 relative overflow-hidden">
      {/* Optional: Very subtle texture for the teal background */}
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
        <div className="mb-10 md:mb-12 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {title}
          </h2>
          {/* Decorative Divider */}
          <div className="h-1 w-20 bg-white/30 mx-auto rounded-full backdrop-blur-sm" />
        </div>

        {/* The Grid */}
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative h-full bg-white border-2 border-transparent p-6 md:p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:-translate-x-1 hover:border-slate-900 hover:shadow-[6px_6px_0px_0px_#0f172a]"
            >
              {/* Card Header: Compacted */}
              <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-mono text-xs font-black text-[#009f8b] bg-[#009f8b]/10 px-2 py-1 rounded">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {/* Decorative Line */}
                <div className="h-0.5 flex-grow bg-slate-100 ml-4 group-hover:bg-[#009f8b] transition-colors duration-300" />
              </div>

              {/* Main Content */}
              <div className="flex items-start gap-4">
                {/* Icon wrapper - Rotates on hover */}
                <div className="mt-1.5 flex-shrink-0">
                  <div className="h-2.5 w-2.5 bg-slate-200 rotate-45 group-hover:bg-[#009f8b] group-hover:rotate-90 transition-all duration-300" />
                </div>

                <p className="text-lg font-bold text-slate-800 leading-snug group-hover:text-slate-900">
                  {benefit}
                </p>
              </div>

              {/* Arrow removed as requested */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
