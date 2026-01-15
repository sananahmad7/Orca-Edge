// components/services/ServiceCapabilities.tsx
import type { FC } from "react";

type CapabilityItem = {
  title: string;
  description: string;
};

type ServiceCapabilitiesProps = {
  heading: string;
  items: CapabilityItem[];
};

const WhatWeBuild: FC<ServiceCapabilitiesProps> = ({ heading, items }) => {
  return (
    // CHANGED: Main background to Ocean Blue (#1677B3)
    <section className="relative overflow-hidden bg-[#1677B3] py-16 font-nunito">
      {/* Decorative Background Elements (Subtle circles) */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl" />
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 h-96 w-96 rounded-full bg-white opacity-10 blur-3xl" />

      <div className="container relative mx-auto md:px-8">
        {/* Section heading - Centered and Bold */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
          <div className="mt-4 mx-auto h-1.5 w-24 rounded-full bg-white/30" />
        </div>

        {/* Creative Grid */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.title + index}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
            >
              {/* Large Index Number (Creative Element) */}
              {/* CHANGED: Hover color to Ocean Blue fade */}
              <span className="absolute -right-4 -top-6 text-[100px] font-black leading-none text-white/5 transition-colors duration-300 group-hover:text-[#1677B3]/10">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="relative z-10">
                {/* CHANGED: Title hover color to Ocean Blue */}
                <h3 className="mb-4 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#1677B3]">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base font-medium leading-relaxed text-white/80 transition-colors duration-300 group-hover:text-slate-600">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Line (Animates on hover) */}
              <div className="relative z-10 mt-8">
                {/* CHANGED: Line hover color to Ocean Blue */}
                <div className="h-0.5 w-12 bg-white/30 transition-all duration-300 group-hover:w-full group-hover:bg-[#1677B3]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
