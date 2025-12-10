// components/Footer.tsx
import type { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="font-nunito bg-[#003144] text-slate-100 border-t border-[#009f8b]/40">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-12">
        {/* Top row */}
        <div className="grid gap-10 md:gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] items-start">
          {/* Brand / Intro */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
                Orca Edge
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm md:text-[15px] text-slate-200/80 leading-relaxed">
              Digital experiences designed to perform. We build, market, and
              support the products that move your business forward.
            </p>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-[#00ffdF]/80 mb-3">
              Services
            </h3>
            <ul className="space-y-2 text-sm md:text-[15px]">
              <li>
                <Link
                  href="/services/web-development"
                  className="transition-colors hover:text-white hover:underline underline-offset-4"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-app-development"
                  className="transition-colors hover:text-white hover:underline underline-offset-4"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="transition-colors hover:text-white hover:underline underline-offset-4"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/copywriting"
                  className="transition-colors hover:text-white hover:underline underline-offset-4"
                >
                  Copywriting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company / Misc */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-[#00ffdF]/80 mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm md:text-[15px]">
              <li>
                <Link
                  href="/aboutUs"
                  className="transition-colors hover:text-white hover:underline underline-offset-4"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white hover:underline underline-offset-4"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & bottom row */}
        <div className="mt-10 border-t border-slate-700/60 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-slate-300/80">
            © {year} Orca Edge. All rights reserved.
          </p>

          <p className="text-xs md:text-sm text-slate-300/80">
            Built with care, clarity, and conversion in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
