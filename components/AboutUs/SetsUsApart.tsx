import LordIcon from "../LordIcon";

const advantages = [
  {
    id: "holistic",
    title: "Holistic Approach",
    description:
      "We don't just build a website or run a campaign in isolation. We look at your entire digital ecosystem and ensure everything is aligned—from your website and app to your messaging and marketing.",
    iconSrc: (
      <LordIcon
        src="https://cdn.lordicon.com/zjdxuyoy.json"
        trigger="loop"
        // ADDED: Theme colors (Primary: Ocean Blue, Secondary: Slate)
        colors="primary:#1677B3,secondary:#64748b"
        style={{ width: "75px", height: "65px" }}
      />
    ),
  },
  {
    id: "creativity",
    title: "Balance of Creativity & Clarity",
    description:
      "We value design and innovation, but never at the expense of usability or clarity. Every project combines aesthetics with function, so users know exactly what to do next.",
    iconSrc: (
      <LordIcon
        src="https://cdn.lordicon.com/audatjnx.json"
        trigger="loop"
        colors="primary:#1677B3,secondary:#64748b"
        style={{ width: "75px", height: "65px" }}
      />
    ),
  },
  {
    id: "technical",
    title: "Technical Excellence",
    description:
      "Our development practices prioritize security, performance, and scalability. Whether it's a website or a mobile app, we build with the future in mind.",
    iconSrc: (
      <LordIcon
        src="https://cdn.lordicon.com/kbscnwmr.json"
        trigger="loop"
        colors="primary:#1677B3,secondary:#64748b"
        style={{ width: "75px", height: "65px" }}
      />
    ),
  },
  {
    id: "data",
    title: "Data-Backed Decisions",
    description:
      "We rely on analytics, research, and testing—so your strategy isn't driven by guesswork but by real user behavior and performance metrics.",
    iconSrc: (
      <LordIcon
        src="https://cdn.lordicon.com/psrsekxp.json"
        trigger="loop"
        colors="primary:#1677B3,secondary:#64748b"
        style={{ width: "75px", height: "65px" }}
      />
    ),
  },
  {
    id: "client",
    title: "Client-Centric Collaboration",
    description:
      "We treat your business like our own. That means listening carefully, asking the right questions, and working collaboratively with you from kickoff to launch and beyond.",
    iconSrc: (
      <LordIcon
        src="https://cdn.lordicon.com/audatjnx.json"
        trigger="loop"
        colors="primary:#1677B3,secondary:#64748b"
        style={{ width: "75px", height: "65px" }}
      />
    ),
  },
];

const WhatSetsUsApart = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="container mx-auto  md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative h-[400px] lg:h-[650px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            {/* CHANGED: Gradient overlay to Ocean Blue (#1677B3) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1677B3]/30 via-[#1677B3]/20 to-[#1677B3]/30 mix-blend-multiply" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-nunito text-3xl 2xl:text-4xl font-bold text-gray-900 mb-4">
                What Sets Orca Edge Apart
              </h2>
            </div>

            <div className="space-y-6">
              {advantages.map((advantage) => (
                <div
                  key={advantage.id}
                  className="flex gap-4 items-center group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {advantage.iconSrc}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    {/* CHANGED: Hover text color to Ocean Blue */}
                    <h3 className="font-nunito  text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1677B3] transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="font-nunito text-sm lg:text-base text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
