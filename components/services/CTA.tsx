import type { FC } from "react";
import Link from "next/link";

type ServiceCTAProps = {
  heading: string;
  subtext: string;
  buttonText?: string;
  buttonLink?: string;
};

const ServiceCTA: FC<ServiceCTAProps> = ({
  heading,
  subtext,
  buttonText = "Start Your Project",
  buttonLink = "/contact",
}) => {
  return (
    <section className="font-nunito bg-white py-20 md:py-28 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        {/* The Layout: Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Side: The Hook (Heading) - Takes up more space */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              {heading}
            </h2>
          </div>

          {/* Right Side: The Action (Text + Button) */}
          <div className="lg:col-span-5 flex flex-col items-start relative">
            {/* Architectural Vertical Line (Desktop only) */}
            <div className="hidden lg:block absolute -left-8 top-2 bottom-2 w-px bg-slate-200" />

            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8">
              {subtext}
            </p>

            {/* Modern "Pill" Button with Arrow Interaction */}
            <Link
              href={buttonLink}
              className="group inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-[#009f8b] hover:shadow-lg hover:shadow-[#009f8b]/25 hover:-translate-y-1"
            >
              <span>{buttonText}</span>

              {/* Circle Icon wrapper */}
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-[#009f8b] transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform transition-transform duration-300 group-hover:-rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
