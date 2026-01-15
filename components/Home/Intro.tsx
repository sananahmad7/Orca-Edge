function Intro() {
  return (
    <section className="bg-white font-nunito py-22 lg:py-28">
      <div className="container mx-auto px-4 md:px-8 ">
        {/* Layout: items-stretch ensures both columns are equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Card: Content (Transparent BG, Light Theme) */}
          <div className="flex flex-col justify-center h-full">
            {/* Added a subtle header to match the visual weight of the reference image */}
            <h2 className="text-3xl 2xl:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Essential {/* CHANGED: Teal -> Ocean Blue (#1677B3) */}
              <span className="text-[#1677B3] relative">
                Impact
                {/* Small sharp accent line */}
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#1677B3]"></span>
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

          {/* Right Card: Content (Solid BG #1677B3) */}
          <div className="h-full">
            <div
              // CHANGED: Removed themeClasses.sectionBg, applied bg-[#1677B3] directly.
              // CHANGED: Added text-white since the background is now dark blue.
              className="h-full bg-[#1677B3] text-white rounded-sm p-8 md:p-12 lg:p-14 flex flex-col justify-center relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Subtle Texture Overlay for the card */}
              <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

              {/* Decorative geometrical accent (Sharp squares) */}
              {/* Changed borders/bg to use lighter blues/white for contrast against dark blue bg */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#38bdf8]/30 rotate-12"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#38bdf8]/10 rotate-45 backdrop-blur-sm"></div>

              <div className="relative z-10">
                {/* CHANGED: Border color to sky blue for accent */}
                <h3 className="font-bold text-3xl 2xl:text-4xl mb-6 border-l-4 border-[#38bdf8] pl-4 inline-block tracking-tight text-white">
                  Our Capabilities
                </h3>
                {/* CHANGED: Text color to white/slate-100 */}
                <p className="text-xl 2xl:text-xl font-normal text-slate-100 leading-snug tracking-tight">
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
