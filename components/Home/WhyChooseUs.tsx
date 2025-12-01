// components/Home/WhyChooseUs.tsx
import type { FC, ReactNode } from "react";
import {
  LuTarget,
  LuLayers,
  LuMessageSquare,
  LuHandshake,
  LuLifeBuoy,
} from "react-icons/lu";

type Reason = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const reasons: Reason[] = [
  {
    id: "strategy-first",
    number: "01",
    title: "Strategy First, Execution Second",
    description:
      "We don&apos;t start with trends; we start with your goals. Every website, campaign, or piece of content is grounded in strategy.",
    icon: <LuTarget className="h-5 w-5 text-[#009f8b]" />,
  },
  {
    id: "full-service",
    number: "02",
    title: "Full-Service, Seamless Delivery",
    description:
      "Design, development, marketing, and copy all work together as one cohesive system.",
    icon: <LuLayers className="h-5 w-5 text-[#009f8b]" />,
  },
  {
    id: "performance-obsessed",
    number: "03",
    title: "Performance & Results Obsessed",
    description:
      "We track traffic, leads, and conversions so every decision moves the needle.",
    icon: <LuLifeBuoy className="h-5 w-5 text-[#009f8b]" />,
  },
  {
    id: "transparent-communication",
    number: "04",
    title: "Transparent Communication",
    description:
      "Clear timelines, regular updates, and honest recommendations at every stage.",
    icon: <LuMessageSquare className="h-5 w-5 text-[#009f8b]" />,
  },
  {
    id: "long-term-partnerships",
    number: "05",
    title: "Long-Term Partnerships",
    description:
      "We don&apos;t just launch and leave. We stay to support, improve, and scale with you.",
    icon: <LuHandshake className="h-5 w-5 text-[#009f8b]" />,
  },
  {
    id: "reliable-support",
    number: "06",
    title: "Reliable Ongoing Support",
    description:
      "Questions, tweaks, or new ideas—we&apos;re a message away with responsive support.",
    icon: <LuLifeBuoy className="h-5 w-5 text-[#009f8b]" />,
  },
];

const WhyChooseUs: FC = () => {
  return (
    <section className="font-nunito bg-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
            Why Choose <span className="text-[#009f8b]">Orca Edge?</span>
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-sm md:text-base text-slate-500">
            We combine strategic thinking with clean execution to deliver
            digital solutions that actually grow your business.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.id} className="text-center">
              {/* Icon Circle (smaller, leaner) */}
              <div className="mx-auto mb-4 flex h-18 w-18 items-center justify-center rounded-full border border-[#009f8b]/30 bg-slate-50 text-xl shadow-sm">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base font-semibold text-[#003144]">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="mx-auto max-w-sm text-xs md:text-sm leading-relaxed text-slate-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Subtle Divider */}
        <div className="mt-14 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[#009f8b] to-transparent" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
