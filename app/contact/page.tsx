"use client";

import { FormEvent, useState } from "react";

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message.");
      }

      setSuccessMessage(
        "Message sent successfully. We'll be in touch shortly."
      );
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setErrorMessage(
        err?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Changed: Added 'flex-1' and customized min-h to prevent white gaps on large screens
    <section className="relative w-full font-nunito bg-[#003144] flex flex-col items-center justify-center p-4 md:p-8 flex-1 min-h-[calc(100vh-80px)]">
      {/* --- BACKGROUND LAYER --- */}
      {/* Moved overflow-hidden here to prevent cutting off the card shadow if screen is tight */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-[#009f8b] opacity-10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-[#00ffdf] opacity-5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* --- CONTENT LAYER: The "Command Center" Card --- */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        {/* LEFT PANEL: Branding & Info (Dark) */}
        <div className="relative lg:w-2/5 bg-[#002635] p-10 flex flex-col justify-between text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
              Get in touch
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              We help ambitious businesses architect their digital future. Fill
              out the form, and let's start the conversation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-[#009f8b]/20 text-[#00ffdf]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#009f8b]">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-slate-200">
                    hello@orcaedge.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-[#009f8b]/20 text-[#00ffdf]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#009f8b]">
                    Response Time
                  </p>
                  <p className="text-sm font-semibold text-slate-200">
                    Within 24 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 lg:mt-0">
            <div className="h-1 w-20 bg-gradient-to-r from-[#009f8b] to-[#00ffdf] rounded-full"></div>
          </div>
          <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-[#009f8b] opacity-20 blur-[80px] rounded-full" />
        </div>

        {/* RIGHT PANEL: The Form (Light/Clean) */}
        <div className="lg:w-3/5 bg-white p-10 lg:p-12 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-xs font-bold uppercase tracking-wider text-[#009f8b]"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-md border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 font-medium placeholder-slate-400 outline-none transition-all focus:border-[#009f8b] focus:ring-0"
                  placeholder="Jane Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-wider text-[#009f8b]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 font-medium placeholder-slate-400 outline-none transition-all focus:border-[#009f8b] focus:ring-0"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-xs font-bold uppercase tracking-wider text-[#009f8b]"
              >
                Phone Number{" "}
                <span className="text-slate-400 font-normal normal-case">
                  (Optional)
                </span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 font-medium placeholder-slate-400 outline-none transition-all focus:border-[#009f8b] focus:ring-0"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Message */}
            <div className="space-y-2 pt-2">
              <label
                htmlFor="message"
                className="text-xs font-bold uppercase tracking-wider text-[#009f8b]"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 font-medium placeholder-slate-400 outline-none transition-all resize-none focus:border-[#009f8b] focus:ring-0"
                placeholder="Tell us about your goals, timeline, and budget..."
              />
            </div>

            {/* Messages */}
            <div className="min-h-[24px]">
              {successMessage && (
                <p className="text-sm font-semibold text-[#009f8b] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#009f8b]" />{" "}
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="text-sm font-semibold text-red-500 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />{" "}
                  {errorMessage}
                </p>
              )}
            </div>

            {/* Action Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full cursor-pointer overflow-hidden rounded-lg bg-[#003144] px-8 py-4 text-white shadow-lg shadow-[#003144]/20 transition-all hover:bg-[#002533] hover:shadow-xl hover:shadow-[#003144]/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 w-0 bg-[#009f8b] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10" />
              <span className="relative flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest">
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
