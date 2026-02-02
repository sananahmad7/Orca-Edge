"use client";

import React, { useMemo } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiApachekafka,
  SiApacheairflow,
  SiPrisma,
  SiSentry,
  SiOpenai,
} from "react-icons/si";

type Tech = {
  name: string;
  tier: "Core" | "Advanced";
  Icon: React.ComponentType<{ className?: string }>;
};

export default function TechFrameworkTicker() {
  const tech = useMemo<Tech[]>(
    () => [
      // Core
      { name: "React", tier: "Core", Icon: SiReact },
      { name: "Next.js", tier: "Core", Icon: SiNextdotjs },
      { name: "TypeScript", tier: "Core", Icon: SiTypescript },
      { name: "Node.js", tier: "Core", Icon: SiNodedotjs },
      { name: "Tailwind", tier: "Core", Icon: SiTailwindcss },
      { name: "PostgreSQL", tier: "Core", Icon: SiPostgresql },
      { name: "MongoDB", tier: "Core", Icon: SiMongodb },
      { name: "Redis", tier: "Core", Icon: SiRedis },
      { name: "Docker", tier: "Core", Icon: SiDocker },

      // Advanced
      { name: "Kubernetes", tier: "Advanced", Icon: SiKubernetes },
      { name: "GraphQL", tier: "Advanced", Icon: SiGraphql },
      { name: "Kafka", tier: "Advanced", Icon: SiApachekafka },
      { name: "Airflow", tier: "Advanced", Icon: SiApacheairflow },
      { name: "Prisma", tier: "Advanced", Icon: SiPrisma },
      { name: "Sentry", tier: "Advanced", Icon: SiSentry },
      { name: "OpenAI", tier: "Advanced", Icon: SiOpenai },
    ],
    [],
  );

  // Duplicate for seamless loop
  const loop = [...tech, ...tech];

  const Pill = ({ t }: { t: Tech }) => {
    const badge =
      t.tier === "Core"
        ? "border-white/15 bg-white/10 text-white/85"
        : "border-white/15 bg-[#052f45]/25 text-white/85";

    return (
      <div
        className={[
          "group relative flex items-center gap-3",
          "rounded-2xl border px-4 py-2.5",
          "backdrop-blur-md shadow-sm",
          "transition hover:bg-white/15",
          badge,
        ].join(" ")}
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
          <t.Icon className="h-5 w-5 text-white/90" />
        </span>

        <div className="leading-tight">
          <div className="text-sm font-bold text-white">{t.name}</div>
          <div className="text-[10px] font-semibold text-white/65">
            {t.tier}
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-white/10 blur-xl opacity-0 transition group-hover:opacity-100"
        />
      </div>
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#1B7BB4] py-10 font-outfit">
      {/* Background accents (same theme) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
      >
        <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-[#052f45]/35 blur-3xl" />
        <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-15" />
      </div>

      <div className="relative mx-auto container px-4 md:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
              <span className="h-2 w-2 rounded-full bg-white/80" />
              Frameworks & infrastructure
            </div>
            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              Tools we build with
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/85 md:text-base">
              A balanced stack across frontend, backend, data, and operations.
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-3 text-xs font-semibold text-white/85">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-white/80" />
              Core
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#052f45]/25 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              Advanced
            </span>
          </div>
        </div>

        {/* Ticker shell */}
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl md:p-6">
          {/* Track */}
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-4 py-4">
            <div className="ticker flex w-max items-center gap-3">
              {loop.map((t, i) => (
                <Pill key={`${t.name}-${t.tier}-${i}`} t={t} />
              ))}
            </div>

            {/* Edge fades */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1B7BB4] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#1B7BB4] to-transparent"
            />
          </div>

          {/* Small note row */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white/80">
            <p className="text-sm font-semibold">
              Want a specific stack combination?
              <span className="ml-2 text-white/70">
                We’ll align to your setup.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker {
          animation: ticker 74s linear infinite;
          will-change: transform;
        }
        /* pause on hover */
        .ticker:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
