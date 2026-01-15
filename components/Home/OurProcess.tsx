"use client";
import Link from "next/link";
import { useState } from "react";

type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discover",
    description:
      "We dive into your business model, audience, and goals to understand what success looks like for you.",
  },
  {
    number: 2,
    title: "Design & Plan",
    description:
      "We create wireframes, architectures, and strategies tailored to deliver the outcomes you care about.",
  },
  {
    number: 3,
    title: "Build & Implement",
    description:
      "Our designers, developers, and marketers bring the plan to life with robust builds and thoughtful campaigns.",
  },
  {
    number: 4,
    title: "Launch & Optimize",
    description:
      "Once live, we monitor performance, refine based on data, and support you as your needs evolve.",
  },
];

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      // CHANGED: Replaced themeClasses.sectionBg with bg-slate-900 for deep contrast
      className="relative bg-[#1677B3] py-20 md:py-25 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated mesh gradient blobs - Updated to Blue/Sky palette */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#1677B3]/20 rounded-full blur-3xl animate-pulse" />

        <div
          className="absolute top-1/3 right-20 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#1677B3]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid pattern overlay for modern look */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:50px_50px] opacity-40" />

        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 border-2 border-white/5 rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-white/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl 2xl:text-4xl font-bold text-white mb-4 font-nunito">
            Our Process
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A strategic, collaborative approach to delivering exceptional
            results for your business.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-white/10 via-white/30 to-white/10 -z-10 md:top-24" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
                onMouseEnter={() => setActiveStep(step.number)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div
                  className={`relative bg-white/95 backdrop-blur-sm border-2 rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer
                    ${
                      activeStep === step.number
                        ? "border-[#38bdf8] shadow-2xl shadow-[#1677B3]/20 -translate-y-2 bg-white"
                        : activeStep === null
                        ? "border-white/10 hover:border-[#1677B3]/50 shadow-xl shadow-black/20"
                        : index === activeStep - 1 || index === activeStep + 1
                        ? "border-white/10 shadow-lg shadow-black/15"
                        : "border-white/5 shadow-lg shadow-black/15 opacity-80"
                    }
                  `}
                >
                  {/* Number Badge */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full font-bold text-lg mb-6 transition-all duration-300
                      ${
                        activeStep === step.number
                          ? "bg-gradient-to-br from-[#38bdf8] to-[#1677B3] text-white scale-110 shadow-lg"
                          : "bg-gradient-to-br from-[#1677B3]/10 to-slate-200 text-[#1677B3]"
                      }
                    `}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3
                    className={`text-lg md:text-xl font-bold mb-3 transition-colors duration-300
                      ${
                        activeStep === step.number
                          ? "text-[#1677B3]"
                          : "text-slate-800"
                      }
                    `}
                  >
                    {step.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>

                  {/* Decorative arrow - visible on hover */}
                  {index < processSteps.length - 1 && (
                    <div
                      className={`absolute -right-3 top-1/2 -translate-y-1/2 text-2xl transition-all duration-300
                        ${
                          activeStep === step.number
                            ? "text-[#38bdf8] translate-x-1"
                            : "text-white/20"
                        }
                        hidden lg:block
                      `}
                    >
                      →
                    </div>
                  )}
                </div>

                {/* Mobile connector line */}
                {index < processSteps.length - 1 && (
                  <div className="md:hidden flex items-center justify-center h-8">
                    <div className="w-0.5 h-full bg-gradient-to-b from-white/20 to-white/5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-slate-300 mb-6 text-lg">
            Ready to start your journey with us?
          </p>
          <Link
            href={"/contact"}
            className="inline-flex items-center cursor-pointer justify-center px-8 py-3 bg-white text-[#1677B3] font-semibold rounded-full hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:-translate-y-1 transition-all duration-300 hover:bg-slate-50"
          >
            Let's Work Together
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
