// components/services/ServiceProcess.tsx
import type { FC } from "react";

export type ProcessStep = {
  title: string;
  description: string;
};

type ServiceProcessProps = {
  title: string;
  steps: ProcessStep[];
};

const ServiceProcess: FC<ServiceProcessProps> = ({ title, steps }) => {
  return (
    <section className="relative font-nunito bg-slate-50 py-20 md:py-32 overflow-hidden">
      {/* PROFESSIONAL TOUCH: Subtle Dot Grid Background Pattern */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="mb-20 md:mb-32 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {title}
          </h2>
          <div className="h-1.5 w-24 bg-[#009f8b] mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-6xl ">
          {/* Central Axis Line */}
          <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-16 md:gap-32">
            {steps.map((step, index) => {
              const stepNumber = String(index + 1).padStart(2, "0");
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* CENTER NODE: The Pivot Point */}
                  <div className="absolute left-8 top-0 md:left-1/2 md:top-8 md:-translate-x-1/2 z-10">
                    <div className="flex h-4 w-4 -translate-x-[7px] items-center justify-center rounded-full bg-white ring-4 ring-[#009f8b] md:h-6 md:w-6 md:-translate-x-[11px] md:ring-[6px] shadow-lg"></div>
                  </div>

                  {/* MAIN CARD SIDE */}
                  <div className={`pl-20 md:pl-0 w-full md:w-[45%]`}>
                    <div
                      className={`relative group bg-white rounded-sm p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-[#009f8b]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,159,139,0.1)] ${
                        isEven ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {/* Colored Eyebrow Label */}
                      <span className="inline-block text-xs font-bold tracking-wider text-[#009f8b] uppercase mb-3 bg-[#009f8b]/10 px-3 py-1 rounded-full">
                        Phase {stepNumber}
                      </span>

                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#009f8b] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-lg text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
