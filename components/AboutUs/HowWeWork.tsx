// components/Home/HowWeWork.tsx
import { themeClasses } from "@/lib/themeClasses";
import type { FC } from "react";
import {
  FaBullhorn,
  FaRegCheckCircle,
  FaRocket,
  FaTools,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaBullhorn />,
    title: "Listen & Learn",
    subtitle: "Discovery Phase",
    description:
      "We ignore assumptions. We dig deep into your business logic, constraints, and user needs before writing a single line of code.",
  },
  {
    id: "02",
    icon: <FaRegCheckCircle />,
    title: "Define & Align",
    subtitle: "Strategy Phase",
    description:
      "Blueprints are drawn. We lock down scopes, tech stacks, and timelines so you know exactly what is being built and when.",
  },
  {
    id: "03",
    icon: <FaTools />,
    title: "Design & Build",
    subtitle: "Execution Phase",
    description:
      "We develop in agile sprints. You get regular updates and deployable milestones, not radio silence.",
  },
  {
    id: "04",
    icon: <FaRocket />,
    title: "Launch & Support",
    subtitle: "Delivery Phase",
    description:
      "Deployment is just the start. We monitor real-world performance and ensure your infrastructure scales.",
  },
];

const HowWeWork: FC = () => {
  return (
    // CHANGED: Section background to Ocean Blue (#1677B3)
    <section className="font-nunito py-24 bg-[#1677B3]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header - Left Aligned & Clean */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            {/* CHANGED: Text color to White */}
            <h2 className="text-3xl 2xl:text-4xl font-extrabold text-white">
              How We Work
            </h2>
            {/* CHANGED: Text color to Blue-100 */}
            <p className="mt-4 text-blue-100 text-sm 2xl:text-base">
              Systematic execution from concept to code.
            </p>
          </div>
        </div>

        {/* The Grid System - White Cards on Blue BG */}
        <div className="grid grid-cols-1 md:grid-cols-4 bg-white border border-[#38bdf8]/30 shadow-xl rounded-lg overflow-hidden">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative p-8 border-b md:border-b-0 md:border-r border-slate-100 last:border-0 hover:bg-slate-50 transition-all duration-300"
            >
              {/* Top Accent Line (Slides in on hover) */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#1677B3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Step Number & Icon */}
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-sm font-bold text-slate-400 opacity-50 group-hover:opacity-100 group-hover:text-[#1677B3] transition-all duration-300">
                  {step.id}
                </span>
                <div className="text-3xl text-slate-700 group-hover:text-[#1677B3] group-hover:scale-110 transition-all duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-base 2xl:text-xl font-bold text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-bold text-[#1677B3] uppercase tracking-wider mb-4">
                  {step.subtitle}
                </p>
                <p className="text-slate-600 text-sm  leading-relaxed group-hover:text-slate-800 transition-colors">
                  {step.description}
                </p>
              </div>

              {/* Hover Effect: Subtle background tint */}
              <div className="absolute inset-0 bg-[#1677B3] opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
