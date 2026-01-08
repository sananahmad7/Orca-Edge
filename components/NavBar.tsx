"use client";

// components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const services = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Copywriting", href: "/services/copywriting" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add shadow on scroll for depth
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-gray-200 bg-white/90 backdrop-blur-md shadow-sm"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/OE-08.png" // Ensure this path is correct
            alt=" EdgeOrca"
            width={75}
            height={75}
            className=" object-contain"
            priority
          />
        </Link>

        {/* Center: Nav links (Desktop) */}
        {/* Text color changed to your Brand Dark Blue (#01222f) for contrast */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <ul className="flex items-center gap-8 text-[15px] font-bold font-nunito text-[#01222f]">
            <li>
              <Link href="/" className="transition-colors hover:text-[#009f8b]">
                Home
              </Link>
            </li>

            {/* Services with hover dropdown */}
            <li className="relative group h-20 flex items-center">
              <button
                className="flex items-center gap-1 cursor-pointer transition-colors hover:text-[#009f8b] focus:outline-none"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
                {/* Chevron Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 pt-0.5 transition-transform group-hover:rotate-180"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Invisible bridge for hover stability */}
              <div className="absolute top-[calc(100%-10px)] left-1/2 h-4 w-full -translate-x-1/2"></div>

              {/* Dropdown Panel - White BG with Shadow */}
              <div className="pointer-events-none absolute left-1/2 top-[calc(100%-5px)] w-64 -translate-x-1/2 rounded-xl border border-gray-100 bg-white py-2 shadow-xl opacity-0 transition-all duration-200 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#009f8b]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link
                href="/aboutUs"
                className="transition-colors hover:text-[#009f8b]"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-[#009f8b]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right: CTA (Desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contact"
            className="rounded-lg bg-[#009f8b] px-6 py-2.5 font-nunito text-sm font-bold tracking-wider text-white shadow-md shadow-teal-500/20 transition-all hover:bg-[#008f7b] hover:shadow-lg active:scale-95"
          >
            Book a Free Consultation
          </Link>
        </div>

        {/* Mobile: Hamburger - Dark color for visibility on white */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-[#01222f] hover:bg-gray-100 md:hidden focus:outline-none"
          aria-label="Toggle navigation"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <div className="relative h-5 w-6 overflow-hidden">
            <span
              className={`absolute left-0 block h-[2px] w-full transform bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "top-1/2 -translate-y-1/2 rotate-45"
                  : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[2px] w-full -translate-y-1/2 transform bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-full transform bg-current transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : "bottom-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-white px-4 pb-8 pt-4 shadow-inner">
          <nav className="grid gap-y-1 font-nunito text-base font-medium text-[#01222f]">
            <Link
              href="/"
              className="flex items-center rounded-lg p-3 hover:bg-gray-50 hover:text-[#009f8b]"
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                className={`flex w-full items-center justify-between rounded-lg p-3 hover:bg-gray-50 hover:text-[#009f8b] ${
                  isMobileServicesOpen ? "text-[#009f8b] bg-gray-50" : ""
                }`}
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              >
                <span>Services</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen ? "max-h-96 mt-1" : "max-h-0"
                }`}
              >
                <ul className="space-y-1 rounded-lg bg-gray-50/50 p-2 border border-gray-100">
                  {services.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-md py-2.5 px-4 text-sm text-gray-600 hover:bg-white hover:text-[#009f8b] hover:shadow-sm"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/aboutUs"
              className="flex items-center rounded-lg p-3 hover:bg-gray-50 hover:text-[#009f8b]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="flex items-center rounded-lg p-3 hover:bg-gray-50 hover:text-[#009f8b]"
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-lg bg-[#009f8b] px-4 py-3 font-bold tracking-wider text-white transition-colors hover:bg-[#008f7b]"
              >
                Book a Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
