"use client";
import React from "react";
import { IoStar, IoPersonCircle } from "react-icons/io5";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "CEO, TechFlow",
      stars: 5,
      text: "Orca Edge delivered our platform two weeks ahead of schedule. Incredible attention to detail.",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Marketing Director",
      stars: 5,
      text: "The most practical guidance we've received in years. No fluff, just results.",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Founder, GreenLeaf",
      stars: 5,
      text: "Our landing page conversion rate tripled after the overhaul. Highly recommend!",
    },
    {
      id: 4,
      name: "David Smith",
      role: "Product Manager",
      stars: 5,
      text: "Professional, responsive, and technically superior. A joy to work with.",
    },
    {
      id: 5,
      name: "Ayesha Khan",
      role: "Creative Lead",
      stars: 5,
      text: "They truly understood our vision and translated it into a beautiful, functional UI.",
    },
    {
      id: 6,
      name: "Julian Voss",
      role: "CTO, Fintech Solutions",
      stars: 5,
      text: "Clean code and seamless communication. They are now our go-to partners.",
    },
    {
      id: 7,
      name: "Sophie Moore",
      role: "E-commerce Owner",
      stars: 5,
      text: "The ongoing support has been a lifesaver for our scaling business.",
    },
    {
      id: 8,
      name: "Tom Baker",
      role: "Startup Founder",
      stars: 5,
      text: "Practical, honest, and high-quality work. Exactly what we needed.",
    },
  ];

  const displayReviews = [...reviews, ...reviews];

  return (
    <section className="overflow-hidden bg-white py-24 font-nunito">
      {/* Heading container */}
      <div className="mx-auto container px-5 lg:px-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 2xl:text-4xl">
            Don&apos;t just take our word for it.
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-medium text-slate-500 md:text-base">
            We’ve helped dozens of companies scale their digital presence. Here
            is what our partners have to say.
          </p>
        </div>
      </div>

      {/* Carousel area (separate wrapper so we can keep permanent side gutters) */}
      <div className="relative">
        {/* Side fades / gutters (these create the “space” visually at all times) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent"
        />

        {/* This container controls the left/right padding */}
        <div className="mx-auto container px-4 md:px-8 ">
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-scroll gap-6 py-2">
              {displayReviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full max-w-[320px] shrink-0 rounded-3xl bg-[#1B7BB4] p-8  md:max-w-[420px]"
                >
                  <div>
                    <div className="mb-5 flex gap-1">
                      {[...Array(review.stars)].map((_, i) => (
                        <IoStar key={i} className="text-xl text-yellow-400" />
                      ))}
                    </div>

                    <p className="mb-8 text-lg font-semibold leading-relaxed text-white md:text-xl">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                    <div className="rounded-full bg-white/10 p-1">
                      <IoPersonCircle className="text-4xl text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold tracking-wide text-white">
                        {review.name}
                      </h4>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-100">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll 45s linear infinite;
                will-change: transform;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
