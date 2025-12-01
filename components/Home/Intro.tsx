import { themeClasses } from "@/lib/themeClasses";

function Intro() {
  return (
    <section className="bg-white font-nunito py-22 lg:py-28">
      <div className="container mx-auto px-4 md:px-8 ">
        {/* Layout: items-stretch ensures both columns are equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Card: Content (Transparent BG, Light Theme) */}
          <div className="flex flex-col justify-center h-full">
            {/* Added a subtle header to match the visual weight of the reference image */}
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
              Essential{" "}
              <span className="text-[#009f8b] relative">
                Impact
                {/* Small sharp accent line */}
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#009f8b]"></span>
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-black leading-relaxed font-normal">
                In a world where first impressions are made in seconds, your
                digital presence is not optional.{" "}
                <strong className="text-slate-900 font-bold">
                  It's essential.
                </strong>
              </p>
              <p className="text-lg md:text-xl text-black font-normal leading-relaxed ">
                At Orca Edge, we combine strategic thinking, clean design, and
                cutting-edge technology to help businesses stand out,
                communicate clearly, and convert more customers.
              </p>
            </div>
            {/* Sharp decorative line */}
            <div className="w-12 h-[2px] bg-slate-200 mt-10"></div>
          </div>

          {/* Right Card: Content (Solid BG #00ffdf) */}

          <div className="h-full">
            <div
              className={`h-full ${themeClasses.sectionBg} rounded-sm p-8 md:p-12 lg:p-14 flex flex-col justify-center relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"`}
            >
              {/* Subtle Texture Overlay for the card */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>

              {/* Decorative geometrical accent (Sharp squares instead of round blurs) */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-white/30 rotate-12"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rotate-45 backdrop-blur-sm"></div>

              <div className="relative z-10">
                <h3 className="text-slate-900 font-bold text-xl mb-6 border-l-4 border-slate-900 pl-4 inline-block tracking-tight">
                  Our Capabilities
                </h3>
                <p className="text-xl 2xl:text-2xl font-normal text-slate-900  leading-snug tracking-tight">
                  From pixel-perfect websites and intuitive mobile apps to
                  performance-driven marketing campaigns and persuasive
                  copywriting, we provide everything you need to build, grow,
                  and protect your brand online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
