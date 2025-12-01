// components/About/AboutHero.tsx
import type { FC } from "react";
import Image from "next/image";

const AboutHero: FC = () => {
  return (
    <section className="relative font-nunito text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Hero.jpg" // TODO: replace with your image in /public
          alt="Team collaborating in a modern workspace"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Color Overlay (black + teal) */}
      <div className="pointer-events-none absolute inset-0 opacity-90 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,159,139,0.6)_0,_transparent_55%),linear-gradient(to_bottom_right,rgba(0,0,0,0.8),rgba(0,0,0,0.9))]" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex min-h-[60vh] items-center py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-100 mb-4">
              About Orca Edge
            </p>

            <h1 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
              Who We Are
            </h1>

            <p className="mt-5 text-sm md:text-base text-slate-100/90 leading-relaxed">
              Orca Edge is a digital solutions partner dedicated to helping
              businesses build a strong, strategic, and sustainable presence
              online. We specialize in web development, mobile app development,
              digital marketing, and copywriting—bringing all the pieces
              together under one roof so you don&apos;t have to juggle multiple
              agencies or freelancers.
            </p>

            <p className="mt-4 text-sm md:text-base text-slate-100/80 leading-relaxed">
              We believe that digital isn&apos;t about being everywhere;
              it&apos;s about showing up in the right places, with the right
              message, at the right time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
