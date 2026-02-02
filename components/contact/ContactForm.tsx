"use client";

import { FormEvent, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
// 1. Import icons
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  // 1. State for Form Data
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // 2. State for UI Feedback & Captcha
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Ref to reset captcha after submission
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    // Clear error if they just checked the box
    if (token) setErrorMessage(null);
  };

  // 3. The Functional Submit Handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    // Client-side check: Ensure Captcha is checked
    if (!captchaToken) {
      setErrorMessage("Please complete the reCAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send form data + captcha token
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error || "Failed to send message.");
      }

      setSuccessMessage(
        "Message sent successfully. We'll be in touch shortly.",
      );
      // Reset form and captcha
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(
          error.message || "Something went wrong. Please try again.",
        );
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="font-nunito bg-slate-50 py-26 md:py-34">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-10 md:mb-14 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1677B3] mb-3">
            Contact
          </p>
          <h1 className="text-3xl 2xl:text-4xl l font-extrabold text-slate-900 tracking-tight">
            Tell us about your project
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm lg:text-base text-slate-600">
            Share a few details and we&apos;ll follow up with ideas, timelines,
            and next steps tailored to your goals.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">
          {/* Left: Form */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-[0_18px_45px_rgba(22,119,179,0.08)] p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm lg:text-base font-semibold text-slate-800 mb-2"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-900 shadow-sm outline-none transition-colors focus:border-[#1677B3] focus:ring-2 focus:ring-[#38bdf8]"
                  placeholder="Jane Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm lg:text-base font-semibold text-slate-800 mb-2"
                >
                  Business email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-900 shadow-sm outline-none transition-colors focus:border-[#1677B3] focus:ring-2 focus:ring-[#38bdf8]"
                  placeholder="you@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm lg:text-base font-semibold text-slate-800 mb-2"
                >
                  Contact number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-900 shadow-sm outline-none transition-colors focus:border-[#1677B3] focus:ring-2 focus:ring-[#38bdf8]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm lg:text-base font-semibold text-slate-800 mb-2"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-900 shadow-sm outline-none transition-colors focus:border-[#1677B3] focus:ring-2 focus:ring-[#38bdf8] resize-none"
                  placeholder="Share a bit about your project, timelines, and what you’re hoping to achieve."
                />
              </div>

              {/* ReCAPTCHA v2 Checkbox */}
              <div className="flex justify-center md:justify-start">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={onCaptchaChange}
                />
              </div>

              {/* Feedback Messages */}
              <div className="min-h-[24px]">
                {successMessage && (
                  <p className="text-sm font-semibold text-[#1677B3] animate-pulse">
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-sm font-semibold text-red-500">
                    {errorMessage}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center cursor-pointer justify-center rounded-full bg-[#1677B3] px-7 py-3 text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-white shadow-md shadow-[#1677B3]/30 transition-all hover:bg-[#126294] hover:shadow-[#1677B3]/40 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Design / Info panel */}
          <div className="relative">
            {/* Background shape */}
            <div className="absolute inset-0 rounded-3xl bg-[#1677B3] bg-[radial-gradient(circle_at_top,_#38bdf8_0,_#1677B3_45%,#0f4c75_100%)] opacity-95" />

            {/* Content */}
            <div className="relative z-10 h-full w-full rounded-3xl px-7 py-8 md:px-10 md:py-12 text-white flex flex-col justify-between bg-[#1B7BB4]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#38bdf8] mb-3">
                  Orca Edge
                </p>
                <h2 className="text-3xl xl:text-4xl font-extrabold leading-tight mb-4">
                  Let&apos;s make your next digital move count.
                </h2>
                <p className="text-sm lg:text-base text-blue-50 max-w-md mb-8">
                  Whether you&apos;re planning a new build, overhaul, or ongoing
                  support, we&apos;ll help you choose the right approach before
                  you commit to anything.
                </p>

                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rotate-45 bg-[#38bdf8]" />
                    <p className="text-blue-50">
                      Response within one business day.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rotate-45 bg-[#7dd3fc]" />
                    <p className="text-blue-50">
                      No pushy sales calls—just practical guidance.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rotate-45 bg-[#bae6fd]" />
                    <p className="text-blue-50">
                      Projects of all sizes, from landing pages to full
                      platforms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details Section */}
              <div className="mt-8 border-t border-white/20 pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#7dd3fc]">
                      Email
                    </span>
                    <a
                      href="mailto:mohsinali.05961@gmail.com"
                      className="text-base md:text-lg font-medium hover:text-[#38bdf8] transition-colors"
                    >
                      mohsinali.05961@gmail.com
                    </a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#7dd3fc]">
                      Phone
                    </span>
                    <a
                      href="tel:+92 3245008073"
                      className="text-base md:text-lg font-medium hover:text-[#38bdf8] transition-colors"
                    >
                      +92 3245008073
                    </a>
                  </div>
                </div>

                {/* --- Social Icons Added Here --- */}
                <div className="mt-8 flex items-center gap-5">
                  <Link
                    href="https://www.linkedin.com" // Replace with actual URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white hover:-translate-y-1 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={26} />
                  </Link>
                  <Link
                    href="https://www.instagram.com" // Replace with actual URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white hover:-translate-y-1 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={26} />
                  </Link>
                </div>
                {/* ------------------------------- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
