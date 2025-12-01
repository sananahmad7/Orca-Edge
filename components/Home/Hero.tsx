"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full max-h-[75vh] bg-slate-900 overflow-hidden flex items-center justify-center font-nunito text-white py-20">
      {/* 1. Background Image Area */}
      {/* The user will add an aqua blue image here. */}
      <div className="absolute inset-0 z-0">
        <Image
          // REPLACE THIS SRC with your actual aqua blue image URL
          src="/Hero.jpg"
          width={100}
          height={100}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* CRITICAL OVERLAY: This ensures white text is visible on a bright aqua background */}
        {/* We use a gradient: Darker on the left (text area), more transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-black/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />{" "}
        {/* Extra layer for uniform dimming if needed */}
      </div>

      {/* 2. Technical Grid Overlay (Adds texture without cartoonish animation) */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container px-15 3xl:px-10  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Typography */}
        <div className=" space-y-4 md:space-y-6 2xl:space-y-8 2xl:max-w-2xl">
          {/* Badge: Technical Label Style */}
          <div className="inline-flex items-center gap-3 px-3 py-1 border-l-2 border-[#00ffdf] bg-black/40 backdrop-blur-md">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#00ffdf] uppercase shadow-black drop-shadow-md">
              Digital Agency
            </span>
          </div>

          {/* Headline: Editorial Style with High Contrast */}
          <h1 className="text-4xl md:text-4xl 2xl:text-5xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg">
            Powering You Digital Presence with a{" "}
            {/* Using a bright teal that stands out against the dark overlay */}
            <span className="text-[#00bda5] relative inline-block">
              Sharper Edge
            </span>
          </h1>

          {/* Subheadline: Clean Swiss Style */}
          <p className="text-base xl:text-lg text-slate-200 leading-relaxed max-w-xl drop-shadow-md font-light">
            Orca Edge is a full-service digital agency delivering
            high-performing websites, mobile apps, digital marketing, and
            copywriting that help brands grow with clarity, confidence, and
            measurable results.
          </p>

          {/* CTA Group: Solid, geometric buttons */}
          <div className="flex flex-col sm:flex-row gap-5 xl:pt-4">
            <button className="px-3 xl:px-8 py-3 bg-[#009f8b] cursor-pointer text-black font-bold rounded-sm hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(0,255,223,0.2)]">
              <span>Let’s Build Something Exceptional</span>
              <FaArrowRight className="w-3 h-3" />
            </button>

            <button className="px-8 py-3 rounded-sm border border-slate-400 cursor-pointer text-slate-100 font-medium hover:text-white hover:border-[#00ffdf] hover:bg-[#00ffdf]/10 transition-colors duration-300 backdrop-blur-sm">
              Book a Free Consultation
            </button>
          </div>
        </div>

        {/* Right Column: The "Anti-Template" Visual */}
        {/* Kept abstract and technical. The dark plates ensure it pops against the aqua background. */}
        <div className="relative hidden lg:block h-[400px] w-full perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* The Composition */}
            <div className="relative w-[320px] h-[400px] transform rotate-y-12 rotate-x-6 transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-3">
              {/* Layer 1: Base Dark Plate (High opacity to block background image) */}
              <div className="absolute inset-0 bg-[#0a0a0a]/95 border border-slate-700 shadow-2xl backdrop-blur-xl"></div>

              {/* Layer 2: The "Grid" (Structure) */}
              <div className="absolute inset-4 border border-dashed border-slate-600/30 grid grid-cols-4 grid-rows-4 gap-4 p-4">
                <div className="col-span-2 row-span-1 bg-[#00ffdf]/10 border border-[#00ffdf]/20"></div>
                <div className="col-span-1 row-span-1 border border-slate-700"></div>
                <div className="col-span-4 row-span-2 border-t border-b border-slate-700 relative overflow-hidden">
                  {/* Abstract Data Lines */}
                  <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800"></div>
                  <div className="absolute top-0 left-1/4 w-px h-full bg-slate-800"></div>
                  <div className="absolute top-3 left-3 w-12 h-1 bg-slate-600"></div>
                  <div className="absolute top-6 left-3 w-8 h-1 bg-slate-700"></div>
                </div>
              </div>

              {/* Layer 3: The "Edge" Accent */}
              <div className="absolute -right-12 top-12 w-24 h-24 border-2 border-[#00ffdf] backdrop-blur-xl flex items-center justify-center z-20 shadow-[0_0_30px_rgba(0,255,223,0.1)] bg-black/60">
                <div className="w-3 h-3 bg-[#00ffdf]"></div>
              </div>

              {/* Layer 4: Floating "Card" */}
              <div className="absolute -left-8 bottom-12 w-48 h-32 bg-[#111] border-l-4 border-[#007667] p-6 shadow-2xl z-30 flex flex-col justify-between">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-[#00ffdf] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
