// components/services/ServiceProcess.tsx
import type { FC } from "react";
import Image from "next/image";

// Updated type to include an optional image for each step
export type ProcessStep = {
  title: string;
  description: string;
  image?: string; // URL to the image
};

type ServiceProcessProps = {
  title: string;
  steps: ProcessStep[];
};

const ServiceProcess: FC<ServiceProcessProps> = ({ title, steps }) => {
  return (
    <section className="relative font-nunito bg-slate-50 py-12 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="mb-12 md:mb-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {title}
          </h2>
          <div className="h-1.5 w-24 bg-[#1677B3] mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-6xl">
          {/* Central Axis Line */}
          <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, index) => {
              const stepNumber = String(index + 1).padStart(2, "0");
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-0
                    ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                  `}
                >
                  {/* CENTER NODE: The Pivot Point */}
                  <div className="absolute left-8 top-0 md:left-1/2 md:top-8 md:-translate-x-1/2 z-10 flex h-full flex-col items-center">
                    <div className="flex h-4 w-4 -translate-x-[7px] items-center justify-center rounded-full bg-white ring-4 ring-[#1677B3] md:h-5 md:w-5 md:translate-x-0 md:ring-[5px] shadow-lg mb-2"></div>
                  </div>

                  {/* SIDE A: The Text Card */}
                  <div className={`pl-16 md:pl-0 w-full md:w-[42%]`}>
                    <div
                      className={`relative group bg-white rounded-sm p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-[#1677B3]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(22,119,179,0.15)] ${
                        isEven ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <span className="inline-block text-xs font-bold tracking-wider text-[#1677B3] uppercase mb-2 bg-[#1677B3]/10 px-2 py-0.5 rounded-full">
                        Phase {stepNumber}
                      </span>
                      <h3 className="text-xl 2xl:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#1677B3] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* SIDE B: The Image (Fills the empty space) */}
                  <div className="w-full md:w-[42%] pl-16 md:pl-0 hidden md:block">
                    {step.image ? (
                      <div
                        className={`relative aspect-video w-full overflow-hidden rounded-xl shadow-lg border border-slate-200/60
                          ${
                            isEven
                              ? "origin-left hover:rotate-1"
                              : "origin-right hover:-rotate-1"
                          }
                           transition-transform duration-500 ease-out
                        `}
                      >
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                        {/* Overlay gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1677B3]/10 to-transparent pointer-events-none" />
                      </div>
                    ) : (
                      // Optional: Empty state or decorative placeholder if no image provided
                      <div className="h-48 w-full rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 flex items-center justify-center">
                        <span className="text-slate-300 text-sm font-medium">
                          No Image Provided
                        </span>
                      </div>
                    )}
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
