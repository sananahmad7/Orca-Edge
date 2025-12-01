// components/Home/OurInfo.tsx
import type { FC } from "react";
import Image from "next/image";
import LordIcon from "../LordIcon";

const OurInfo: FC = () => {
  return (
    <section className="font-nunito bg-white py-16 md:py-20">
      <div className="container mx-auto px-0 3xl:px-8">
        {/* Top Layout: Left intro + Right mission/vision cards */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-stretch">
          {/* Left: Intro block on theme background */}
          <div className="relative rounded-2xl bg-[#009f8b]  px-6 py-10 md:px-10 md:py-16 overflow-hidden">
            {/* subtle overlay shape */}
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10 max-w-md">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
                Our mission and
                <br />
                vision statement
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-900/80 leading-relaxed">
                This section shares how Orca Edge thinks about purpose and
                direction as your digital partner&mdash;the principles that
                guide every strategy, design, and solution we deliver.
              </p>
            </div>
          </div>

          {/* Right: Mission & Vision cards */}
          <div className="space-y-12 md:space-y-12">
            {/* Vision Card */}
            <article className="relative rounded-xl mt-5 md:mt-0border border-slate-200 bg-white px-6 pt-10 pb-6 shadow-sm">
              {/* Icon circle */}
              <div className="absolute -top-10 left-1/2 flex h-18 w-18 -translate-x-1/2 items-center justify-center rounded-full border border-[#009f8b]/40 bg-white shadow-md">
                <LordIcon
                  src="https://cdn.lordicon.com/lagziwcr.json"
                  style={{ width: 52, height: 52 }}
                  trigger="loop"
                  // trigger, colors, etc. can be added later
                />
              </div>

              <div className="text-center">
                <div className="mb-3 h-1 w-full bg-[#009f8b]" />
                <h3 className="mb-3 text-lg font-bold text-[#003144]">
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  To become the trusted digital partner for businesses that
                  demand both creativity and performance&mdash;delivering
                  solutions that not only look impressive, but also generate
                  real, measurable results.
                </p>
              </div>
            </article>

            {/* Mission Card */}
            <article className="relative rounded-xl border m border-slate-200 bg-white px-6 pt-10 pb-6 shadow-sm">
              {/* Icon circle */}
              <div className="absolute -top-10 left-1/2 flex h-18 w-18 -translate-x-1/2 items-center justify-center rounded-full border border-[#009f8b]/40 bg-white shadow-md">
                <LordIcon
                  src="https://cdn.lordicon.com/ehfrzide.json"
                  style={{ width: 52, height: 52 }}
                  trigger="loop"
                />
              </div>

              <div className="text-center">
                <div className="mb-3 h-1 w-full bg-[#009f8b]" />
                <h3 className="mb-3 text-lg font-bold text-[#003144]">
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  To empower businesses with clear strategy, thoughtful design,
                  and reliable technology&mdash;so they can communicate
                  effectively, operate efficiently, and grow confidently in a
                  digital-first world.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Bottom Image Block */}
        <div className="mt-12 md:mt-16 rounded-2xl overflow-hidden shadow-md">
          <div className="relative h-52 md:h-64 lg:h-92">
            <Image
              src="/mission.jpg" // TODO: replace with your image path in /public
              alt="Orca Edge team collaborating in a modern workspace"
              fill
              className="object-cover"
            />
            {/* optional subtle overlay to match theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#009f8b]/15 via-transparent to-[#009f8b]/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurInfo;
