"use client";

import { FormEvent, useState } from "react";

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

  // 2. State for UI Feedback (Loading, Success, Error)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. The Functional Submit Handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error || "Failed to send message.");
      }

      setSuccessMessage(
        "Message sent successfully. We'll be in touch shortly."
      );
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(
          error.message || "Something went wrong. Please try again."
        );
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="font-nunito bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-10 md:mb-14 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#009f8b] mb-3">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tell us about your project
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-slate-600">
            Share a few details and we&apos;ll follow up with ideas, timelines,
            and next steps tailored to your goals.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">
          {/* Left: Form */}
          <div className="bg-white rounded-xl border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-slate-800 mb-2"
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
                  className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-900 shadow-sm outline-none transition-colors focus:border-[#009f8b] focus:ring-2 focus:ring-[#00ffdf]"
                  placeholder="Jane Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-800 mb-2"
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
                  className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-900 shadow-sm outline-none transition-colors focus:border-[#009f8b] focus:ring-2 focus:ring-[#00ffdf]"
                  placeholder="you@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-slate-800 mb-2"
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
                  className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-900 shadow-sm outline-none transition-colors focus:border-[#009f8b] focus:ring-2 focus:ring-[#00ffdf]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-800 mb-2"
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
                  className="block w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm md:text-base text-slate-900 shadow-sm outline-none transition-colors focus:border-[#009f8b] focus:ring-2 focus:ring-[#00ffdf] resize-none"
                  placeholder="Share a bit about your project, timelines, and what you’re hoping to achieve."
                />
              </div>

              {/* Feedback Messages (Success/Error) */}
              <div className="min-h-[24px]">
                {successMessage && (
                  <p className="text-sm font-semibold text-[#009f8b] animate-pulse">
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
                  className="inline-flex items-center cursor-pointer justify-center rounded-full bg-[#003144] px-7 py-3 text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-white shadow-md shadow-[#003144]/30 transition-all hover:bg-[#009f8b] hover:shadow-[#009f8b]/40 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Design / Info panel */}
          <div className="relative">
            {/* Background shape */}
            <div className="absolute inset-0 rounded-3xl bg-[#003144] bg-[radial-gradient(circle_at_top,_#00ffdf_0,_#003144_45%,#001622_100%)] opacity-95" />

            {/* Content */}
            <div className="relative z-10 h-full w-full rounded-3xl px-7 py-8 md:px-10 md:py-12 text-white flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#00ffdf]/80 mb-3">
                  Orca Edge
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
                  Let&apos;s make your next digital move count.
                </h2>
                <p className="text-sm md:text-base text-slate-100/90 max-w-md mb-8">
                  Whether you&apos;re planning a new build, overhaul, or ongoing
                  support, we&apos;ll help you choose the right approach before
                  you commit to anything.
                </p>

                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rotate-45 bg-[#00ffdf]" />
                    <p className="text-slate-100/90">
                      Response within one business day.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rotate-45 bg-[#00d8bd]" />
                    <p className="text-slate-100/90">
                      No pushy sales calls—just practical guidance.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rotate-45 bg-[#009f8b]" />
                    <p className="text-slate-100/90">
                      Projects of all sizes, from landing pages to full
                      platforms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact details / subtle footer */}
              <div className="mt-8 border-t border-white/10 pt-6 text-xs md:text-sm text-slate-100/80">
                <p className="font-semibold tracking-[0.16em] uppercase mb-2">
                  Prefer email?
                </p>
                <p>
                  Send a note to hello@orcaedge.com with any supporting docs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
