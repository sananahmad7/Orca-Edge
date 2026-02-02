"use client";
import React from "react";
// Import the animation components from your library
import { InFromLeft, InFromRight } from "@/lib/animation";

function Intro() {
  return (
    <section className="bg-white font-nunito py-22 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Section: Animates in from the Left */}
          <InFromLeft
            className="flex flex-col justify-center h-full"
            offset={50}
          >
            <h2 className="text-3xl 2xl:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Essential{" "}
              <span className="text-[#1677B3] relative">
                Impact
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#1677B3]"></span>
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-black leading-relaxed font-normal">
                In a world where first impressions are made in seconds, your
                digital presence is not optional.{" "}
                <strong className="text-slate-900 font-bold">
                  It's essential.
                </strong>
              </p>
              <p className="text-lg md:text-xl text-black font-normal leading-relaxed">
                At Orca Edge, we combine strategic thinking, clean design, and
                cutting-edge technology to help businesses stand out,
                communicate clearly, and convert more customers.
              </p>
            </div>
            <div className="w-12 h-[2px] bg-slate-200 mt-10"></div>
          </InFromLeft>

          {/* Right Section: Animates in from the Right */}
          <InFromRight className="h-full" offset={50}>
            <div className="h-full bg-[#1677B3] text-white rounded-sm p-8 md:p-12 lg:p-14 flex flex-col justify-center relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Subtle Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

              {/* Decorative geometrical accent */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#38bdf8]/30 rotate-12"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#38bdf8]/10 rotate-45 backdrop-blur-sm"></div>

              <div className="relative z-10">
                <h3 className="font-bold text-3xl 2xl:text-4xl mb-6 border-l-4 border-[#38bdf8] pl-4 inline-block tracking-tight text-white">
                  Our Capabilities
                </h3>
                <p className="text-xl 2xl:text-xl font-normal text-slate-100 leading-snug tracking-tight">
                  From pixel-perfect websites and intuitive mobile apps to
                  performance-driven marketing campaigns and persuasive
                  copywriting, we provide everything you need to build, grow,
                  and protect your brand online.
                </p>
              </div>
            </div>
          </InFromRight>
        </div>
      </div>
    </section>
  );
}

export default Intro;
