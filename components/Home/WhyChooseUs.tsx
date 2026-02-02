"use client";
import React from "react"; // Explicit import to solve 'Cannot find namespace JSX'
import Image from "next/image";
import { InFromLeft, InFromRight } from "@/lib/animation";
import {
  IoChatbubbleOutline,
  IoHandLeftOutline,
  IoHelpBuoyOutline,
  IoPieChartOutline,
  IoLayersOutline,
  IoBulbOutline,
} from "react-icons/io5";

const WhyChooseUs = () => {
  const points = [
    {
      title: "Strategy First",
      desc: "Every project is grounded in strategy.",
      icon: <IoBulbOutline />,
    },
    {
      title: "Seamless Delivery",
      desc: "Design, dev, and copy work as one.",
      icon: <IoLayersOutline />,
    },
    {
      title: "Results Obsessed",
      desc: "We track traffic, leads, and conversions.",
      icon: <IoPieChartOutline />,
    },
    {
      title: "Transparent Comms",
      desc: "Clear timelines and honest updates.",
      icon: <IoChatbubbleOutline />,
    },
    {
      title: "Long-Term Partners",
      desc: "We stay to support and scale with you.",
      icon: <IoHandLeftOutline />,
    },
    {
      title: "Ongoing Support",
      desc: "We are a message away for tweaks.",
      icon: <IoHelpBuoyOutline />,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side: Image container matches height of points */}
          <InFromLeft className="relative min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/choose.jpg"
              alt="Orca Edge Strategy"
              fill
              className="object-cover"
            />
          </InFromLeft>

          {/* Right Side: 6 Points container */}
          <InFromRight className="flex flex-col">
            <div className="mb-10">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Why Partners Choose{" "}
                <span className="text-[#1677B3]">Orca Edge</span>
              </h2>
              <div className="h-1 w-20 bg-[#1677B3] rounded-full"></div>
            </div>

            {/* Grid of 6 points - adjusted for density */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-center gap-2 transition-all hover:shadow-md hover:border-[#1677B3]/20"
                >
                  <div className="text-[#1677B3] text-xl bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">
                      {point.title}
                    </h4>
                    <p className="text-slate-500 text-xs mt-1 leading-snug">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </InFromRight>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
