// components/Home/OurValues.tsx
import type { FC } from "react";
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

const OurValues: FC = () => {
  return (
    <section className="font-nunito bg-white py-16 md:py-20">
      <div className="container mx-auto  md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            Our Values
          </h2>
          <div className="h-1 w-20 bg-[#1677B3] mx-auto rounded-full mt-4" />
        </div>

        {/* Values Cards Layout */}
        <div className="grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              // CHANGED: Background to Ocean Blue (#1677B3) and added hover lift
              className="flex items-start space-x-4 bg-[#1677B3] p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0 bg-white rounded-full p-4 shadow-sm">
                {/* CHANGED: Icon color to Ocean Blue */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
