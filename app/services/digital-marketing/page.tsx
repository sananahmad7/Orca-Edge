// app/digital-marketing/page.tsx
import type { Metadata } from "next";

import ServiceHero from "@/components/services/Hero";
import WhatWeBuild from "@/components/services/WhatWeBuild";
import ServiceProcess, {
  type ProcessStep,
} from "@/components/services/OurProcess";
import WhyWorkWithUs from "@/components/services/WhyWorkWithUs";
import ServiceCTA from "@/components/services/CTA";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Orca Edge",
  description:
    "Strategic digital marketing services from Orca Edge to help you attract, engage, and convert your ideal customers.",
};

const HERO_HEADING = "Digital Marketing at Orca Edge";

const HERO_DESCRIPTION =
  "Being online isn’t enough—you need to be seen by the right people, at the right time, with the right message. Orca Edge offers strategic digital marketing services that help you attract, engage, and convert your ideal customers.";

// TODO: replace this with your actual hero image path
const HERO_IMAGE_SRC = "/DM.png";

const DIGITAL_MARKETING_CAPABILITIES = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "On-page and technical SEO to improve visibility, drive organic traffic, and create a strong foundation for long-term growth.",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Data-driven PPC campaigns across platforms like Google Ads and social media to generate targeted traffic and high-quality leads.",
  },
  {
    title: "Social Media Marketing",
    description:
      "Strategy, content, and campaigns to build community, increase engagement, and strengthen your brand presence.",
  },
  {
    title: "Content Marketing",
    description:
      "Blogs, articles, guides, and other content assets that educate your audience, support SEO, and position you as a trusted authority.",
  },
  {
    title: "Email Marketing & Automation",
    description:
      "Campaigns, sequences, and automation flows that nurture leads and retain customers.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Regular performance reports and insights so you know what’s working, what’s not, and where to focus next.",
  },
];

const MARKETING_PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Audit & Strategy",
    description:
      "We begin with an in-depth review of your current digital presence, competition, and opportunities.",
    image: "/audit.jpg",
  },
  {
    title: "Goal Setting & KPIs",
    description:
      "Together, we define clear, measurable objectives—such as leads, sales, or traffic growth.",
    image: "/goal.jpg",
  },
  {
    title: "Campaign Planning & Setup",
    description:
      "We build a channel mix and campaign plan tailored to your goals and budget.",
    image: "/planning.jpg",
  },
  {
    title: "Execution & Optimization",
    description:
      "We launch campaigns, monitor performance, and continuously optimize based on real data.",
    image: "/optim.jpg",
  },
  {
    title: "Reporting & Insights",
    description:
      "You receive clear reports and recommendations, not just raw numbers.",
    image: "/report.jpg",
  },
];

const DIGITAL_MARKETING_BENEFITS = [
  "Strategy tailored to your business, not generic templates",
  "Transparent reporting and data-driven decisions",
  "Cross-channel coordination (SEO, ads, social, email, content)",
  "Alignment between your website, content, and campaigns",
];

export default function DigitalMarketingPage() {
  return (
    <>
      <ServiceHero
        heading={HERO_HEADING}
        description={HERO_DESCRIPTION}
        imageSrc={HERO_IMAGE_SRC}
      />

      <WhatWeBuild
        heading="Our Digital Marketing Services"
        items={DIGITAL_MARKETING_CAPABILITIES}
      />

      <ServiceProcess
        title="Our Marketing Approach"
        steps={MARKETING_PROCESS_STEPS}
      />

      <WhyWorkWithUs
        title="Why Choose Orca Edge for Digital Marketing?"
        benefits={DIGITAL_MARKETING_BENEFITS}
      />

      <ServiceCTA
        heading="Want more visibility, leads, and sales—not just more clicks?"
        subtext="Let’s build a marketing strategy that works."
        buttonText="Request a Digital Marketing Strategy Session"
        buttonLink="/contact?service=digital-marketing"
      />
    </>
  );
}
