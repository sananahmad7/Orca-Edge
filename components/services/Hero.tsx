// components/services/ServiceHero.tsx
import type { FC } from "react";
import Image from "next/image";

type ServiceHeroProps = {
  heading: string;
  description: string;
  imageSrc: string;
};

const ServiceHero: FC<ServiceHeroProps> = ({
  heading,
  description,
  imageSrc,
}) => {
  return (
    <section className="font-nunito bg-white w-full relative">
      {/* 1. Removed 'mt-15': This was likely causing the imbalance (Margin Top + Padding Top > Padding Bottom).
         2. Added 'min-h-[...]: Ensures the section has a substantial presence even with little text.
         3. Added 'flex items-center': This forces the container to sit exactly in the vertical middle.
         4. Kept 'py-12': Acts as a safety buffer so content never hits the exact edge on small screens.
      */}
      <div className="min-h-[60vh] flex items-center mt-15 xl:mt-0 py-12 md:py-15">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
            {/* Text side */}
            <div className="w-full md:w-1/2 flex flex-col xl:justify-center text-left">
              <h1 className="text-4xl max-w-5xl md:text-5xl leading-[1.1] font-extrabold uppercase text-slate-900">
                {heading}
              </h1>

              <p className="mt-6 text-base md:text-lg lg:text-xl leading-relaxed text-slate-600 max-w-2xl">
                {description}
              </p>
            </div>

            {/* Illustration side */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full">
                <Image
                  src={imageSrc}
                  alt={heading}
                  width={800}
                  height={500}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
