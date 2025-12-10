// app/services/copywriting/page.tsx
import type { Metadata } from "next";

import ServiceHero from "@/components/services/Hero";
import WhatWeBuild from "@/components/services/WhatWeBuild";
import ServiceProcess, {
  type ProcessStep,
} from "@/components/services/OurProcess";
import WhyWorkWithUs from "@/components/services/WhyWorkWithUs";
import ServiceCTA from "@/components/services/CTA";

export const metadata: Metadata = {
  title: "Copywriting Services | Orca Edge",
  description:
    "Conversion-focused copywriting services from Orca Edge to help you communicate clearly, build trust, and inspire action.",
};

const HERO_HEADING = "Copywriting at Orca Edge";

const HERO_DESCRIPTION =
  "Design catches attention. Words close the deal. At Orca Edge, our copywriting services help you communicate your value clearly, build trust, and inspire action across all your digital touchpoints.";

// TODO: Replace with your actual asset path
const HERO_IMAGE_SRC = "/CW.png";

const COPYWRITING_CAPABILITIES = [
  {
    title: "Website Copy",
    description:
      "Clear, persuasive, and structured content for homepages, landing pages, service pages, and more—designed to guide visitors toward action.",
  },
  {
    title: "Landing Page & Sales Copy",
    description:
      "Conversion-focused copy that speaks directly to your audience’s needs, objections, and motivations.",
  },
  {
    title: "Email Campaigns & Sequences",
    description:
      "Nurture sequences, product launches, newsletters, and onboarding emails that drive opens, clicks, and conversions.",
  },
  {
    title: "Ad Copy (Search & Social)",
    description:
      "Concise, compelling ad copy that stands out in crowded feeds and search results.",
  },
  {
    title: "Blog Posts & Articles",
    description:
      "Informative, SEO-conscious content that boosts visibility and positions your brand as an expert.",
  },
  {
    title: "Brand Messaging & Tone of Voice Guides",
    description:
      "Clarification of your brand voice, key messages, and value propositions to ensure consistency across all communication.",
  },
];

const COPYWRITING_PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Research & Discovery",
    description:
      "We learn about your business, audience, competitors, and existing messaging.",
  },
  {
    title: "Positioning & Messaging Strategy",
    description:
      "We define key messages, tone of voice, and the core benefits and differentiators we need to emphasize.",
  },
  {
    title: "Draft & Review",
    description:
      "We create copy drafts and collaborate with you to refine wording, structure, and emphasis.",
  },
  {
    title: "Optimization & Finalization",
    description:
      "We polish the copy for clarity, persuasion, and SEO where relevant, ensuring it’s ready for design and publishing.",
  },
];

const COPYWRITING_BENEFITS = [
  "Customer-centric, benefit-driven messaging",
  "Emphasis on clarity over hype",
  "Alignment with your brand voice and strategy",
  "Conversion-focused structure and calls-to-action",
  "Collaboration with your design and marketing efforts for a unified experience",
];

export default function CopywritingPage() {
  return (
    <>
      <ServiceHero
        heading={HERO_HEADING}
        description={HERO_DESCRIPTION}
        imageSrc={HERO_IMAGE_SRC}
      />

      <WhatWeBuild
        heading="Our Copywriting Services"
        items={COPYWRITING_CAPABILITIES}
      />

      <ServiceProcess
        title="Our Copywriting Process"
        steps={COPYWRITING_PROCESS_STEPS}
      />

      <WhyWorkWithUs
        title="What Makes Our Copy Different"
        benefits={COPYWRITING_BENEFITS}
      />

      <ServiceCTA
        heading="Your brand has something valuable to say."
        subtext="We’ll help you say it in a way that gets results."
        buttonText="Contact Us for Copywriting Services"
        buttonLink="/contact?service=copywriting"
      />
    </>
  );
}
