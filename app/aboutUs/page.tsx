import AboutHero from "@/components/AboutUs/AboutHero";
import HowWeWork from "@/components/AboutUs/HowWeWork";
import OurInfo from "@/components/AboutUs/OurInfo";
import OurValues from "@/components/AboutUs/OurValues";
import SetsUsApart from "@/components/AboutUs/SetsUsApart";

function page() {
  return (
    <div>
      <AboutHero />
      <OurInfo />
      <SetsUsApart />
      <OurValues />
      <HowWeWork />
    </div>
  );
}

export default page;
