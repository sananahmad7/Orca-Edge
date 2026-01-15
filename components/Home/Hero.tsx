"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full mt-10  max-h-[75vh] bg-slate-900 overflow-hidden flex items-center justify-center font-nunito text-white  py-20 xl:py-30">
      {/* 1. Background Image Area */}
      <div className="absolute inset-0 z-0">
        <Image
          // REPLACE THIS SRC with your actual deep blue/ocean image URL
          src="/Hero.jpg"
          width={100}
          height={100}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* CRITICAL OVERLAY: Darker gradient to support the new blue theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. Technical Grid Overlay */}
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
      <div className="relative z-10 container px-4 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Typography */}
        <div className=" space-y-4 md:space-y-6 2xl:space-y-8 2xl:max-w-2xl">
          {/* Headline */}
          <h1 className="text-4xl md:text-4xl 2xl:text-5xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg">
            Powering Your Digital Presence with a{" "}
            {/* CHANGED: Teal -> Sky Blue for contrast on dark bg */}
            <span className="text-[#38bdf8] relative inline-block">
              Sharper Edge
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base xl:text-lg 2xl:text-xl text-slate-300 leading-relaxed max-w-xl drop-shadow-md font-light">
            Orca Edge is a full-service digital agency delivering
            high-performing websites, mobile apps, digital marketing, and
            copywriting that help brands grow with clarity, confidence, and
            measurable results.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-5 xl:pt-4">
            <Link
              href="/aboutUs"
              className="px-3 xl:px-8 py-3 bg-[#1677B3] cursor-pointer text-white font-bold rounded-sm hover:bg-[#126294] transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(22,119,179,0.4)] hover:shadow-[0_0_30px_rgba(22,119,179,0.6)]"
            >
              <span>More About Us</span>
              <FaArrowRight className="w-3 h-3" />
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3 rounded-sm border border-slate-500 cursor-pointer text-slate-200 font-medium hover:text-white hover:border-[#38bdf8] hover:bg-[#1677B3]/10 transition-colors duration-300 backdrop-blur-sm"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>

        {/* Right Column: The "Anti-Template" Visual */}
        <div className="relative hidden lg:block h-[400px] w-full perspective-[1200px]">
          <div className="absolute inset-0 flex items-center justify-center p-10">
            {/* The Main Composition Container */}
            <div className="relative w-full max-w-[450px] aspect-[4/3] transform rotate-y-[15deg] rotate-x-[10deg] transition-all duration-700 ease-out hover:rotate-y-[5deg] hover:rotate-x-[5deg] hover:scale-105">
              {/* --- Layer 1: The Foundation Plate (Glass & Wireframe) --- */}
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-3xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                {/* Subtle Grid Background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Abstract Wireframe hints (Dev) */}
                <div className="absolute top-0 left-0 right-0 h-12 border-b border-white/10 flex items-center px-4 space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
                <div className="absolute top-20 left-10 w-1/3 h-2 bg-slate-700/50 rounded"></div>
                <div className="absolute top-24 left-10 w-1/4 h-2 bg-slate-700/30 rounded"></div>

                {/* Glowing Data Stream - Changed to Blue */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-x-10 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent blur-sm opacity-70 transform -rotate-12 translate-y-12"></div>
                </div>
              </div>

              {/* --- Layer 2: The Growth Engine (Digital Marketing) --- */}
              <div className="absolute -left-10 bottom-10 w-40 h-48 bg-slate-800/80 backdrop-blur-xl border-l border-t border-white/20 rounded-lg p-4 shadow-[0_10px_40px_-10px_rgba(22,119,179,0.3)] z-20 transform translate-z-12">
                <div className="text-xs text-slate-400 mb-2 font-mono">
                  Growth Velocity
                </div>
                {/* Abstract Chart - Changed to Blue Palette */}
                <div className="relative h-24 w-full flex items-end space-x-1">
                  <div className="w-1/5 h-1/3 bg-[#1677B3]/20 rounded-t"></div>
                  <div className="w-1/5 h-1/2 bg-[#1677B3]/40 rounded-t"></div>
                  <div className="w-1/5 h-2/3 bg-[#1677B3]/70 rounded-t"></div>
                  <div className="w-1/5 h-3/4 bg-[#38bdf8] rounded-t relative">
                    {/* Glowing peak indicator */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(56,189,248,1)] animate-pulse"></div>
                  </div>
                </div>
                <div className="mt-4 h-1 w-full bg-slate-700 rounded overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-[#1677B3] to-[#38bdf8]"></div>
                </div>
              </div>

              {/* --- Layer 3: The Content Blocks (Copywriting) --- */}
              <div className="absolute -right-8 top-16 w-32 p-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-md shadow-xl z-30 transform translate-z-24 flex flex-col gap-2">
                <div className="h-2 w-2/3 bg-slate-600/50 rounded animate-pulse"></div>
                <div className="h-2 w-full bg-slate-700/50 rounded"></div>
                <div className="h-2 w-1/2 bg-slate-700/50 rounded"></div>
              </div>

              <div className="absolute -right-4 top-40 w-24 p-2 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-md shadow-lg z-20 transform translate-z-16 flex flex-col gap-2 opacity-80">
                <div className="h-1.5 w-full bg-slate-600/50 rounded"></div>
                <div className="h-1.5 w-3/4 bg-slate-700/50 rounded"></div>
              </div>

              {/* --- Layer 4: The Core Accent (The "Spark") --- */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
                {/* Rings changed to Sky Blue/White */}
                <div className="relative w-32 h-32 rounded-full border-[1px] border-[#38bdf8]/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-[#38bdf8] rounded-full shadow-[0_0_15px_rgba(56,189,248,1)]"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-[3px] border-[#38bdf8]/10 flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#1677B3] rounded-full shadow-[0_0_30px_rgba(56,189,248,0.8)] animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
