// components/Home/CoreServices.tsx
import Link from "next/link";
import type { FC, ReactNode } from "react";
import LordIcon from "../LordIcon";
import { themeClasses } from "@/lib/themeClasses";
type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Your website is your digital headquarters. We design and develop fast, responsive, and conversion-focused websites that not only look beautiful but also perform under pressure. Whether you need a corporate site, landing page, or fully custom platform, we create experiences that keep users engaged and moving toward action.",
    href: "/services/web-development",
    cta: "Learn more about Web Development",
    icon: (
      <LordIcon
        src="https://cdn.lordicon.com/ovxlloho.json"
        trigger="loop"
        colors="primary:#003144,secondary:#009f8b"
        style={{ width: "75px", height: "65px" }}
      />
    ),
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Stay in your customers&apos; hands—literally. We design and build user-friendly mobile applications for iOS and Android that align with your business goals and delight your users. From MVPs to feature-rich products, we help you deliver seamless experiences on the go.",
    href: "/services/mobile-app-development",
    cta: "Learn more about Mobile App Development",
    icon: (
      <LordIcon
        src="https://cdn.lordicon.com/lxbjmpxy.json"
        trigger="loop"
        colors="primary:#003144,secondary:#009f8b"
        style={{ width: "75px", height: "65px" }}
      />
    ),
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Visibility without strategy is noise. Our digital marketing services are built around your objectives—whether it&apos;s brand awareness, lead generation, or sales. We blend SEO, social media, paid ads, and email marketing into a cohesive, data-driven strategy that grows your audience and revenue.",
    href: "/services/digital-marketing",
    cta: "Learn more about Digital Marketing",
    icon: (
      <LordIcon
        src="https://cdn.lordicon.com/xovdoewm.json"
        trigger="loop"
        colors="primary:#003144,secondary:#009f8b"
        style={{ width: "75px", height: "65px" }}
      />
    ),
  },
  {
    id: "copywriting",
    title: "Copywriting",
    description:
      "Words are how your brand speaks when you&apos;re not in the room. We craft clear, persuasive, and on-brand copy that resonates with your ideal customers—across your website, ads, emails, and more. Great copy doesn&apos;t just sound good; it drives action.",
    href: "/services/copywriting",
    cta: "Learn more about Copywriting",
    icon: (
      <LordIcon
        src="https://cdn.lordicon.com/eyjfodee.json"
        trigger="loop"
        colors="primary:#003144,secondary:#009f8b"
        style={{ width: "75px", height: "65px" }}
      />
    ),
  },
];

const CoreServices: FC = () => {
  return (
    <section
      className={`font-nunito ${themeClasses.sectionBg} py-16
                 bg-[linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)]
                 bg-[length:40px_40px]`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10 text-center text-gray-900">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-sm md:text-base text-gray-800">
            From web and mobile to marketing and copy, we provide end-to-end
            digital solutions that move your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col  bg-white p-6 rounded-md shadow-2xl shadow-black/10 transition-transform transition-shadow duration-150 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex   items-center justify-center rounded-full bg-white/15">
                {service.icon}
              </div>

              <h3 className="mb-3 text-lg font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>

              <div className="mt-auto">
                <Link
                  href={service.href}
                  aria-label={service.cta}
                  className="inline-flex items-center justify-center rounded-full bg-[#009f8b] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#00bda5] focus:outline-none focus:ring-2 focus:ring-[#00ffdF] focus:ring-offset-2"
                >
                  {service.cta}
                  <span className="ml-2 text-lg" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
