import Hero from "@/components/services/Hero";
import WhatWeBuild from "@/components/services/WhatWeBuild";
import ServiceProcess, { ProcessStep } from "@/components/services/OurProcess";
import WhyWorkWithUs from "@/components/services/WhyWorkWithUs";
import CTA from "@/components/services/CTA";

// 1. Define the data object
const mobileAppProcess: ProcessStep[] = [
  {
    title: "Planning & Requirements",
    description:
      "We start by defining your app’s purpose, user roles, must-have features, and desired outcomes.",
    image: "/planning.jpg",
  },
  {
    title: "UX & UI Design",
    description:
      "Our designers create intuitive user journeys and interfaces that are clean, consistent, and on-brand.",
    image: "/UX.jpg",
  },
  {
    title: "Development",
    description:
      "We build using robust frameworks and best coding practices, focusing on performance, security, and scalability.",
    image: "/development.jpg",
  },
  {
    title: "Testing & QA",
    description:
      "We rigorously test for functionality, usability, and performance across devices and operating systems.",
    image: "/report.jpg",
  },
  {
    title: "Deployment",
    description:
      "We prepare and publish your app to the App Store and/or Google Play, managing the technical requirements and submissions.",
    image: "/deployment.jpg",
  },
  {
    title: "Post-Launch Support",
    description:
      "Ongoing support to optimize performance, address user feedback, and roll out new features.",
    image: "/launch.jpg",
  },
];

const mobileCapabilities = [
  {
    title: "iOS & Android Apps",
    description:
      "Native or cross-platform applications built with performance and user experience in mind.",
  },
  {
    title: "MVP Development",
    description:
      "Minimum Viable Products for startups and businesses looking to quickly validate ideas and gather user feedback.",
  },
  {
    title: "Business & Productivity Apps",
    description:
      "Tools that streamline operations, support internal teams, or enhance customer service.",
  },
  {
    title: "Customer-Facing Apps",
    description:
      "Applications for bookings, e-commerce, communities, or services that keep your brand in the hands of your customers.",
  },
  {
    title: "API & Backend Development",
    description:
      "Secure, scalable backends that power your app, integrate with your existing systems, and support future features.",
  },
  {
    title: "App Maintenance & Updates",
    description:
      "Continuous monitoring, bug fixes, feature enhancements, and OS compatibility updates.",
  },
];
const mobileBenefitsData = [
  "Clear technical documentation and architecture",
  "Attention to both UX details and backend stability",
  "Transparent progress updates and milestone reviews",
  "Long-term partnership mindset for scaling and improvements",
];
function MobileDev() {
  return (
    <div>
      <Hero
        heading="Mobile App Development at Orca Edge"
        description="Mobile users expect speed, simplicity, and reliability. At Orca Edge, we design and develop mobile applications that deliver seamless experiences, support your business goals, and provide long-term scalability."
        imageSrc="/mobile2.png"
      />
      <WhatWeBuild heading="What We Build" items={mobileCapabilities} />
      <ServiceProcess
        title="Our Mobile App Development Process"
        steps={mobileAppProcess}
      />
      <WhyWorkWithUs
        title="Benefits of Working with Orca Edge"
        benefits={mobileBenefitsData}
      />
      <CTA
        heading="Have an app idea—or an existing app that needs improvement?"
        subtext="Let Orca Edge help you bring it to life."
        buttonText="Schedule a Mobile App Discovery Call"
        buttonLink="/contact"
      />
    </div>
  );
}

export default MobileDev;
