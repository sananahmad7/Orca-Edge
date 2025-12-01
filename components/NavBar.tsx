"use client";

// components/layout/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Web Development", href: "/web-development" },
  { label: "Mobile App Development", href: "/mobile-app-development" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Copywriting", href: "/copywriting" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <header className="w-full bg-[#003144] text-white">
      <div className="mx-auto flex h-11 max-w-6xl items-center justify-between px-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Swap src with your real logo file */}
          <Image
            src="/orca-edge-logo.svg"
            alt="Orca Edge"
            width={110}
            height={24}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Center: Nav links */}
        <nav className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex items-center  gap-10 text-[11px] font-semibold tracking-[0.35em] uppercase">
            <li>
              <Link
                href="/"
                className="transition-colors text-sm font-nunito  hover:text-[#00ffdf]"
              >
                Home
              </Link>
            </li>

            {/* Services with hover dropdown */}
            <li className="relative group">
              <button
                className="cursor-pointer text-sm  font-nunito transition-colors h-10 hover:text-[#00ffdf]"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SERVICES
              </button>

              {/* Dropdown */}
              <div className="pointer-events-none absolute left-1/2 top-full z-50  w-56 -translate-x-1/2 rounded-md bg-[#022433] py-2 shadow-lg opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4  py-2 text-sm font-nunito tracking-normal transition-colors hover:bg-[#003d52] hover:text-[#00ffdf]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                href="/aboutUs"
                className="transition-colors text-sm font-nunito hover:text-[#00ffdf]"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right: CTA */}
        <div className="hidden items-center md:flex">
          <Link
            href="/contact"
            className="rounded-full bg-[#00d8bd] px-5 font-nunito text-sm py-2 text-[11px] font-semibold tracking-[0.25em] text-[#003144] uppercase shadow-sm transition-colors hover:bg-[#009f8b]"
          >
            Book a free consultation
          </Link>
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-md p-1 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => {
            setIsMobileMenuOpen((prev) => !prev);
            if (isMobileMenuOpen) setIsMobileServicesOpen(false);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block h-[2px] w-5 bg-white transition-transform ${
                isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white transition-opacity ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-white transition-transform ${
                isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#00435a] bg-[#003144]">
          <nav className="mx-auto max-w-6xl px-4 py-3">
            <ul className="space-y-2 text-sm font-nunito uppercase tracking-[0.18em]">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-white/90 hover:text-[#00ffdf]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  className="flex w-full items-center justify-between py-2 text-left text-white/90 hover:text-[#00ffdf]"
                  onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  aria-expanded={isMobileServicesOpen}
                >
                  <span>Services</span>
                  <span
                    className={`text-xs transition-transform ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isMobileServicesOpen && (
                  <ul className="mt-1 space-y-1 border-l border-[#00435a] pl-3 text-[13px] normal-case tracking-normal">
                    {services.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block py-1 text-white/80 hover:text-[#00ffdf]"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/aboutUs"
                  className="block py-2 text-white/90 hover:text-[#00ffdf]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="block rounded-full bg-[#00ffdf] px-4 py-2 text-center text-[11px] font-nunito font-semibold uppercase tracking-[0.18em] text-[#003144] shadow-sm transition-colors hover:bg-[#00d8bd]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a free consultation
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
