// app/services/web-development/page.tsx (or wherever)
import Hero from "@/components/services/Hero";
import WhatWeBuild from "@/components/services/WhatWeBuild";
import ServiceProcess, { ProcessStep } from "@/components/services/OurProcess";
import WhyWorkWithUs from "@/components/services/WhyWorkWithUs";
import CTA from "@/components/services/CTA";

const webDevProcess: ProcessStep[] = [
  {
    title: "Discovery & Strategy",
    description:
      "We analyze your business objectives, target audience, and competitors to define your website’s role in your overall digital strategy.",
  },
  {
    title: "Information Architecture & UX",
    description:
      "We map out site structure, navigation, and user flows to make your website intuitive and easy to use.",
  },
  {
    title: "Design & Prototyping",
    description:
      "We create wireframes and visual designs that align with your brand identity and user expectations.",
  },
  {
    title: "Development & Integration",
    description:
      "Our developers turn designs into reality using best practices in front-end and back-end development, integrating CRM, analytics, and other third-party tools as needed.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We test across devices and browsers, checking for performance, security, and usability before launch.",
  },
  {
    title: "Launch & Training",
    description:
      "Once the site is live, we provide guidance or training so you and your team can manage content effectively.",
  },
];
export const webCapabilities = [
  {
    title: "Custom Website Design & Development",
    description:
      "Tailored designs that reflect your brand identity, built with clean, modern code for long-term stability.",
  },
  {
    title: "Responsive & Mobile-First Layouts",
    description:
      "Websites that look and function flawlessly on desktops, tablets, and smartphones.",
  },
  {
    title: "Content Management Systems (CMS)",
    description:
      "Easy-to-manage sites built on platforms like WordPress or custom CMS solutions, so you can update content without touching code.",
  },
  {
    title: "Landing Pages & Sales Funnels",
    description:
      "High-converting landing pages designed for campaigns, product launches, or lead generation initiatives.",
  },
  {
    title: "Website Performance Optimization",
    description:
      "Faster load times, cleaner code, and streamlined assets to improve user experience and search engine performance.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing updates, security patches, backups, and technical support to keep your site healthy and secure.",
  },
];
const webDevBenefits = [
  "Strategic, not template-driven, design",
  "Clean, scalable, and maintainable code",
  "Focus on SEO basics and technical performance",
  "Clear timelines and consistent communication",
  "Post-launch support and optimization options",
  "Long-term partnership mindset for scaling and improvements",
];
export default function WebDevelopmentPage() {
  return (
    <div>
      <Hero
        heading="Web Development at Orca Edge"
        description="Your website is often the first serious interaction a customer has with your brand. At Orca Edge we design and develop websites that are visually compelling, technically robust, and optimized to turn visitors into customers."
        imageSrc="/web2.png"
      />
      <WhatWeBuild heading="What We Deliver" items={webCapabilities} />
      <ServiceProcess
        title="Our Web Development Process"
        steps={webDevProcess}
      />
      <WhyWorkWithUs
        title="Why Clients Choose Orca Edge for Web Development"
        benefits={webDevBenefits}
      />
      <CTA
        heading="Ready for a website that actually works for your business?"
        subtext="Talk to Orca Edge about your web project today."
        buttonText="Book a Free Consultation"
      />
    </div>
  );
}
