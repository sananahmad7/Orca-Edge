"use client";

import React from "react";
import Link from "next/link";
import { InFromLeft, InFromRight } from "@/lib/animation";

const ClientHistory = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#1B7BB4] py-20 font-outfit lg:py-28 font-nunito">
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
      >
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-[#052f45]/35 blur-3xl" />
        <div className="absolute left-1/2 top-12 h-52 w-52 -translate-x-1/2 rounded-full bg-white/10 blur-2xl" />

        {/* subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />
      </div>

      <div className="relative mx-auto container px-4 md:px-8">
        {/* Main card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-12 lg:p-14">
          {/* Ribbon accent */}
          <div
            aria-hidden
            className="absolute -right-24 top-10 h-56 w-56 rotate-12 rounded-3xl bg-white/10"
          />
          <div
            aria-hidden
            className="absolute -left-20 bottom-10 h-48 w-48 -rotate-12 rounded-3xl bg-[#052f45]/25"
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Copy */}
            <InFromLeft
              className="space-y-6 lg:col-span-6"
              offset={40}
              amount={0.25}
              once
              delay={0.05}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                <span className="h-2 w-2 rounded-full bg-white/80" />
                Delivery-focused
              </div>

              <h2 className="text-3xl font-bold text-white md:text-4xl">
                From roadmap to shipped outcomes
              </h2>

              <p className="max-w-xl text-lg leading-relaxed text-white/85">
                We focus on building dependable products with clear scope,
                strong engineering, and measurable results—so teams can move
                quickly with confidence.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#0B4A6B] shadow-sm transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Work with us
                </Link>

                <Link
                  href="#cases"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  See work →
                </Link>
              </div>

              {/* Mini trust row */}
              <div className="pt-4">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-white/75">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    Fast iterations
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    Clear accountability
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    Measurable outcomes
                  </span>
                </div>
              </div>
            </InFromLeft>

            {/* Right: Stats */}
            <InFromRight
              className="lg:col-span-6"
              offset={40}
              amount={0.25}
              once
              delay={0.1}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {[
                  { value: "15+", label: "Websites shipped" },
                  { value: "5+", label: "Mobile apps delivered" },
                  { value: "25+", label: "Campaigns supported" },
                  { value: "100%", label: "Client focus" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-6 shadow-sm backdrop-blur transition hover:bg-white/15"
                  >
                    {/* corner shine */}
                    <div
                      aria-hidden
                      className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/10 blur-xl transition group-hover:bg-white/15"
                    />
                    <p className="text-4xl font-extrabold text-white">
                      {s.value}
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white/70">
                      {s.label}
                    </p>
                    <div className="mt-4 h-1 w-12 rounded-full bg-white/60" />
                  </div>
                ))}
              </div>

              {/* Optional: a small “metric” strip */}
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 text-white/85 backdrop-blur">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold">How we work</p>
                  <p className="text-sm font-bold text-white">
                    Tight feedback loops
                  </p>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[82%] rounded-full bg-white/70" />
                </div>
                <p className="mt-2 text-xs text-white/70">
                  Clear milestones, frequent check-ins, and transparent
                  progress.
                </p>
              </div>
            </InFromRight>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-10 h-24 bg-gradient-to-t from-[#1B7BB4] to-transparent"
        />
      </div>
    </section>
  );
};

export default ClientHistory;
