import CoreServices from "@/components/Home/CoreServices";
import Hero from "@/components/Home/Hero";
import Intro from "@/components/Home/Intro";
import OurProcess from "@/components/Home/OurProcess";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <CoreServices />
      <WhyChooseUs />
      <OurProcess />
      <div className="h-80" />
    </div>
  );
}
